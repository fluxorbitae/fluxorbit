import HeroSlider from "@/components/hero-slider";
import WhatWeDo from "@/components/what-we-do";
import MetricsStrip from "@/components/metrics-strip";
import ClientsStrip from "@/components/clients-strip";
import SiteFooter from "@/components/site-footer";

export default function Page() {
  return (
    <main className="relative">
      <div className="space-y-10">
        <HeroSlider />
        <WhatWeDo />
        <MetricsStrip />
        <ClientsStrip />
        <SiteFooter />
      </div>
    </main>
  );
}
