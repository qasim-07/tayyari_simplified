"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Lock,
  Mail,
  Search,
  Download,
  TrendingUp,
  FileSpreadsheet,
  LogOut,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { formatResourceDate } from "@/data/resources";

interface Lead {
  email: string;
  source: string;
  resourceSlug?: string;
  resourceTitle?: string;
  capturedAt: string;
}

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedToken = sessionStorage.getItem("admin_passcode");
    if (savedToken) {
      fetchLeads(savedToken);
    }
  }, []);

  const fetchLeads = async (token: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/leads?token=${encodeURIComponent(token)}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setLeads(data.leads);
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_passcode", token);
      } else {
        setError(data.message || "Failed to fetch leads.");
        setIsAuthenticated(false);
        sessionStorage.removeItem("admin_passcode");
      }
    } catch {
      setError("An error occurred. Please try again.");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) return;
    fetchLeads(passcode.trim());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLeads([]);
    setPasscode("");
    sessionStorage.removeItem("admin_passcode");
  };

  // Stats calculation
  const stats = useMemo(() => {
    const total = leads.length;
    const sourcesMap: Record<string, number> = {};
    const resourcesMap: Record<string, number> = {};

    leads.forEach((l) => {
      sourcesMap[l.source] = (sourcesMap[l.source] || 0) + 1;
      if (l.resourceTitle) {
        resourcesMap[l.resourceTitle] = (resourcesMap[l.resourceTitle] || 0) + 1;
      }
    });

    const topSource = Object.entries(sourcesMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
    const topResource = Object.entries(resourcesMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

    return { total, topSource, topResource };
  }, [leads]);

  // Filtering leads list
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchEmail = lead.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchSource = lead.source.toLowerCase().includes(searchQuery.toLowerCase());
      const matchResource = lead.resourceTitle?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
      return matchEmail || matchSource || matchResource;
    });
  }, [leads, searchQuery]);

  // Export to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) return;

    const headers = ["Email", "Source", "Resource Slug", "Resource Title", "Captured At"];
    const rows = leads.map((lead) => [
      lead.email,
      lead.source,
      lead.resourceSlug || "",
      lead.resourceTitle || "",
      lead.capturedAt,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.map((val) => `"${val.replace(/"/g, '""')}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tayyari_leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-gray hover:text-brand-gold transition-brand mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Free Resources
        </Link>

        <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-brand-navy/5 overflow-hidden">
          <div className="bg-[#0a2240] text-white p-6 text-center relative">
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-brand-gold/10 blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 flex items-center justify-center mx-auto mb-3">
              <Lock className="w-5 h-5 text-brand-gold" />
            </div>
            <h1 className="text-[18px] font-black tracking-tight">Admin Dashboard</h1>
            <p className="mt-1.5 text-[12px] text-slate-300 font-medium">
              Enter your password to access leads management.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="admin-passcode" className="sr-only">
                  Passcode
                </label>
                <input
                  id="admin-passcode"
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode"
                  required
                  autoFocus
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-[14px] font-medium text-brand-navy placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-brand"
                />
              </div>

              {error && (
                <p className="text-[12px] font-semibold text-red-600 bg-red-50 px-3 py-2 rounded-lg text-center">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light active:scale-[0.98] text-brand-navy text-[14px] font-extrabold transition-brand shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Authorizing…</span>
                  </>
                ) : (
                  "Unlock Dashboard"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 space-y-8 animate-fadeIn">
        {/* Header Panel */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-brand-gold text-[11px] font-extrabold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Lead Management
            </div>
            <h1 className="text-[22px] font-black text-brand-navy tracking-tight mt-1">
              Admin Leads Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              disabled={leads.length === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-extrabold text-brand-navy bg-brand-gold hover:bg-brand-gold-light active:scale-[0.98] transition-brand shadow-sm hover:shadow"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Export to CSV
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold text-brand-gray bg-slate-100 hover:bg-red-50 hover:text-red-600 transition-brand"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[12px] font-extrabold text-brand-gray/70 uppercase tracking-wider">
                Total Signups
              </p>
              <h2 className="text-[28px] font-black text-brand-navy mt-1">
                {stats.total}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[12px] font-extrabold text-brand-gray/70 uppercase tracking-wider">
                Top Source
              </p>
              <h2 className="text-[18px] font-black text-brand-navy mt-2 truncate max-w-[200px]">
                {stats.topSource}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[12px] font-extrabold text-brand-gray/70 uppercase tracking-wider">
                Top PDF Downloaded
              </p>
              <h2 className="text-[15px] font-black text-brand-navy mt-2 truncate max-w-[200px]" title={stats.topResource}>
                {stats.topResource}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 text-brand-navy flex items-center justify-center">
              <Download className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Data Table and Search */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <h3 className="text-[15px] font-extrabold text-brand-navy">
              Lead Records ({filteredLeads.length})
            </h3>
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search leads..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-[13px] font-medium text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-brand"
              />
            </div>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="text-center py-16 text-brand-gray font-medium">
              No lead records found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[11px] font-extrabold text-brand-gray/80 uppercase tracking-wider">
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Source</th>
                    <th className="px-6 py-4">Resource Title</th>
                    <th className="px-6 py-4">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[13px]">
                  {filteredLeads.map((lead, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-bold text-brand-navy">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wide uppercase bg-slate-100 text-brand-navy/70">
                          {lead.source}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-brand-gray">
                        {lead.resourceTitle || <span className="text-slate-300">—</span>}
                      </td>
                      <td className="px-6 py-4 text-brand-gray/70">
                        {new Date(lead.capturedAt).toLocaleString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
