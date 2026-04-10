"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.20_0.06_243)] border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[oklch(0.48_0.14_145)] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M12 22V12m0 0C12 7 7 3 2 3c0 5 4 9 10 9zm0 0c0-5 5-9 10-9-0 5-4 9-10 9"/></svg>
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] font-800 text-white text-sm leading-none tracking-wider uppercase">Color Me Green</p>
            <p className="font-[family-name:var(--font-display)] text-[oklch(0.72_0.15_87)] text-[10px] uppercase tracking-widest">Hydroseeding</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Services","About","Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="font-[family-name:var(--font-display)] text-sm font-600 tracking-wider uppercase text-white/60 hover:text-white transition-colors duration-200">{item}</a>
          ))}
          <a href="tel:5592174703"
            className="font-[family-name:var(--font-display)] font-700 text-sm bg-[oklch(0.72_0.15_87)] text-[oklch(0.15_0.04_243)] px-5 py-2.5 rounded hover:bg-[oklch(0.80_0.14_87)] transition-colors duration-200 active:scale-[0.97]">
            (559) 217-4703
          </a>
        </div>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="md:hidden p-2 text-white cursor-pointer">
          {open
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></svg>
          }
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-[oklch(0.20_0.06_243)] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {["Services","About","Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-display)] font-600 uppercase tracking-wide text-white/80">{item}</a>
          ))}
          <a href="tel:5592174703" className="font-[family-name:var(--font-display)] font-700 bg-[oklch(0.72_0.15_87)] text-[oklch(0.15_0.04_243)] px-4 py-3 rounded text-center">(559) 217-4703</a>
        </div>
      )}
    </header>
  );
}
