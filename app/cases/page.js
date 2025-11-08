import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardBody } from "@heroui/react";


export const metadata = { title: "Vaka Çalışmaları | FluxOrbit" };


export default function CasesPage(){
const LIST = [
{h:"%120 organik trafik artışı", d:"3 ayda cluster + hız + dahili linkleme."},
{h:"ROAS 3.2→5.1", d:"Feed optimizasyonu ve kampanya yeniden yapılandırma."},
];
return (
<>
<Navbar/>
<main className="mx-auto max-w-6xl px-4 py-16">
<h1 className="h1 mb-6">Vaka Çalışmaları</h1>
<div className="grid md:grid-cols-2 gap-6">
{LIST.map(x=> (
<Card key={x.h}><CardBody className="p-6">
<p className="font-semibold mb-2">{x.h}</p>
<p className="text-sm text-neutral-600">{x.d}</p>
</CardBody></Card>
))}
</div>
</main>
<Footer/>
</>
)
}