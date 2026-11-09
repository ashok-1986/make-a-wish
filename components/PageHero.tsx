export function PageHero({
  title,
  intro,
}: {
  title: string;
  intro: string;
  tone?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0B090E] px-5 pb-16 pt-12 text-white md:px-10 md:pb-24 md:pt-16">
      {/* Background architectural glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[500px] rounded-full bg-purple-950/25 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono font-medium uppercase tracking-[0.2em] text-purple-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          <span>Make a Wish Flagship</span>
        </div>

        <h1 className="mt-5 font-sans text-4xl sm:text-6xl lg:text-[90px] font-medium tracking-[-0.04em] text-white leading-[1.02] text-balance">
          {title}
        </h1>

        <p className="mt-5 max-w-[62ch] text-base sm:text-lg leading-relaxed text-zinc-300">
          {intro}
        </p>
      </div>
    </section>
  );
}
