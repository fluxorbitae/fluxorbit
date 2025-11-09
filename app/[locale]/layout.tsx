// app/[locale]/layout.tsx
import "@/styles/globals.css";
import type { Viewport, Metadata } from "next";
import type { ReactNode } from "react";
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
    languages: { en: "/en", tr: "/tr", ar: "/ar" },
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
  return [{ locale: "en" }, { locale: "tr" }, { locale: "ar" }];
}

// ↓ Next 15 LayoutProps, params: Promise<{ locale: string }>
type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const SUPPORTED = ["en", "tr", "ar"] as const;
type Locale = (typeof SUPPORTED)[number];

export default async function RootLayout({ children, params }: Props) {
  const { locale: raw } = await params; // Next'in verdiği string
  const locale: Locale = (SUPPORTED as readonly string[]).includes(raw)
    ? (raw as Locale)
    : "en"; // runtime narrowing

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
