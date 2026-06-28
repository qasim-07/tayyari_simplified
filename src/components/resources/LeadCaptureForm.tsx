"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/lib/leads";
import { useLeadAccess } from "@/hooks/useLeadAccess";

interface LeadCaptureFormProps {
  source?: string;
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
  variant?: "dark" | "light";
  className?: string;
}

export default function LeadCaptureForm({
  source = "newsletter",
  heading = "Download High-Yield Resources",
  subtext = "Enter your email and get exam-focused resources directly in your inbox.",
  buttonLabel = "Get Access",
  variant = "dark",
  className = "",
}: LeadCaptureFormProps) {
  const { isUnlocked, unlock } = useLeadAccess();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await submitLead({ email, source });
      unlock(email);
      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isUnlocked && !success) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <p className="text-[13px] font-semibold text-slate-200">
          You have full access to all free resources.
        </p>
      </div>
    );
  }

  if (success) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <p className="text-[13px] font-semibold text-slate-200">
          You&apos;re in! Browse and download any resource below.
        </p>
      </div>
    );
  }

  const isDark = variant === "dark";

  return (
    <div className={className}>
      {(heading || subtext) && (
        <div className="space-y-2 mb-5">
          {heading && (
            <h3
              className={`text-[16px] sm:text-[18px] font-black tracking-tight ${isDark ? "text-white" : "text-brand-navy"}`}
            >
              {heading}
            </h3>
          )}
          {subtext && (
            <p
              className={`text-[12px] sm:text-[13px] font-medium leading-relaxed ${isDark ? "text-slate-300" : "text-brand-gray"}`}
            >
              {subtext}
            </p>
          )}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-stretch gap-3 w-full"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={`flex-1 px-4 py-3 rounded-xl text-[13px] font-medium border-0 focus:ring-2 focus:ring-brand-gold focus:outline-none ${
            isDark
              ? "text-slate-800 placeholder-slate-400 bg-white"
              : "text-brand-navy placeholder-brand-gray/50 bg-slate-50 border border-slate-200"
          }`}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-5 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light active:scale-[0.98] text-brand-navy text-[13px] font-extrabold transition-brand shadow hover:shadow-lg flex-shrink-0 disabled:opacity-70 inline-flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting…</span>
            </>
          ) : (
            buttonLabel
          )}
        </button>
      </form>

      {error && (
        <p className="mt-3 text-[12px] font-semibold text-red-400">{error}</p>
      )}
    </div>
  );
}
