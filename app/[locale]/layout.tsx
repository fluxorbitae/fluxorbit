// app/[locale]/layout.tsx
import "@/styles/globals.css";
import type { Viewport, Metadata } from "next";
import clsx from "clsx";
import type { ReactNode } from "react";

import { Providers } from "../providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { getMessages } from "@/lib/i18n";
import { MessagesProvider } from "@/components/messages-context";
import LoadingScreen from "@/components/loading-screen";
import GlobalBG from "@/components/global-bg";

export const metadata: Metadata = { /* ... aynı ... */ };
export const viewport: Viewport = { /* ... aynı ... */ };

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }, { locale: "ar" }];
}

type Locale = "en" | "tr" | "ar";

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const locale: Locale = params?.locale ?? "en";
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
