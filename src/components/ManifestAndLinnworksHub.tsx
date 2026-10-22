'use client';

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import {
  Upload,
  RefreshCw,
  Download,
  FileSpreadsheet,
  CheckCircle2,
  Plus,
  Layers,
  Sliders,
  CloudLightning,
} from 'lucide-react';
import { HelpTip } from './HelpTip';

const SYSTEM_FIELDS = [
  { key: 'orderId', label: 'Col A: OrderId (Linnworks Order #)', help: 'Unique order number from Linnworks, Shopify, Amazon, or eBay.' },
  { key: 'orderDate', label: 'Col B: Order Date', help: 'Date the customer placed the order.' },
  { key: 'processedDate', label: 'Col C: Processed (Dispatch Date)', help: 'Date the warehouse manifested & dispatched the parcel. Starts the SLA clock.' },
  { key: 'country', label: 'Col E: Destination Country', help: 'Recipient country (e.g. United Kingdom, Germany, United States).' },
  { key: 'source', label: 'Col F: Channel Source', help: 'Sales platform linked to Linnworks (AMAZON, SHOPIFY, EBAY, WOOCOMMERCE).' },
  { key: 'referenceNum', label: 'Col G: ReferenceNum', help: 'Marketplace channel reference or customer PO.' },
  { key: 'postalService', label: 'Col H: Postal Service', help: 'Carrier service level (e.g. Royal Mail Tracked 24, DPD Next Day, Yodel Two Day).' },
  { key: 'trackingNumber', label: 'Col I: Tracking Number', help: 'Master courier tracking barcode used for live tracking and claims.' },
  { key: 'latestUpdate', label: 'Col J: Latest Update', help: 'Most recent scan event description from the courier.' },
  { key: 'lastScanDate', label: 'Col L: Last Scan Date', help: 'Date and time of the latest carrier tracking scan.' },
  { key: 'slaDays', label: 'Col N: SLA (Target Business Days)', help: 'Contracted transit business days (e.g. 1 for Next Day, 2 for 48h).' },
  { key: 'courierName', label: 'Col T: Courier Name', help: 'Courier name (Royal Mail, DPD, Evri, Yodel, UPS, FedEx, DHL).' },
  { key: 'recipientName', label: 'Recipient Full Name', help: 'Customer name printed on the claim invoice.' },
  { key: 'recipientCity', label: 'Recipient City', help: 'Delivery city.' },
  { key: 'recipientPostcode', label: 'Recipient Postcode / Zip', help: 'Delivery postcode.' },
  { key: 'sku', label: 'Item SKU', help: 'Product SKU from Linnworks order.' },
  { key: 'itemTitle', label: 'Item Description', help: 'Product title printed on the commercial claim invoice.' },
  { key: 'retailValue', label: 'Order Retail Value', help: 'Customer sale price (used for Retail Ex-VAT courier claims like DPD).' },
  { key: 'wholesaleCost', label: 'Wholesale Cost Value', help: 'Net manufacturing/cost price (used for Royal Mail P58 & Evri claims).' },
  { key: 'postageCost', label: 'Postage / Carriage Cost', help: 'Shipping fee paid to the courier (refunded on claim invoices).' },
];

export function ManifestAndLinnworksHub({
  workspace,
  shipments,
  onCompleted,
  setToast,
}: {
  workspace: any;
  shipments: any[];
  onCompleted: () => void;
  setToast: (msg: string) => void;
}) {
  const [subTab, setSubTab] = useState<'excel' | 'linnworks' | 'manual'>('excel');
  const [workbookSheets, setWorkbookSheets] = useState<Record<string, any[]>>({});
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [selectedSheet, setSelectedSheet] = useState<string>('ALL_SHEETS');
  const [headers, setHeaders] = useState<string[]>([]);
  const [mapping, setMapping] = useState<Record<string, string>>({});
  const [importing, setImporting] = useState(false);

  // Linnworks credentials form
  const [lwAppId, setLwAppId] = useState(workspace?.linnworksAppId || '');
  const [lwAppSecret, setLwAppSecret] = useState(workspace?.linnworksAppSecret || '');
  const [lwToken, setLwToken] = useState(workspace?.linnworksToken || '');
  const [syncingLw, setSyncingLw] = useState(false);

  // Manual single parcel entry
  const [manualForm, setManualForm] = useState({
    orderId: '',
    trackingNumber: '',
    courierName: 'Royal Mail',
    postalService: 'Royal Mail Tracked 24',
    source: 'SHOPIFY',
    country: 'United Kingdom',
    processedDate: new Date().toISOString().slice(0, 10),
    slaDays: 2,
    latestUpdate: 'Dispatched from warehouse',
    recipientName: '',
    recipientCity: '',
    recipientPostcode: '',
    sku: '',
    itemTitle: '',
    retailValue: '59.99',
    wholesaleCost: '24.00',
    postageCost: '4.50',
  });

  const autoGuessMapping = (cols: string[]) => {
    const guessed: Record<string, string> = {};
    const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (const sf of SYSTEM_FIELDS) {
      for (const c of cols) {
        const nc = norm(c);
        if (sf.key === 'orderId' && (nc === 'orderid' || nc === 'orderno' || nc === 'ordernumber' || nc === 'npkorderid')) guessed[sf.key] = c;
        else if (sf.key === 'orderDate' && (nc === 'orderdate' || nc === 'receiveddate')) guessed[sf.key] = c;
        else if (sf.key === 'processedDate' && (nc === 'processed' || nc === 'processeddate' || nc === 'dispatchdate')) guessed[sf.key] = c;
        else if (sf.key === 'country' && (nc === 'country' || nc === 'destinationcountry')) guessed[sf.key] = c;
        else if (sf.key === 'source' && (nc === 'source' || nc === 'channel')) guessed[sf.key] = c;
        else if (sf.key === 'referenceNum' && (nc === 'referencenum' || nc === 'channelreference' || nc === 'ref')) guessed[sf.key] = c;
        else if (sf.key === 'postalService' && (nc === 'postalservice' || nc === 'service' || nc === 'shippingservice')) guessed[sf.key] = c;
        else if (sf.key === 'trackingNumber' && (nc === 'trackingnumber' || nc === 'tracking' || nc === 'consignment' || nc === 'barcode')) guessed[sf.key] = c;
        else if (sf.key === 'latestUpdate' && (nc === 'latestupdate' || nc === 'status' || nc === 'lastevent')) guessed[sf.key] = c;
        else if (sf.key === 'lastScanDate' && (nc === 'date' || nc === 'scandate' || nc === 'lastscandate')) guessed[sf.key] = c;
        else if (sf.key === 'slaDays' && (nc === 'sla' || nc === 'sladays')) guessed[sf.key] = c;
        else if (sf.key === 'courierName' && (nc === 'couriername' || nc === 'courier' || nc === 'carrier' || nc === 'vendor')) guessed[sf.key] = c;
        else if (sf.key === 'recipientName' && (nc.includes('recipient') || nc.includes('customername') || nc === 'fullname')) guessed[sf.key] = c;
        else if (sf.key === 'recipientCity' && (nc === 'city' || nc === 'town')) guessed[sf.key] = c;
        else if (sf.key === 'recipientPostcode' && (nc === 'postcode' || nc === 'postalcode' || nc === 'zip')) guessed[sf.key] = c;
        else if (sf.key === 'sku' && (nc === 'sku' || nc === 'itemsku')) guessed[sf.key] = c;
        else if (sf.key === 'itemTitle' && (nc === 'itemtitle' || nc === 'product' || nc === 'description')) guessed[sf.key] = c;
        else if (sf.key === 'retailValue' && (nc === 'retailvalue' || nc === 'total' || nc === 'ordervalue' || nc === 'price')) guessed[sf.key] = c;
        else if (sf.key === 'wholesaleCost' && (nc === 'wholesalecost' || nc === 'cost' || nc === 'costprice')) guessed[sf.key] = c;
        else if (sf.key === 'postageCost' && (nc === 'postagecost' || nc === 'postage' || nc === 'shippingcost')) guessed[sf.key] = c;
      }
    }
    setMapping(guessed);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const buffer = await file.arrayBuffer();
    const wb = XLSX.read(buffer, { type: 'array' });
    const sheetsMap: Record<string, any[]> = {};
    const names: string[] = [];
    const allCols = new Set<string>();

    for (const sName of wb.SheetNames) {
      const ws = wb.Sheets[sName];
      const json = XLSX.utils.sheet_to_json<Record<string, any>>(ws, { defval: '' });
      if (json.length > 0) {
        sheetsMap[sName] = json;
        names.push(sName);
        Object.keys(json[0]).forEach((k) => allCols.add(k));
      }
    }

    const colArray = Array.from(allCols);
    setWorkbookSheets(sheetsMap);
    setSheetNames(names);
    setSelectedSheet(names.length > 1 ? 'ALL_SHEETS' : names[0] || '');
    setHeaders(colArray);
    autoGuessMapping(colArray);
    setToast(`Loaded "${file.name}" (${names.length} sheet(s), ${colArray.length} columns detected).`);
  };

  const executeExcelImport = async () => {
    setImporting(true);
    try {
      const targetSheets = selectedSheet === 'ALL_SHEETS' ? sheetNames : [selectedSheet];
      const mappedValues = new Set(Object.values(mapping).filter(Boolean));
      const payloadRows: any[] = [];

      for (const sName of targetSheets) {
        const rawRows = workbookSheets[sName] || [];
        for (const raw of rawRows) {
          const item: Record<string, any> = { customFields: {} };
          for (const sf of SYSTEM_FIELDS) {
            const colName = mapping[sf.key];
            if (colName && raw[colName] !== undefined && raw[colName] !== '') {
              item[sf.key] = raw[colName];
            }
          }
          // If multi-sheet workbook has courier name as sheet tab (e.g. DPD, RM, EVRI, YODEL), use sheet name if courierName is blank
          if (!item.courierName && sName) {
            item.courierName = sName;
          }
          // Preserve all unmapped columns as custom fields so zero data is ever lost
          for (const [k, v] of Object.entries(raw)) {
            if (!mappedValues.has(k) && v !== '' && v !== null && v !== undefined) {
              item.customFields[k] = String(v);
            }
          }
          payloadRows.push(item);
        }
      }

      const res = await fetch('/api/workspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'import_shipments',
          rows: payloadRows,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Import failed');
      setToast(data.message);
      onCompleted();
    } catch (err: unknown) {
      setToast(err instanceof Error ? err.message : 'Import error');
    } finally {
      setImporting(false);
    }
  };

  const exportFull20ColumnExcel = () => {
    const exportRows = shipments.map((s) => {
      const custom = (() => {
        try {
          return JSON.parse(s.customFieldsJson || '{}');
        } catch {
          return {};
        }
      })();
      return {
        OrderId: s.orderId,
        'Order Date': new Date(s.orderDate).toISOString().slice(0, 10),
        Processed: new Date(s.processedDate).toISOString().slice(0, 10),
        Day: s.processedDay,
        Country: s.country,
        Source: s.source,
        ReferenceNum: s.referenceNum,
        'Postal Service': s.postalService,
        'Tracking Number': s.trackingNumber,
        'Latest Update': s.latestUpdate,
        Status: s.slaStatus,
        Date: new Date(s.lastScanDate).toISOString().slice(0, 10),
        'Scan Day': s.lastScanDay,
        SLA: s.slaDays,
        'Estimated Delivery Date': new Date(s.estimatedDeliveryDate).toISOString().slice(0, 10),
        'EDD Day': s.estimatedDeliveryDay,
        'Formula Date': new Date(s.formulaDate).toISOString().slice(0, 10),
        'Formula Days Count': s.formulaDaysCount,
        'SLA For Claims': s.slaForClaims,
        'Courier Name': s.courierName,
        'Report Bucket': s.reportTab,
        'Recipient Name': s.recipientName,
        Postcode: s.recipientPostcode,
        SKU: s.sku,
        'Item Description': s.itemTitle,
        'Retail Value': s.retailValue,
        'Wholesale Cost': s.wholesaleCost,
        'Postage Cost': s.postageCost,
        ...custom,
      };
    });

    const ws = XLSX.utils.json_to_sheet(exportRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Courier Performance Report');
    XLSX.writeFile(wb, `Courier_Performance_Report_${new Date().toISOString().slice(0, 10)}.xlsx`);
    setToast('Exported complete 20-column Courier Performance Report (.xlsx).');
  };

  const handleLinnworksSync = async () => {
    setSyncingLw(true);
    try {
      await fetch('/api/workspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'save_workspace_settings',
          linnworksAppId: lwAppId,
          linnworksAppSecret: lwAppSecret,
          linnworksToken: lwToken,
        }),
      });
      const res = await fetch('/api/workspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sync_linnworks' }),
      });
      const data = await res.json();
      setToast(data.message || 'Linnworks orders synced.');
      onCompleted();
    } finally {
      setSyncingLw(false);
    }
  };

  const handleManualAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setImporting(true);
    try {
      const res = await fetch('/api/workspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'import_shipments',
          rows: [manualForm],
        }),
      });
      const data = await res.json();
      setToast(data.message || 'Shipment added.');
      onCompleted();
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & 1-Click Export */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Linnworks &amp; Universal Excel Manifest Importer / Exporter
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Import any Linnworks export, multi-sheet Courier Performance Report (`.xlsx` or `.csv`), customize your columns freely, or sync directly from Linnworks API.
          </p>
        </div>
        <button
          type="button"
          onClick={exportFull20ColumnExcel}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Export 20-Column Report (.xlsx)</span>
        </button>
      </div>

      {/* Mode Switcher */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSubTab('excel')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all ${
            subTab === 'excel'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>1. Upload Excel (.xlsx) / CSV &amp; Customize Columns</span>
        </button>
        <button
          type="button"
          onClick={() => setSubTab('linnworks')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all ${
            subTab === 'linnworks'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <CloudLightning className="w-4 h-4" />
          <span>2. Direct Linnworks API Sync (Amazon, Shopify, eBay, Woo)</span>
        </button>
        <button
          type="button"
          onClick={() => setSubTab('manual')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all ${
            subTab === 'manual'
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Plus className="w-4 h-4" />
          <span>3. Add Single Order Manually</span>
        </button>
      </div>

      {subTab === 'excel' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 shadow-sm">
          <div className="border-2 border-dashed border-indigo-200 bg-indigo-50/40 rounded-xl p-8 text-center">
            <Upload className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <div className="text-sm font-bold text-slate-900">
              Select Your Linnworks Export or Courier Performance Excel / CSV File
            </div>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Supports single-sheet and multi-sheet `.xlsx`, `.xls`, and `.csv` files. Any extra custom columns in your sheet are automatically preserved!
            </p>
            <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold cursor-pointer shadow-sm">
              <FileSpreadsheet className="w-4 h-4" />
              <span>Choose Excel / CSV File</span>
              <input type="file" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>

          {headers.length > 0 && (
            <div className="space-y-5">
              {sheetNames.length > 1 && (
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    <span>Multi-Sheet Workbook Detected ({sheetNames.length} Tabs):</span>
                  </div>
                  <select
                    value={selectedSheet}
                    onChange={(e) => setSelectedSheet(e.target.value)}
                    className="px-3 py-1.5 rounded border border-slate-300 text-xs bg-white font-semibold"
                  >
                    <option value="ALL_SHEETS">Import All Sheets Combined ({sheetNames.join(', ')})</option>
                    {sheetNames.map((n) => (
                      <option key={n} value={n}>
                        Only Sheet: {n} ({workbookSheets[n]?.length || 0} rows)
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-indigo-600" />
                  <span>Customize Column Mapping (All Unmapped Columns Are Saved Automatically as Custom Fields)</span>
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  We auto-matched your spreadsheet headers below. You can tweak any field mapping before importing.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {SYSTEM_FIELDS.map((sf) => (
                    <div key={sf.key} className="p-3 rounded-lg border border-slate-200 bg-slate-50/60">
                      <label className="block text-[11px] font-bold text-slate-800 mb-1">
                        {sf.label}
                        <HelpTip text={sf.help} />
                      </label>
                      <select
                        value={mapping[sf.key] || ''}
                        onChange={(e) => setMapping({ ...mapping, [sf.key]: e.target.value })}
                        className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-300 bg-white"
                      >
                        <option value="">-- Auto / Default --</option>
                        {headers.map((h) => (
                          <option key={h} value={h}>
                            {h}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  disabled={importing}
                  onClick={executeExcelImport}
                  className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{importing ? 'Processing & Calculating SLAs...' : 'Execute Import & Run 20-Column SLA Engine'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {subTab === 'linnworks' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-sm">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Linnworks Direct API Connection (Processed Orders Sync)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Connect your Linnworks Application credentials to pull daily processed orders from Amazon, Shopify, eBay, and WooCommerce directly into the Courier Performance Report.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Linnworks Application ID
                <HelpTip text="Your Linnworks Developer Application ID from Linnworks.net > Settings > Application Store." />
              </label>
              <input
                type="text"
                value={lwAppId}
                onChange={(e) => setLwAppId(e.target.value)}
                placeholder="e.g. a8f9201c-44b1-4920-991a"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Linnworks Application Secret
                <HelpTip text="Secret key paired with your Linnworks Application ID for OAuth session token exchange." />
              </label>
              <input
                type="password"
                value={lwAppSecret}
                onChange={(e) => setLwAppSecret(e.target.value)}
                placeholder="••••••••••••••••"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Linnworks Installation Token
                <HelpTip text="Your workspace installation token granting read access to Processed Orders and SKU inventory costs." />
              </label>
              <input
                type="text"
                value={lwToken}
                onChange={(e) => setLwToken(e.target.value)}
                placeholder="e.g. lw-token-9948102a"
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div className="text-xs text-slate-500">
              {workspace?.lastLinnworksSyncAt
                ? `Last Synced: ${new Date(workspace.lastLinnworksSyncAt).toLocaleString()}`
                : 'Ready to sync daily processed dispatches.'}
            </div>
            <button
              type="button"
              disabled={syncingLw}
              onClick={handleLinnworksSync}
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 shadow-sm disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${syncingLw ? 'animate-spin' : ''}`} />
              <span>{syncingLw ? 'Syncing Linnworks Dispatches...' : 'Save Credentials & Pull Latest Linnworks Orders Now'}</span>
            </button>
          </div>
        </div>
      )}

      {subTab === 'manual' && (
        <form onSubmit={handleManualAdd} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900">Add Single Dispatched Order</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Order ID *</label>
              <input
                type="text"
                required
                value={manualForm.orderId}
                onChange={(e) => setManualForm({ ...manualForm, orderId: e.target.value })}
                placeholder="8785901"
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Tracking Number *</label>
              <input
                type="text"
                required
                value={manualForm.trackingNumber}
                onChange={(e) => setManualForm({ ...manualForm, trackingNumber: e.target.value })}
                placeholder="JJ491099281GB"
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Courier Name</label>
              <select
                value={manualForm.courierName}
                onChange={(e) => setManualForm({ ...manualForm, courierName: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded border border-slate-300 bg-white"
              >
                <option value="Royal Mail">Royal Mail</option>
                <option value="DPD UK">DPD UK</option>
                <option value="Evri (Hermes)">Evri (Hermes)</option>
                <option value="Yodel">Yodel</option>
                <option value="ParcelForce">ParcelForce</option>
                <option value="UPS">UPS</option>
                <option value="FedEx">FedEx</option>
                <option value="DHL Express">DHL Express</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Postal Service</label>
              <input
                type="text"
                value={manualForm.postalService}
                onChange={(e) => setManualForm({ ...manualForm, postalService: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Dispatch Date</label>
              <input
                type="date"
                value={manualForm.processedDate}
                onChange={(e) => setManualForm({ ...manualForm, processedDate: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Target SLA (Business Days)</label>
              <input
                type="number"
                value={manualForm.slaDays}
                onChange={(e) => setManualForm({ ...manualForm, slaDays: Number(e.target.value) })}
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Recipient Name</label>
              <input
                type="text"
                value={manualForm.recipientName}
                onChange={(e) => setManualForm({ ...manualForm, recipientName: e.target.value })}
                placeholder="Customer Name"
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Postcode</label>
              <input
                type="text"
                value={manualForm.recipientPostcode}
                onChange={(e) => setManualForm({ ...manualForm, recipientPostcode: e.target.value })}
                placeholder="M1 1AG"
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Item Title</label>
              <input
                type="text"
                value={manualForm.itemTitle}
                onChange={(e) => setManualForm({ ...manualForm, itemTitle: e.target.value })}
                placeholder="Sparring Gloves 16oz"
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Retail Value (£)</label>
              <input
                type="number"
                step="0.01"
                value={manualForm.retailValue}
                onChange={(e) => setManualForm({ ...manualForm, retailValue: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Wholesale Cost (£)</label>
              <input
                type="number"
                step="0.01"
                value={manualForm.wholesaleCost}
                onChange={(e) => setManualForm({ ...manualForm, wholesaleCost: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Postage Paid (£)</label>
              <input
                type="number"
                step="0.01"
                value={manualForm.postageCost}
                onChange={(e) => setManualForm({ ...manualForm, postageCost: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded border border-slate-300"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={importing}
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold"
            >
              Add Order &amp; Calculate SLA
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
