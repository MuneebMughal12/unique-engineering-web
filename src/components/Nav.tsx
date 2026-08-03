"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { company } from "@/data/company";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
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
        className={`fixed inset-x-0 top-0 z-[500] transition-colors duration-300 ${
          solid ? "bg-[#0a0a0a]/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="group flex flex-col leading-none">
            <span className="text-sm font-bold uppercase tracking-tight sm:text-base">
              <span className="gold-text">Bricks</span> N{" "}
              <span className="gold-text">Builders</span>
            </span>
            <span className="mt-1 hidden text-[10px] tracking-[0.18em] text-[#8a8a8a] sm:block">
              DESIGN · CONSTRUCTION · MAP APPROVAL
            </span>
          </Link>

          {/* desktop */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => {
              const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative text-sm transition-colors ${
                    active ? "text-white" : "text-[#8a8a8a] hover:text-white"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#d2a24c]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${company.offices[0].phones[0]}`}
              className="hidden text-sm text-[#8a8a8a] transition-colors hover:text-white md:block"
            >
              {company.offices[0].phones[0]}
            </a>
            <Link
              href="/contact"
              className="hidden rounded-full border border-[#d2a24c] px-4 py-2 text-sm text-[#d2a24c] transition-colors hover:bg-[#d2a24c] hover:text-[#0a0a0a] sm:block"
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[600] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`block h-[2px] w-6 bg-white transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-white transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-white transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
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
            className="fixed inset-0 z-[550] bg-[#0a0a0a] lg:hidden"
          >
            <div className="glow absolute inset-0" />
            <nav className="relative flex h-full flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.08 }}
                >
                  <Link
                    href={l.href}
                    className="block py-2 text-4xl font-bold uppercase tracking-tight text-white"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                className="mt-8 space-y-1 text-sm text-[#8a8a8a]"
              >
                <a href={`mailto:${company.email}`} className="block">
                  {company.email}
                </a>
                {company.offices[0].phones.map((p) => (
                  <a key={p} href={`tel:${p}`} className="block">
                    {p}
                  </a>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
