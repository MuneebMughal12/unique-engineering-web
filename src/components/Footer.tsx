import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Footer() {
  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <footer className="bg-[#14181f] text-[#c3c8d0]">
      {/* CTA banner */}
      <Link
        href="/contact"
        aria-label="Get a construction consultation"
        className="group relative isolate block min-h-[390px] overflow-hidden border-b border-white/10"
      >
        <Image
          src="/img/villa-karen.jpg"
          alt="Bricks N Builders completed construction project"
          fill
          sizes="100vw"
          className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(46,19,15,.82),rgba(24,3,4,.93))]" />
        <div className="mx-auto flex min-h-[390px] max-w-[1300px] items-center justify-center px-5 py-16 text-center sm:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c9a14a]">Get Started</p>
            <p className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready to Build Your Next Project?
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Partner with Islamabad and Rawalpindi&rsquo;s trusted construction team for premium
              material sourcing, transparent budgeting, and engineering excellence delivered on time.
            </p>
            <span className="mt-7 inline-block rounded-sm bg-[#31589a] px-7 py-3.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#c9a14a]">
              Get Consultation
            </span>
          </div>
        </div>
      </Link>

      {/* columns */}
      <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="relative block h-[120px] w-[126px] overflow-hidden rounded-sm bg-[#242321]" aria-label="Bricks N Builders home">
            <Image src="/img/bricks-n-builders-logo.jpeg" alt="Bricks N Builders" fill sizes="126px" className="object-contain" />
          </Link>
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
