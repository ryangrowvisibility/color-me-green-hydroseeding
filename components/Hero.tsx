export default function Hero() {
  return (
    <section className="min-h-[100dvh] pt-16 bg-[oklch(0.20_0.06_243)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-4xl">
          {/* Trust bar */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in">
            {["CA License #1033250","CA License #975046","BBB A+","Since 1998"].map((tag) => (
              <span key={tag} className="font-[family-name:var(--font-display)] text-xs font-600 uppercase tracking-wide border border-white/20 text-white/70 px-3 py-1.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-[family-name:var(--font-display)] font-900 text-[clamp(3rem,7vw,6rem)] leading-[0.9] uppercase text-white mb-6 animate-fade-up delay-100">
            27 Years of<br />
            <span className="text-[oklch(0.48_0.14_145)]">Hydroseeding</span><br />
            Excellence
          </h1>

          <p className="font-[family-name:var(--font-body)] text-[oklch(0.68_0.04_243)] text-xl leading-relaxed mb-4 max-w-[52ch] animate-fade-up delay-200">
            Color Me Green Hydroseeding brings nearly three decades of expertise to residential lawns, commercial projects, erosion control, and large-scale land seeding across Fresno and the Central Valley.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[oklch(0.55_0.05_243)] text-sm leading-relaxed mb-12 max-w-[52ch] animate-fade-up delay-200">
            Owner Brett Reinke. Two active CA Contractor Licenses. BBB A+. The Central Valley&apos;s specialist when the job needs to be done right.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <a href="tel:5592174703"
              className="font-[family-name:var(--font-display)] font-700 uppercase tracking-wider text-sm bg-[oklch(0.72_0.15_87)] text-[oklch(0.15_0.04_243)] px-8 py-4 rounded hover:bg-[oklch(0.80_0.14_87)] transition-colors duration-200 active:scale-[0.97] inline-flex items-center gap-2">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.48 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call (559) 217-4703
            </a>
            <a href="#services"
              className="font-[family-name:var(--font-display)] font-700 uppercase tracking-wider text-sm border border-white/30 text-white px-8 py-4 rounded hover:bg-white/10 transition-colors duration-200">
              Our Services
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10 animate-fade-up delay-400">
            {[
              { n: "27", u: "Years", l: "In Business" },
              { n: "2", u: "Active CA", l: "Contractor Licenses" },
              { n: "A+", u: "BBB", l: "Rating" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-[family-name:var(--font-display)] font-900 text-[clamp(2.5rem,4vw,3.5rem)] text-[oklch(0.72_0.15_87)] leading-none">{s.n}</p>
                <p className="font-[family-name:var(--font-display)] font-600 text-white/90 text-sm uppercase tracking-wide leading-tight">{s.u}</p>
                <p className="font-[family-name:var(--font-display)] text-white/40 text-xs uppercase tracking-wide">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
