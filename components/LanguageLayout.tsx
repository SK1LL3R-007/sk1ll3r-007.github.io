"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTranslations } from "@/lib/i18n";

export default function LanguageLayout({
  locale,
  children,
}: {
  locale: string;
  children: ReactNode;
}) {
  const t = useTranslations(locale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-zinc-100 font-sans overflow-x-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.06)_1px,transparent_1px)] bg-[size:20px_20px] -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_80%)] -z-10" />

      <Navbar locale={locale} t={t} />
      <main className="w-full">
        <Hero locale={locale} t={t} />
        <Projects locale={locale} t={t} />
        <Skills locale={locale} t={t} />
        <Certifications locale={locale} t={t} />
        <About locale={locale} t={t} />
        <Contact locale={locale} t={t} />
      </main>
      <Footer t={t} />
      {children}
    </div>
  );
}
