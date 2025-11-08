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

export const dynamic = "force-static";

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "tr" },
    { locale: "ar" },
  ];
}

// ✅ RootLayout her türlü LayoutProps çakışmasını çözecek ultra-safe sürüm
export default async function RootLayout(props: any) {
  const { children } = props ?? {};

  const maybeParams = props?.params;
  const resolved =
    typeof maybeParams?.then === "function"
      ? await maybeParams
      : maybeParams ?? { locale: "en" };

  const locale: "en" | "tr" | "ar" = resolved?.locale ?? "en";
  const messages = await getMessages(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={clsx(
          "min-h-screen bg-darkbg text-foreground font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <GlobalBG />
          <LoadingScreen />
          <MessagesProvider messages={messages}>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
            </div>
          </MessagesProvider>
        </Providers>
      </body>
    </html>
  );
}
