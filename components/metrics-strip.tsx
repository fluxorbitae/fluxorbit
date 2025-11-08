export default function MetricsStrip() {
  const items = [
    { k: "+212%", v: "organic sessions (4 mo)" },
    { k: "1.8x", v: "ROAS lift (60 days)" },
    { k: "+74k", v: "monthly SEO traffic" },
    { k: "A<150", v: "Core Web Vitals" },
  ];
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/[.03] backdrop-blur-xl px-4 py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {items.map(i => (
          <div key={i.k}>
            <div className="text-teal-300 font-semibold text-xl">{i.k}</div>
            <div className="text-white/70 text-sm">{i.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
