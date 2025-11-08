import "./globals.css";
import { Inter } from "next/font/google";
import { HeroUIProvider } from "@heroui/react"; // Eğer kullanmıyorsan bu import ve provider'ı sil


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
metadataBase: new URL("https://fluxorbit.ae"),
title: {
default: "FluxOrbit — SEO, Performance Marketing ve Sosyal Medya Ajansı",
template: "%s | FluxOrbit",
},
description:
"FluxOrbit: SEO, içerik, performans reklamları ve sosyal medya ile büyüme odaklı dijital ajans.",
openGraph: {
type: "website",
url: "https://fluxorbit.ae",
title: "FluxOrbit — Dijital Büyüme Ajansı",
description:
"SEO + Content + Paid Media + Social: Performansı kanıtlanmış büyüme çerçevemizle sonuç alın.",
images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "FluxOrbit" }],
},
twitter: {
card: "summary_large_image",
title: "FluxOrbit — Dijital Büyüme Ajansı",
description:
"SEO + Content + Paid Media + Social: Performansı kanıtlanmış büyüme çerçevemizle sonuç alın.",
images: ["/og.jpg"],
},
icons: { icon: "/favicon.ico" },
};


export default function RootLayout({ children }) {
return (
<html lang="tr" suppressHydrationWarning>
<body className={`${inter.className} font-sans min-h-screen`}>
<HeroUIProvider>
{children}
</HeroUIProvider>
</body>
</html>
);
}