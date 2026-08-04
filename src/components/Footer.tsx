import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Footer() {
  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <footer className="bg-[#14181f] text-[#c3c8d0]">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1300px] flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to build your next project?
            </p>
            <p className="mt-2 max-w-xl text-sm text-[#8a929c]">
              Partner with Rawalpindi&rsquo;s trusted construction team for transparent budgeting,
              quality material and on-time delivery.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-[#c9a14a] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Consultation
          </Link>
        </div>
      </div>

      {/* columns */}
      <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#c9a14a] to-[#a07d2c] text-sm font-extrabold text-white">
              B
            </span>
            <span className="text-[15px] font-extrabold uppercase tracking-tight text-white">
              Bricks <span className="text-[#c9a14a]">N</span> Builders
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8a929c]">
            A Rawalpindi-based design and construction company delivering homes and commercial
            projects from first drawing to final handover.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Our Team", "/team"],
              ["Projects", "/projects"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-[#8a929c] transition-colors hover:text-[#c9a14a]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-[#8a929c] transition-colors hover:text-[#c9a14a]">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-[#8a929c]">
            <p>{company.offices[0].lines.join(", ")}</p>
            <a href={`mailto:${company.email}`} className="block transition-colors hover:text-[#c9a14a]">
              {company.email}
            </a>
            {company.offices[0].phones.map((p) => (
              <a key={p} href={`tel:${p}`} className="block transition-colors hover:text-[#c9a14a]">
                {p}
              </a>
            ))}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-block text-[#25D366] transition-opacity hover:opacity-80">
              WhatsApp us →
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1300px] px-5 py-5 text-xs text-[#6a727e] sm:px-8">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
