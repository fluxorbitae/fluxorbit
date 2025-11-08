// src/app/layout.js
import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "FluxOrbit",
  description: "Next.js 14 • JS • Tailwind • Azure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
