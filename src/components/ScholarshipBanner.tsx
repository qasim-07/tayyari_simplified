import React from "react";
import { Calendar, Clock, BookOpen, Check } from "lucide-react";

export default function ScholarshipBanner() {
  const benefits = [
    "Upto 100% Scholarship",
    "All India Ranking",
    "Detailed Performance Analysis",
    "For UPSC Prelims Aspirants",
  ];

  return (
    <div id="scholarship" className="w-full flex flex-col md:flex-row gap-6 items-center justify-between bg-[#fdfaf2] rounded-3xl border border-[#f5ece0] py-9 px-5 sm:py-12 sm:px-7 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Decorative subtle glows */}
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

      {/* 1. Left Column: Trophy & Stacked Books SVG Illustration */}
      <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center relative select-none">
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full filter drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Books Stack */}
          {/* Book 1 (Bottom - Navy blue) */}
          <path d="M20 125h110v12H20z" fill="#0a2240" />
          <path d="M130 125c4 0 6 3 6 6s-2 6-6 6" stroke="#0a2240" strokeWidth="2" fill="#fff" />
          <path d="M22 131h105" stroke="#fff" strokeWidth="1" strokeOpacity="0.2" />

          {/* Book 2 (Middle - White/Silver) */}
          <path d="M25 107h100v14H25z" fill="#fff" stroke="#d4af37" strokeWidth="1" />
          <path d="M125 107c3 0 5 3.5 5 7s-2 7-5 7" fill="#fff" stroke="#d4af37" strokeWidth="1" />
          <path d="M27 107v14" stroke="#d4af37" strokeWidth="2" />
          {/* Gold details on spine */}
          <rect x="35" y="111" width="12" height="6" fill="#d4af37" rx="1" />

          {/* Book 3 (Top - Medium Blue/Teal) */}
          <path d="M32 91h88v12H32z" fill="#1d4ed8" />
          <path d="M120 91c3 0 4.5 2.5 4.5 6s-1.5 6-4.5 6" stroke="#1d4ed8" strokeWidth="2" fill="#fff" />
          <path d="M34 97h80" stroke="#fff" strokeWidth="1" strokeOpacity="0.2" />

          {/* Golden Trophy sitting on books */}
          {/* Base of Trophy */}
          <path d="M60 91h30l-5-10H65l-5 10z" fill="#b45309" /> {/* Base border */}
          <path d="M58 87h34v4H58z" fill="#d97706" /> {/* Base block */}
          
          {/* Stem of Trophy */}
          <path d="M72 73h6v10h-6z" fill="#f59e0b" />
          <path d="M72 80h6v3h-6z" fill="#d97706" /> {/* Stem shadow */}

          {/* Cup Bowl */}
          <path d="M54 41h42c0 14-8 28-21 28S54 55 54 41z" fill="#f59e0b" />
          <path d="M75 41h21c0 14-4 28-21 28V41z" fill="#fabf2c" /> {/* Cup highlight */}
          <path d="M54 41h42v3H54v-3z" fill="#fabf2c" /> {/* Cup rim */}

          {/* Handles */}
          <path d="M54 46c-5 0-8 3-8 7s3 7 8 7" stroke="#fabf2c" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M96 46c5 0 8 3 8 7s-3 7-8 7" stroke="#fabf2c" strokeWidth="3.5" strokeLinecap="round" />

          {/* Star symbol on Trophy */}
          <polygon
            points="75,47 77,52 82,52 78,55 80,60 75,57 70,60 72,55 68,52 73,52"
            fill="#0a2240"
          />
        </svg>
      </div>

      {/* 2. Center Column: Benefits & Details */}
      <div className="flex-1 space-y-4">
        <div>
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-brand-gold uppercase block">
            SCHOLARSHIP TEST
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-brand-navy leading-tight mt-2">
            Prove Your Potential.
            <br />
            Unlock Opportunities.
          </h3>
        </div>

        {/* Bullet List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#d97706]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-brand-gold stroke-[3.5]" />
              </span>
              <span className="text-[13px] font-bold text-brand-navy/90 leading-none">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Right Column: Dedicated Countdown/Date Card */}
      <div className="w-full sm:w-[220px] md:w-[240px] flex-shrink-0 bg-white border border-[#f5ece0] rounded-2xl p-5 shadow-sm space-y-5">
        
        {/* Date block */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-navy">
            <Calendar className="w-5 h-5 stroke-[1.8]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[17px] font-black text-brand-navy leading-none">18</span>
            <span className="text-[10px] font-bold text-brand-gray tracking-wider uppercase mt-1">JUNE 2024</span>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="flex flex-col gap-2.5 text-[12px] font-bold text-brand-gray/90">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-gold stroke-[2]" />
            <span>50 Questions</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-gold stroke-[2]" />
            <span>45 Minutes</span>
          </div>
        </div>

        {/* Register CTA Button */}
        <a
          href="#register"
          className="flex items-center justify-center gap-1.5 w-full py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-dark active:scale-[0.98] text-white text-[12px] font-extrabold transition-brand shadow shadow-brand-navy/5 hover:shadow-md"
        >
          <span>Register Now</span>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
