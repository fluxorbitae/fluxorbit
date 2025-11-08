import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button, Card, CardBody } from "@heroui/react";


export default function HomePage() {
return (
<>
<Navbar />


{/* HERO */}
<section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="h1">Performans odaklı <span className="bg-gradient-to-r from-black to-neutral-700 bg-clip-text text-transparent">dijital büyüme</span>.</h1>
<p className="p-lg mt-5">SEO + içerik + reklam + sosyal medya. İlk 90 günde ölçülebilir KPI ve şeffaf raporlama.</p>
<div className="mt-8 flex gap-4">
<Button as={Link} href="/contact" color="primary" size="md">Ücretsiz Strateji Görüşmesi</Button>
<Button as={Link} href="/services" variant="bordered" size="md">Hizmetler</Button>
</div>
<ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-600">
<li>• Teknik SEO & İçerik Mimarisi</li>
<li>• Google/Meta Performans Reklamları</li>
<li>• Sosyal Medya Yönetimi</li>
<li>• CRO & Hız Optimizasyonu</li>
</ul>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white shadow-sm" />
</div>
</div>
</section>


{/* TRUST BAR */}
<section className="mx-auto max-w-6xl px-4 pb-16">
<Card><CardBody className="p-6 md:p-8 flex flex-wrap items-center justify-between gap-6">
<p className="text-sm text-neutral-600">Kanıtlanmış çerçeve: Teknik temel → İçerik kümeleri → Otorite sinyalleri → Dönüşüm optimizasyonu.</p>
<div className="text-xs text-neutral-500">Uptime SLA 99.9% • Haftalık rapor • A/B testleri</div>
</CardBody></Card>
</section>


{/* SERVICES PREVIEW */}
<section className="mx-auto max-w-6xl px-4 pb-8">
<h2 className="h2 mb-6">Hizmetler</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{[
{t:"Teknik SEO", d:"Site mimarisi, log analizi, Core Web Vitals, şema, çok dilli hreflang."},
{t:"İçerik & Topical Authority", d:"Konu kümeleri, brief, edit, iç bağlantı ve EEAT."},
{t:"Backlink & Dijital PR", d:"Güvenli kazanım, marka sözleri, yerel listelemeler, partner ağ."},
{t:"Paid Media", d:"Google/Meta kampanya mimarisi, feed, ROAS optimizasyonu."},
{t:"Sosyal Medya", d:"İçerik takvimi, kısa video, influencer işbirlikleri."},
{t:"CRO & Analytics", d:"GA4 + Tag Manager, ısı haritası, A/B testleri."},
].map((x)=> (
<Card key={x.t}><CardBody className="p-6">
<p className="font-semibold mb-2">{x.t}</p>
<p className="text-sm text-neutral-600">{x.d}</p>
</CardBody></Card>
))}
</div>
</section>


<Footer />
</>
);
}