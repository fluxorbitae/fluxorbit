// components/site-footer.tsx
import Image from "next/image";
import LocaleLink from "@/components/locale-link";

const colExplore = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/cases" },
  { label: "Blog", href: "/blog" },
];

const colCompany = [
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy", href: "/privacy" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/[.03] backdrop-blur-xl">
        <div className="px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand + summary */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <Image
                    src="/fluxorbit_white.png"
                    alt="FluxOrbit"
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-semibold">FluxOrbit</h4>
              </div>
              <p className="mt-3 text-white/70 max-w-md">
                Dubai-based studio delivering measurable growth with SEO, social and performance.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
                <span>info@fluxorbit.ae</span>
                <span className="opacity-30">•</span>
                <span>Dubai, UAE</span>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h5 className="text-sm font-semibold text-white/80">Explore</h5>
              <ul className="mt-3 space-y-2 text-white/70">
                {colExplore.map((i) => (
                  <li key={i.href}>
                    <LocaleLink href={i.href} className="hover:text-white transition">
                      {i.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-sm font-semibold text-white/80">Company</h5>
              <ul className="mt-3 space-y-2 text-white/70">
                {colCompany.map((i) => (
                  <li key={i.href}>
                    <LocaleLink href={i.href} className="hover:text-white transition">
                      {i.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} FluxOrbit Studio. All rights reserved.</p>
            <div className="flex gap-4">
              <LocaleLink href="/terms" className="hover:text-white">
                Terms
              </LocaleLink>
              <LocaleLink href="/privacy" className="hover:text-white">
                Privacy
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
