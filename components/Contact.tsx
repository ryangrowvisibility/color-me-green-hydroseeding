export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[oklch(0.97_0.008_85)]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xs font-600 uppercase tracking-widest text-[oklch(0.48_0.14_145)] mb-3">Contact</p>
          <h2 className="font-[family-name:var(--font-display)] font-900 uppercase text-[clamp(1.8rem,4vw,3rem)] text-[oklch(0.15_0.04_243)] mb-6 leading-tight">
            Ready to start your project?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[oklch(0.40_0.05_243)] leading-relaxed mb-10">
            Whether it&apos;s a residential lawn, a construction site erosion issue, or a large-scale seeding project — call Brett directly. He&apos;ll give you a straight answer on what it takes to get results.
          </p>

          <div className="space-y-4 mb-10">
            <a href="tel:5592174703" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded bg-[oklch(0.20_0.06_243/0.08)] flex items-center justify-center text-[oklch(0.20_0.06_243)] group-hover:bg-[oklch(0.20_0.06_243)] group-hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.48 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] font-700 text-[oklch(0.15_0.04_243)]">(559) 217-4703</p>
                <p className="font-[family-name:var(--font-display)] text-xs text-[oklch(0.42_0.05_243)]">Primary line — Brett Reinke</p>
              </div>
            </a>
            <a href="tel:5594780088" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded bg-[oklch(0.20_0.06_243/0.08)] flex items-center justify-center text-[oklch(0.20_0.06_243)] group-hover:bg-[oklch(0.20_0.06_243)] group-hover:text-white transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.48 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] font-700 text-[oklch(0.15_0.04_243)]">(559) 478-0088</p>
                <p className="font-[family-name:var(--font-display)] text-xs text-[oklch(0.42_0.05_243)]">Alternate line</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded bg-[oklch(0.20_0.06_243/0.08)] flex items-center justify-center text-[oklch(0.20_0.06_243)] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] font-700 text-[oklch(0.15_0.04_243)]">6500 W Rialto Ave, Fresno, CA 93723</p>
                <p className="font-[family-name:var(--font-display)] text-xs text-[oklch(0.42_0.05_243)]">Fresno & Central Valley service area</p>
              </div>
            </div>
          </div>

          <a href="https://www.yelp.com/biz/color-me-green-hydroseeding-fresno-2" target="_blank" rel="noopener noreferrer"
            className="font-[family-name:var(--font-display)] text-xs font-700 uppercase tracking-wide text-[oklch(0.48_0.14_145)] hover:text-[oklch(0.20_0.06_243)] transition-colors duration-200">
            View on Yelp →
          </a>
        </div>

        <div className="bg-[oklch(0.20_0.06_243)] rounded-2xl p-10 text-white">
          <p className="font-[family-name:var(--font-display)] font-900 uppercase text-3xl mb-1">Get a Project Quote</p>
          <p className="font-[family-name:var(--font-body)] text-white/60 text-sm leading-relaxed mb-8">
            Residential lawns, erosion control, slopes, construction sites — describe your project and Brett will give you a clear picture of what it takes.
          </p>
          <div className="space-y-3">
            <a href="tel:5592174703"
              className="block w-full font-[family-name:var(--font-display)] font-700 uppercase tracking-wider text-center bg-[oklch(0.72_0.15_87)] text-[oklch(0.15_0.04_243)] py-4 rounded hover:bg-[oklch(0.80_0.14_87)] transition-colors duration-200 active:scale-[0.97]">
              Call (559) 217-4703
            </a>
            <a href="tel:5594780088"
              className="block w-full font-[family-name:var(--font-display)] font-700 uppercase tracking-wider text-center border border-white/30 text-white/80 py-4 rounded hover:bg-white/10 transition-colors duration-200">
              Alternate: (559) 478-0088
            </a>
          </div>
          <p className="font-[family-name:var(--font-display)] text-xs text-white/30 mt-6 text-center uppercase tracking-wide">
            CA Lic. #1033250 · #975046 · BBB A+
          </p>
        </div>
      </div>
    </section>
  );
}
