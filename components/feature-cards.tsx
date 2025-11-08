"use client";
import { motion } from "framer-motion";
import { BarChart3, Rocket, Users, Zap } from "lucide-react";

const items = [
  { icon: Rocket, title: "Technical SEO", body: "Crawl budget, schema, CWV, IA, migrations." },
  { icon: BarChart3, title: "Content & Performance", body: "Topic clusters, programmatic SEO, ROAS lift." },
  { icon: Users, title: "Social & Creators", body: "UGC system, creator ops, paid social." },
  { icon: Zap, title: "Automation", body: "Dashboards, ETL, content ops & audits." },
];

export default function FeatureCards() {
  return (
    <section className="mt-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body }) => (
          <motion.div
            key={title}
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

            {/* subtle glow */}
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
