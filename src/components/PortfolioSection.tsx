"use client";

import React, { useEffect, useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const portfolioItems = [
  {
    id: 1,
    before: "/images/new-before.png",
    after: "/images/new-after.png"
  },
  {
    id: 2,
    before: "/images/before-2.png",
    after: "/images/after-2.png"
  },
  {
    id: 3,
    before: "/images/before-1.png",
    after: "/images/after-1.png"
  }
];

export default function PortfolioSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="pt-20 pb-10 lg:py-20 bg-background relative overflow-hidden" id="portofoliu">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Portofoliu</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Cazuri clinice</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/3]">
              {isMounted ? (
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={item.after} alt="După" />}
                  itemTwo={<ReactCompareSliderImage src={item.before} alt="Înainte" />}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-900/50" />
              )}
              
              <div className="absolute bottom-3 left-3 font-bold text-white text-sm md:text-base drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] z-10 pointer-events-none">
                DUPĂ
              </div>
              <div className="absolute bottom-3 right-3 font-bold text-white text-sm md:text-base drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] z-10 pointer-events-none">
                ÎNAINTE
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/portofoliu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-500 text-primary-950 font-bold text-lg hover:bg-accent-400 hover:scale-105 transition-all shadow-xl shadow-accent-500/20"
          >
            Vezi mai multe cazuri
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
