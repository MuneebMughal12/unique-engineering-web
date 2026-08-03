import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { company } from "@/data/company";

const jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jamjuree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bricksnbuilders.example"),
  title: {
    default: `${company.name} | Design, Construction & Map Approval`,
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
  ],
  openGraph: {
    title: `${company.name} | Design, Construction & Map Approval`,
    description: company.intro.slice(0, 158),
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jamjuree.variable} antialiased`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
