"use client";

import React, { useEffect, useState } from "react";
import { X, Download, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/lib/leads";

interface LeadGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
  resourceTitle?: string;
  resourceSlug?: string;
  source?: string;
}

export default function LeadGateModal({
  isOpen,
  onClose,
  onSuccess,
  resourceTitle,
  resourceSlug,
  source = "download_gate",
}: LeadGateModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setError("");
      setSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await submitLead({
        email,
        source,
        resourceSlug,
        resourceTitle,
      });
      setSuccess(true);
      setTimeout(() => {
        onSuccess(email);
        onClose();
      }, 900);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-gate-title"
    >
      <div
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-brand-navy/20 border border-slate-200/80 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-brand-gray hover:text-brand-navy hover:bg-slate-100 transition-brand z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-[#0a2240] px-6 sm:px-8 pt-8 pb-6 relative overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-brand-gold/15 flex items-center justify-center">
              <Download className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <p className="text-[11px] font-extrabold tracking-[0.2em] text-brand-gold uppercase">
                Free Download
              </p>
              <h2 id="lead-gate-title" className="text-[18px] font-black text-white tracking-tight">
                Get instant access
              </h2>
            </div>
          </div>
          {resourceTitle && (
            <p className="relative z-10 mt-3 text-[13px] text-slate-300 font-medium leading-relaxed">
              Enter your email to download{" "}
              <span className="text-white font-semibold">{resourceTitle}</span> and unlock all
              free resources.
            </p>
          )}
        </div>

        <div className="px-6 sm:px-8 py-6">
          {success ? (
            <div className="flex flex-col items-center text-center py-4 gap-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              <p className="text-[15px] font-bold text-brand-navy">Download unlocked!</p>
              <p className="text-[13px] text-brand-gray">Starting your download…</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="lead-email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray/50" />
                  <input
                    id="lead-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    autoFocus
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-[14px] font-medium text-brand-navy placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-brand"
                  />
                </div>
              </div>

              {error && (
                <p className="text-[13px] font-semibold text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light active:scale-[0.98] text-brand-navy text-[14px] font-extrabold transition-brand shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Unlocking…</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Now</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-brand-gray/70 font-medium leading-relaxed">
                We respect your privacy. No spam — just high-yield UPSC resources.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
