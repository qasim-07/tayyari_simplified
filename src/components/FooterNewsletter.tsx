"use client";

import React from "react";
import { Mail } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <div className="w-full bg-[#0a2240] text-white rounded-3xl border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-md">
      {/* 1. Muted Ashoka Chakra background watermark in the right corner */}
      <div className="absolute top-1/2 -right-24 sm:-right-20 lg:-right-16 -translate-y-1/2 w-[240px] sm:w-[280px] md:w-[320px] aspect-square text-white/[0.03] pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full fill-none stroke-currentColor animate-spin-slow"
          style={{ animationDuration: "300s" }}
        >
          <circle cx="100" cy="100" r="8" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="90" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="94" strokeWidth="1" strokeDasharray="3 3" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="10"
              strokeWidth="2"
              transform={`rotate(${i * 15} 100 100)`}
            />
          ))}
          {Array.from({ length: 24 }).map((_, i) => (
            <circle
              key={`tip-${i}`}
              cx="100"
              cy="10"
              r="1.5"
              className="fill-current"
              transform={`rotate(${i * 15 + 7.5} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* 2. Content Row Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 w-full">

        {/* Left & Center Anchor (Icon + Typography Stack) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left flex-1">
          {/* Gold envelope badge */}
          <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-brand-gold/15 border-2 border-brand-gold/30 text-brand-gold shadow-inner">
            <Mail className="w-6 h-6 stroke-[2]" />
          </div>

          {/* Typography */}
          <div className="space-y-1 mt-1">
            <h3 className="text-lg sm:text-xl font-black tracking-tight leading-snug">
              Stay Ahead in Your UPSC Journey
            </h3>
            <p className="text-[13px] text-slate-300 font-medium leading-relaxed">
              Get weekly strategy tips, resources and updates.
            </p>
          </div>
        </div>

        {/* Right Form Input Container */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto min-w-[280px] sm:min-w-[380px] lg:min-w-[420px]"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3.5 rounded-xl text-slate-800 placeholder-slate-400 bg-white text-[13px] font-medium border-0 focus:ring-2 focus:ring-brand-gold focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light active:scale-[0.98] text-brand-navy text-[13px] font-extrabold transition-brand shadow hover:shadow-lg flex-shrink-0"
          >
            Subscribe Now
          </button>
        </form>

      </div>
    </div>
  );
}
