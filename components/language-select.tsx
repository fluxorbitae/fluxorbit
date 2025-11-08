"use client";
import {Select, SelectItem} from "@heroui/select";
import {useParams, usePathname, useRouter} from "next/navigation";
import {useMemo} from "react";

type Lang = { code: string; label: string; long: string; supported: boolean; };

const LANGS: Lang[] = [
  { code: "en", label: "EN", long: "English", supported: true },
  { code: "tr", label: "TR", long: "Türkçe", supported: true },
  { code: "ar", label: "AR", long: "العربية", supported: true },
  // yaygın/isteğe bağlı (şimdilik pasif)
  { code: "ru", label: "RU", long: "Русский", supported: false },
  { code: "fa", label: "FA", long: "فارسی", supported: false },
  { code: "hi", label: "HI", long: "हिन्दी", supported: false },
  { code: "de", label: "DE", long: "Deutsch", supported: false },
  { code: "es", label: "ES", long: "Español", supported: false },
  { code: "fr", label: "FR", long: "Français", supported: false },
];

function withLocale(pathname: string, newLocale: string) {
  const parts = (pathname || "/en").split("/");
  parts[1] = newLocale; // /en/... -> /xx/...
  const joined = parts.join("/");
  return joined.startsWith("/") ? joined : `/${joined}`;
}

export default function LanguageSelect() {
  const { locale } = useParams<{ locale?: string }>();
  const selected = (locale ?? "en").toLowerCase();
  const pathname = usePathname() || "/en";
  const router = useRouter();

  const selectedKey = useMemo(() => new Set([selected]), [selected]);

  return (
    <Select
      aria-label="Language"
      selectedKeys={selectedKey}
      className="min-w-[9.5rem]"
      classNames={{
        trigger: "bg-default-100 border border-white/10",
        value: "text-sm",
        popoverContent: "bg-background/95 backdrop-blur",
      }}
      onChange={(e) => {
        const code = (e.target.value || "").toLowerCase();
        const lang = LANGS.find(l => l.code === code);
        if (lang?.supported) {
          router.push(withLocale(pathname, code));
        }
      }}
      renderValue={(items) => {
        const code = Array.from(items)[0]?.key?.toString() || selected;
        const it = LANGS.find(l => l.code === code) || LANGS[0];
        return (
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-80">{it.label}</span>
            <span className="text-xs text-default-500">— {it.long}</span>
          </div>
        );
      }}
    >
      {LANGS.map(l => (
        <SelectItem key={l.code} textValue={l.code} isDisabled={!l.supported}>
          <div className="flex items-center gap-2">
            <span className="text-xs">{l.label}</span>
            <span className="text-xs text-default-500">{l.long}{!l.supported ? " • soon" : ""}</span>
          </div>
        </SelectItem>
      ))}
    </Select>
  );
}
