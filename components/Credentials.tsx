const credentials = [
  {
    label: "CA Contractor License",
    value: "#1033250",
    detail: "Landscaping — Active as of 2025",
  },
  {
    label: "CA Contractor License",
    value: "#975046",
    detail: "Hydroseed Spraying — Active",
  },
  {
    label: "BBB Rating",
    value: "A+",
    detail: "Better Business Bureau",
  },
  {
    label: "In Business",
    value: "27+",
    detail: "Years of continuous operation since 1998",
  },
];

export default function Credentials() {
  return (
    <section className="py-20 bg-[oklch(0.20_0.06_243)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-[family-name:var(--font-display)] text-xs font-600 uppercase tracking-widest text-[oklch(0.72_0.15_87)] mb-10">Licenses & Credentials</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((c) => (
            <div key={c.value + c.label} className="bg-white/5 rounded-xl p-6">
              <p className="font-[family-name:var(--font-display)] font-900 text-3xl text-[oklch(0.72_0.15_87)] mb-1">{c.value}</p>
              <p className="font-[family-name:var(--font-display)] font-700 uppercase tracking-wide text-white text-xs mb-1">{c.label}</p>
              <p className="font-[family-name:var(--font-body)] text-white/50 text-xs">{c.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="font-[family-name:var(--font-body)] text-white/50 text-sm max-w-[65ch]">
            Contractor references and license verification available upon request. Brett Reinke is listed on BuildZoom and The Blue Book as CMG Hydroseeding, Inc.
          </p>
        </div>
      </div>
    </section>
  );
}
