import type { Metadata } from "next";
import type { ReactNode } from "react";
import LanguageLayout from "@/components/LanguageLayout";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: "Aziz Portfolio",
    description: "Aziz Portfolio - cybersecurity projects, certifications, and skills",
  };
}

export default async function LocaleLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  return <LanguageLayout locale={params.locale}>{props.children}</LanguageLayout>;
}
