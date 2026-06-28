import React from "react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import SidebarInfo from "@/components/SidebarInfo";
import StatsBanner from "@/components/StatsBanner";
import CourseSection from "@/components/CourseSection";
import ResourceSection from "@/components/ResourceSection";
import ScholarshipBanner from "@/components/ScholarshipBanner";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import FooterNewsletter from "@/components/FooterNewsletter";
import Footer from "@/components/Footer";
import { Target, BookOpen, BarChart3, Download, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 relative">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section Layout (Asymmetrical Hero + Dark Sidebar Info Block) */}
      <div className="flex flex-col lg:flex-row border-b border-slate-200">

        {/* Left-Center Main Content Column */}
        <main className="flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 relative overflow-hidden bg-white">

          {/* Asymmetric Flex/Grid layout splitting content and illustration on desktop */}
          <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8 z-10 w-full">

            {/* Left Content Column (58% width on desktop) */}
            <div className="w-full lg:w-[56%] flex flex-col justify-between min-h-[500px] lg:min-h-[600px] xl:min-h-[650px] space-y-12 lg:space-y-0">

              {/* Hero Copy & CTA Buttons */}
              <div className="max-w-2xl">
                {/* Gold Eyebrow */}
                <span className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.25em] text-brand-gold uppercase block">
                  SIMPLIFYING UPSC PREPARATION
                </span>

                {/* Main Title Heading */}
                <h1 className="text-[38px] sm:text-[48px] md:text-[56px] xl:text-[64px] font-black text-brand-navy tracking-tight leading-[1.08] mt-4">
                  UPSC Preparation,
                  <br />
                  <span className="text-brand-gold">Simplified.</span>
                </h1>

                {/* Supporting Copy */}
                <p className="text-[15px] sm:text-[17px] font-medium text-brand-gray/95 leading-relaxed mt-6 max-w-xl">
                  Research-backed courses, revision systems, test series and strategies designed for the modern UPSC aspirant.
                </p>

                {/* Hero CTA Button Container */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <a
                    href="#courses"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-bold text-white bg-brand-navy hover:bg-brand-navy-dark active:scale-[0.98] transition-brand shadow-lg shadow-brand-navy/15 hover:shadow-xl"
                  >
                    <span>Explore Courses</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href="/resources"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[14px] font-bold text-brand-gold bg-white border-2 border-brand-gold/75 hover:border-brand-gold hover:bg-brand-gold/[0.04] active:scale-[0.98] transition-brand"
                  >
                    <span>Free Resources</span>
                    <Download className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>

              {/* Value-Prop Grid (Strictly in the left portion, avoiding image collision) */}
              <div className="border-t border-slate-100 pt-8 mt-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                  <FeatureCard
                    icon={Target}
                    title="Smart Strategies"
                    subtext="Exam-focussed approach"
                  />
                  <FeatureCard
                    icon={BookOpen}
                    title="High Yield Content"
                    subtext="Curated, concise and exam-ready"
                  />
                  <FeatureCard
                    icon={BarChart3}
                    title="Consistent Results"
                    subtext="Built on research and analysis"
                  />
                </div>
              </div>

            </div>

            {/* Right Illustration Column (44% width on desktop, housing the centerpiece and watermark) */}
            <div className="w-full lg:w-[44%] flex items-center justify-center relative mt-6 lg:mt-0 select-none">
              <div className="relative w-full max-w-[380px] sm:max-w-[450px] lg:max-w-full aspect-square flex items-center justify-center">

                {/* 1. Ashoka Chakra Background Watermark */}
                <div className="absolute inset-0 flex items-center justify-center text-brand-navy/[0.035] z-0 scale-[1.1] sm:scale-[1.2] lg:scale-[1.3] xl:scale-[1.4]">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full fill-none stroke-currentColor animate-spin-slow"
                    style={{ animationDuration: "240s" }}
                  >
                    {/* Inner Circle Rim */}
                    <circle cx="100" cy="100" r="8" strokeWidth="1.5" />
                    {/* Outer Chakra Rim */}
                    <circle cx="100" cy="100" r="90" strokeWidth="2.5" />
                    {/* Outer decorative dotted rim */}
                    <circle cx="100" cy="100" r="94" strokeWidth="1" strokeDasharray="3 3" />

                    {/* 24 Spokes */}
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

                    {/* 24 Tip Circles */}
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

                {/* 2. Centerpiece Sanchi Stupa Dome and Indian Flag */}
                <img
                  src="/images/centerpiece_emblem.png"
                  alt="National Emblem of India atop Sanchi Stupa Dome with Draped Flag"
                  className="relative z-10 w-full max-w-[420px] lg:max-w-none h-auto object-contain"
                />

              </div>
            </div>

          </div>

        </main>

        {/* Right Dark Column Panel */}
        <SidebarInfo />
      </div>

      {/* 3. Main Dashboard section (Full-width fluid layout, shifted upward with reduced top padding) */}
      <section className="bg-slate-50/20 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 border-t border-slate-200 w-full px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 w-full">

          {/* Left Column (col-span-8 is ~67% - covers stats and courses) */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Stats card inside left section */}
            <StatsBanner />
            {/* Courses Section */}
            <CourseSection />
          </div>

          {/* Right Column (col-span-4 is ~33% - covers free resources and email form) */}
          <div className="lg:col-span-4">
            <ResourceSection />
          </div>

        </div>
      </section>

      {/* 4. Scholarship banner, Blogs, Student stories, and Footer Newsletter sections (Structured in two columns on desktop to allow precise vertical gap control) */}
      <section className="bg-white pt-0 pb-16 sm:pb-20 lg:pb-24 w-full px-6 sm:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 w-full items-start">
          
          {/* Left Column: Scholarship Banner and Testimonials (Shifted closer together) */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6">
            <ScholarshipBanner />
            <Testimonials />
          </div>

          {/* Right Column: Blog Section and Footer Newsletter */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6">
            <BlogSection />
            <FooterNewsletter />
          </div>

        </div>
      </section>

      {/* 5. Footer Component */}
      <Footer />

    </div>
  );
}
