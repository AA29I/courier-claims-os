'use client';

import React, { useState, useEffect } from 'react';
import {
  Package,
  BarChart3,
  FileSpreadsheet,
  Mail,
  FileCheck2,
  Settings,
  BookOpen,
  RefreshCw,
  LogOut,
  Search,
  Send,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ExternalLink,
  Database,
  Trash2,
  X,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { HelpTip } from '@/components/HelpTip';
import { ManifestAndLinnworksHub } from '@/components/ManifestAndLinnworksHub';
import { InvoiceStudioAndClaims } from '@/components/InvoiceStudioAndClaims';

export default function CourierClaimsOSApp() {
  const [authLoading, setAuthLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [workspace, setWorkspace] = useState<any>(null);
  const [couriers, setCouriers] = useState<any[]>([]);
  const [shipments, setShipments] = useState<any[]>([]);
  const [queries, setQueries] = useState<any[]>([]);
  const [claimInvoices, setClaimInvoices] = useState<any[]>([]);

  // Auth Portal State
  const [authTab, setAuthTab] = useState<'login' | 'signup' | 'google'>('signup');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authCompany, setAuthCompany] = useState('');
  const [authCurrency, setAuthCurrency] = useState('GBP');
  const [authError, setAuthError] = useState('');
  const [authSubmitting, setAuthSubmitting] = useState(false);

  // Navigation & Filters
  const [activeNav, setActiveNav] = useState<'summary' | 'sheet' | 'import' | 'queries' | 'claims' | 'settings'>('summary');
  const [sheetBucket, setSheetBucket] = useState<'ALL' | 'DELIVERED' | 'IN_TRANSIT' | 'OUT_OF_SLA_EXCEPTION' | 'CLAIM_SHEET'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [courierFilter, setCourierFilter] = useState('ALL');
  const [selectedShipment, setSelectedShipment] = useState<any | null>(null);
  const [toast, setToast] = useState<string>('');
  const [busyAction, setBusyAction] = useState(false);

  // Settings Form
  const [settingsForm, setSettingsForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    vatNumber: '',
    companyRegNumber: '',
    currency: 'GBP',
    senderName: '',
    senderEmail: '',
    resendApiKey: '',
    autoQueryOutOfSla: true,
    autoClaimOnCourierLost: true,
  });

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 6000);
  };

  const loadWorkspaceData = async () => {
    try {
      const res = await fetch('/api/workspace');
      if (!res.ok) return;
      const data = await res.json();
      setWorkspace(data.workspace);
      setCouriers(data.couriers || []);
      setShipments(data.shipments || []);
      setQueries(data.queries || []);
      setClaimInvoices(data.claimInvoices || []);
      if (data.workspace) {
        setSettingsForm({
          name: data.workspace.name || '',
          email: data.workspace.email || '',
          phone: data.workspace.phone || '',
          address: data.workspace.address || '',
          city: data.workspace.city || '',
          postcode: data.workspace.postcode || '',
          country: data.workspace.country || 'United Kingdom',
          vatNumber: data.workspace.vatNumber || '',
          companyRegNumber: data.workspace.companyRegNumber || '',
          currency: data.workspace.currency || 'GBP',
          senderName: data.workspace.senderName || '',
          senderEmail: data.workspace.senderEmail || '',
          resendApiKey: data.workspace.resendApiKey || '',
          autoQueryOutOfSla: Boolean(data.workspace.autoQueryOutOfSla),
          autoClaimOnCourierLost: Boolean(data.workspace.autoClaimOnCourierLost),
        });
      }
    } catch {
      // Ignore
    }
  };

  const checkAuth = async () => {
    setAuthLoading(true);
    try {
      const res = await fetch('/api/auth');
      const data = await res.json();
      if (data.authenticated) {
        setAuthenticated(true);
        setUser(data.user);
        setWorkspace(data.workspace);
        await loadWorkspaceData();
      } else {
        setAuthenticated(false);
      }
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthSubmitting(true);
    setAuthError('');
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: authTab,
          email: authEmail,
          password: authPassword,
          name: authName,
          companyName: authCompany,
          currency: authCurrency,
          loadSampleData: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Authentication failed');
      setAuthenticated(true);
      setUser(data.user);
      setWorkspace(data.workspace);
      await loadWorkspaceData();
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout' }),
    });
    setAuthenticated(false);
    setUser(null);
    setWorkspace(null);
  };

  const triggerWorkspaceAction = async (payload: Record<string, any>) => {
    setBusyAction(true);
    try {
      const res = await fetch('/api/workspace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Operation failed');
      showToast(data.message || 'Completed successfully.');
      await loadWorkspaceData();
      return data;
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : 'Error');
    } finally {
      setBusyAction(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-xs font-mono">
        <RefreshCw className="w-4 h-4 animate-spin text-indigo-400 mr-2" />
        Initializing Courier Operations &amp; Claims Recovery Engine...
      </div>
    );
  }

  // ============================================================================
  // CLEAN PRODUCTION AUTH PORTAL (GOOGLE, SIGN UP, SIGN IN)
  // ============================================================================
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6">
        <header className="max-w-7xl w-full mx-auto flex items-center justify-between py-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Courier<span className="text-indigo-400">Claims</span>OS
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-indigo-300 rounded border border-slate-700">
                Linnworks • Live SLA Radar • Per-Courier Claim Invoices
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAuthTab('login')}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setAuthTab('signup')}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm"
            >
              Create Company Account
            </button>
          </div>
        </header>

        <main className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8">
          {/* Left Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/70 text-indigo-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Global Multi-Courier Performance Report, Queries &amp; Claims Automation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Automate Your Complete <span className="text-indigo-400">Courier Performance Report</span>, Queries &amp; Claim Invoices.
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Connect Linnworks or upload any Excel/CSV manifest. Track live courier status across Royal Mail, DPD, Evri, Yodel, ParcelForce, UPS, FedEx, and DHL. Automatically email couriers when parcels breach SLA, capture courier replies, and generate courier-specific Claim Invoices in 1 click.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">20-Column Performance Engine</div>
                  <div className="text-slate-400 mt-0.5">Automatic `WORKDAY.INTL` &amp; `NETWORKDAYS.INTL` SLA &amp; Claim countdown math.</div>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Per-Courier Invoice Format Studio</div>
                  <div className="text-slate-400 mt-0.5">Custom formats for Royal Mail P58 Wholesale, DPD Ex-VAT, Evri £20 Cap, Yodel &amp; UPS.</div>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Linnworks &amp; Custom Excel Mapper</div>
                  <div className="text-slate-400 mt-0.5">Sync Amazon, Shopify, eBay &amp; WooCommerce orders or map any custom spreadsheet.</div>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Automated Courier Queries &amp; Replies</div>
                  <div className="text-slate-400 mt-0.5">Auto-emails couriers when Out of SLA and auto-creates claim invoices when declared lost.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Auth Card */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-5">
            {/* Mode Tabs */}
            <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setAuthTab('google');
                  setAuthError('');
                }}
                className={`py-2 rounded-lg transition-all ${
                  authTab === 'google' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Google Sign-In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthTab('signup');
                  setAuthError('');
                }}
                className={`py-2 rounded-lg transition-all ${
                  authTab === 'signup' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthTab('login');
                  setAuthError('');
                }}
                className={`py-2 rounded-lg transition-all ${
                  authTab === 'login' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Email Sign-In
              </button>
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authTab === 'google' && (
                <>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">Continue with Google Workspace</div>
                      <div className="text-slate-500">Instant sign-in or new workspace creation</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Google Email *</label>
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="you@gmail.com or you@company.com"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        value={authName}
                        onChange={(e) => setAuthName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        value={authCompany}
                        onChange={(e) => setAuthCompany(e.target.value)}
                        placeholder="Your Company Ltd"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>
                </>
              )}

              {authTab === 'signup' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={authCompany}
                        onChange={(e) => setAuthCompany(e.target.value)}
                        placeholder="e.g. Global Sports UK"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={authName}
                        onChange={(e) => setAuthName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Password *</label>
                      <input
                        type="password"
                        required
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Currency</label>
                      <select
                        value={authCurrency}
                        onChange={(e) => setAuthCurrency(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white font-semibold"
                      >
                        <option value="GBP">GBP (£)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {authTab === 'login' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Password *</label>
                    <input
                      type="password"
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={authSubmitting}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>
                  {authSubmitting
                    ? 'Launching Workspace...'
                    : authTab === 'google'
                    ? 'Continue with Google Account'
                    : authTab === 'signup'
                    ? 'Create Company Workspace & Launch'
                    : 'Sign In to Workspace'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Pre-configured with 10 Couriers &amp; Test Database
              </span>
            </div>
          </div>
        </main>

        <footer className="max-w-7xl w-full mx-auto text-center text-xs text-slate-500 py-3 border-t border-slate-900">
          © {new Date().getFullYear()} CourierClaimsOS • Multi-Carrier Performance, Queries &amp; Claim Recovery Platform
        </footer>
      </div>
    );
  }

  // ============================================================================
  // COMPUTED SUMMARY METRICS FOR LOGGED-IN WORKSPACE
  // ============================================================================
  const totalOrders = shipments.length;
  const deliveredList = shipments.filter((s) => s.reportTab === 'DELIVERED');
  const inTransitList = shipments.filter((s) => s.reportTab === 'IN_TRANSIT');
  const exceptionList = shipments.filter((s) => s.reportTab === 'OUT_OF_SLA_EXCEPTION');
  const claimSheetList = shipments.filter((s) => s.reportTab === 'CLAIM_SHEET');

  const withinSlaCount = shipments.filter((s) => s.slaStatus === 'Within Transit Time').length;
  const oneDayLateCount = shipments.filter((s) => s.slaStatus === '1 Day Late').length;
  const twoDaysLateCount = shipments.filter((s) => s.slaStatus === '2 Days Late').length;
  const threeDaysLateCount = shipments.filter((s) => s.slaStatus === '3 Days Late').length;
  const moreThanThreeLateCount = shipments.filter((s) => s.slaStatus === 'More Than 3 Days Late').length;

  const totalClaimedValue = claimInvoices.reduce((acc, c) => acc + (c.totalClaimAmount || 0), 0);
  const totalSettledValue = claimInvoices
    .filter((c) => c.status === 'PAID_SETTLED')
    .reduce((acc, c) => acc + (c.approvedAmount || c.totalClaimAmount || 0), 0);

  // Carrier League Table Aggregation
  const carrierStats = couriers.map((c) => {
    const cShipments = shipments.filter((s) => s.courierId === c.id || s.courierName === c.name);
    const total = cShipments.length;
    const onTime = cShipments.filter((s) => s.slaStatus === 'Within Transit Time').length;
    const late = total - onTime;
    const claimable = cShipments.filter((s) => s.reportTab === 'CLAIM_SHEET').length;
    return {
      ...c,
      total,
      onTime,
      late,
      claimable,
      onTimePct: total > 0 ? Math.round((onTime / total) * 100) : 100,
    };
  });

  // Filtered Shipments for Tab 2 (20-Column Performance Sheet)
  const filteredShipments = shipments.filter((s) => {
    if (sheetBucket !== 'ALL' && s.reportTab !== sheetBucket) return false;
    if (courierFilter !== 'ALL' && s.courierName !== courierFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        s.trackingNumber.toLowerCase().includes(q) ||
        s.orderId.toLowerCase().includes(q) ||
        s.recipientName.toLowerCase().includes(q) ||
        s.postalService.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.source.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const customColumnKeys: string[] = (() => {
    try {
      return JSON.parse(workspace?.customColumnsJson || '[]');
    } catch {
      return [];
    }
  })();

  return (
    <div className="min-h-screen flex bg-slate-100 text-slate-900">
      {/* Left Sidebar Navigation */}
      <aside className="w-64 bg-slate-950 text-slate-200 flex flex-col shrink-0 no-print">
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-white tracking-tight">
                Courier<span className="text-indigo-400">Claims</span>OS
              </div>
              <div className="text-[10px] text-slate-400 font-mono truncate max-w-[160px]">
                {workspace?.name}
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <button
            type="button"
            onClick={() => setActiveNav('summary')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'summary' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <BarChart3 className="w-4 h-4" />
              <span>1. Summary &amp; League Table</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveNav('sheet')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'sheet' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Package className="w-4 h-4" />
              <span>2. Performance Sheet (20-Col)</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 text-[10px] font-mono">
              {totalOrders}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveNav('import')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'import' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <FileSpreadsheet className="w-4 h-4" />
              <span>3. Linnworks &amp; Excel Import</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveNav('queries')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'queries' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <Mail className="w-4 h-4" />
              <span>4. Courier Queries &amp; Replies</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono">
              {queries.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveNav('claims')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'claims' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <FileCheck2 className="w-4 h-4" />
              <span>5. Claims &amp; Invoice Studio</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
              {claimInvoices.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveNav('settings')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeNav === 'settings' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4" />
              <span>6. Settings &amp; How-To Guide</span>
            </span>
          </button>
        </nav>

        {/* Quick Test Database Loader in Sidebar */}
        <div className="p-3 m-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
            Test Database Controls
          </div>
          <button
            type="button"
            disabled={busyAction}
            onClick={() => triggerWorkspaceAction({ action: 'seed_test_data' })}
            className="w-full py-1.5 px-2.5 rounded bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-200 text-[11px] font-semibold flex items-center justify-center gap-1.5"
          >
            <Database className="w-3.5 h-3.5" />
            <span>Load 12 Sample Orders</span>
          </button>
          <button
            type="button"
            disabled={busyAction}
            onClick={() => triggerWorkspaceAction({ action: 'clear_all_shipments' })}
            className="w-full py-1.5 px-2.5 rounded bg-slate-800 hover:bg-red-950/60 text-slate-400 hover:text-red-300 text-[11px] font-semibold flex items-center justify-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All Orders</span>
          </button>
        </div>

        <div className="p-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <div className="truncate">
            <div className="font-bold text-white truncate">{user?.name}</div>
            <div className="text-[10px] text-slate-400 truncate">{user?.email}</div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            title="Sign Out"
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 no-print">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold text-slate-900">{workspace?.name}</span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
              Auto-Query Out of SLA: {workspace?.autoQueryOutOfSla ? 'ON' : 'OFF'}
            </span>
            <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-bold">
              Auto-Claim on Lost Reply: {workspace?.autoClaimOnCourierLost ? 'ON' : 'OFF'}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              disabled={busyAction}
              onClick={() => triggerWorkspaceAction({ action: 'sync_linnworks' })}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${busyAction ? 'animate-spin' : ''}`} />
              <span>Pull Linnworks Orders</span>
            </button>
            <button
              type="button"
              disabled={busyAction}
              onClick={() => triggerWorkspaceAction({ action: 'refresh_tracking' })}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${busyAction ? 'animate-spin' : ''}`} />
              <span>Refresh Live Tracking</span>
            </button>
          </div>
        </header>

        {/* Toast Banner */}
        {toast && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center justify-between shadow-lg no-print">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{toast}</span>
            </div>
            <button type="button" onClick={() => setToast('')} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          {/* ================================================================
              TAB 1: EXECUTIVE SUMMARY & COURIER PERFORMANCE LEAGUE TABLE
             ================================================================ */}
          {activeNav === 'summary' && (
            <div className="space-y-6">
              {/* Top 5 Operational Bucket Cards (Clickable to jump straight into that tab!) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div
                  onClick={() => {
                    setSheetBucket('ALL');
                    setActiveNav('sheet');
                  }}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-indigo-500 transition-all"
                >
                  <div className="text-[11px] font-bold uppercase text-slate-500 flex items-center justify-between">
                    <span>Total Linnworks Orders</span>
                    <HelpTip text="Total processed dispatches tracked across all sales channels (Amazon, Shopify, eBay, WooCommerce)." />
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">{totalOrders}</div>
                  <div className="text-[11px] text-indigo-600 font-semibold mt-1">Click to view all 20 columns →</div>
                </div>

                <div
                  onClick={() => {
                    setSheetBucket('DELIVERED');
                    setActiveNav('sheet');
                  }}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-emerald-500 transition-all"
                >
                  <div className="text-[11px] font-bold uppercase text-emerald-700 flex items-center justify-between">
                    <span>Delivered Parcels</span>
                    <HelpTip text="Parcels confirmed delivered with POD scan. Includes late deliveries eligible for service guarantee credits." />
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-700 mt-1">{deliveredList.length}</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {withinSlaCount} Within SLA Transit Time
                  </div>
                </div>

                <div
                  onClick={() => {
                    setSheetBucket('IN_TRANSIT');
                    setActiveNav('sheet');
                  }}
                  className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm cursor-pointer hover:border-blue-500 transition-all"
                >
                  <div className="text-[11px] font-bold uppercase text-blue-700 flex items-center justify-between">
                    <span>Active In-Transit</span>
                    <HelpTip text="Parcels moving through the courier network within their contracted SLA deadline." />
                  </div>
                  <div className="text-2xl font-extrabold text-blue-700 mt-1">{inTransitList.length}</div>
                  <div className="text-[11px] text-slate-500 mt-1">Moving on schedule</div>
                </div>

                <div
                  onClick={() => {
                    setSheetBucket('OUT_OF_SLA_EXCEPTION');
                    setActiveNav('sheet');
                  }}
                  className="bg-white rounded-xl border border-amber-200 p-4 shadow-sm cursor-pointer hover:border-amber-500 transition-all"
                >
                  <div className="text-[11px] font-bold uppercase text-amber-700 flex items-center justify-between">
                    <span>Out of SLA / Exceptions</span>
                    <HelpTip text="Parcels that are 1, 2, 3, or >3 Days Late or stalled at a hub. Automatically triggers courier inquiry emails." />
                  </div>
                  <div className="text-2xl font-extrabold text-amber-700 mt-1">{exceptionList.length}</div>
                  <div className="text-[11px] text-amber-700 font-semibold mt-1">
                    {queries.length} Courier Queries Active →
                  </div>
                </div>

                <div
                  onClick={() => {
                    setSheetBucket('CLAIM_SHEET');
                    setActiveNav('sheet');
                  }}
                  className="bg-white rounded-xl border border-red-200 p-4 shadow-sm cursor-pointer hover:border-red-500 transition-all"
                >
                  <div className="text-[11px] font-bold uppercase text-red-700 flex items-center justify-between">
                    <span>Claim Sheet (Lost)</span>
                    <HelpTip text="Parcels that passed the courier's statutory loss days (Column S: SLA For Claims) or were confirmed lost by the courier." />
                  </div>
                  <div className="text-2xl font-extrabold text-red-700 mt-1">{claimSheetList.length}</div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-1">
                    £{totalClaimedValue.toFixed(2)} Claimed (£{totalSettledValue.toFixed(2)} Paid)
                  </div>
                </div>
              </div>

              {/* SLA Late Breakdown Bar (Matches Exact Excel Formula Status Categories) */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-slate-900">
                    Automated SLA Transit Time Classification (Column K Formula Breakdown)
                    <HelpTip text='Computed automatically using =IF(R<=-5,"More Than 3 Days Late", IF(R=-4,"3 Days Late", IF(R=-3,"2 Days Late", IF(R<=-1,"1 Day Late","Within Transit Time"))))' />
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                    <div className="text-emerald-800 font-bold">Within Transit Time</div>
                    <div className="text-xl font-extrabold text-emerald-900 mt-1">{withinSlaCount}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="text-amber-800 font-bold">1 Day Late</div>
                    <div className="text-xl font-extrabold text-amber-900 mt-1">{oneDayLateCount}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                    <div className="text-orange-800 font-bold">2 Days Late</div>
                    <div className="text-xl font-extrabold text-orange-900 mt-1">{twoDaysLateCount}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                    <div className="text-red-800 font-bold">3 Days Late</div>
                    <div className="text-xl font-extrabold text-red-900 mt-1">{threeDaysLateCount}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-100 border border-rose-300">
                    <div className="text-rose-900 font-bold">More Than 3 Days Late</div>
                    <div className="text-xl font-extrabold text-rose-950 mt-1">{moreThanThreeLateCount}</div>
                  </div>
                </div>
              </div>

              {/* Courier Performance League Table */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Courier Performance League Table &amp; Linked Invoice Format Rules
                    </h3>
                    <p className="text-xs text-slate-500">
                      Live SLA performance across all onboarded couriers. Click &ldquo;Customize Invoice Format&rdquo; to edit any courier&rsquo;s claim template.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveNav('claims')}
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold"
                  >
                    Open Courier Invoice Studio →
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                        <th className="p-3">Courier Name</th>
                        <th className="p-3">Total Parcels</th>
                        <th className="p-3">Within SLA</th>
                        <th className="p-3">Late / Breached</th>
                        <th className="p-3">Claim Sheet (Lost)</th>
                        <th className="p-3">On-Time SLA %</th>
                        <th className="p-3">Linked Claim Invoice Format</th>
                        <th className="p-3">Pricing Basis &amp; Cap</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {carrierStats.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">{c.name}</td>
                          <td className="p-3 font-mono font-bold">{c.total}</td>
                          <td className="p-3 font-mono text-emerald-700 font-semibold">{c.onTime}</td>
                          <td className="p-3 font-mono text-amber-700 font-semibold">{c.late}</td>
                          <td className="p-3 font-mono text-red-700 font-bold">{c.claimable}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded font-mono text-[11px] font-bold ${
                                c.onTimePct >= 80
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : c.onTimePct >= 50
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {c.onTimePct}%
                            </span>
                          </td>
                          <td className="p-3 text-slate-700 font-medium">{c.invoiceFormatName}</td>
                          <td className="p-3 font-mono text-[11px] text-slate-600">
                            {c.pricingBasis} {c.maxLiabilityCap ? `(Cap £${c.maxLiabilityCap})` : ''}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 2: 20-COLUMN COURIER PERFORMANCE REPORT & LIVE TRACKING
             ================================================================ */}
          {activeNav === 'sheet' && (
            <div className="space-y-4">
              {/* 5 Operational Sub-Tabs */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'ALL', label: `All Orders (${totalOrders})` },
                    { id: 'DELIVERED', label: `Delivered (${deliveredList.length})` },
                    { id: 'IN_TRANSIT', label: `In-Transit (${inTransitList.length})` },
                    { id: 'OUT_OF_SLA_EXCEPTION', label: `Out of SLA / Exceptions (${exceptionList.length})` },
                    { id: 'CLAIM_SHEET', label: `Claim Sheet (${claimSheetList.length})` },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSheetBucket(tab.id as any)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                        sheetBucket === tab.id
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Tracking #, Order ID, Customer..."
                      className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 w-64"
                    />
                  </div>
                  <select
                    value={courierFilter}
                    onChange={(e) => setCourierFilter(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white font-semibold"
                  >
                    <option value="ALL">All Couriers</option>
                    {couriers.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 20-Column Master Table */}
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">
                    Click any blue <span className="text-indigo-600 underline">Tracking Number</span> to view Live Tracking History, Send Courier Query, or Generate Claim Invoice.
                  </span>
                  <span className="text-slate-500 font-mono">Showing {filteredShipments.length} rows</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[11px] whitespace-nowrap">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                        <th className="p-2.5">A: OrderId</th>
                        <th className="p-2.5">B: Order Date</th>
                        <th className="p-2.5">C: Processed</th>
                        <th className="p-2.5">D: Day</th>
                        <th className="p-2.5">E: Country</th>
                        <th className="p-2.5">F: Source</th>
                        <th className="p-2.5">G: ReferenceNum</th>
                        <th className="p-2.5">H: Postal Service</th>
                        <th className="p-2.5">I: Tracking Number (Click for Live Status)</th>
                        <th className="p-2.5">J: Latest Update</th>
                        <th className="p-2.5">K: Status (SLA Formula)</th>
                        <th className="p-2.5">L: Scan Date</th>
                        <th className="p-2.5">M: Scan Day</th>
                        <th className="p-2.5">N: SLA</th>
                        <th className="p-2.5">O: Est. Delivery Date</th>
                        <th className="p-2.5">P: EDD Day</th>
                        <th className="p-2.5">
                          R: Formula Days Count
                          <HelpTip text="NETWORKDAYS variance vs Estimated Delivery Date. Negative numbers indicate business days overdue." />
                        </th>
                        <th className="p-2.5">
                          S: SLA For Claims
                          <HelpTip text="Elapsed business days since dispatch. Triggers Claim Sheet eligibility once it reaches the courier's loss threshold." />
                        </th>
                        <th className="p-2.5">T: Courier Name</th>
                        {customColumnKeys.map((ck) => (
                          <th key={ck} className="p-2.5 bg-indigo-50/50 text-indigo-900">
                            Custom: {ck}
                          </th>
                        ))}
                        <th className="p-2.5 text-right">Quick Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredShipments.map((s) => {
                        const customVals = (() => {
                          try {
                            return JSON.parse(s.customFieldsJson || '{}');
                          } catch {
                            return {};
                          }
                        })();
                        return (
                          <tr key={s.id} className="hover:bg-indigo-50/30 transition-colors">
                            <td className="p-2.5 font-mono font-bold text-slate-900">{s.orderId}</td>
                            <td className="p-2.5 font-mono text-slate-600">{new Date(s.orderDate).toISOString().slice(0, 10)}</td>
                            <td className="p-2.5 font-mono text-slate-900">{new Date(s.processedDate).toISOString().slice(0, 10)}</td>
                            <td className="p-2.5 text-slate-600">{s.processedDay}</td>
                            <td className="p-2.5 font-semibold">{s.country}</td>
                            <td className="p-2.5">
                              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-[10px] font-bold">
                                {s.source}
                              </span>
                            </td>
                            <td className="p-2.5 font-mono text-slate-600">{s.referenceNum}</td>
                            <td className="p-2.5 text-slate-800">{s.postalService}</td>
                            <td className="p-2.5">
                              <button
                                type="button"
                                onClick={() => setSelectedShipment(s)}
                                className="font-mono font-bold text-indigo-600 hover:text-indigo-800 underline flex items-center gap-1"
                              >
                                <span>{s.trackingNumber}</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
                            </td>
                            <td className="p-2.5 max-w-xs truncate text-slate-700" title={s.latestUpdate}>
                              {s.latestUpdate}
                            </td>
                            <td className="p-2.5">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  s.slaStatus === 'Within Transit Time'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : s.slaStatus === '1 Day Late'
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {s.slaStatus}
                              </span>
                            </td>
                            <td className="p-2.5 font-mono text-slate-600">{new Date(s.lastScanDate).toISOString().slice(0, 10)}</td>
                            <td className="p-2.5 text-slate-600">{s.lastScanDay}</td>
                            <td className="p-2.5 font-mono font-bold text-center">{s.slaDays}</td>
                            <td className="p-2.5 font-mono text-slate-700">
                              {new Date(s.estimatedDeliveryDate).toISOString().slice(0, 10)}
                            </td>
                            <td className="p-2.5 text-slate-600">{s.estimatedDeliveryDay}</td>
                            <td
                              className={`p-2.5 font-mono font-bold text-center ${
                                s.formulaDaysCount < 0 ? 'text-red-600' : 'text-emerald-700'
                              }`}
                            >
                              {s.formulaDaysCount}
                            </td>
                            <td
                              className={`p-2.5 font-mono font-bold text-center ${
                                s.slaForClaims >= (s.courier?.claimLossThresholdDays || 7)
                                  ? 'text-red-700 bg-red-50'
                                  : 'text-slate-700'
                              }`}
                            >
                              {s.slaForClaims}d
                            </td>
                            <td className="p-2.5 font-bold text-slate-900">{s.courierName}</td>
                            {customColumnKeys.map((ck) => (
                              <td key={ck} className="p-2.5 font-mono text-slate-700 bg-indigo-50/20">
                                {customVals[ck] || '-'}
                              </td>
                            ))}
                            <td className="p-2.5 text-right">
                              <button
                                type="button"
                                onClick={() => setSelectedShipment(s)}
                                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-indigo-600 text-white text-[10px] font-bold"
                              >
                                Manage / Track
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

          {/* ================================================================
              TAB 3: LINNWORKS & EXCEL IMPORTER / CUSTOM COLUMN MAPPER
             ================================================================ */}
          {activeNav === 'import' && (
            <ManifestAndLinnworksHub
              workspace={workspace}
              shipments={shipments}
              onCompleted={loadWorkspaceData}
              setToast={showToast}
            />
          )}

          {/* ================================================================
              TAB 4: AUTOMATIC COURIER QUERIES & COURIER REPLY SYSTEM
             ================================================================ */}
          {activeNav === 'queries' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Automatic Out-of-SLA Courier Queries &amp; Reply Parser
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    When a parcel breaches SLA, an inquiry email is dispatched to the courier. Log or simulate the courier&rsquo;s reply below—if the courier confirms the parcel is lost, the system automatically generates and emails the courier-specific Claim Invoice!
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {queries.map((q) => (
                  <div key={q.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-mono text-xs font-bold">
                          {q.queryReference}
                        </span>
                        <span className="font-bold text-sm text-slate-900">{q.courier?.name}</span>
                        <span className="text-xs text-slate-500 font-mono">To: {q.recipientEmail}</span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          q.status === 'COURIER_DECLARED_LOST'
                            ? 'bg-red-100 text-red-800'
                            : q.status === 'COURIER_REPLIED_DELIVERING'
                            ? 'bg-emerald-100 text-emerald-800'
                            : q.status === 'COURIER_REPLIED_ADDRESS_ISSUE'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {q.status.replace(/_/g, ' ')}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                        <div className="text-[10px] font-bold uppercase text-slate-400">
                          OUTBOUND INQUIRY EMAIL SENT ({new Date(q.createdAt).toLocaleString()})
                        </div>
                        <div className="font-bold text-slate-900">{q.subject}</div>
                        <pre className="text-[11px] text-slate-600 whitespace-pre-wrap font-sans leading-relaxed">
                          {q.emailBodySent}
                        </pre>
                      </div>

                      <div className="p-3.5 rounded-lg bg-indigo-50/40 border border-indigo-200 space-y-3 flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] font-bold uppercase text-indigo-700 mb-1">
                            COURIER REPLY &amp; AUTOMATED ACTION
                          </div>
                          {q.courierReplyText ? (
                            <div className="p-3 rounded bg-white border border-indigo-200 text-slate-800 font-medium">
                              &ldquo;{q.courierReplyText}&rdquo;
                            </div>
                          ) : (
                            <div className="text-slate-500 italic">
                              Awaiting reply from {q.courier?.name} ({q.recipientEmail})...
                            </div>
                          )}
                        </div>

                        <div className="space-y-1.5 pt-2 border-t border-indigo-100">
                          <div className="text-[11px] font-bold text-slate-700">
                            Record / Test Courier Reply Outcome:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              disabled={busyAction}
                              onClick={() =>
                                triggerWorkspaceAction({
                                  action: 'record_courier_reply',
                                  queryId: q.id,
                                  shipmentId: q.shipmentId,
                                  replyType: 'DELIVERING_IN_2_DAYS',
                                  replyText: `${q.courier?.name} Support: Parcel located at regional depot and scheduled for delivery within 2 working days.`,
                                })
                              }
                              className="px-2.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold"
                            >
                              Reply: &ldquo;Will Deliver in 2 Days&rdquo;
                            </button>
                            <button
                              type="button"
                              disabled={busyAction}
                              onClick={() =>
                                triggerWorkspaceAction({
                                  action: 'record_courier_reply',
                                  queryId: q.id,
                                  shipmentId: q.shipmentId,
                                  replyType: 'ADDRESS_OR_CUSTOMS_EXCEPTION',
                                  replyText: `${q.courier?.name} Exception Desk: Address / access issue reported by driver; awaiting consignee confirmation.`,
                                })
                              }
                              className="px-2.5 py-1.5 rounded bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold"
                            >
                              Reply: &ldquo;Address / Customs Exception&rdquo;
                            </button>
                            <button
                              type="button"
                              disabled={busyAction}
                              onClick={() =>
                                triggerWorkspaceAction({
                                  action: 'record_courier_reply',
                                  queryId: q.id,
                                  shipmentId: q.shipmentId,
                                  replyType: 'DECLARED_LOST_SEND_INVOICE',
                                  replyText: `${q.courier?.name} Claims Desk: Depot search exhausted. Parcel is officially declared LOST. Please submit your commercial claim invoice.`,
                                })
                              }
                              className="px-2.5 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold"
                            >
                              Reply: &ldquo;Confirmed Lost → Auto-Create &amp; Send Claim Invoice&rdquo;
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================
              TAB 5: CLAIMS & PER-COURIER INVOICE FORMAT STUDIO
             ================================================================ */}
          {activeNav === 'claims' && (
            <InvoiceStudioAndClaims
              workspace={workspace}
              couriers={couriers}
              claimInvoices={claimInvoices}
              shipments={shipments}
              onRefresh={loadWorkspaceData}
              setToast={showToast}
            />
          )}

          {/* ================================================================
              TAB 6: SETTINGS & STEP-BY-STEP DOCUMENTATION GUIDE
             ================================================================ */}
          {activeNav === 'settings' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Company, Email & Automation Settings */}
              <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 space-y-5 shadow-sm">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
                  Company Letterhead, Email Integration &amp; Automation Settings
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Company Legal Name</label>
                    <input
                      type="text"
                      value={settingsForm.name}
                      onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">VAT Number (Printed on Invoices)</label>
                    <input
                      type="text"
                      value={settingsForm.vatNumber}
                      onChange={(e) => setSettingsForm({ ...settingsForm, vatNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Company Reg Number</label>
                    <input
                      type="text"
                      value={settingsForm.companyRegNumber}
                      onChange={(e) => setSettingsForm({ ...settingsForm, companyRegNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Default Currency</label>
                    <select
                      value={settingsForm.currency}
                      onChange={(e) => setSettingsForm({ ...settingsForm, currency: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300 bg-white font-bold"
                    >
                      <option value="GBP">GBP (£)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-bold text-slate-700 mb-1">Warehouse / Registered Street Address</label>
                    <input
                      type="text"
                      value={settingsForm.address}
                      onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">City</label>
                    <input
                      type="text"
                      value={settingsForm.city}
                      onChange={(e) => setSettingsForm({ ...settingsForm, city: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Postcode</label>
                    <input
                      type="text"
                      value={settingsForm.postcode}
                      onChange={(e) => setSettingsForm({ ...settingsForm, postcode: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300 font-mono"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-3 text-xs">
                  <h3 className="font-bold text-slate-900">Outbound Email &amp; Automation Switches</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Sender Display Name</label>
                      <input
                        type="text"
                        value={settingsForm.senderName}
                        onChange={(e) => setSettingsForm({ ...settingsForm, senderName: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Reply-To Claims Email</label>
                      <input
                        type="email"
                        value={settingsForm.senderEmail}
                        onChange={(e) => setSettingsForm({ ...settingsForm, senderEmail: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-slate-300"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">
                        Resend API Key (Optional — Enables Live External Email Delivery)
                        <HelpTip text="Paste a Resend.com API key (re_...) to send real emails directly to courier inboxes. Without a key, all emails are logged and simulated inside the platform." />
                      </label>
                      <input
                        type="password"
                        value={settingsForm.resendApiKey}
                        onChange={(e) => setSettingsForm({ ...settingsForm, resendApiKey: e.target.value })}
                        placeholder="re_••••••••••••••••••••••••"
                        className="w-full px-3 py-2 rounded border border-slate-300 font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settingsForm.autoQueryOutOfSla}
                        onChange={(e) => setSettingsForm({ ...settingsForm, autoQueryOutOfSla: e.target.checked })}
                        className="w-4 h-4 rounded text-indigo-600"
                      />
                      <span className="font-semibold text-slate-800">
                        Automatically email courier query desk when a parcel becomes Out of SLA
                      </span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settingsForm.autoClaimOnCourierLost}
                        onChange={(e) => setSettingsForm({ ...settingsForm, autoClaimOnCourierLost: e.target.checked })}
                        className="w-4 h-4 rounded text-indigo-600"
                      />
                      <span className="font-semibold text-slate-800">
                        Automatically generate &amp; send Courier-Specific Claim Invoice when courier confirms parcel Lost
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={busyAction}
                  onClick={() =>
                    triggerWorkspaceAction({
                      action: 'save_workspace_settings',
                      ...settingsForm,
                    })
                  }
                  className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm"
                >
                  Save Workspace &amp; Automation Settings
                </button>
              </div>

              {/* Right: Complete Plain-English Documentation & Operations Guide */}
              <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm text-xs leading-relaxed">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
                  Complete Platform Documentation &amp; Operations Playbook
                </h2>

                <div className="space-y-3 text-slate-700">
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">
                      Step 1: Importing Linnworks Orders or Your Courier Performance Excel Sheet
                    </div>
                    <p>
                      Go to <strong>Tab 3 (Linnworks &amp; Excel Import)</strong>. You can either connect your <strong>Linnworks Application ID, Secret &amp; Token</strong> to pull daily processed orders automatically from Amazon, Shopify, eBay, and WooCommerce, or upload any <code>.xlsx</code> / <code>.csv</code> file. You can customize any column mapping, and any extra columns in your Excel file are automatically saved as Custom Columns.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">
                      Step 2: Live 20-Column Courier Performance Report &amp; Real-Time Tracking
                    </div>
                    <p>
                      Go to <strong>Tab 2 (Performance Sheet)</strong>. The system automatically computes all 20 columns of your Courier Performance Report, including <strong>Estimated Delivery Date</strong> (business days skipping weekends), <strong>Formula Days Count</strong>, <strong>SLA For Claims</strong>, and <strong>Status</strong> (<em>Within Transit Time</em>, <em>1 Day Late</em>, <em>2 Days Late</em>, <em>3 Days Late</em>, <em>More Than 3 Days Late</em>). Click any blue <strong>Tracking Number</strong> to inspect live scan checkpoints and refresh tracking.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">
                      Step 3: Automated Out-of-SLA Courier Queries &amp; Courier Replies
                    </div>
                    <p>
                      When a parcel is Out of SLA, the system automatically sends an inquiry email to that courier&rsquo;s query desk (or you can click <strong>Send Query</strong> manually). In <strong>Tab 4 (Courier Queries &amp; Replies)</strong>, when the courier replies that the parcel is lost, clicking <strong>Confirmed Lost</strong> automatically moves the parcel to the <strong>Claim Sheet</strong> and generates the Claim Invoice in that courier&rsquo;s exact format.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-900 mb-1">
                      Step 4: Per-Courier Custom Invoice Format Studio &amp; Printable PDFs
                    </div>
                    <p>
                      Go to <strong>Tab 5 (Claims &amp; Invoice Studio)</strong> and switch to <strong>Per-Courier Invoice Format Studio</strong>. Every courier has its own customizable format (e.g., <em>Royal Mail P58 Wholesale Cost Ex-VAT</em>, <em>DPD UK Retail Ex-VAT</em>, <em>Evri £20 Indemnity Cap</em>, <em>Yodel £50 Cap</em>), or click <strong>+ Onboard New Courier</strong> to add any courier in the world. Click <strong>Edit / Print Invoice PDF</strong> on any claim to tweak fields or save as a formal PDF.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ====================================================================
          LIVE TRACKING & ORDER ACTION DRAWER (WHEN CLICKING ANY TRACKING #)
         ==================================================================== */}
      {selectedShipment && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex justify-end no-print">
          <div className="bg-white w-full max-w-xl h-full shadow-2xl border-l border-slate-200 p-6 overflow-y-auto flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-extrabold font-mono text-indigo-700">
                      {selectedShipment.trackingNumber}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-900 text-white">
                      {selectedShipment.courierName}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Linnworks Order <strong>#{selectedShipment.orderId}</strong> • Channel:{' '}
                    <strong>{selectedShipment.source}</strong> • Ref: {selectedShipment.referenceNum}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedShipment(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Real-Time Status & SLA Math Card */}
              <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold">
                    REAL-TIME TRACKING &amp; SLA TELEMETRY
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-200 font-bold text-[11px]">
                    {selectedShipment.slaStatus}
                  </span>
                </div>
                <div className="text-sm font-bold text-white">{selectedShipment.latestUpdate}</div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[11px]">
                  <div>
                    <div className="text-slate-400">Dispatched</div>
                    <div className="font-mono font-bold">
                      {new Date(selectedShipment.processedDate).toISOString().slice(0, 10)} ({selectedShipment.processedDay})
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400">Last Tracking Scan</div>
                    <div className="font-mono font-bold">
                      {new Date(selectedShipment.lastScanDate).toISOString().slice(0, 10)} ({selectedShipment.lastScanDay})
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400">SLA For Claims</div>
                    <div className="font-mono font-bold text-amber-400">
                      {selectedShipment.slaForClaims} Business Days
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  disabled={busyAction}
                  onClick={async () => {
                    await triggerWorkspaceAction({
                      action: 'refresh_tracking',
                      shipmentId: selectedShipment.id,
                    });
                    setSelectedShipment(null);
                  }}
                  className="py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refresh Tracking</span>
                </button>

                <button
                  type="button"
                  disabled={busyAction}
                  onClick={async () => {
                    await triggerWorkspaceAction({
                      action: 'send_query',
                      shipmentId: selectedShipment.id,
                    });
                    setSelectedShipment(null);
                    setActiveNav('queries');
                  }}
                  className="py-2.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Courier Query</span>
                </button>

                <button
                  type="button"
                  disabled={busyAction}
                  onClick={async () => {
                    await triggerWorkspaceAction({
                      action: 'generate_claim_invoice',
                      shipmentId: selectedShipment.id,
                    });
                    setSelectedShipment(null);
                    setActiveNav('claims');
                  }}
                  className="py-2.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Create Claim Invoice</span>
                </button>
              </div>

              {/* Consignee & Commercial Value Breakdown */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">CONSIGNEE / RECIPIENT</div>
                  <div className="font-bold text-slate-900">{selectedShipment.recipientName}</div>
                  <div className="text-slate-600">{selectedShipment.recipientAddress}</div>
                  <div className="text-slate-600">
                    {selectedShipment.recipientCity}, {selectedShipment.recipientPostcode}, {selectedShipment.country}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">ORDER VALUATION (FOR CLAIM)</div>
                  <div className="font-bold text-slate-900">
                    {selectedShipment.sku} • {selectedShipment.itemTitle}
                  </div>
                  <div className="text-slate-600 mt-0.5">
                    Retail: <strong className="font-mono">£{selectedShipment.retailValue?.toFixed(2)}</strong> • Wholesale:{' '}
                    <strong className="font-mono">£{selectedShipment.wholesaleCost?.toFixed(2)}</strong>
                  </div>
                  <div className="text-slate-600">
                    Postage Paid: <strong className="font-mono">£{selectedShipment.postageCost?.toFixed(2)}</strong>
                  </div>
                </div>
              </div>

              {/* Checkpoint Timeline */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900">Live Carrier Checkpoint Scan Timeline</div>
                <div className="space-y-2.5 border-l-2 border-indigo-200 pl-4 ml-2">
                  {(() => {
                    try {
                      return JSON.parse(selectedShipment.trackingHistoryJson || '[]');
                    } catch {
                      return [];
                    }
                  })().map((ev: any, i: number) => (
                    <div key={i} className="text-xs">
                      <div className="font-bold text-slate-900">{ev.status}</div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {new Date(ev.timestamp).toLocaleString()} • {ev.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedShipment(null)}
                className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
