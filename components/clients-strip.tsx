import Image from "next/image";

const logos = [
  { src: "/clients/1.png", alt: "Client 1" },
  { src: "/clients/2.png", alt: "Client 2" },
  { src: "/clients/3.png", alt: "Client 3" },
  { src: "/clients/4.png", alt: "Client 4" },
  { src: "/clients/5.png", alt: "Client 5" },
];

export default function ClientsStrip() {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.03] backdrop-blur-xl px-4 py-5">
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
        {logos.map(l => (
          <div key={l.src} className="h-8 relative w-28">
            <Image src={l.src} alt={l.alt} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
