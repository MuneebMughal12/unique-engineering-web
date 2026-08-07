import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { getSiteSettings, getTeamMembers } from "@/lib/content-repo";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Our Team",
  description: "Meet the Bricks N Builders team of experienced engineers, architects and construction site professionals in Rawalpindi.",
  path: "/team",
});

export default async function TeamPage() {
  const [team, settings] = await Promise.all([getTeamMembers(), getSiteSettings()]);
  return (
    <>
      <PageHeader title="Our Team" crumb="Team" />

      {/* CEO message */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f5f7fa] card-shadow">
            <Image src={settings.ceoPhoto} alt={settings.ceoName} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Message from the CEO</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">{settings.ceoHeading}</h2>
            <div className="gold-rule mt-5" />
            <p className="mt-6 text-lg leading-relaxed text-[#444b54]">&ldquo;{settings.ceoMessage}&rdquo;</p>
            <div className="mt-6">
              <p className="text-lg font-bold text-[#14181f]">{settings.ceoName}</p>
              <p className="text-sm font-medium text-[#c9a14a]">{settings.ceoRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* team grid */}
      <section className="bg-[#f5f7fa] py-16 sm:py-20">
        <div className="mx-auto max-w-[1300px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Meet the Team</p>
            <h2 className="heading mt-3 text-3xl sm:text-4xl">Led by Experience, Driven by Excellence</h2>
            <div className="gold-rule mx-auto mt-5" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <div key={m.name + i} className="group overflow-hidden rounded-xl border border-[#eef0f3] bg-white card-shadow-hover">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f7fa]">
                  <Image src={m.photo} alt={m.name} fill sizes="(max-width:1024px) 100vw, 25vw" className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#14181f]">{m.name}</h3>
                  <p className="text-sm font-medium text-[#c9a14a]">{m.role}</p>
                  {m.bio && <p className="mt-2 text-sm leading-relaxed text-[#6a727e]">{m.bio}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
