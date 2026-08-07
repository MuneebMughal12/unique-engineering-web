"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { company } from "@/data/company";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[500] transition-all duration-300 ${
          solid ? "bg-white/95 shadow-[0_1px_20px_rgba(20,24,31,0.08)] backdrop-blur" : "bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link href="/" className="relative h-[74px] w-[74px] shrink-0 sm:h-[88px] sm:w-[88px]" aria-label="Bricks N Builders home">
            <Image src="/img/logo.png" alt="Bricks N Builders" fill sizes="88px" priority className="object-contain" />
          </Link>

          {/* desktop */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => {
              const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-[#c9a14a]" : "text-[#444b54] hover:text-[#c9a14a]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#14181f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c9a14a] sm:inline-block"
            >
              Get Consultation
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[600] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className={`block h-[2px] w-6 bg-[#14181f] transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-[2px] w-6 bg-[#14181f] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] w-6 bg-[#14181f] transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[550] bg-white lg:hidden"
          >
            <nav className="relative flex h-full flex-col justify-center gap-1 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.08 }}
                >
                  <Link href={l.href} className="block py-2.5 text-3xl font-extrabold uppercase tracking-tight text-[#14181f]">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8">
                <Link href="/contact" className="inline-block rounded-full bg-[#c9a14a] px-6 py-3 text-sm font-semibold text-white">
                  Get Consultation
                </Link>
                <p className="mt-5 text-sm text-[#8a929c]">{company.offices[0].phones[0]}</p>
                <p className="text-sm text-[#8a929c]">{company.email}</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
