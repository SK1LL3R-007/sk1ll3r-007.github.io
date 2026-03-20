import { en } from "@/public/locales/en";
import { de } from "@/public/locales/de";

export function useTranslations(locale: string) {
  return locale === "de" ? de : en;
}

export type Locale = "en" | "de";
