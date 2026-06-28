"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm">
        <h1 className="text-xl font-black text-brand-navy">Something went wrong</h1>
        <p className="mt-2 text-sm text-brand-gray">
          The page failed to load. This is usually fixed by restarting the dev server.
        </p>
        <button
          onClick={reset}
          className="mt-6 px-6 py-3 rounded-xl bg-brand-gold text-brand-navy text-sm font-extrabold hover:bg-brand-gold-light transition-brand"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
