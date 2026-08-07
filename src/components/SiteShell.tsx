"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import LiveContentRefresh from "@/components/LiveContentRefresh";

/**
 * Public site chrome wraps every page except the admin panel, which uses its
 * own clean, dark shell.
 */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <SmoothScroll />
      <LiveContentRefresh />
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
