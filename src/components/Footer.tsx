import React from "react";
import { Instagram, Youtube, Send, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Courses", href: "/#courses" },
    { label: "Free Resources", href: "/resources" },
    { label: "Blog", href: "/#blog" },
    { label: "Scholarship Test", href: "/#scholarship" },
    { label: "Contact Us", href: "/#contact" },
  ];

  const courses = [
    { label: "UPSC Prelims Mastery", href: "/#courses" },
    { label: "Mains Answer Writing", href: "/#courses" },
    { label: "Essay Program", href: "/#courses" },
    { label: "Philosophy Optional", href: "/#courses" },
    { label: "Test Series", href: "/#courses" },
  ];

  const resources = [
    { label: "PDF Notes", href: "/resources/pdf-notes" },
    { label: "Revision Sheets", href: "/resources/revision-sheets" },
    { label: "Current Affairs", href: "/resources/current-affairs" },
    { label: "Mind Maps", href: "/resources/mind-maps" },
    { label: "Infographics", href: "/resources/infographics" },
  ];

  return (
    <footer id="about" className="w-full bg-[#0a2240] text-white border-t border-slate-800/80 pt-16 pb-8 px-6 sm:px-10 lg:px-12 xl:px-16 relative overflow-hidden select-none">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-gold/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 w-full">
          
          {/* Column 1: Brand Profile (~33.3% / col-span-4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 sm:col-span-2 lg:border-r lg:border-slate-800/50 lg:pr-8 xl:pr-12">
            {/* Logo Row */}
            <div className="flex items-center gap-3">
              {/* Circular Emblem SVG Badge */}
              <div className="relative w-12 h-12 flex items-center justify-center bg-slate-900 rounded-full shadow-md border-2 border-brand-gold group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-brand-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="opacity-80 animate-spin-slow" style={{ animationDuration: "120s" }} />
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 6v10" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 8h4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 6l-2 2M12 6l2 2" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="12,2 13,4.5 15.5,4.5 13.5,6 14,8.5 12,7 10,8.5 10.5,6 8.5,4.5 11,4.5" fill="currentColor" stroke="none" transform="scale(0.5) translate(12, 4)" />
                </svg>
              </div>

              {/* Branding Text */}
              <div className="flex flex-col">
                <span className="text-[17px] font-black tracking-tight text-white leading-none">
                  TAYYARI
                </span>
                <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold leading-none mt-1">
                  SIMPLIFIED
                </span>
              </div>
            </div>

            {/* Slogan & Description */}
            <div className="space-y-3">
              <span className="text-[13.5px] font-extrabold text-brand-gold tracking-wide uppercase block">
                Simplifying UPSC Preparation
              </span>
              <p className="text-[13px] font-medium text-slate-300/80 leading-relaxed max-w-sm">
                We simplify the complex UPSC journey with focused content, smart strategies and consistent guidance.
              </p>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Send, href: "#", label: "Telegram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@tayyarisimplified.com", label: "Email" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/5 active:scale-95 transition-brand"
                  >
                    <Icon className={`w-4 h-4 ${social.label === "Telegram" ? "rotate-45 -translate-x-0.5 translate-y-0.5" : ""}`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (~16.6% / col-span-2) */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <h4 className="text-[14px] font-extrabold text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[13.5px] font-semibold text-slate-300/85 hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses (~16.6% / col-span-2) */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <h4 className="text-[14px] font-extrabold text-white tracking-wider uppercase">
              Courses
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {courses.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[13.5px] font-semibold text-slate-300/85 hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources (~16.6% / col-span-2) */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <h4 className="text-[14px] font-extrabold text-white tracking-wider uppercase">
              Resources
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[13.5px] font-semibold text-slate-300/85 hover:text-brand-gold hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Action Links (~16.6% / col-span-2) */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
            <h4 className="text-[14px] font-extrabold text-white tracking-wider uppercase">
              Contact
            </h4>
            <div className="flex flex-col space-y-3.5">
              {/* Mail Row */}
              <div className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href="mailto:hello@tayyarisimplified.com"
                  className="text-[13px] font-semibold text-slate-300/85 hover:text-brand-gold transition-colors duration-200 break-all"
                >
                  hello@tayyarisimplified.com
                </a>
              </div>

              {/* Phone Row */}
              <div className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href="tel:+919899078717"
                  className="text-[13px] font-semibold text-slate-300/85 hover:text-brand-gold transition-colors duration-200"
                >
                  +91 98990 78717
                </a>
              </div>

              {/* MapPin Row */}
              <div className="flex items-center gap-2.5 text-slate-300/85">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-[13px] font-semibold">India</span>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/919899078717?text=hii%20%2C%20i%20am%20interested%20on%20the%20tayyari%20simplified%20i%20wnat%20to%20knwo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 active:scale-[0.98] text-brand-navy text-[13px] font-black transition-brand shadow shadow-black/10 w-full mt-4"
            >
              {/* WhatsApp Icon */}
              <svg className="w-3 h-3 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.709 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Divider line separating main layout from compliance links */}
        <div className="border-t border-slate-800/60 my-10" />

        {/* Sub-Footer Copyright & Compliance Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-semibold text-slate-400/80">
          <span>© 2024 Tayyari Simplified. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
