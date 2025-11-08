"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react"; // İstemiyorsan normal <a> kullan


export default function Navbar() {
const [open, setOpen] = useState(false);
const menu = (
<div className="flex flex-col md:flex-row items-center gap-6">
<Link href="/services" className="text-sm hover:opacity-70">Hizmetler</Link>
<Link href="/cases" className="text-sm hover:opacity-70">Vaka Çalışmaları</Link>
<Link href="/pricing" className="text-sm hover:opacity-70">Paketler</Link>
<Link href="/contact" className="text-sm hover:opacity-70">İletişim</Link>
<Button as={Link} href="/contact" color="primary" size="sm">Teklif Al</Button>
</div>
);


return (
<header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-100">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<Link href="/" className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-black" />
<span className="font-semibold">FluxOrbit</span>
</Link>
<nav className="hidden md:block">{menu}</nav>
<button aria-label="menu" className="md:hidden" onClick={() => setOpen(!open)}>
☰
</button>
</div>
{open && <div className="md:hidden border-t border-neutral-100 p-4">{menu}</div>}
</header>
);
}