"use client";

import { useEffect, useState, useRef } from "react";
import { Award, Gem, SmilePlus, BadgePercent } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface TrustPillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const pillars: TrustPillar[] = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Experiență & Profesionalism",
    description: "Medici specialiști cu experiență vastă în estetică dentară și proceduri complexe de reabilitare orală.",
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Materiale Premium",
    description: "Utilizăm exclusiv materiale de cea mai înaltă calitate, certificate și biocompatibile, pentru rezultate de durată.",
  },
  {
    icon: <SmilePlus className="w-8 h-8" />,
    title: "Proceduri Fără Durere",
    description: "Tehnici moderne și anestezice de ultimă generație pentru o experiență confortabilă, complet lipsită de disconfort.",
  },
  {
    icon: <BadgePercent className="w-8 h-8" />,
    title: "Prețuri Competitive",
    description: "Tarife accesibile pentru servicii premium, cu opțiuni flexibile de plată și transparență totală în prețuri.",
  },
];

interface CounterStat {
  value: number;
  suffix: string;
  label: string;
}

const stats: CounterStat[] = [
  { value: 10, suffix: "+", label: "Ani de Experiență" },
  { value: 2500, suffix: "+", label: "Pacienți Mulțumiți" },
  { value: 5000, suffix: "+", label: "Tratamente Realizate" },
  { value: 100, suffix: "%", label: "Dedicare & Pasiune" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(value / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function TrustSection() {
  return (
    <section id="de-ce-noi" className="pt-10 pb-24 lg:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            De Ce Noi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-5">
            De ce{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Clinica Doctor Curt
            </span>
            ?
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Ne dedicăm sănătății și frumuseții zâmbetului dumneavoastră cu profesionalism,
            dedicare și cele mai avansate tehnologii disponibile.
          </p>
        </AnimatedSection>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.12}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-soft text-primary-600 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-card group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Counter */}
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10" />

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 lg:p-14">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-primary-200/80 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
