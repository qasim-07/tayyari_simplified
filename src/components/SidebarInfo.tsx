import React from "react";
import { ShieldCheck, Users, Layers, Trophy } from "lucide-react";

export default function SidebarInfo() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Research Driven",
      description: "Everything we create is backed by data.",
    },
    {
      icon: Users,
      title: "Aspirant First",
      description: "Solutions designed for real aspirants.",
    },
    {
      icon: Layers,
      title: "Quality Over Quantity",
      description: "Only what is necessary, nothing extra.",
    },
    {
      icon: Trophy,
      title: "Results Focused",
      description: "Your success is our ultimate goal.",
    },
  ];

  return (
    <aside className="w-full lg:w-[380px] xl:w-[420px] bg-brand-navy-sidebar text-white flex-shrink-0 flex flex-col justify-between p-8 sm:p-10 lg:p-12 relative overflow-hidden border-t-4 border-brand-gold lg:border-t-0 lg:border-l-4">
      {/* Decorative background glow for rich aesthetics */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-navy/35 blur-[100px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase block">
            ABOUT TAYYARI SIMPLIFIED
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
            Born out of a Problem.
            <br />
            Built to Create Clarity.
          </h2>
          {/* Accent Line */}
          <div className="w-12 h-1 bg-brand-gold rounded-full mt-4" />
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-5 text-[14px] leading-relaxed text-slate-300 font-medium">
          <p>
            UPSC preparation today is filled with information overload, random strategies, and unnecessary complications.
          </p>
          <p>
            We simplify the journey through research, structure, and high-yield preparation systems.
          </p>
        </div>

        {/* Accent CTA Link Button */}
        <div className="pt-2">
          <a
            href="#story"
            className="inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-xl text-[14px] font-extrabold text-brand-navy bg-white hover:bg-slate-100 hover:shadow-lg hover:shadow-brand-gold/5 active:scale-[0.98] transition-brand group"
          >
            <span>Know Our Story</span>
            <span className="text-brand-navy transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>

      {/* Grid Highlights at the bottom */}
      <div className="relative z-10 mt-16 lg:mt-24 pt-8 border-t border-slate-700/50">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col space-y-2 group">
                {/* Icon with hover rotation */}
                <div className="text-brand-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-[14px] font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h4>
                <p className="text-[12px] text-slate-400 font-medium leading-snug">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
