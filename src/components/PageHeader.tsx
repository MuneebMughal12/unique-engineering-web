export default function PageHeader({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative overflow-hidden bg-[#14181f] pb-14 pt-28 text-white sm:pt-32">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#c9a14a]/15 blur-3xl" />
      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8">
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-[#8a929c]">
          <span className="text-[#c9a14a]">Home</span> / {crumb}
        </p>
      </div>
    </section>
  );
}
