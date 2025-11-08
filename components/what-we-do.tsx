"use client";
import { motion } from "framer-motion";
import { BarChart3, Rocket, Users, Zap, Blocks, Settings2 } from "lucide-react";

const items = [
  { icon: Rocket,    title: "Technical SEO", body: "CWV, schema, crawl budget, IA, migrations, audits." },
  { icon: BarChart3, title: "Content & Performance", body: "Topic clusters, programmatic SEO, CRO, ROAS lift." },
  { icon: Users,     title: "Social & Creators", body: "UGC engine, creator ops, paid social." },
  { icon: Settings2, title: "Paid Media", body: "Full-funnel, BMM/PMAX, creative testing, LTV models." },
  { icon: Blocks,    title: "Landing Systems", body: "High-intent templates, a/b testing, geo/hreflang." },
  { icon: Zap,       title: "Automation", body: "Dashboards, ETL, content ops, QC pipelines." },
];

export default function WhatWeDo() {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">What we do</h2>
        <p className="text-white/70 mt-2">SEO • Social • Paid • Automation • Content Ops</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, body }, i) => (
          <motion.div
            key={title}
            initial={{ y: 8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur-xl p-5"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-teal-400/20 bg-teal-500/10 p-2">
                <Icon className="size-5 text-teal-300" />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-white/70">{body}</p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
