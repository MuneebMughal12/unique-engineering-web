import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${company.name} | Construction Company in Rawalpindi & Islamabad`,
    template: `%s | ${company.short}`,
  },
  description: company.intro.slice(0, 158),
  keywords: [
    "construction company Rawalpindi",
    "house construction Islamabad",
    "map approval Rawalpindi",
    "home design and construction",
    "grey structure and finishing",
    "builders in Rawalpindi",
    "builders in Islamabad",
    "turnkey construction Pakistan",
  ],
  authors: [{ name: company.name, url: SITE_URL }],
  creator: company.name,
  publisher: company.name,
  category: "Construction",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${company.name} | Construction Company in Rawalpindi & Islamabad`,
    description: company.intro.slice(0, 158),
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_PK",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1024, height: 1024, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Construction Company in Rawalpindi & Islamabad`,
    description: company.intro.slice(0, 158),
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/img/logo.png",
    apple: "/img/logo.png",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: company.name,
  legalName: company.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.png`,
  image: `${SITE_URL}/img/logo.png`,
  description: company.intro,
  email: company.email,
  telephone: "+92 313 5350050",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.offices[0].lines.join(", "),
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: [
    { "@type": "City", name: "Rawalpindi" },
    { "@type": "City", name: "Islamabad" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92 313 5350050",
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: ["English", "Urdu"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.blurb,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
