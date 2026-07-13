import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10">
          The page requested is not available at this address. It may have been
          moved, retitled or retired. The buyer guides in the blog and the
          current plans on the pricing section are the two most useful next
          stops.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/#pricing"
            className="rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-900/40 transition-all hover:shadow-2xl hover:shadow-purple-500/40 active:scale-[0.98] w-full sm:w-auto"
          >
            See Current Plans
          </Link>
          <Link
            href="/blog"
            className="rounded-2xl border border-violet-200 bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-foreground transition-all hover:border-violet-400 hover:bg-violet-50 w-full sm:w-auto"
          >
            Read The Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
