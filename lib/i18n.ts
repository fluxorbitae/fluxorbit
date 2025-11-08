// lib/i18n.ts
import en from "@/app/messages/en.json";
import tr from "@/app/messages/tr.json";
import ar from "@/app/messages/ar.json";

export type Locale = "en" | "tr" | "ar";

export async function getMessages(locale: Locale) {
  const table = { en, tr, ar } as const;
  return table[locale];
}
