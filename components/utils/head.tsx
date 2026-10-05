"use client";

import { siteConfig } from "@/config/site";
import Head from "next/head";
import { usePathname } from "next/navigation";

interface HeadContentProps {
  children?: React.ReactNode;
}

export function HeadContent({ children }: HeadContentProps) {
  const pathname = usePathname();
  const url = `${siteConfig?.url}${pathname}`;

  return (
    <Head>
      <link rel="canonical" href={url} />
      <meta name="googlebot" content="index, follow" />
      {children}
    </Head>
  );
}
