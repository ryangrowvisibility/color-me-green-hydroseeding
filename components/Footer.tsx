export default function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.04_243)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 pb-8 border-b border-white/10">
          <div>
            <p className="font-[family-name:var(--font-display)] font-900 uppercase tracking-wider text-white text-lg">Color Me Green Hydroseeding</p>
            <p className="font-[family-name:var(--font-display)] text-xs text-white/30 uppercase tracking-wide">CMG Hydroseeding, Inc. · Fresno, CA · Est. 1998</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {["Services","About","Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="font-[family-name:var(--font-display)] text-xs font-600 uppercase tracking-wide text-white/40 hover:text-white transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-[family-name:var(--font-display)] text-xs text-white/20">
            &copy; {new Date().getFullYear()} Color Me Green Hydroseeding. CA Lic. #1033250 · #975046
          </p>
          <div className="flex gap-5">
            <a href="tel:5592174703" className="font-[family-name:var(--font-display)] text-xs text-white/40 hover:text-white transition-colors">(559) 217-4703</a>
            <a href="https://www.yelp.com/biz/color-me-green-hydroseeding-fresno-2" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-display)] text-xs text-white/40 hover:text-white transition-colors">Yelp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
