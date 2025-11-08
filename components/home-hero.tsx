"use client";
import LocaleLink from "@/components/locale-link";
import { useMsg } from "@/components/messages-context";

export default function HomeHero() {
  const t = useMsg();
  return (
    <section className="relative pt-24 pb-16 sm:pt-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 text-sm text-default-500">{t["hero.kicker"]}</p>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.1]">{t["hero.title"]}</h1>
        <p className="mt-4 text-lg text-default-600 max-w-2xl">{t["hero.subtitle"]}</p>
        <div className="mt-6 flex gap-3">
  <LocaleLink
    href="/contact"
    className="px-5 py-3 rounded-lg bg-primary text-white hover:bg-primary-600"
  >
    Book Free Call
  </LocaleLink>
  <a
    className="px-5 py-3 rounded-lg border border-primary/30 hover:border-primary/60"
    href="mailto:hello@fluxorbit.ae"
  >
    hello@fluxorbit.ae
  </a>
</div>

      </div>
    </section>
  );
}
