
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.WorkspaceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  email: 'email',
  phone: 'phone',
  address: 'address',
  city: 'city',
  postcode: 'postcode',
  country: 'country',
  vatNumber: 'vatNumber',
  companyRegNumber: 'companyRegNumber',
  currency: 'currency',
  linnworksAppId: 'linnworksAppId',
  linnworksAppSecret: 'linnworksAppSecret',
  linnworksToken: 'linnworksToken',
  linnworksAutoSync: 'linnworksAutoSync',
  lastLinnworksSyncAt: 'lastLinnworksSyncAt',
  senderName: 'senderName',
  senderEmail: 'senderEmail',
  replyToEmail: 'replyToEmail',
  resendApiKey: 'resendApiKey',
  autoQueryOutOfSla: 'autoQueryOutOfSla',
  autoClaimOnCourierLost: 'autoClaimOnCourierLost',
  customColumnsJson: 'customColumnsJson',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  workspaceId: 'workspaceId',
  name: 'name',
  email: 'email',
  passwordHash: 'passwordHash',
  authProvider: 'authProvider',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.CourierScalarFieldEnum = {
  id: 'id',
  workspaceId: 'workspaceId',
  code: 'code',
  name: 'name',
  accountNumber: 'accountNumber',
  trackingApiProvider: 'trackingApiProvider',
  apiKey: 'apiKey',
  apiEndpoint: 'apiEndpoint',
  isLiveApiConnected: 'isLiveApiConnected',
  queryEmail: 'queryEmail',
  claimsEmail: 'claimsEmail',
  defaultSlaDays: 'defaultSlaDays',
  stalledThresholdHours: 'stalledThresholdHours',
  claimLossThresholdDays: 'claimLossThresholdDays',
  claimFilingWindowDays: 'claimFilingWindowDays',
  invoiceFormatName: 'invoiceFormatName',
  pricingBasis: 'pricingBasis',
  maxLiabilityCap: 'maxLiabilityCap',
  includePostageRefund: 'includePostageRefund',
  vatRatePercent: 'vatRatePercent',
  invoiceHeaderTitle: 'invoiceHeaderTitle',
  invoiceRequiredFieldsJson: 'invoiceRequiredFieldsJson',
  invoiceDeclarationText: 'invoiceDeclarationText',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ShipmentScalarFieldEnum = {
  id: 'id',
  workspaceId: 'workspaceId',
  courierId: 'courierId',
  orderId: 'orderId',
  orderDate: 'orderDate',
  processedDate: 'processedDate',
  processedDay: 'processedDay',
  country: 'country',
  source: 'source',
  referenceNum: 'referenceNum',
  postalService: 'postalService',
  trackingNumber: 'trackingNumber',
  latestUpdate: 'latestUpdate',
  slaStatus: 'slaStatus',
  lastScanDate: 'lastScanDate',
  lastScanDay: 'lastScanDay',
  slaDays: 'slaDays',
  estimatedDeliveryDate: 'estimatedDeliveryDate',
  estimatedDeliveryDay: 'estimatedDeliveryDay',
  formulaDate: 'formulaDate',
  formulaDaysCount: 'formulaDaysCount',
  slaForClaims: 'slaForClaims',
  courierName: 'courierName',
  reportTab: 'reportTab',
  recipientName: 'recipientName',
  recipientEmail: 'recipientEmail',
  recipientPhone: 'recipientPhone',
  recipientAddress: 'recipientAddress',
  recipientCity: 'recipientCity',
  recipientPostcode: 'recipientPostcode',
  sku: 'sku',
  itemTitle: 'itemTitle',
  quantity: 'quantity',
  retailValue: 'retailValue',
  wholesaleCost: 'wholesaleCost',
  postageCost: 'postageCost',
  currency: 'currency',
  trackingHistoryJson: 'trackingHistoryJson',
  customFieldsJson: 'customFieldsJson',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourierQueryScalarFieldEnum = {
  id: 'id',
  workspaceId: 'workspaceId',
  shipmentId: 'shipmentId',
  courierId: 'courierId',
  queryReference: 'queryReference',
  recipientEmail: 'recipientEmail',
  subject: 'subject',
  emailBodySent: 'emailBodySent',
  status: 'status',
  courierReplyText: 'courierReplyText',
  courierRepliedAt: 'courierRepliedAt',
  autoTriggeredClaimId: 'autoTriggeredClaimId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClaimInvoiceScalarFieldEnum = {
  id: 'id',
  workspaceId: 'workspaceId',
  shipmentId: 'shipmentId',
  courierId: 'courierId',
  invoiceNumber: 'invoiceNumber',
  claimReference: 'claimReference',
  status: 'status',
  pricingBasisUsed: 'pricingBasisUsed',
  merchandiseClaimAmount: 'merchandiseClaimAmount',
  postageClaimAmount: 'postageClaimAmount',
  vatAmount: 'vatAmount',
  totalClaimAmount: 'totalClaimAmount',
  approvedAmount: 'approvedAmount',
  creditNoteNumber: 'creditNoteNumber',
  invoiceFormatSnapshotJson: 'invoiceFormatSnapshotJson',
  sentToEmail: 'sentToEmail',
  submittedAt: 'submittedAt',
  settledAt: 'settledAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Workspace: 'Workspace',
  User: 'User',
  Courier: 'Courier',
  Shipment: 'Shipment',
  CourierQuery: 'CourierQuery',
  ClaimInvoice: 'ClaimInvoice'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
