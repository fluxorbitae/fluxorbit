"use client";
import NextLink, { LinkProps } from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

type Props = Omit<LinkProps, "href"> & {
  href: string;
  children: ReactNode;
  locale?: "en" | "tr" | "ar";
  className?: string;
};

export default function LocaleLink({ href, children, locale, className, ...rest }: Props) {
  const params = useParams<{ locale?: string }>();
  const loc = (locale ?? params?.locale ?? "en") as "en" | "tr" | "ar";

  // href her zaman /locale/... olacak şekilde birleştir
  const clean = href.startsWith("/") ? href : `/${href}`;
  const finalHref = `/${loc}${clean}`;

  return (
    <NextLink href={finalHref} className={className} {...rest}>
      {children}
    </NextLink>
  );
}
