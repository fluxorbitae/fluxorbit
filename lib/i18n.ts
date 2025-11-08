// lib/i18n.ts
export async function getMessages(locale: string) {
  try {
    const messages = await import(`@/app/messages/${locale}.json`);
    return messages.default;
  } catch (e) {
    const fallback = await import("@/app/messages/en.json");
    return fallback.default;
  }
}
