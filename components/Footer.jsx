export default function Footer() {
return (
<footer className="border-t border-neutral-200 mt-24">
<div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-2 mb-3">
<div className="h-7 w-7 rounded-lg bg-black" />
<span className="font-semibold">FluxOrbit</span>
</div>
<p className="text-sm text-neutral-600">Dubai merkezli büyüme ajansı. SEO, içerik, reklam ve sosyal medya ile sonuç odaklı ölçekleme.</p>
</div>
<div>
<p className="font-medium mb-3">Bağlantılar</p>
<ul className="space-y-2 text-sm text-neutral-700">
<li><a href="/services" className="hover:underline">Hizmetler</a></li>
<li><a href="/cases" className="hover:underline">Vaka Çalışmaları</a></li>
<li><a href="/pricing" className="hover:underline">Paketler</a></li>
<li><a href="/contact" className="hover:underline">İletişim</a></li>
</ul>
</div>
<div>
<p className="font-medium mb-3">İletişim</p>
<p className="text-sm text-neutral-700">hello@fluxorbit.ae</p>
<p className="text-sm text-neutral-700">Business Bay, Dubai</p>
</div>
</div>
<div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} FluxOrbit. All rights reserved.</div>
</footer>
);
}