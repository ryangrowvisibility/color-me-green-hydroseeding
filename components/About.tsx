export default function About() {
  return (
    <section id="about" className="py-24 bg-[oklch(0.92_0.01_85)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xs font-600 uppercase tracking-widest text-[oklch(0.48_0.14_145)] mb-3">About Brett</p>
          <h2 className="font-[family-name:var(--font-display)] font-900 uppercase text-[clamp(1.8rem,3.5vw,2.8rem)] text-[oklch(0.15_0.04_243)] mb-6 leading-tight">
            Nearly three decades of precision seeding
          </h2>
          <div className="font-[family-name:var(--font-body)] text-[oklch(0.38_0.05_243)] leading-relaxed space-y-4">
            <p>
              Brett Reinke founded Color Me Green Hydroseeding in 1998. In the years since, he&apos;s built a reputation across Fresno and the Central Valley for doing exacting, reliable work — the kind that holds up on a steep slope or a half-acre lawn.
            </p>
            <p>
              Most hydroseeding contractors work with general landscaping licenses. Brett holds two active CA Contractor Licenses specifically for landscaping and hydroseed spraying, plus a BBB A+ rating. That&apos;s not typical in this industry.
            </p>
            <p>
              The business is built on contractor referrals and word-of-mouth — because when something needs to grow reliably and stay put, builders and developers come back to Brett.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-[oklch(0.20_0.06_243)] rounded-2xl p-8 text-white">
            <p className="font-[family-name:var(--font-display)] font-900 text-5xl text-[oklch(0.72_0.15_87)] mb-2">1998</p>
            <p className="font-[family-name:var(--font-display)] text-sm font-600 uppercase tracking-wide text-white/80">Year Founded</p>
            <p className="font-[family-name:var(--font-body)] text-white/60 text-sm mt-2">27+ years serving Fresno and the Central Valley</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[oklch(0.97_0.008_85)] rounded-xl p-5 border border-[oklch(0.88_0.01_85)]">
              <p className="font-[family-name:var(--font-display)] font-900 text-2xl text-[oklch(0.48_0.14_145)] mb-1">#1033250</p>
              <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-wide text-[oklch(0.40_0.05_243)]">CA License<br />Landscaping</p>
            </div>
            <div className="bg-[oklch(0.97_0.008_85)] rounded-xl p-5 border border-[oklch(0.88_0.01_85)]">
              <p className="font-[family-name:var(--font-display)] font-900 text-2xl text-[oklch(0.48_0.14_145)] mb-1">#975046</p>
              <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-wide text-[oklch(0.40_0.05_243)]">CA License<br />Hydroseed Spraying</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
