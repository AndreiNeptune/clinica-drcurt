"use client";

import {
  Sparkles,
  CircleDot,
  Sun,
  Crown,
  AlignLeft,
  Puzzle,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Fațete Dentare",
    description:
      "Învelișuri din material premium care acoperă suprafața dinților, corectând culoarea, forma și alinierea. Rezultate naturale, vizibile imediat.",
  },
  {
    icon: <CircleDot className="w-7 h-7" />,
    title: "Implanturi Dentare",
    description:
      "Înlocuirea sigură a dinților lipsă cu implanturi de ultimă generație, oferind funcționalitate și estetică identică dinților naturali.",
  },
  {
    icon: <Sun className="w-7 h-7" />,
    title: "Albire Profesională",
    description:
      "Albire dentară profesională în cabinet, cu gel de înaltă concentrație, în condiții monitorizate. Rezultate vizibile imediat, fără durere.",
  },
  {
    icon: <Crown className="w-7 h-7" />,
    title: "Coroane Dentare",
    description:
      "Calote dentare care acoperă și protejează dinții deteriorați, restabilind rezistența, funcționalitatea și estetica naturală a zâmbetului.",
  },
  {
    icon: <AlignLeft className="w-7 h-7" />,
    title: "Aparate Dentare",
    description:
      "Dispozitive ortodontice moderne pentru alinierea dinților și corectarea mușcăturii, îmbunătățind sănătatea și estetica dentară.",
  },
  {
    icon: <Puzzle className="w-7 h-7" />,
    title: "Protetică Dentară",
    description:
      "Soluții protetice complete — de la proteze parțiale la reabilitare orală totală — pentru un zâmbet sănătos și funcțional.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="servicii" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            Servicii Medicale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-5">
            Tratamente{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Stomatologice
            </span>
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Oferim o gamă completă de servicii stomatologice de înaltă calitate,
            utilizând cele mai avansate tehnici și materiale premium.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 0.1}
            >
              <div className="group relative h-full p-8 bg-white rounded-2xl border border-neutral-100 shadow-soft transition-all duration-500 hover:shadow-card hover:border-primary-200 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-5 text-[15px]">
                  {service.description}
                </p>

                {/* Arrow link */}
                <a
                  href="/servicii"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-primary-800"
                >
                  Află mai multe
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Hover accent border */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
