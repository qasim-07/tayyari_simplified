"use client";

import React, { useState } from "react";
import { Download, ExternalLink, Eye, Lock } from "lucide-react";
import LeadGateModal from "./LeadGateModal";
import { useLeadAccess } from "@/hooks/useLeadAccess";

interface ResourceViewerProps {
  filePath: string;
  title: string;
  slug: string;
}

export default function ResourceViewer({ filePath, title, slug }: ResourceViewerProps) {
  const { isUnlocked, isReady, unlock } = useLeadAccess();
  const [showGate, setShowGate] = useState(false);

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = `${slug}.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadClick = () => {
    if (isUnlocked) {
      triggerDownload();
    } else {
      setShowGate(true);
    }
  };

  const handleGateSuccess = (email: string) => {
    unlock(email);
    triggerDownload();
  };

  return (
    <>
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-brand-gray">
            <Eye className="w-4 h-4 text-brand-gold" />
            <span>Preview document</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold text-brand-navy bg-white border border-slate-200 hover:border-brand-gold/40 hover:bg-brand-gold/[0.04] transition-brand"
            >
              <ExternalLink className="w-4 h-4" />
              Open in tab
            </a>
            <button
              onClick={handleDownloadClick}
              disabled={!isReady}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-extrabold text-brand-navy bg-brand-gold hover:bg-brand-gold-light active:scale-[0.98] transition-brand shadow-sm hover:shadow-md disabled:opacity-60"
            >
              {isUnlocked ? (
                <>
                  <Download className="w-4 h-4" />
                  Download PDF
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Download PDF
                </>
              )}
            </button>
          </div>
        </div>

        <div className="relative bg-slate-100 min-h-[480px] sm:min-h-[600px] lg:min-h-[720px]">
          <iframe
            src={`${filePath}#toolbar=1&navpanes=0`}
            title={`Preview: ${title}`}
            className="w-full h-[480px] sm:h-[600px] lg:h-[720px] border-0"
          />
          {!isUnlocked && (
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none flex items-end justify-center pb-4">
              <p className="text-[12px] font-semibold text-brand-gray/80 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200/80 shadow-sm">
                Free to preview · Email required to download
              </p>
            </div>
          )}
        </div>
      </div>

      <LeadGateModal
        isOpen={showGate}
        onClose={() => setShowGate(false)}
        onSuccess={handleGateSuccess}
        resourceTitle={title}
        resourceSlug={slug}
        source="resource_download"
      />
    </>
  );
}
