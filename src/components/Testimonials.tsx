"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  rank: string;
  avatarColor: string;
  initials: string;
}

function TestimonialCard({ quote, name, rank, avatarColor, initials }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="space-y-4">
        {/* Gold blockquote icon */}
        <span className="text-4xl font-serif text-brand-gold font-extrabold block leading-none select-none">
          &ldquo;
        </span>
        {/* Review Paragraph */}
        <p className="text-[13.5px] sm:text-[14.5px] font-semibold text-brand-navy leading-relaxed">
          {quote}
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-3.5 mt-8 border-t border-slate-100 pt-4">
        {/* High-fidelity Initial-based Circular Avatar */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[12px] text-white ${avatarColor} shadow-inner`}>
          {initials}
        </div>
        
        {/* Text stack */}
        <div className="flex flex-col">
          <span className="text-[13px] font-black text-brand-navy leading-none">
            {name}
          </span>
          <span className="text-[10.5px] font-bold text-brand-gold mt-1.5 leading-none">
            {rank}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const testimonials: TestimonialCardProps[] = [
    {
      quote: "Tayyari Simplified changed the way I looked at preparation. The revision methods are game-changing!",
      name: "Ananya Singh",
      rank: "AIR 60, UPSC CSE 2023",
      avatarColor: "bg-gradient-to-tr from-pink-500 to-rose-400",
      initials: "AS",
    },
    {
      quote: "The test series and answer evaluations helped me improve consistently. Highly recommended!",
      name: "Rahul Verma",
      rank: "AIR 142, UPSC CSE 2023",
      avatarColor: "bg-gradient-to-tr from-blue-500 to-indigo-400",
      initials: "RV",
    },
    {
      quote: "Concise content, smart strategies and amazing mentorship. Thank you Tayyari Simplified!",
      name: "Kavya Nair",
      rank: "AIR 215, UPSC CSE 2023",
      avatarColor: "bg-gradient-to-tr from-amber-500 to-orange-400",
      initials: "KN",
    },
  ];

  // Active slide tracker for mobile sliding/carousel mode
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full">
      {/* Testimonials Header */}
      <div className="flex items-end justify-between gap-4 mb-8">
        <div className="space-y-1.5">
          <span className="text-[12px] font-extrabold tracking-[0.25em] text-brand-gold uppercase block">
            STUDENT STORIES
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight leading-snug">
            Real aspirants. Real results.
          </h2>
        </div>

        {/* Carousel buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-brand-navy hover:text-brand-gold transition-brand active:scale-95"
            aria-label="Previous Student Story"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-brand-navy hover:text-brand-gold transition-brand active:scale-95"
            aria-label="Next Student Story"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Desktop Layout: 3 Columns Grid */}
      <div className="hidden sm:grid grid-cols-3 gap-5">
        {testimonials.map((item, idx) => (
          <TestimonialCard key={idx} {...item} />
        ))}
      </div>

      {/* Mobile Layout: Carousel slider block */}
      <div className="sm:hidden relative overflow-hidden rounded-3xl min-h-[200px]">
        <div className="transition-transform duration-300 transform">
          <TestimonialCard {...testimonials[activeSlide]} />
        </div>
        
        {/* Simple Slide Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === idx ? "bg-brand-gold w-4" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
