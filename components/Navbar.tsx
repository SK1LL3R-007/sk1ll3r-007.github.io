"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar({
  locale,
  t,
}: {
  locale: string;
  t: Record<string, any>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const otherLocale = locale === "en" ? "de" : "en";

  const handleLanguageSwitch = () => {
    router.push(`/${otherLocale}`);
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/85 border-b border-green-500/25 z-50 shadow-lg shadow-green-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
              ⟨SEC⟩
            </span>
            <span className="text-sm text-green-400/70 font-mono">security.ops</span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href={`/${locale}#projects`} className="text-zinc-300 hover:text-green-400 transition-colors font-medium text-sm">{t.nav.projects}</Link>
            <Link href={`/${locale}#skills`} className="text-zinc-300 hover:text-green-400 transition-colors font-medium text-sm">{t.nav.skills}</Link>
            <Link href={`/${locale}#certifications`} className="text-zinc-300 hover:text-green-400 transition-colors font-medium text-sm">{t.nav.certifications}</Link>
            <Link href={`/${locale}#about`} className="text-zinc-300 hover:text-green-400 transition-colors font-medium text-sm">{t.nav.about}</Link>
            <Link href={`/${locale}#contact`} className="text-zinc-300 hover:text-green-400 transition-colors font-medium text-sm">{t.nav.contact}</Link>
            <button onClick={handleLanguageSwitch} className="px-3 py-1 bg-green-500/10 border border-green-400/40 text-green-300 rounded hover:bg-green-500/20 transition-colors font-mono text-xs">{otherLocale.toUpperCase()}</button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-300 hover:text-green-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap={"round" as const} strokeLinejoin={"round" as const} strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link href={`/${locale}#projects`} className="text-zinc-300 hover:text-green-400">{t.nav.projects}</Link>
            <Link href={`/${locale}#skills`} className="text-zinc-300 hover:text-green-400">{t.nav.skills}</Link>
            <Link href={`/${locale}#certifications`} className="text-zinc-300 hover:text-green-400">{t.nav.certifications}</Link>
            <Link href={`/${locale}#about`} className="text-zinc-300 hover:text-green-400">{t.nav.about}</Link>
            <Link href={`/${locale}#contact`} className="text-zinc-300 hover:text-green-400">{t.nav.contact}</Link>
            <button onClick={handleLanguageSwitch} className="px-3 py-1 bg-green-500/10 border border-green-400/40 text-green-300 rounded hover:bg-green-500/20 transition-colors font-mono text-xs">{otherLocale.toUpperCase()}</button>
          </div>
        )}
      </div>
    </nav>
  );
}
