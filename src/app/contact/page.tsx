import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bricks N Builders — offices in Rehbar Housing Society (Chakri Road) and Dhamial Road, Rawalpindi.",
};

export default function ContactPage() {
  const wa = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <>
      <PageHeader title="Contact Us" crumb="Contact" />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* form */}
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">Let&rsquo;s talk about your project</h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#444b54]">
              Tell us the scope and location — we&rsquo;ll come back with a plan and a clear estimate.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* details */}
          <div className="space-y-4">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-[#eef0f3] bg-white p-5 card-shadow transition-colors hover:border-[#25D366]">
              <div>
                <p className="text-xs font-semibold text-[#8a929c]">WhatsApp</p>
                <p className="font-bold text-[#14181f]">{company.offices[0].phones[0]}</p>
              </div>
              <span className="text-[#25D366]">→</span>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center justify-between rounded-xl border border-[#eef0f3] bg-white p-5 card-shadow transition-colors hover:border-[#c9a14a]">
              <div>
                <p className="text-xs font-semibold text-[#8a929c]">Email</p>
                <p className="font-bold text-[#14181f]">{company.email}</p>
              </div>
              <span className="text-[#c9a14a]">→</span>
            </a>

            {company.offices.map((o) => (
              <div key={o.label} className="rounded-xl border border-[#eef0f3] bg-[#f5f7fa] p-5">
                <p className="text-xs font-semibold text-[#c9a14a]">{o.label}</p>
                <p className="mt-2 text-sm text-[#444b54]">{o.lines.join(", ")}</p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                  {o.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="text-sm font-medium text-[#14181f] hover:text-[#c9a14a]">{p}</a>
                  ))}
                </div>
              </div>
            ))}

            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#eef0f3]">
              <iframe
                title="Bricks N Builders — Rawalpindi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.95%2C33.52%2C73.15%2C33.66&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
