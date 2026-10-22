import db from './db';

export function getWeekdayName(date: Date): string {
  return date.toLocaleDateString('en-GB', { weekday: 'long' });
}

export function addBusinessDays(startDate: Date, daysToAdd: number): Date {
  const result = new Date(startDate);
  let added = 0;
  while (added < daysToAdd) {
    result.setDate(result.getDate() + 1);
    const day = result.getDay();
    if (day !== 0 && day !== 6) {
      added++;
    }
  }
  return result;
}

export function getNetworkDaysDiff(startDate: Date, endDate: Date): number {
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  if (start.getTime() === end.getTime()) return 0;

  const sign = end >= start ? 1 : -1;
  const cur = new Date(sign === 1 ? start : end);
  const target = new Date(sign === 1 ? end : start);
  let count = 0;

  while (cur < target) {
    cur.setDate(cur.getDate() + 1);
    const day = cur.getDay();
    if (day !== 0 && day !== 6) {
      count++;
    }
  }
  return count * sign;
}

export interface ComputedPerformanceRow {
  processedDay: string;
  lastScanDay: string;
  estimatedDeliveryDate: Date;
  estimatedDeliveryDay: string;
  formulaDate: Date;
  formulaDaysCount: number;
  slaForClaims: number;
  slaStatus: 'Within Transit Time' | '1 Day Late' | '2 Days Late' | '3 Days Late' | 'More Than 3 Days Late';
  reportTab: 'DELIVERED' | 'IN_TRANSIT' | 'OUT_OF_SLA_EXCEPTION' | 'CLAIM_SHEET';
}

/**
 * Implements the exact 20-column Courier Performance Report formulas:
 * - Estimated Delivery Date = WORKDAY.INTL(Processed, SLA)
 * - Formula Days Count = NETWORKDAYS.INTL(EvaluationDate, EstimatedDeliveryDate)
 * - SLA For Claims = NETWORKDAYS.INTL(Processed, Yesterday)
 * - Status = IF(R<=-5, "More Than 3 Days Late", IF(R=-4, "3 Days Late", IF(R=-3, "2 Days Late", IF(R<=-1, "1 Day Late", "Within Transit Time"))))
 */
export function evaluateCourierPerformanceRow(params: {
  processedDate: Date;
  slaDays: number;
  lastScanDate: Date;
  latestUpdate: string;
  claimLossThresholdDays: number;
  explicitReportTab?: string;
}): ComputedPerformanceRow {
  const { processedDate, slaDays, lastScanDate, latestUpdate, claimLossThresholdDays, explicitReportTab } = params;
  const now = new Date();
  const lowerUpdate = (latestUpdate || '').toLowerCase();

  const isDelivered =
    explicitReportTab === 'DELIVERED' ||
    (lowerUpdate.includes('delivered') && !lowerUpdate.includes('undelivered') && !lowerUpdate.includes('not delivered'));

  const isConfirmedLostOrClaimable =
    explicitReportTab === 'CLAIM_SHEET' ||
    lowerUpdate.includes('lost') ||
    lowerUpdate.includes('missing') ||
    lowerUpdate.includes('damaged') ||
    lowerUpdate.includes('claim');

  const estimatedDeliveryDate = addBusinessDays(processedDate, Math.max(1, slaDays));
  const evalDate = isDelivered ? lastScanDate : now;

  // Variance in business days relative to Estimated Delivery Date (negative means overdue)
  const formulaDaysCount = getNetworkDaysDiff(evalDate, estimatedDeliveryDate);

  // Elapsed business days since dispatch for statutory loss claim eligibility
  const yesterday = new Date(now.getTime() - 24 * 3600 * 1000);
  const slaForClaims = Math.max(0, getNetworkDaysDiff(processedDate, yesterday));

  let slaStatus: ComputedPerformanceRow['slaStatus'] = 'Within Transit Time';
  if (formulaDaysCount <= -5) {
    slaStatus = 'More Than 3 Days Late';
  } else if (formulaDaysCount === -4) {
    slaStatus = '3 Days Late';
  } else if (formulaDaysCount === -3) {
    slaStatus = '2 Days Late';
  } else if (formulaDaysCount === -2 || formulaDaysCount === -1) {
    slaStatus = '1 Day Late';
  } else {
    slaStatus = 'Within Transit Time';
  }

  let reportTab: ComputedPerformanceRow['reportTab'] = 'IN_TRANSIT';
  if (isDelivered) {
    reportTab = 'DELIVERED';
  } else if (isConfirmedLostOrClaimable || slaForClaims >= claimLossThresholdDays) {
    reportTab = 'CLAIM_SHEET';
  } else if (
    slaStatus !== 'Within Transit Time' ||
    lowerUpdate.includes('exception') ||
    lowerUpdate.includes('held') ||
    lowerUpdate.includes('delay') ||
    lowerUpdate.includes('stalled') ||
    lowerUpdate.includes('address')
  ) {
    reportTab = 'OUT_OF_SLA_EXCEPTION';
  } else {
    reportTab = 'IN_TRANSIT';
  }

  return {
    processedDay: getWeekdayName(processedDate),
    lastScanDay: getWeekdayName(lastScanDate),
    estimatedDeliveryDate,
    estimatedDeliveryDay: getWeekdayName(estimatedDeliveryDate),
    formulaDate: now,
    formulaDaysCount,
    slaForClaims,
    slaStatus,
    reportTab,
  };
}

export const DEFAULT_COURIERS = [
  {
    code: 'ROYAL_MAIL',
    name: 'Royal Mail',
    accountNumber: 'OBA-7749201-GB',
    trackingApiProvider: 'ROYAL_MAIL_REST_V2',
    queryEmail: 'commercial.queries@royalmail.com',
    claimsEmail: 'p58.claims@royalmail.com',
    defaultSlaDays: 2,
    stalledThresholdHours: 48,
    claimLossThresholdDays: 10,
    claimFilingWindowDays: 80,
    invoiceFormatName: 'Royal Mail P58 Wholesale Cost Schedule',
    pricingBasis: 'WHOLESALE_COST_EX_VAT',
    maxLiabilityCap: 150.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'ROYAL MAIL P58 COMMERCIAL LOSS & INDEMNITY SCHEDULE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'obaAccount', label: 'Royal Mail OBA Account No.', value: 'OBA-7749201-GB' },
      { key: 'postingHub', label: 'Posting Mail Centre', value: 'Manchester North West Super Hub' },
      { key: 'serviceCode', label: 'RM Service Code', value: 'CRL24 / CRL48 Tracked' },
      { key: 'costEvidenceType', label: 'Valuation Proof Attached', value: 'Manufacturer Wholesale Cost Invoice' },
    ]),
    invoiceDeclarationText:
      'I hereby declare that the consignments listed on this schedule were posted via Royal Mail Tracked commercial account, have exceeded the statutory 10 working day loss period without terminal delivery scan, and are claimed strictly at net wholesale manufacturing/acquisition cost excluding VAT pursuant to Royal Mail Commercial Terms.',
  },
  {
    code: 'DPD',
    name: 'DPD UK',
    accountNumber: 'DPD-UK-883920',
    trackingApiProvider: 'DPD_LOCAL_ENTERPRISE_API',
    queryEmail: 'depot.investigations@dpd.co.uk',
    claimsEmail: 'commercial.claims@dpd.co.uk',
    defaultSlaDays: 1,
    stalledThresholdHours: 24,
    claimLossThresholdDays: 7,
    claimFilingWindowDays: 14,
    invoiceFormatName: 'DPD UK Commercial Sales Ex-VAT Invoice',
    pricingBasis: 'RETAIL_SALES_EX_VAT',
    maxLiabilityCap: 100.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'DPD UK COMMERCIAL CONSIGNMENT LOSS CLAIM INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'dpdAccount', label: 'DPD Consignor Account', value: 'DPD-UK-883920' },
      { key: 'collectingDepot', label: 'Collecting Depot', value: 'Depot 0041 - Hub 4 Hinckley' },
      { key: 'dorStatus', label: 'Customer Denial of Receipt (DOR)', value: 'Signed & Attached' },
    ]),
    invoiceDeclarationText:
      'Formal Consignment Loss Claim submitted within the 14-day contractual filing window. Physical depot sweep search has elapsed without POD recovery.',
  },
  {
    code: 'EVRI',
    name: 'Evri (Hermes)',
    accountNumber: 'EVRI-CORP-4410',
    trackingApiProvider: 'EVRI_CORPORATE_TRACKING_API',
    queryEmail: 'client.support@evri.com',
    claimsEmail: 'corporate.claims@evri.com',
    defaultSlaDays: 2,
    stalledThresholdHours: 48,
    claimLossThresholdDays: 10,
    claimFilingWindowDays: 28,
    invoiceFormatName: 'Evri Corporate Capped Indemnity Schedule',
    pricingBasis: 'CAPPED_INDEMNITY',
    maxLiabilityCap: 20.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'EVRI CORPORATE LOSS & TARIFF INDEMNITY INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'evriClientId', label: 'Evri Corporate Client ID', value: 'EVRI-CORP-4410' },
      { key: 'coverTier', label: 'Contract Liability Tier', value: 'Standard £20.00 + Carriage Refund' },
    ]),
    invoiceDeclarationText:
      'Submitted under Evri Corporate Distribution Agreement. Claimed at wholesale cost up to the £20.00 contractual indemnity ceiling plus original carriage charge.',
  },
  {
    code: 'YODEL',
    name: 'Yodel',
    accountNumber: 'YDL-XPECT-9012',
    trackingApiProvider: 'YODEL_DIRECT_API',
    queryEmail: 'account.queries@yodel.co.uk',
    claimsEmail: 'client.claims@yodel.co.uk',
    defaultSlaDays: 2,
    stalledThresholdHours: 48,
    claimLossThresholdDays: 10,
    claimFilingWindowDays: 21,
    invoiceFormatName: 'Yodel Xpect Commercial Loss Invoice',
    pricingBasis: 'CAPPED_INDEMNITY',
    maxLiabilityCap: 50.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'YODEL COMMERCIAL LOSS & INDEMNITY CLAIM INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'yodelAccount', label: 'Yodel Account Code', value: 'YDL-XPECT-9012' },
      { key: 'serviceType', label: 'Yodel Service Level', value: 'Yodel Xpect 48 / 2-Day' },
    ]),
    invoiceDeclarationText:
      'Certified Commercial Loss Invoice for Yodel consignment. Tracking telemetry confirms no delivery scan within the statutory investigation period.',
  },
  {
    code: 'PARCELFORCE',
    name: 'ParcelForce',
    accountNumber: 'PFW-UK-55190',
    trackingApiProvider: 'PARCELFORCE_EXPRESS_API',
    queryEmail: 'express.queries@parcelforce.co.uk',
    claimsEmail: 'claims@parcelforce.co.uk',
    defaultSlaDays: 1,
    stalledThresholdHours: 36,
    claimLossThresholdDays: 10,
    claimFilingWindowDays: 30,
    invoiceFormatName: 'ParcelForce Express 24/48 Claim Schedule',
    pricingBasis: 'WHOLESALE_COST_EX_VAT',
    maxLiabilityCap: 100.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'PARCELFORCE WORLDWIDE COMMERCIAL CLAIM INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'pfwContractNo', label: 'ParcelForce Contract No.', value: 'PFW-UK-55190' },
    ]),
    invoiceDeclarationText:
      'Submitted under ParcelForce Worldwide Commercial Contract Conditions of Carriage.',
  },
  {
    code: 'UPS',
    name: 'UPS',
    accountNumber: '8X942A',
    trackingApiProvider: 'UPS_TRACKING_REST_API',
    queryEmail: 'upstracer@ups.com',
    claimsEmail: 'ukclaims@ups.com',
    defaultSlaDays: 3,
    stalledThresholdHours: 48,
    claimLossThresholdDays: 7,
    claimFilingWindowDays: 60,
    invoiceFormatName: 'UPS Capital & Commercial Invoice Schedule',
    pricingBasis: 'RETAIL_SALES_EX_VAT',
    maxLiabilityCap: 100.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'UPS WORLDWIDE COMMERCIAL LOSS & TRACER INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'upsShipperNo', label: 'UPS 6-Char Shipper Number', value: '8X942A' },
      { key: 'tracerNumber', label: 'UPS Tracer Investigation Ref', value: 'TRC-UPS-88412' },
    ]),
    invoiceDeclarationText:
      'Submitted pursuant to UPS Tariff/Terms and Conditions of Service following tracer investigation closure.',
  },
  {
    code: 'FEDEX',
    name: 'FedEx',
    accountNumber: '510087921',
    trackingApiProvider: 'FEDEX_TRACK_V1_API',
    queryEmail: 'trace@fedex.com',
    claimsEmail: 'file.claim@fedex.com',
    defaultSlaDays: 3,
    stalledThresholdHours: 48,
    claimLossThresholdDays: 7,
    claimFilingWindowDays: 60,
    invoiceFormatName: 'FedEx International & Priority Claim Invoice',
    pricingBasis: 'RETAIL_SALES_EX_VAT',
    maxLiabilityCap: 100.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'FEDEX EXPRESS / GROUND COMMERCIAL CLAIM INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'fedexAccount', label: 'FedEx 9-Digit Account No.', value: '510087921' },
      { key: 'awbType', label: 'Air Waybill Class', value: 'International Priority / UK Domestic' },
    ]),
    invoiceDeclarationText:
      'Certified FedEx Commercial Claim Invoice. We certify that the declared valuation reflects actual commercial invoice value.',
  },
  {
    code: 'DHL',
    name: 'DHL Express',
    accountNumber: '429910482',
    trackingApiProvider: 'MYDHL_EXPRESS_API',
    queryEmail: 'uk.tracers@dhl.com',
    claimsEmail: 'uk.claims@dhl.com',
    defaultSlaDays: 3,
    stalledThresholdHours: 48,
    claimLossThresholdDays: 7,
    claimFilingWindowDays: 30,
    invoiceFormatName: 'DHL Express Air Waybill Indemnity Invoice',
    pricingBasis: 'RETAIL_SALES_EX_VAT',
    maxLiabilityCap: 250.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'DHL EXPRESS INTERNATIONAL INDEMNITY CLAIM INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'dhlShipperAccount', label: 'DHL Express Account', value: '429910482' },
      { key: 'commodityCode', label: 'HS Customs Tariff Code', value: '9506.91.90' },
    ]),
    invoiceDeclarationText:
      'International Air Waybill Claim Invoice issued under Montreal Convention and DHL Express Terms of Carriage.',
  },
  {
    code: 'USPS',
    name: 'USPS',
    accountNumber: 'USPS-INTL-3391',
    trackingApiProvider: 'USPS_WEBTOOLS_API',
    queryEmail: 'international.inquiry@usps.gov',
    claimsEmail: 'indemnity.claims@usps.gov',
    defaultSlaDays: 5,
    stalledThresholdHours: 72,
    claimLossThresholdDays: 14,
    claimFilingWindowDays: 60,
    invoiceFormatName: 'USPS Priority Mail Commercial Claim',
    pricingBasis: 'RETAIL_SALES_EX_VAT',
    maxLiabilityCap: 100.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'USPS COMMERCIAL PRIORITY INDEMNITY INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'midNumber', label: 'USPS Mailer ID (MID)', value: '902184901' },
    ]),
    invoiceDeclarationText:
      'Certified commercial claim statement for lost USPS Priority Mail shipment.',
  },
  {
    code: 'ESHIPPER',
    name: 'eShipper / P2P',
    accountNumber: 'ESH-GLOBAL-1102',
    trackingApiProvider: 'ESHIPPER_REST_API',
    queryEmail: 'support@eshipper.com',
    claimsEmail: 'claims@eshipper.com',
    defaultSlaDays: 5,
    stalledThresholdHours: 72,
    claimLossThresholdDays: 12,
    claimFilingWindowDays: 30,
    invoiceFormatName: 'eShipper / P2P Cross-Border Claim Invoice',
    pricingBasis: 'WHOLESALE_COST_EX_VAT',
    maxLiabilityCap: 100.0,
    includePostageRefund: true,
    vatRatePercent: 0.0,
    invoiceHeaderTitle: 'CROSS-BORDER AGGREGATOR COMMERCIAL CLAIM INVOICE',
    invoiceRequiredFieldsJson: JSON.stringify([
      { key: 'aggregatorAccount', label: 'eShipper / P2P Client Code', value: 'ESH-GLOBAL-1102' },
    ]),
    invoiceDeclarationText:
      'Cross-border shipment loss declaration submitted under aggregator master tariff.',
  },
];

export async function ensureWorkspaceCouriers(workspaceId: string) {
  const existing = await db.courier.findMany({ where: { workspaceId } });
  if (existing.length > 0) return existing;

  for (const c of DEFAULT_COURIERS) {
    try {
      await db.courier.create({
        data: {
          workspaceId,
          ...c,
        },
      });
    } catch {
      // Ignore concurrent insert
    }
  }
  return db.courier.findMany({ where: { workspaceId }, orderBy: { name: 'asc' } });
}

export async function seedSampleShipmentsForWorkspace(workspaceId: string) {
  const couriers = await ensureWorkspaceCouriers(workspaceId);
  const courierByCode = new Map(couriers.map((c) => [c.code, c]));

  const now = new Date();
  const daysAgo = (d: number) => new Date(now.getTime() - d * 24 * 3600 * 1000);

  const syntheticOrders = [
    // 1. CLAIM SHEET: Royal Mail Tracked 48 — 13 days elapsed, confirmed lost in National Distribution Centre
    {
      courierCode: 'ROYAL_MAIL',
      orderId: '9910421',
      orderDate: daysAgo(15),
      processedDate: daysAgo(14),
      country: 'United Kingdom',
      source: 'AMAZON',
      referenceNum: '204-8819201-4491021',
      postalService: 'Royal Mail Tracked 48',
      trackingNumber: 'JJ491028491GB',
      latestUpdate: 'Courier Confirmed Lost: No scan since National Distribution Centre induction (14 days elapsed)',
      lastScanDate: daysAgo(12),
      slaDays: 2,
      recipientName: 'Oliver Pendelton',
      recipientAddress: '42 Deansgate Terrace',
      recipientCity: 'Manchester',
      recipientPostcode: 'M3 2BW',
      sku: 'PRO-GLV-16OZ-BLK',
      itemTitle: 'Pro Training Sparring Gloves 16oz Matte Black',
      quantity: 2,
      retailValue: 89.98,
      wholesaleCost: 38.00,
      postageCost: 4.45,
      explicitTab: 'CLAIM_SHEET',
      createQueryStatus: 'COURIER_DECLARED_LOST',
      courierReplyText: 'We have completed our search at the National Distribution Centre and confirm parcel JJ491028491GB is deemed lost in transit. Please submit your P58 wholesale cost invoice for reimbursement.',
      createAutoClaim: true,
    },
    // 2. CLAIM SHEET: DPD Next Day — 9 days elapsed, confirmed lost after Hub 4 sweep
    {
      courierCode: 'DPD',
      orderId: '9910488',
      orderDate: daysAgo(10),
      processedDate: daysAgo(9),
      country: 'United Kingdom',
      source: 'SHOPIFY',
      referenceNum: 'SHP-UK-77412',
      postalService: 'DPD Parcel Next Day',
      trackingNumber: '15504928194012',
      latestUpdate: 'DPD Hub 4 Hinckley Search Closed - Consignment Missing, Eligible for Claim Invoice',
      lastScanDate: daysAgo(8),
      slaDays: 1,
      recipientName: 'Hannah Clarke',
      recipientAddress: '18 Kensington High Street',
      recipientCity: 'London',
      recipientPostcode: 'W8 4PT',
      sku: 'ELITE-BELT-L-BRN',
      itemTitle: 'Heavy Duty Powerlifting Lever Belt (Large)',
      quantity: 1,
      retailValue: 74.99,
      wholesaleCost: 31.50,
      postageCost: 6.20,
      explicitTab: 'CLAIM_SHEET',
      createQueryStatus: 'COURIER_DECLARED_LOST',
      courierReplyText: 'Depot 0041 sweep completed. Unable to locate parcel 15504928194012. Please upload commercial sales invoice (Ex-VAT) to process credit note.',
      createAutoClaim: true,
    },
    // 3. CLAIM SHEET: Evri 48h — 12 days elapsed, lost at regional sortation hub
    {
      courierCode: 'EVRI',
      orderId: '9910519',
      orderDate: daysAgo(13),
      processedDate: daysAgo(12),
      country: 'United Kingdom',
      source: 'EBAY',
      referenceNum: 'EBAY-22-90418-88210',
      postalService: 'Evri Corporate 48Hr',
      trackingNumber: 'H00GVA0049182910',
      latestUpdate: 'Missing in Sortation Hub - Exceeded 10 Business Day Statutory Loss Threshold',
      lastScanDate: daysAgo(10),
      slaDays: 2,
      recipientName: 'Callum MacLeod',
      recipientAddress: '91 Sauchiehall Street',
      recipientCity: 'Glasgow',
      recipientPostcode: 'G2 3DE',
      sku: 'SHIN-GUARD-XL-RED',
      itemTitle: 'Instep MMA Shin Guards XL',
      quantity: 1,
      retailValue: 44.99,
      wholesaleCost: 19.00,
      postageCost: 3.65,
      explicitTab: 'CLAIM_SHEET',
      createQueryStatus: 'COURIER_DECLARED_LOST',
      courierReplyText: 'Evri Corporate Support: Parcel H00GVA0049182910 has not scanned in 10+ days. Approved for standard £20.00 indemnity + postage claim.',
      createAutoClaim: true,
    },
    // 4. CLAIM SHEET: Yodel Two Day — 11 days elapsed, eligible for £50 capped claim
    {
      courierCode: 'YODEL',
      orderId: '9910562',
      orderDate: daysAgo(12),
      processedDate: daysAgo(11),
      country: 'United Kingdom',
      source: 'AMAZON',
      referenceNum: '202-1194028-9920144',
      postalService: '(Yodel Two Day) www yodel co uk',
      trackingNumber: 'JD0002291847192018',
      latestUpdate: 'Stalled at Wednesbury National Hub > 10 Days - Statutory Loss Triggered',
      lastScanDate: daysAgo(9),
      slaDays: 2,
      recipientName: 'David Bellingham',
      recipientAddress: '14 Colmore Row',
      recipientCity: 'Birmingham',
      recipientPostcode: 'B3 2QD',
      sku: 'PUNCH-BAG-4FT-SET',
      itemTitle: '4ft Heavy Filled Hanging Punch Bag & Chain Set',
      quantity: 1,
      retailValue: 64.99,
      wholesaleCost: 29.00,
      postageCost: 5.50,
      explicitTab: 'CLAIM_SHEET',
      createQueryStatus: 'SENT_AWAITING_REPLY',
      courierReplyText: null,
      createAutoClaim: false,
    },
    // 5. OUT OF SLA EXCEPTION: DPD Next Day — 3 Days Late, courier replied "Will be delivered in 2 days"
    {
      courierCode: 'DPD',
      orderId: '9910615',
      orderDate: daysAgo(5),
      processedDate: daysAgo(4),
      country: 'United Kingdom',
      source: 'SHOPIFY',
      referenceNum: 'SHP-UK-77890',
      postalService: 'DPD Parcel Next Day',
      trackingNumber: '15504928199401',
      latestUpdate: 'Held at Depot - Address Query / Re-scheduled Delivery',
      lastScanDate: daysAgo(1),
      slaDays: 1,
      recipientName: 'Sophie Troughton',
      recipientAddress: '7B Clifton Down Road',
      recipientCity: 'Bristol',
      recipientPostcode: 'BS8 4BF',
      sku: 'KNEE-WRAPS-PAIR',
      itemTitle: 'Elasticated Weightlifting Knee Wraps Pair',
      quantity: 2,
      retailValue: 34.99,
      wholesaleCost: 14.20,
      postageCost: 5.95,
      explicitTab: 'OUT_OF_SLA_EXCEPTION',
      createQueryStatus: 'COURIER_REPLIED_DELIVERING',
      courierReplyText: 'DPD Customer Care Reply: Consignee flat buzzer was inaccessible; driver has re-scheduled delivery and parcel will be delivered within 2 working days.',
      createAutoClaim: false,
    },
    // 6. OUT OF SLA EXCEPTION: Royal Mail Tracked 24 — More Than 3 Days Late, stalled 72h
    {
      courierCode: 'ROYAL_MAIL',
      orderId: '9910644',
      orderDate: daysAgo(7),
      processedDate: daysAgo(6),
      country: 'United Kingdom',
      source: 'WOOCOMMERCE',
      referenceNum: 'WOO-55821',
      postalService: 'Royal Mail Tracked 24',
      trackingNumber: 'JJ491029910GB',
      latestUpdate: 'In Transit - Delayed at Warrington Mail Centre (No scan for 72h)',
      lastScanDate: daysAgo(3),
      slaDays: 1,
      recipientName: 'Liam Gallagher',
      recipientAddress: '202 Princess Road',
      recipientCity: 'Manchester',
      recipientPostcode: 'M14 7GR',
      sku: 'HEAD-GUARD-M-BLK',
      itemTitle: 'Full Face Boxing Head Guard Medium',
      quantity: 1,
      retailValue: 52.00,
      wholesaleCost: 21.80,
      postageCost: 4.95,
      explicitTab: 'OUT_OF_SLA_EXCEPTION',
      createQueryStatus: 'SENT_AWAITING_REPLY',
      courierReplyText: null,
      createAutoClaim: false,
    },
    // 7. OUT OF SLA EXCEPTION: UPS International Germany — 2 Days Late, customs clearance exception
    {
      courierCode: 'UPS',
      orderId: '9910689',
      orderDate: daysAgo(6),
      processedDate: daysAgo(5),
      country: 'Germany',
      source: 'AMAZON',
      referenceNum: '304-9918271-1102938',
      postalService: 'UPS Standard EU Cross-Border',
      trackingNumber: '1Z8X942A6849102841',
      latestUpdate: 'Exception: Commercial Invoice Required at Cologne Customs Hub',
      lastScanDate: daysAgo(1),
      slaDays: 3,
      recipientName: 'Lukas Schneider',
      recipientAddress: 'Friedrichstraße 118',
      recipientCity: 'Berlin',
      recipientPostcode: '10117',
      sku: 'GYM-BAG-PRO-65L',
      itemTitle: 'Convertible Holdall Duffle Backpack 65L',
      quantity: 1,
      retailValue: 79.99,
      wholesaleCost: 33.00,
      postageCost: 11.40,
      explicitTab: 'OUT_OF_SLA_EXCEPTION',
      createQueryStatus: 'COURIER_REPLIED_ADDRESS_ISSUE',
      courierReplyText: 'UPS Brokerage Cologne: Missing EORI / Commercial Invoice attachment on package. Please reply with PDF invoice to release for final delivery.',
      createAutoClaim: false,
    },
    // 8. IN TRANSIT (On Track): DPD Next Day dispatched today
    {
      courierCode: 'DPD',
      orderId: '9910750',
      orderDate: daysAgo(1),
      processedDate: now,
      country: 'United Kingdom',
      source: 'SHOPIFY',
      referenceNum: 'SHP-UK-78102',
      postalService: 'DPD Parcel Next Day',
      trackingNumber: '15504928208812',
      latestUpdate: 'In Transit - Received at Hub 4 Hinckley Sortation Facility',
      lastScanDate: now,
      slaDays: 1,
      recipientName: 'Eleanor Vance',
      recipientAddress: '88 Queen Street',
      recipientCity: 'Edinburgh',
      recipientPostcode: 'EH2 4JR',
      sku: 'FOCUS-PADS-CURVED',
      itemTitle: 'Curved Hook & Jab Coaching Focus Pads',
      quantity: 1,
      retailValue: 48.00,
      wholesaleCost: 19.50,
      postageCost: 5.95,
      explicitTab: 'IN_TRANSIT',
    },
    // 9. IN TRANSIT (On Track): Royal Mail Tracked 48 dispatched 1 day ago
    {
      courierCode: 'ROYAL_MAIL',
      orderId: '9910782',
      orderDate: daysAgo(1),
      processedDate: daysAgo(1),
      country: 'United Kingdom',
      source: 'AMAZON',
      referenceNum: '205-7741920-3381920',
      postalService: 'Royal Mail Tracked 48',
      trackingNumber: 'JJ491031184GB',
      latestUpdate: 'Item Received at Midlands Super Hub - On Schedule',
      lastScanDate: now,
      slaDays: 2,
      recipientName: 'Benjamin Patel',
      recipientAddress: '55 Granby Street',
      recipientCity: 'Leicester',
      recipientPostcode: 'LE1 6FE',
      sku: 'HAND-WRAPS-45M-3PK',
      itemTitle: '4.5m Mexican Stretch Boxing Hand Wraps (3-Pack)',
      quantity: 1,
      retailValue: 24.99,
      wholesaleCost: 8.90,
      postageCost: 3.45,
      explicitTab: 'IN_TRANSIT',
    },
    // 10. DELIVERED (On Time): Royal Mail Tracked 24
    {
      courierCode: 'ROYAL_MAIL',
      orderId: '9910301',
      orderDate: daysAgo(4),
      processedDate: daysAgo(3),
      country: 'United Kingdom',
      source: 'SHOPIFY',
      referenceNum: 'SHP-UK-76901',
      postalService: 'Royal Mail Tracked 24',
      trackingNumber: 'JJ491021004GB',
      latestUpdate: 'Delivered with Safeplace Photo & GPS Signature',
      lastScanDate: daysAgo(2),
      slaDays: 1,
      recipientName: 'Charlotte Davies',
      recipientAddress: '12 Cathedral Road',
      recipientCity: 'Cardiff',
      recipientPostcode: 'CF11 9LJ',
      sku: 'YOGA-MAT-TPE-6MM',
      itemTitle: 'Non-Slip Dual Layer Fitness Mat 6mm',
      quantity: 1,
      retailValue: 39.99,
      wholesaleCost: 15.20,
      postageCost: 4.50,
      explicitTab: 'DELIVERED',
    },
    // 11. DELIVERED (On Time): Yodel Two Day
    {
      courierCode: 'YODEL',
      orderId: '9910319',
      orderDate: daysAgo(5),
      processedDate: daysAgo(4),
      country: 'United Kingdom',
      source: 'EBAY',
      referenceNum: 'EBAY-19-44821-00912',
      postalService: '(Yodel Two Day) www yodel co uk',
      trackingNumber: 'JD0002291847001928',
      latestUpdate: 'Delivered to Resident at Front Porch',
      lastScanDate: daysAgo(2),
      slaDays: 2,
      recipientName: 'Marcus Rashford',
      recipientAddress: '31 Wilmslow Road',
      recipientCity: 'Wilmslow',
      recipientPostcode: 'SK9 1HG',
      sku: 'DIP-BELT-CHAIN-BLK',
      itemTitle: 'Neoprene Weighted Dipping Belt with Steel Chain',
      quantity: 1,
      retailValue: 36.50,
      wholesaleCost: 14.80,
      postageCost: 4.10,
      explicitTab: 'DELIVERED',
    },
    // 12. DELIVERED (Late - 2 Days Late): FedEx Priority US
    {
      courierCode: 'FEDEX',
      orderId: '9910288',
      orderDate: daysAgo(8),
      processedDate: daysAgo(7),
      country: 'United States',
      source: 'AMAZON',
      referenceNum: '114-8829104-5591022',
      postalService: 'FedEx International Priority',
      trackingNumber: '774910284912',
      latestUpdate: 'Delivered - Signed by M. JOHNSON (Arrived 2 Days Past Guaranteed SLA)',
      lastScanDate: daysAgo(1),
      slaDays: 2,
      recipientName: 'Michael Johnson',
      recipientAddress: '742 Evergreen Terrace',
      recipientCity: 'Chicago',
      recipientPostcode: '60611',
      sku: 'GRAPPLING-DUMMY-UNFILLED',
      itemTitle: 'BJJ Wrestling Submission Grappling Dummy',
      quantity: 1,
      retailValue: 119.99,
      wholesaleCost: 48.00,
      postageCost: 18.50,
      explicitTab: 'DELIVERED',
    },
  ];

  for (const item of syntheticOrders) {
    const courier = courierByCode.get(item.courierCode) || couriers[0];
    const computed = evaluateCourierPerformanceRow({
      processedDate: item.processedDate,
      slaDays: item.slaDays,
      lastScanDate: item.lastScanDate,
      latestUpdate: item.latestUpdate,
      claimLossThresholdDays: courier.claimLossThresholdDays,
      explicitReportTab: item.explicitTab,
    });

    const trackingHistory = [
      {
        timestamp: item.processedDate.toISOString(),
        location: 'Manchester Primary Fulfillment Hub',
        status: 'Order Processed & Manifested in Linnworks',
      },
      {
        timestamp: new Date(item.processedDate.getTime() + 4 * 3600 * 1000).toISOString(),
        location: `${courier.name} Regional Collection Depot`,
        status: 'Collected by Carrier & Scanned into Network',
      },
      {
        timestamp: item.lastScanDate.toISOString(),
        location: `${item.recipientCity} / National Sortation Hub`,
        status: item.latestUpdate,
      },
    ];

    const existing = await db.shipment.findUnique({
      where: {
        workspaceId_trackingNumber: {
          workspaceId,
          trackingNumber: item.trackingNumber,
        },
      },
    });

    let shipmentId = existing?.id;

    if (!existing) {
      const created = await db.shipment.create({
        data: {
          workspaceId,
          courierId: courier.id,
          orderId: item.orderId,
          orderDate: item.orderDate,
          processedDate: item.processedDate,
          processedDay: computed.processedDay,
          country: item.country,
          source: item.source,
          referenceNum: item.referenceNum,
          postalService: item.postalService,
          trackingNumber: item.trackingNumber,
          latestUpdate: item.latestUpdate,
          slaStatus: computed.slaStatus,
          lastScanDate: item.lastScanDate,
          lastScanDay: computed.lastScanDay,
          slaDays: item.slaDays,
          estimatedDeliveryDate: computed.estimatedDeliveryDate,
          estimatedDeliveryDay: computed.estimatedDeliveryDay,
          formulaDate: computed.formulaDate,
          formulaDaysCount: computed.formulaDaysCount,
          slaForClaims: computed.slaForClaims,
          courierName: courier.name,
          reportTab: computed.reportTab,
          recipientName: item.recipientName,
          recipientEmail: `${item.recipientName.toLowerCase().replace(/\s+/g, '.')}@example.com`,
          recipientPhone: '+44 7700 900412',
          recipientAddress: item.recipientAddress,
          recipientCity: item.recipientCity,
          recipientPostcode: item.recipientPostcode,
          sku: item.sku,
          itemTitle: item.itemTitle,
          quantity: item.quantity,
          retailValue: item.retailValue,
          wholesaleCost: item.wholesaleCost,
          postageCost: item.postageCost,
          currency: 'GBP',
          trackingHistoryJson: JSON.stringify(trackingHistory),
          customFieldsJson: JSON.stringify({
            linnworksLocation: 'Main Warehouse - Bay A4',
            packagingWeightKg: '1.45',
          }),
        },
      });
      shipmentId = created.id;

      if (item.createQueryStatus && shipmentId) {
        const queryRef = `QRY-${courier.code.slice(0, 3)}-${item.orderId}`;
        await db.courierQuery.create({
          data: {
            workspaceId,
            shipmentId,
            courierId: courier.id,
            queryReference: queryRef,
            recipientEmail: courier.queryEmail,
            subject: `[URGENT SLA TRACE] Order #${item.orderId} / Tracking ${item.trackingNumber} (${computed.slaStatus})`,
            emailBodySent: `Dear ${courier.name} Investigations Desk,\n\nConsignment ${item.trackingNumber} (Order #${item.orderId}) dispatched on ${item.processedDate.toISOString().slice(0, 10)} via ${item.postalService} to ${item.recipientName} (${item.recipientPostcode}) has breached its ${item.slaDays}-day SLA.\n\nLatest Scan: "${item.latestUpdate}".\n\nPlease confirm immediate delivery date or declare official loss status so we may issue our commercial claim invoice.`,
            status: item.createQueryStatus,
            courierReplyText: item.courierReplyText || null,
            courierRepliedAt: item.courierReplyText ? new Date() : null,
          },
        });
      }

      if (item.createAutoClaim && shipmentId) {
        const invNum = `CLM-${courier.code.slice(0, 3)}-${item.orderId}`;
        let merchAmount = item.wholesaleCost;
        if (courier.pricingBasis === 'RETAIL_SALES_EX_VAT') {
          merchAmount = parseFloat((item.retailValue / 1.2).toFixed(2));
        } else if (courier.pricingBasis === 'RETAIL_SALES_INC_VAT') {
          merchAmount = item.retailValue;
        } else if (courier.pricingBasis === 'CAPPED_INDEMNITY') {
          merchAmount = Math.min(item.wholesaleCost, courier.maxLiabilityCap || item.wholesaleCost);
        }
        if (courier.maxLiabilityCap && merchAmount > courier.maxLiabilityCap) {
          merchAmount = courier.maxLiabilityCap;
        }
        const postageAmount = courier.includePostageRefund ? item.postageCost : 0;
        const totalClaim = parseFloat((merchAmount + postageAmount).toFixed(2));

        await db.claimInvoice.create({
          data: {
            workspaceId,
            shipmentId,
            courierId: courier.id,
            invoiceNumber: invNum,
            claimReference: `${courier.code}-LOSS-${item.orderId}`,
            status: item.courierCode === 'EVRI' ? 'PAID_SETTLED' : 'SUBMITTED_TO_COURIER',
            pricingBasisUsed: courier.pricingBasis,
            merchandiseClaimAmount: merchAmount,
            postageClaimAmount: postageAmount,
            vatAmount: 0,
            totalClaimAmount: totalClaim,
            approvedAmount: item.courierCode === 'EVRI' ? totalClaim : null,
            creditNoteNumber: item.courierCode === 'EVRI' ? 'CN-EVRI-88412-GB' : null,
            sentToEmail: courier.claimsEmail,
            settledAt: item.courierCode === 'EVRI' ? new Date() : null,
            invoiceFormatSnapshotJson: JSON.stringify({
              formatName: courier.invoiceFormatName,
              headerTitle: courier.invoiceHeaderTitle,
              accountNumber: courier.accountNumber,
              pricingBasis: courier.pricingBasis,
              customFields: JSON.parse(courier.invoiceRequiredFieldsJson || '[]'),
              declarationText: courier.invoiceDeclarationText,
              lineItems: [
                {
                  sku: item.sku,
                  description: item.itemTitle,
                  quantity: item.quantity,
                  retailPrice: item.retailValue,
                  wholesaleCost: item.wholesaleCost,
                  claimedUnitAmount: parseFloat((merchAmount / item.quantity).toFixed(2)),
                  claimedLineTotal: merchAmount,
                },
              ],
            }),
          },
        });
      }
    }
  }
}
