import React from "react";
import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  /** Lucide Icon component to render */
  icon: LucideIcon;
  /** Primary bold title text */
  title: string;
  /** Explanatory subtext details */
  subtext: string;
}

export default function FeatureCard({ icon: Icon, title, subtext }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-slate-100 hover:border-brand-gold/20 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/5 -translate-y-0 hover:-translate-y-1 transition-all duration-300 group">
      {/* Icon Wrapper Circle */}
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-brand-navy group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors duration-300">
        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Text Hierarchy */}
      <div className="flex flex-col">
        <h3 className="text-[15px] font-bold text-brand-navy leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-[13px] font-medium text-brand-gray/80 mt-1 leading-snug">
          {subtext}
        </p>
      </div>
    </div>
  );
}
