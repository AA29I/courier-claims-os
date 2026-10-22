'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Printer,
  Send,
  Plus,
  Trash2,
  CheckCircle2,
  Sliders,
  Building2,
  Eye,
  Save,
  X,
} from 'lucide-react';
import { HelpTip } from './HelpTip';

export function InvoiceStudioAndClaims({
  workspace,
  couriers,
  claimInvoices,
  shipments,
  onRefresh,
  setToast,
}: {
  workspace: any;
  couriers: any[];
  claimInvoices: any[];
  shipments: any[];
  onRefresh: () => void;
  setToast: (msg: string) => void;
}) {
  const [mode, setMode] = useState<'ledger' | 'studio'>('ledger');
  const [selectedCourierId, setSelectedCourierId] = useState<string>(couriers[0]?.id || 'NEW');
  const [savingCourier, setSavingCourier] = useState(false);

  // Active printable / editable Claim Invoice modal
  const [activeInvoice, setActiveInvoice] = useState<any | null>(null);
  const [editMerch, setEditMerch] = useState<string>('0');
  const [editPostage, setEditPostage] = useState<string>('0');
  const [editStatus, setEditStatus] = useState<string>('SUBMITTED_TO_COURIER');
  const [editCreditNote, setEditCreditNote] = useState<string>('');
  const [editSnapshot, setEditSnapshot] = useState<any>(null);

  // Courier Studio Form State
  const [cForm, setCForm] = useState({
    id: '',
    code: '',
    name: '',
    accountNumber: '',
    trackingApiProvider: 'DIRECT_REST_API',
    apiKey: '',
    queryEmail: '',
    claimsEmail: '',
    defaultSlaDays: 2,
    claimLossThresholdDays: 7,
    claimFilingWindowDays: 28,
    invoiceFormatName: '',
    pricingBasis: 'WHOLESALE_COST_EX_VAT',
    maxLiabilityCap: '100',
    includePostageRefund: true,
    vatRatePercent: '0',
    invoiceHeaderTitle: '',
    invoiceRequiredFields: [] as Array<{ key: string; label: string; value: string }>,
    invoiceDeclarationText: '',
  });

  useEffect(() => {
    if (selectedCourierId === 'NEW') {
      setCForm({
        id: '',
        code: '',
        name: '',
        accountNumber: '',
        trackingApiProvider: 'DIRECT_REST_API',
        apiKey: '',
        queryEmail: '',
        claimsEmail: '',
        defaultSlaDays: 2,
        claimLossThresholdDays: 7,
        claimFilingWindowDays: 28,
        invoiceFormatName: 'Custom Courier Commercial Claim Invoice',
        pricingBasis: 'WHOLESALE_COST_EX_VAT',
        maxLiabilityCap: '100',
        includePostageRefund: true,
        vatRatePercent: '0',
        invoiceHeaderTitle: 'COMMERCIAL CONSIGNMENT LOSS CLAIM INVOICE',
        invoiceRequiredFields: [
          { key: 'accountNo', label: 'Courier Account Number', value: 'ACC-001' },
        ],
        invoiceDeclarationText:
          'We hereby certify that the goods detailed above were dispatched via the stated carrier service, have exceeded the contractual loss period without delivery scan, and that the valuation claimed reflects our commercial loss.',
      });
    } else {
      const found = couriers.find((c) => c.id === selectedCourierId) || couriers[0];
      if (found) {
        let parsedFields = [];
        try {
          parsedFields = JSON.parse(found.invoiceRequiredFieldsJson || '[]');
        } catch {
          parsedFields = [];
        }
        setCForm({
          id: found.id,
          code: found.code,
          name: found.name,
          accountNumber: found.accountNumber || '',
          trackingApiProvider: found.trackingApiProvider || 'DIRECT_REST_API',
          apiKey: found.apiKey || '',
          queryEmail: found.queryEmail || '',
          claimsEmail: found.claimsEmail || '',
          defaultSlaDays: found.defaultSlaDays ?? 2,
          claimLossThresholdDays: found.claimLossThresholdDays ?? 7,
          claimFilingWindowDays: found.claimFilingWindowDays ?? 28,
          invoiceFormatName: found.invoiceFormatName || '',
          pricingBasis: found.pricingBasis || 'WHOLESALE_COST_EX_VAT',
          maxLiabilityCap: found.maxLiabilityCap !== null && found.maxLiabilityCap !== undefined ? String(found.maxLiabilityCap) : '',
          includePostageRefund: Boolean(found.includePostageRefund),
          vatRatePercent: String(found.vatRatePercent ?? 0),
          invoiceHeaderTitle: found.invoiceHeaderTitle || 'COMMERCIAL LOSS CLAIM INVOICE',
          invoiceRequiredFields: parsedFields,
          invoiceDeclarationText: found.invoiceDeclarationText || '',
        });
      }
    }
  }, [selectedCourierId, couriers]);

  const openInvoiceEditor = (inv: any) => {
    let snap: any = {};
    try {
      snap = JSON.parse(inv.invoiceFormatSnapshotJson || '{}');
    } catch {
      snap = {};
    }
    setActiveInvoice(inv);
    setEditMerch(String(inv.merchandiseClaimAmount));
    setEditPostage(String(inv.postageClaimAmount));
    setEditStatus(inv.status);
    setEditCreditNote(inv.creditNoteNumber || '');
    setEditSnapshot(snap);
  };

  const handleSaveInvoiceEdits = async () => {
    if (!activeInvoice) return;
    const res = await fetch('/api/workspace', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'update_claim_invoice',
        invoiceId: activeInvoice.id,
        status: editStatus,
        merchandiseClaimAmount: editMerch,
        postageClaimAmount: editPostage,
        creditNoteNumber: editCreditNote,
        approvedAmount: editStatus === 'PAID_SETTLED' ? parseFloat(editMerch) + parseFloat(editPostage) : undefined,
        invoiceFormatSnapshot: editSnapshot,
      }),
    });
    const data = await res.json();
    setToast(data.message || 'Claim invoice updated.');
    onRefresh();
    setActiveInvoice(null);
  };

  const handleSaveCourierTemplate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingCourier(true);
    try {
      const res = await fetch('/api/workspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'save_courier',
          ...cForm,
        }),
      });
      const data = await res.json();
      setToast(data.message || 'Courier format saved.');
      onRefresh();
      if (data.courier?.id) {
        setSelectedCourierId(data.courier.id);
      }
    } finally {
      setSavingCourier(false);
    }
  };

  const handleCreateClaimFromShipment = async (shipmentId: string) => {
    const res = await fetch('/api/workspace', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'generate_claim_invoice',
        shipmentId,
      }),
    });
    const data = await res.json();
    setToast(data.message || 'Generated courier claim invoice.');
    onRefresh();
  };

  // Sample calculation for live Studio Preview
  const sampleRetail = 84.0;
  const sampleWholesale = 36.0;
  const samplePostage = 4.85;
  let previewMerch = sampleWholesale;
  if (cForm.pricingBasis === 'RETAIL_SALES_EX_VAT') previewMerch = parseFloat((sampleRetail / 1.2).toFixed(2));
  else if (cForm.pricingBasis === 'RETAIL_SALES_INC_VAT') previewMerch = sampleRetail;
  else if (cForm.pricingBasis === 'CAPPED_INDEMNITY') {
    previewMerch = Math.min(sampleWholesale, parseFloat(cForm.maxLiabilityCap || '100') || sampleWholesale);
  }
  if (cForm.maxLiabilityCap && parseFloat(cForm.maxLiabilityCap) > 0 && previewMerch > parseFloat(cForm.maxLiabilityCap)) {
    previewMerch = parseFloat(cForm.maxLiabilityCap);
  }
  const previewPostage = cForm.includePostageRefund ? samplePostage : 0;
  const previewTotal = (previewMerch + previewPostage).toFixed(2);

  const claimableShipments = shipments.filter((s) => s.reportTab === 'CLAIM_SHEET');

  return (
    <div className="space-y-6">
      {/* Sub-Navigation */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm no-print">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setMode('ledger')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
              mode === 'ledger'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>1. Active Claim Invoices &amp; Printable PDFs ({claimInvoices.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('studio')}
            className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
              mode === 'studio'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>2. Per-Courier Invoice Format Studio &amp; Onboard Couriers ({couriers.length})</span>
          </button>
        </div>

        <div className="text-xs text-slate-500">
          Every courier has its own dedicated invoice format, pricing rule, and custom fields linked to your database.
        </div>
      </div>

      {mode === 'ledger' && (
        <div className="space-y-6 no-print">
          {/* Quick 1-Click Generator from Claim Sheet Shipments */}
          {claimableShipments.length > 0 && (
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Claim Sheet Queue: Parcels Eligible for Immediate Courier Claim Invoice ({claimableShipments.length})
                  </h3>
                  <p className="text-xs text-slate-600">
                    Click &ldquo;Create &amp; Send Courier Invoice&rdquo; on any parcel below to generate its claim invoice using that courier&rsquo;s exact format.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {claimableShipments.map((s) => (
                  <div
                    key={s.id}
                    className="bg-white rounded-lg border border-amber-200 p-3.5 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 font-mono">{s.trackingNumber}</span>
                        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                          {s.courierName}
                        </span>
                        <span className="text-[11px] text-slate-500">Order #{s.orderId}</span>
                      </div>
                      <div className="text-xs text-slate-600 truncate mt-0.5">
                        {s.itemTitle} • Retail: £{s.retailValue.toFixed(2)} • Wholesale: £{s.wholesaleCost.toFixed(2)} • SLA Claims: {s.slaForClaims}d
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCreateClaimFromShipment(s.id)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shrink-0 flex items-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Create &amp; Send Invoice</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generated Claim Invoices Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">
                Generated Courier Claim Invoices &amp; Settlement Ledger
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <th className="p-3">Invoice #</th>
                    <th className="p-3">Courier &amp; Format Used</th>
                    <th className="p-3">Order &amp; Tracking</th>
                    <th className="p-3">Pricing Basis</th>
                    <th className="p-3">Goods + Postage</th>
                    <th className="p-3">Total Claimed</th>
                    <th className="p-3">Status / Credit Note</th>
                    <th className="p-3 text-right">Manage / Print PDF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {claimInvoices.map((inv) => {
                    const snap = (() => {
                      try {
                        return JSON.parse(inv.invoiceFormatSnapshotJson || '{}');
                      } catch {
                        return {};
                      }
                    })();
                    return (
                      <tr key={inv.id} className="hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-indigo-700">{inv.invoiceNumber}</td>
                        <td className="p-3">
                          <div className="font-bold text-slate-900">{inv.courier?.name}</div>
                          <div className="text-[11px] text-slate-500">{snap.formatName || inv.courier?.invoiceFormatName}</div>
                        </td>
                        <td className="p-3">
                          <div className="font-mono font-semibold text-slate-800">{inv.shipment?.trackingNumber}</div>
                          <div className="text-[11px] text-slate-500">Order #{inv.shipment?.orderId} • {inv.shipment?.recipientName}</div>
                        </td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-semibold">
                            {inv.pricingBasisUsed}
                          </span>
                        </td>
                        <td className="p-3 font-mono text-slate-600">
                          £{inv.merchandiseClaimAmount.toFixed(2)} + £{inv.postageClaimAmount.toFixed(2)}
                        </td>
                        <td className="p-3 font-mono font-bold text-slate-900">
                          £{inv.totalClaimAmount.toFixed(2)}
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              inv.status === 'PAID_SETTLED'
                                ? 'bg-emerald-100 text-emerald-800'
                                : inv.status === 'REJECTED'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {inv.status}
                          </span>
                          {inv.creditNoteNumber && (
                            <div className="text-[10px] font-mono text-emerald-700 mt-0.5">
                              CN: {inv.creditNoteNumber}
                            </div>
                          )}
                        </td>
                        <td className="p-3 text-right">
                          <button
                            type="button"
                            onClick={() => openInvoiceEditor(inv)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Edit / Print Invoice PDF</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: PER-COURIER INVOICE FORMAT STUDIO */}
      {mode === 'studio' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 no-print">
          {/* Left: Courier Selector & Format Builder */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Per-Courier Invoice Format &amp; Claim Rules Builder
                </h3>
                <p className="text-xs text-slate-500">
                  Select a courier to customize its exact invoice format, or click &ldquo;+ Onboard New Courier&rdquo;.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCourierId('NEW')}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Onboard New Courier</span>
              </button>
            </div>

            {/* Courier Pills */}
            <div className="flex flex-wrap gap-2">
              {couriers.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCourierId(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                    selectedCourierId === c.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <form onSubmit={handleSaveCourierTemplate} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Courier Name *
                    <HelpTip text="Display name of the courier (e.g. Royal Mail, DPD UK, Evri, DHL, Aramex)." />
                  </label>
                  <input
                    type="text"
                    required
                    value={cForm.name}
                    onChange={(e) => setCForm({ ...cForm, name: e.target.value })}
                    placeholder="e.g. Royal Mail"
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Courier Account Number
                    <HelpTip text="Your commercial shipper account number printed on the claim invoice header." />
                  </label>
                  <input
                    type="text"
                    value={cForm.accountNumber}
                    onChange={(e) => setCForm({ ...cForm, accountNumber: e.target.value })}
                    placeholder="e.g. OBA-7749201-GB"
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Invoice Template Name
                    <HelpTip text="Name of this courier's invoice format (e.g. Royal Mail P58 Wholesale Cost Schedule)." />
                  </label>
                  <input
                    type="text"
                    value={cForm.invoiceFormatName}
                    onChange={(e) => setCForm({ ...cForm, invoiceFormatName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Document Header Title
                    <HelpTip text="Bold title printed at the top of the PDF Claim Invoice for this courier." />
                  </label>
                  <input
                    type="text"
                    value={cForm.invoiceHeaderTitle}
                    onChange={(e) => setCForm({ ...cForm, invoiceHeaderTitle: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pricing Valuation Rule
                    <HelpTip text="Royal Mail & Evri require Wholesale Cost Ex-VAT; DPD & UPS accept Retail Ex-VAT; Evri/Yodel apply Capped Indemnity." />
                  </label>
                  <select
                    value={cForm.pricingBasis}
                    onChange={(e) => setCForm({ ...cForm, pricingBasis: e.target.value })}
                    className="w-full px-2.5 py-2 text-xs rounded border border-slate-300 bg-white font-semibold"
                  >
                    <option value="WHOLESALE_COST_EX_VAT">Wholesale Cost (Ex-VAT)</option>
                    <option value="RETAIL_SALES_EX_VAT">Retail Sales Price (Ex-VAT)</option>
                    <option value="RETAIL_SALES_INC_VAT">Retail Sales Price (Inc-VAT)</option>
                    <option value="CAPPED_INDEMNITY">Contract Capped Indemnity</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Max Liability Cap (£)
                    <HelpTip text="Maximum payout per parcel (e.g. £20 for Evri, £50 for Yodel, £100 for DPD, £150 for RM)." />
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={cForm.maxLiabilityCap}
                    onChange={(e) => setCForm({ ...cForm, maxLiabilityCap: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Loss Threshold (Days)
                    <HelpTip text="Business days after dispatch (Column S: SLA For Claims) before parcel is automatically moved to the Claim Sheet." />
                  </label>
                  <input
                    type="number"
                    value={cForm.claimLossThresholdDays}
                    onChange={(e) => setCForm({ ...cForm, claimLossThresholdDays: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Out-of-SLA Query Desk Email
                    <HelpTip text="Email address where automated Out-of-SLA parcel inquiries are dispatched." />
                  </label>
                  <input
                    type="email"
                    value={cForm.queryEmail}
                    onChange={(e) => setCForm({ ...cForm, queryEmail: e.target.value })}
                    placeholder="queries@courier.co.uk"
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Formal Claims Desk Email
                    <HelpTip text="Email address where formal Claim Invoices are dispatched for this courier." />
                  </label>
                  <input
                    type="email"
                    value={cForm.claimsEmail}
                    onChange={(e) => setCForm({ ...cForm, claimsEmail: e.target.value })}
                    placeholder="claims@courier.co.uk"
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <input
                  type="checkbox"
                  id="postageToggle"
                  checked={cForm.includePostageRefund}
                  onChange={(e) => setCForm({ ...cForm, includePostageRefund: e.target.checked })}
                  className="w-4 h-4 rounded text-indigo-600"
                />
                <label htmlFor="postageToggle" className="text-xs font-bold text-slate-800 cursor-pointer">
                  Automatically add original Postage / Carriage Fee refund onto every Claim Invoice for {cForm.name || 'this courier'}
                </label>
              </div>

              {/* Custom Mandatory Fields for this Courier */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800">
                    Custom Courier Header Fields (Printed on {cForm.name || 'Courier'} Invoices)
                    <HelpTip text="Add any specific reference fields required by this courier (e.g. OBA Account, Depot Search Ref, HS Code, Mail Centre)." />
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setCForm({
                        ...cForm,
                        invoiceRequiredFields: [
                          ...cForm.invoiceRequiredFields,
                          { key: `field_${Date.now()}`, label: 'Custom Reference Field', value: 'Required Value' },
                        ],
                      })
                    }
                    className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Field</span>
                  </button>
                </div>

                {cForm.invoiceRequiredFields.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={f.label}
                      onChange={(e) => {
                        const copy = [...cForm.invoiceRequiredFields];
                        copy[idx] = { ...copy[idx], label: e.target.value };
                        setCForm({ ...cForm, invoiceRequiredFields: copy });
                      }}
                      placeholder="Field Label (e.g. OBA Account)"
                      className="w-1/2 px-2.5 py-1.5 text-xs rounded border border-slate-300"
                    />
                    <input
                      type="text"
                      value={f.value}
                      onChange={(e) => {
                        const copy = [...cForm.invoiceRequiredFields];
                        copy[idx] = { ...copy[idx], value: e.target.value };
                        setCForm({ ...cForm, invoiceRequiredFields: copy });
                      }}
                      placeholder="Default Value"
                      className="w-1/2 px-2.5 py-1.5 text-xs rounded border border-slate-300 font-mono"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setCForm({
                          ...cForm,
                          invoiceRequiredFields: cForm.invoiceRequiredFields.filter((_, i) => i !== idx),
                        })
                      }
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Courier Legal Declaration &amp; Indemnity Statement
                </label>
                <textarea
                  rows={3}
                  value={cForm.invoiceDeclarationText}
                  onChange={(e) => setCForm({ ...cForm, invoiceDeclarationText: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300"
                />
              </div>

              <button
                type="submit"
                disabled={savingCourier}
                className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Save className="w-4 h-4" />
                <span>{savingCourier ? 'Saving Format...' : `Save ${cForm.name || 'Courier'} Invoice Format & Rules`}</span>
              </button>
            </form>
          </div>

          {/* Right: Live Real-Time Invoice Preview for Selected Courier */}
          <div className="lg:col-span-6 bg-white rounded-xl border-2 border-slate-300 p-6 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 font-bold">
                  LIVE COURIER INVOICE TEMPLATE PREVIEW • {cForm.invoiceFormatName}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mt-0.5">
                  {cForm.invoiceHeaderTitle || 'COMMERCIAL LOSS CLAIM INVOICE'}
                </h4>
              </div>
              <div className="text-right text-xs">
                <div className="font-bold text-slate-900">{workspace?.name}</div>
                <div className="text-slate-500">{workspace?.address}, {workspace?.city} {workspace?.postcode}</div>
                <div className="font-mono text-[11px] text-slate-600">VAT: {workspace?.vatNumber}</div>
              </div>
            </div>

            {/* Courier & Custom Fields Grid */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <div>
                <div className="text-[10px] uppercase text-slate-400 font-bold">TO CARRIER CLAIMS DESK</div>
                <div className="font-bold text-slate-900">{cForm.name || 'Carrier'} Claims Department</div>
                <div className="font-mono text-[11px] text-slate-600">{cForm.claimsEmail}</div>
                <div className="font-mono text-[11px] text-slate-700 mt-1">
                  Account: <span className="font-bold">{cForm.accountNumber || 'N/A'}</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase text-slate-400 font-bold">COURIER-SPECIFIC MANDATORY FIELDS</div>
                {cForm.invoiceRequiredFields.map((f, i) => (
                  <div key={i} className="flex justify-between text-[11px]">
                    <span className="text-slate-500">{f.label}:</span>
                    <span className="font-mono font-bold text-slate-900">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Line Items */}
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-300 text-slate-600">
                  <th className="py-2">SKU &amp; Item Description</th>
                  <th className="py-2">Retail</th>
                  <th className="py-2">Wholesale</th>
                  <th className="py-2 text-right">Claimed ({cForm.pricingBasis})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-2.5">
                    <div className="font-bold text-slate-900">PRO-GLV-16OZ • Pro Sparring Gloves</div>
                    <div className="text-[11px] text-slate-500">Tracking: JJ491028491GB • Order #9910421</div>
                  </td>
                  <td className="py-2.5 font-mono text-slate-500">£{sampleRetail.toFixed(2)}</td>
                  <td className="py-2.5 font-mono text-slate-500">£{sampleWholesale.toFixed(2)}</td>
                  <td className="py-2.5 font-mono font-bold text-slate-900 text-right">£{previewMerch.toFixed(2)}</td>
                </tr>
                {cForm.includePostageRefund && (
                  <tr>
                    <td colSpan={3} className="py-2 text-slate-600 font-semibold">
                      Original Outbound Carriage / Postage Refund
                    </td>
                    <td className="py-2 font-mono font-bold text-slate-900 text-right">£{previewPostage.toFixed(2)}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="flex justify-end pt-2 border-t border-slate-300">
              <div className="w-60 space-y-1 text-xs">
                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1">
                  <span>TOTAL CLAIM AMOUNT:</span>
                  <span className="font-mono text-indigo-700">£{previewTotal}</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded bg-slate-50 border border-slate-200 text-[11px] text-slate-600 italic leading-relaxed">
              &ldquo;{cForm.invoiceDeclarationText}&rdquo;
            </div>
          </div>
        </div>
      )}

      {/* PRINTABLE & EDITABLE CLAIM INVOICE MODAL */}
      {activeInvoice && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl border border-slate-300 max-w-4xl w-full p-6 sm:p-8 shadow-2xl space-y-6 print-only-invoice max-h-[92vh] overflow-y-auto">
            {/* Top Action Bar (Hidden when printing PDF) */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 no-print">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-800 text-xs font-bold font-mono">
                  {activeInvoice.invoiceNumber}
                </span>
                <span className="text-xs text-slate-600">
                  You can tweak any field below before printing/saving PDF or updating status.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  type="button"
                  onClick={handleSaveInvoiceEdits}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Save Invoice Changes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInvoice(null)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Editable Controls Bar (Hidden when printing) */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-3.5 rounded-lg bg-indigo-50/60 border border-indigo-200 text-xs no-print">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Claim Status</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white font-semibold"
                >
                  <option value="DRAFT">DRAFT</option>
                  <option value="SUBMITTED_TO_COURIER">SUBMITTED_TO_COURIER</option>
                  <option value="UNDER_REVIEW">UNDER_REVIEW</option>
                  <option value="PAID_SETTLED">PAID_SETTLED</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Merchandise Claim (£)</label>
                <input
                  type="number"
                  step="0.01"
                  value={editMerch}
                  onChange={(e) => setEditMerch(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white font-mono"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Postage Refund (£)</label>
                <input
                  type="number"
                  step="0.01"
                  value={editPostage}
                  onChange={(e) => setEditPostage(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white font-mono"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Courier Credit Note #</label>
                <input
                  type="text"
                  value={editCreditNote}
                  onChange={(e) => setEditCreditNote(e.target.value)}
                  placeholder="e.g. CN-RM-99201"
                  className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white font-mono"
                />
              </div>
            </div>

            {/* Formal Printable Commercial Claim Invoice Sheet */}
            <div className="space-y-6 text-xs text-slate-900">
              <div className="flex justify-between items-start border-b-2 border-slate-900 pb-5">
                <div>
                  <div className="text-[11px] font-mono font-bold text-indigo-700 uppercase">
                    {editSnapshot?.formatName || activeInvoice.courier?.invoiceFormatName}
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-1">
                    {editSnapshot?.headerTitle || activeInvoice.courier?.invoiceHeaderTitle}
                  </h2>
                  <div className="mt-2 font-mono text-xs text-slate-600">
                    Invoice Number: <strong className="text-slate-900">{activeInvoice.invoiceNumber}</strong> • Date:{' '}
                    {new Date(activeInvoice.submittedAt).toISOString().slice(0, 10)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-slate-900">{workspace?.name}</div>
                  <div className="text-slate-600">{workspace?.address}</div>
                  <div className="text-slate-600">
                    {workspace?.city}, {workspace?.postcode}, {workspace?.country}
                  </div>
                  <div className="font-mono text-slate-700 mt-1">
                    VAT No: {workspace?.vatNumber} • Reg: {workspace?.companyRegNumber}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">CLAIMED AGAINST CARRIER</div>
                  <div className="font-bold text-sm text-slate-900">{activeInvoice.courier?.name} Claims Department</div>
                  <div className="font-mono text-slate-600">Claims Desk: {activeInvoice.sentToEmail}</div>
                  <div className="font-mono text-slate-700 mt-1">
                    Shipper Account: <strong>{editSnapshot?.accountNumber || activeInvoice.courier?.accountNumber}</strong>
                  </div>
                  {Array.isArray(editSnapshot?.customFields) &&
                    editSnapshot.customFields.map((cf: any, idx: number) => (
                      <div key={idx} className="text-[11px] text-slate-700 mt-0.5">
                        {cf.label}: <strong className="font-mono">{cf.value}</strong>
                      </div>
                    ))}
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">LOST CONSIGNMENT &amp; RECIPIENT DETAILS</div>
                  <div>
                    Tracking Barcode: <strong className="font-mono">{activeInvoice.shipment?.trackingNumber}</strong>
                  </div>
                  <div>
                    Linnworks Order ID: <strong className="font-mono">#{activeInvoice.shipment?.orderId}</strong> ({activeInvoice.shipment?.source})
                  </div>
                  <div>
                    Service: <strong>{activeInvoice.shipment?.postalService}</strong>
                  </div>
                  <div>
                    Dispatch Date: <strong>{activeInvoice.shipment?.processedDate ? new Date(activeInvoice.shipment.processedDate).toISOString().slice(0, 10) : ''}</strong> ({activeInvoice.shipment?.slaForClaims} Business Days Elapsed)
                  </div>
                  <div>
                    Consignee: <strong>{activeInvoice.shipment?.recipientName}</strong>, {activeInvoice.shipment?.recipientAddress},{' '}
                    {activeInvoice.shipment?.recipientCity} {activeInvoice.shipment?.recipientPostcode}
                  </div>
                </div>
              </div>

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-900 text-slate-700 font-bold">
                    <th className="py-2.5">SKU</th>
                    <th className="py-2.5">Description of Lost Merchandise</th>
                    <th className="py-2.5">Qty</th>
                    <th className="py-2.5">Retail Value</th>
                    <th className="py-2.5">Wholesale Cost</th>
                    <th className="py-2.5 text-right">Claimed Amount ({activeInvoice.pricingBasisUsed})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3 font-mono font-bold">{activeInvoice.shipment?.sku}</td>
                    <td className="py-3 font-semibold">{activeInvoice.shipment?.itemTitle}</td>
                    <td className="py-3">{activeInvoice.shipment?.quantity || 1}</td>
                    <td className="py-3 font-mono">£{activeInvoice.shipment?.retailValue?.toFixed(2)}</td>
                    <td className="py-3 font-mono">£{activeInvoice.shipment?.wholesaleCost?.toFixed(2)}</td>
                    <td className="py-3 font-mono font-bold text-right">£{(parseFloat(editMerch) || 0).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="py-3 font-semibold text-slate-700">
                      Outbound Carrier Postage / Freight Charge Refund ({activeInvoice.shipment?.postalService})
                    </td>
                    <td className="py-3 font-mono font-bold text-right">£{(parseFloat(editPostage) || 0).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end pt-3 border-t-2 border-slate-900">
                <div className="w-72 space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Net Merchandise Claim:</span>
                    <span className="font-mono">£{(parseFloat(editMerch) || 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Carriage / Postage Refund:</span>
                    <span className="font-mono">£{(parseFloat(editPostage) || 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-300">
                    <span>TOTAL INDEMNITY CLAIM:</span>
                    <span className="font-mono text-indigo-700">
                      £{((parseFloat(editMerch) || 0) + (parseFloat(editPostage) || 0)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-700 leading-relaxed">
                <div className="font-bold uppercase text-slate-900 mb-1">SIGNED COMMERCIAL LOSS DECLARATION</div>
                <p className="italic">{editSnapshot?.declarationText || activeInvoice.courier?.invoiceDeclarationText}</p>
                <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between font-mono text-[11px]">
                  <span>Authorized Signatory: {workspace?.senderName} ({workspace?.name})</span>
                  <span>Date: {new Date().toISOString().slice(0, 10)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
