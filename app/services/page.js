import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardBody } from "@heroui/react";


export const metadata = { title: "Hizmetler | FluxOrbit" };


const ITEMS = [
{t:"Teknik SEO", d:"Crawl budget, CWV, log analizi, şema, hreflang, mimari."},
{t:"İçerik Stratejisi", d:"Cluster, brief, edit, iç linkleme, EEAT sinyalleri."},
{t:"Backlink & PR", d:"Kaliteli kaynaklar, yerel medya, mention takibi."},
{t:"Paid Media", d:"Google/Meta yapısı, feed, ROAS/CPA hedefleri."},
{t:"Sosyal Medya", d:"Takvim, kısa video, influencer, topluluk."},
{t:"CRO & Analytics", d:"GA4, GTM, ısı haritası, form/sayfa A/B testleri."},
];


export default function ServicesPage(){
return (
<>
<Navbar/>
<main className="mx-auto max-w-6xl px-4 py-16">
<h1 className="h1 mb-6">Hizmetler</h1>
<p className="p-lg mb-8">Tam kanal büyüme: organik + ücretli + sosyal + CRO.</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{ITEMS.map(i=> (
<Card key={i.t}><CardBody className="p-6">
<p className="font-semibold mb-2">{i.t}</p>
<p className="text-sm text-neutral-600">{i.d}</p>
</CardBody></Card>
))}
</div>
</main>
<Footer/>
</>
)
}