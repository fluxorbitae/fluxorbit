import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Card, CardBody, Button } from "@heroui/react";


export const metadata = { title: "Paketler | FluxOrbit" };


const PLANS = [
{name:"Starter", price:"$1.5k / ay", features:["Teknik SEO denetimi","İçerik planı (8 adet)","Aylık rapor"]},
{name:"Growth", price:"$3k / ay", features:["Kümeler (20)","Backlink kampanyası","Paid Media kurulumu"], pro:true},
{name:"Scale", price:"$6k+ / ay", features:["Tam kanal yönetimi","A/B testleri","Haftalık growth board"]},
];


export default function PricingPage(){
return (
<>
<Navbar/>
<main className="mx-auto max-w-6xl px-4 py-16">
<h1 className="h1 mb-6">Paketler</h1>
<div className="grid md:grid-cols-3 gap-6 items-stretch">
{PLANS.map(p=> (
<Card key={p.name} className={p.pro?"border-neutral-900":undefined}>
<CardBody className="p-6 flex flex-col">
<div className="flex items-baseline justify-between">
<p className="font-semibold">{p.name}</p>
<p className="text-sm text-neutral-500">Aylık</p>
</div>
<p className="text-3xl font-bold mt-2">{p.price}</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700 flex-1">
{p.features.map(f=> <li key={f}>• {f}</li>)}
</ul>
<Button as={Link} href="/contact" color="primary" className="mt-6">Teklif Al</Button>
</CardBody>
</Card>
))}
</div>
</main>
<Footer/>
</>
)
}