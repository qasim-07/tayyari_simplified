"use client";

import React from "react";
import { FileText, ClipboardList, Globe, Lightbulb, PieChart, Network } from "lucide-react";

interface ResourceBoxProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  theme: "blue" | "gold";
}

function ResourceBox({ icon: Icon, label, theme }: ResourceBoxProps) {
  const iconBg = theme === "blue" ? "bg-brand-navy/5 text-brand-navy" : "bg-brand-gold/10 text-brand-gold";
  
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-brand-gold/20 hover:shadow-lg hover:shadow-brand-navy/5 -translate-y-0 hover:-translate-y-1 transition-all duration-300 group">
      {/* Icon Circle */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} transition-transform duration-300 group-hover:scale-105`}>
        <Icon className="w-6 h-6 stroke-[1.8]" />
      </div>
      {/* Label */}
      <span className="text-[13px] font-bold text-brand-navy tracking-tight mt-3 text-center">
        {label}
      </span>
    </div>
  );
}

export default function ResourceSection() {
  const resources: ResourceBoxProps[] = [
    { icon: FileText, label: "PDF Notes", theme: "blue" },
    { icon: ClipboardList, label: "Revision Sheets", theme: "gold" },
    { icon: Globe, label: "Current Affairs", theme: "blue" },
    { icon: Lightbulb, label: "Prelims Tricks", theme: "gold" },
    { icon: PieChart, label: "Infographics", theme: "blue" },
    { icon: Network, label: "Mind Maps", theme: "gold" },
  ];

  return (
    <section className="w-full flex flex-col justify-between h-full space-y-8">
      {/* Header Stack */}
      <div className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-[12px] font-extrabold tracking-[0.25em] text-brand-gold uppercase block">
            FREE RESOURCES
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight leading-snug">
            Quality resources, completely free.
          </h2>
        </div>

        <a
          href="#resources"
          className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-brand-navy hover:text-brand-gold transition-brand group/link"
        >
          <span>View All Resources</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>

      {/* Resource 3-Column Grid */}
      <div className="grid grid-cols-3 gap-4">
        {resources.map((item, idx) => (
          <ResourceBox key={idx} {...item} />
        ))}
      </div>

      {/* Newsletter Lead Form Card */}
      <div className="bg-[#0a2240] text-white p-6 sm:p-7 rounded-3xl relative overflow-hidden border border-slate-800 shadow-md">
        {/* Subtle glow decor */}
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-5">
          <div className="space-y-2">
            <h3 className="text-[16px] sm:text-[18px] font-black tracking-tight">
              Download High-Yield Resources
            </h3>
            <p className="text-[12px] sm:text-[13px] text-slate-300 font-medium leading-relaxed">
              Enter your email and get exam-focused resources directly in your inbox.
            </p>
          </div>

          {/* Form wrapper */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-stretch gap-3 w-full"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-xl text-slate-800 placeholder-slate-400 bg-white text-[13px] font-medium border-0 focus:ring-2 focus:ring-brand-gold focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light active:scale-[0.98] text-brand-navy text-[13px] font-extrabold transition-brand shadow hover:shadow-lg flex-shrink-0"
            >
              Download Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
