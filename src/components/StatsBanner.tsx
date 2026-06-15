import React from "react";
import { Users, PlaySquare, FileText, Trophy } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: Users,
      value: "10K+",
      label: "Aspirants Trust Us",
    },
    {
      icon: PlaySquare,
      value: "250+",
      label: "Hours of Premium Content",
    },
    {
      icon: FileText,
      value: "50+",
      label: "Free Resources Available",
    },
    {
      icon: Trophy,
      value: "100+",
      label: "Selections (And Growing)",
    },
  ];

  return (
    <div className="bg-[#0a2240] text-white rounded-3xl border border-slate-800/50 shadow-md overflow-hidden">
      <div className="px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 justify-start sm:justify-center lg:px-4 
                  ${
                    // Border dividers on large screens (desktop)
                    index !== stats.length - 1
                      ? "lg:border-r lg:border-slate-700/50"
                      : ""
                  }
                  ${
                    // Border divider on medium screens (tablet 2x2 grid)
                    index % 2 === 0
                      ? "sm:border-r-0 sm:border-slate-700/50 lg:border-r"
                      : ""
                  }
                `}
              >
                {/* Icon Container with border and rounded corners */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-brand-gold shadow-inner transition-transform duration-300 hover:scale-105">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none">
                    {item.value}
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-semibold text-slate-300 mt-2 leading-tight">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
