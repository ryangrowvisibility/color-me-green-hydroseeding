const services = [
  {
    title: "Hydroseeding",
    desc: "Hydraulic application of a seed mixture, mulch, fertilizer, and tackifier. Ideal for new lawns, slopes, and large parcels that would be impractical to hand-seed. Covers any size area efficiently.",
    highlight: true,
  },
  {
    title: "Drill Seeding",
    desc: "Mechanical seeding directly into soil for precise, deep-rooted establishment. Used for agricultural and commercial land applications requiring reliable germination.",
    highlight: false,
  },
  {
    title: "Erosion Control",
    desc: "Comprehensive solutions for slopes, hillsides, construction sites, and drainage areas. Includes hydromulching and protective blanket applications to stabilize bare soil.",
    highlight: false,
  },
  {
    title: "Slope Stabilization",
    desc: "Specialized treatments for steep or unstable slopes — preventing soil erosion and encouraging vegetation establishment on difficult terrain.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[oklch(0.97_0.008_85)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs font-600 uppercase tracking-widest text-[oklch(0.48_0.14_145)] mb-3">Services</p>
            <h2 className="font-[family-name:var(--font-display)] font-900 uppercase text-[clamp(2rem,4vw,3.2rem)] text-[oklch(0.15_0.04_243)] leading-tight mb-6">
              What we do
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[oklch(0.40_0.05_243)] leading-relaxed">
              From a backyard lawn in Fresno to a large-scale erosion control project across the Central Valley — we have the equipment, licenses, and 27 years of know-how to get it done.
            </p>
          </div>
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.title}
                className={`rounded-xl p-7 ${s.highlight ? 'bg-[oklch(0.20_0.06_243)] text-white' : 'bg-[oklch(0.92_0.01_85)]'}`}>
                {s.highlight && (
                  <span className="font-[family-name:var(--font-display)] text-xs font-700 uppercase tracking-widest text-[oklch(0.72_0.15_87)] mb-2 block">Most Common Service</span>
                )}
                <h3 className={`font-[family-name:var(--font-display)] font-800 uppercase tracking-wide text-base mb-2 ${s.highlight ? 'text-white' : 'text-[oklch(0.15_0.04_243)]'}`}>{s.title}</h3>
                <p className={`font-[family-name:var(--font-body)] text-sm leading-relaxed ${s.highlight ? 'text-white/70' : 'text-[oklch(0.40_0.05_243)]'}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
