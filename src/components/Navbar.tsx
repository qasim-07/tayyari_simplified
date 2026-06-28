"use client";

import React, { useState } from "react";
import { Menu, X, ArrowRight, BookOpen } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Courses", href: "/#courses" },
  { label: "Free Resources", href: "/resources" },
  { label: "Blog", href: "/#blog" },
  { label: "Scholarship Test", href: "/#scholarship" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 transition-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group focus-visible:ring-offset-4 focus-visible:ring-brand-navy rounded-lg p-1">
              {/* Circular Emblem SVG Badge */}
              <div className="relative w-12 h-12 flex items-center justify-center bg-brand-navy rounded-full shadow-md border-2 border-brand-gold group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-brand-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Outer circle of the shield/wheel */}
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="opacity-80 animate-spin-slow" />
                  {/* Central open book representing Tayyari (preparation) */}
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" />
                  {/* The central upright sword representing success/victory */}
                  <path d="M12 6v10" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 8h4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 6l-2 2M12 6l2 2" stroke="currentColor" strokeWidth="1.5" />
                  {/* Mini-star representing excellence */}
                  <polygon points="12,2 13,4.5 15.5,4.5 13.5,6 14,8.5 12,7 10,8.5 10.5,6 8.5,4.5 11,4.5" fill="currentColor" stroke="none" transform="scale(0.5) translate(12, 4)" />
                </svg>
              </div>
              
              {/* Branding Text */}
              <div className="flex flex-col">
                <span className="text-[17px] font-black tracking-tight text-brand-navy leading-none">
                  TAYYARI
                </span>
                <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold leading-none mt-1">
                  SIMPLIFIED
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-full text-[14px] font-semibold text-brand-gray hover:text-brand-navy hover:bg-slate-50 active:bg-slate-100 transition-brand relative group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold group-hover:w-1/2 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/919899078717?text=hii%20%2C%20i%20am%20interested%20on%20the%20tayyari%20simplified%20i%20wnat%20to%20knwo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[14px] font-bold text-white bg-brand-navy hover:bg-brand-navy-dark active:scale-[0.98] transition-brand shadow-sm hover:shadow-md hover:shadow-brand-navy/10 border border-transparent"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-brand-navy hover:bg-slate-100 hover:text-brand-navy-dark focus:outline-none transition-brand"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[81px] bg-white border-b border-slate-200 shadow-xl transition-all duration-300 transform origin-top ${
          isOpen ? "opacity-100 scale-y-100 h-auto" : "opacity-0 scale-y-95 pointer-events-none h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-brand-gray hover:text-brand-navy hover:bg-slate-50 transition-brand"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://wa.me/919899078717?text=hii%20%2C%20i%20am%20interested%20on%20the%20tayyari%20simplified%20i%20wnat%20to%20knwo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-bold text-white bg-brand-navy hover:bg-brand-navy-dark active:scale-[0.98] transition-brand shadow"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
