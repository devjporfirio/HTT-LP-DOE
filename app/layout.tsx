import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { THEME_COLOR, siteConfig } from "@/config/site";
import { fontRubik, fontLato } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { HeadContent } from "@/components/utils/head";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  abstract: siteConfig.description,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: "index,follow",
  generator: "Next.js",
  referrer: "origin",
  applicationName: siteConfig.name,
  assets: "/assets",
  category: "Saúde",
  classification: "Banco de óvulos",
  keywords: [
    "doação de óvulos",
    "banco de óvulos",
    "reprodução assistida",
    "clínica de fertilidade",
    "doadora de óvulos",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  initialScale: 1.0,
  viewportFit: "auto",
  colorScheme: "light",
  interactiveWidget: "resizes-visual",
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  width: "device-width",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        className="scroll-smooth scroll-pt-20 lg:scroll-pt-24 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent scrollbar-track-rounded  scrollbar-w-1.5"
        lang="pt-BR"
      >
        <HeadContent />
        <body
          className={cn(
            "min-h-svh bg-white overscroll-none font-lato antialiased ",
            fontLato.variable,
            fontRubik.variable
          )}
        >
          <div vaul-drawer-wrapper="">
            <div className="relative flex flex-col min-h-svh bg-white">
              <div data-wrapper="" className="flex flex-col flex-1">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
