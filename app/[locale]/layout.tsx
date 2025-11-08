// app/[locale]/layout.tsx
import "@/styles/globals.css";
import type { Viewport, Metadata } from "next";
import clsx from "clsx";

import { Providers } from "../providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { getMessages } from "@/lib/i18n";
import { MessagesProvider } from "@/components/messages-context";
import LoadingScreen from "@/components/loading-screen";
import GlobalBG from "@/components/global-bg";

// ---- SEO: title/desc + hreflang alternates
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
  alternates: {
    languages: {
      en: "/en",
      tr: "/tr",
      ar: "/ar",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// Statik üretim için
export const dynamic = "force-static";

// Build'te tüm localeleri üret
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }, { locale: "ar" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "en" | "tr" | "ar" };
}) {
  const locale = params.locale ?? "en";
  const messages = await getMessages(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen bg-darkbg text-foreground font-sans antialiased",
          fontSans.variable,
          // RTL için küçük bir tweak (isteğe bağlı)
          dir === "rtl" && "rtl"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* Global gradient + mouse parıltısı */}
          <GlobalBG />
          {/* İlk girişte kısa marka animasyonu */}
          <LoadingScreen />

          <MessagesProvider messages={messages}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              {/* footer burada component olarak çağrılıyor (home page içinde zaten ekledik) */}
            </div>
          </MessagesProvider>
        </Providers>
      </body>
    </html>
  );
}
