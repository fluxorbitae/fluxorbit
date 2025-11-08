"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const langs = ["en","tr","ar"] as const;

function withLocale(pathname: string, newLocale: string) {
  const parts = pathname.split("/");
  // /en/..., /tr/... vs bekliyoruz; ilk segmenti değiştir
  parts[1] = newLocale;
  const joined = parts.join("/");
  return joined.startsWith("/") ? joined : `/${joined}`;
}

export default function LocaleSwitcher() {
  const pathname = usePathname() || "/en";
  return (
    <div className="flex gap-3 text-sm items-center">
      {langs.map((l) => (
        <Link
          key={l}
          href={withLocale(pathname, l)}
          className="opacity-80 hover:opacity-100 data-[active=true]:font-semibold data-[active=true]:underline"
          data-active={pathname.split("/")[1] === l}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
