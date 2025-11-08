"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocaleLink from "@/components/locale-link";

const slides = [
  {
    id: 1,
    title: "Performance SEO for Dubai brands",
    subtitle: "Technical SEO, content clusters, high-intent landing pages.",
    cta: { label: "See Case Studies", href: "/cases" },
    img: "/slider/slide-1.jpg",
    badge: "SEO",
  },
  {
    id: 2,
    title: "Social that actually converts",
    subtitle: "UGC + paid + creator ops in a single growth loop.",
    cta: { label: "Our Services", href: "/services" },
    img: "/slider/slide-2.jpg",
    badge: "Social",
  },
  {
    id: 3,
    title: "Full-funnel growth in 90 days",
    subtitle: "Audit → Plan → Ship → Measure → Iterate.",
    cta: { label: "Book Free Call", href: "/contact" },
    img: "/slider/slide-3.jpg",
    badge: "Growth",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const go = (i: number) => setIndex(i);

  useEffect(() => {
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(next, 5200);
    return () => timer.current && clearTimeout(timer.current);
  }, [index]);

  const s = slides[index];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] backdrop-blur-xl">
      {/* bg fallback gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(20,184,166,.18),transparent_60%)]" />
      {/* image layer */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.995 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image src={s.img} alt={s.title} fill priority className="object-cover opacity-[0.30]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 p-8 sm:p-12 md:p-16">
        <div className="max-w-4xl">
          <motion.span
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="inline-flex text-xs px-2 py-1 rounded bg-teal-500/15 text-teal-300 border border-teal-400/20"
          >
            FluxOrbit • {s.badge}
          </motion.span>

          <motion.h1
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            {s.title}
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="mt-4 text-lg text-white/80 max-w-2xl"
          >
            {s.subtitle}
          </motion.p>

          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mt-6 flex gap-3"
          >
            <LocaleLink
              href={s.cta.href}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-teal-500 text-white hover:bg-teal-600 transition shadow-teal-500/25 shadow-lg"
            >
              {s.cta.label}
            </LocaleLink>
            <LocaleLink
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/15 hover:border-teal-400/30 transition"
            >
              View Pricing
            </LocaleLink>
          </motion.div>
        </div>

        {/* dots */}
        <div className="mt-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-teal-400" : "w-3 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
