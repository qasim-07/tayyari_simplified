import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm">
        <h1 className="text-xl font-black text-brand-navy">Page not found</h1>
        <p className="mt-2 text-sm text-brand-gray">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-brand-navy text-white text-sm font-extrabold hover:bg-brand-navy-dark transition-brand"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
