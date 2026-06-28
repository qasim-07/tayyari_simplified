"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/resources";
import LeadCaptureForm from "@/components/resources/LeadCaptureForm";

interface ResourceBoxProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  theme: "blue" | "gold";
  href: string;
}

function ResourceBox({ icon: Icon, label, theme, href }: ResourceBoxProps) {
  const iconBg =
    theme === "blue"
      ? "bg-brand-navy/5 text-brand-navy"
      : "bg-brand-gold/10 text-brand-gold";

  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-brand-gold/20 hover:shadow-lg hover:shadow-brand-navy/5 -translate-y-0 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg} transition-transform duration-300 group-hover:scale-105`}
      >
        <Icon className="w-6 h-6 stroke-[1.8]" />
      </div>
      <span className="text-[13px] font-bold text-brand-navy tracking-tight mt-3 text-center">
        {label}
      </span>
    </Link>
  );
}

export default function ResourceSection() {
  const resources = CATEGORIES.map((category) => ({
    icon: category.icon,
    label: category.label,
    theme: category.theme,
    href: `/resources/${category.slug}`,
  }));

  return (
    <section id="resources" className="w-full flex flex-col justify-between h-full space-y-8">
      <div className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-[12px] font-extrabold tracking-[0.25em] text-brand-gold uppercase block">
            FREE RESOURCES
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight leading-snug">
            Quality resources, completely free.
          </h2>
        </div>

        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-brand-navy hover:text-brand-gold transition-brand group/link"
        >
          <span>View All Resources</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {resources.map((item) => (
          <ResourceBox key={item.href} {...item} />
        ))}
      </div>

      <div className="bg-[#0a2240] text-white p-6 sm:p-7 rounded-3xl relative overflow-hidden border border-slate-800 shadow-md">
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <LeadCaptureForm
            source="homepage_resources"
            buttonLabel="Download Now"
          />
        </div>
      </div>
    </section>
  );
}
