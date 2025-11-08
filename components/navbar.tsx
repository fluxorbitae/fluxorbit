"use client";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import clsx from "clsx";
import Image from "next/image";
import { useParams } from "next/navigation";

import LocaleLink from "@/components/locale-link";
import LanguageSelect from "@/components/language-select";
import { useMsg } from "@/components/messages-context";
import { ThemeSwitch } from "./theme-switch";

const NAV = [
  { href: "/pricing", key: "nav.pricing", fallback: "Pricing" },
  { href: "/services", key: "nav.services", fallback: "Services" },
  { href: "/cases", key: "nav.cases", fallback: "Case Studies" },
  { href: "/blog", key: "nav.blog", fallback: "Blog" },
  { href: "/contact", key: "nav.contact", fallback: "Contact" },
];

export const Navbar = () => {
  const { locale } = useParams<{ locale?: "en" | "tr" | "ar" }>();
  const loc = locale ?? "en";
  const t = useMsg();

  return (
    <HeroUINavbar
      isBlurred
      className="bg-background/70 backdrop-blur-xl border-b border-white/5"
      maxWidth="xl"
      height="4.5rem"
    >
      {/* SOL */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <LocaleLink href="/" className="flex items-center gap-3 group">
            {/* LOGO */}
            <div className="relative w-[55px] h-[55px]">
                <Image
                  src="/fluxorbit_white.png"
                  alt="FluxOrbit"
                  fill
                  priority
                  className="object-contain opacity-95 group-hover:opacity-100 transition"
                />

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-teal-500/30 blur-2xl opacity-0 group-hover:opacity-40 transition" />
              </div>

            <span className="font-semibold tracking-tight text-[1.15rem]">
              FluxOrbit
            </span>
          </LocaleLink>
        </NavbarBrand>
      </NavbarContent>

      {/* ORTA — Desktop menu */}
      <NavbarContent justify="center" className="hidden lg:flex gap-6">
        {NAV.map((item) => (
          <NavbarItem key={item.href}>
            <LocaleLink
              href={item.href}
              className="relative font-medium text-sm opacity-90 hover:opacity-100 transition"
            >
              {/* Text */}
              {t[item.key as keyof typeof t] ?? item.fallback}

              {/* Underline Grow Effect */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-teal-500/80 group-hover:w-full transition-[width] duration-300" />
            </LocaleLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* SAĞ */}
      <NavbarContent justify="end" className="gap-2">
        <ThemeSwitch />
        <LanguageSelect />

        {/* Login */}
        <NavbarItem className="hidden md:flex">
          <Button
            as={LocaleLink}
            href="/auth/login"
            size="sm"
            variant="bordered"
            radius="sm"
            className="border-white/15 hover:border-teal-400/30"
          >
            Log in
          </Button>
        </NavbarItem>

        {/* Sign up */}
        <NavbarItem className="hidden md:flex">
          <Button
            as={LocaleLink}
            href="/auth/signup"
            size="sm"
            className="bg-teal-500 text-white hover:bg-teal-600 shadow-teal-500/20 shadow-lg"
            radius="sm"
          >
            Sign up
          </Button>
        </NavbarItem>

        <NavbarMenuToggle className="lg:hidden" />
      </NavbarContent>

      {/* MOBILE MENU */}
      <NavbarMenu className="backdrop-blur-xl bg-background/80 px-4">
        {NAV.map((item) => (
          <NavbarMenuItem key={item.href}>
            <LocaleLink
              href={item.href}
              className="text-lg py-2 block hover:text-teal-400"
            >
              {t[item.key as keyof typeof t] ?? item.fallback}
            </LocaleLink>
          </NavbarMenuItem>
        ))}

        <div className="flex flex-col gap-2 mt-3">
          <Button as={LocaleLink} href="/auth/login" variant="bordered">
            Log in
          </Button>
          <Button as={LocaleLink} href="/auth/signup" className="bg-teal-500 text-white">
            Sign up
          </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
