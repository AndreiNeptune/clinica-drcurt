import {
  Sparkles,
  CircleDot,
  Sun,
  Crown,
  AlignLeft,
  Puzzle,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AppointmentCTA from "@/components/AppointmentCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii Stomatologice Premium | Clinica Doctor Curt",
  description:
    "Descoperă gama de servicii stomatologice oferite de Clinica Doctor Curt: implantur dentare, fațete, albire profesională, coroane dentare și ortodonție în București.",
};

const services = [
  {
    icon: <CircleDot className="w-8 h-8" />,
    title: "Implant Dentar",
    description:
      "Operația de implant dentar este o procedură care înlocuiește rădăcinile dinților cu stâlpi metalici, asemănători unor șuruburi, și înlocuiește dinții deteriorați sau lipsă cu dinți artificiali care arată și funcționează la fel ca cei adevărați.",
    features: ["Biocompatibilitate maximă", "Aspect natural", "Durabilitate pe viață"],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Fațete Dentare",
    description:
      "Învelișuri din material premium concepute pentru a acoperi suprafața dinților și pentru a le îmbunătăți aspectul. Se utilizează pentru a corecta forma, culoarea și dimensiunea zâmbetului.",
    features: ["Rezistență la pete", "Procedură minim invazivă", "Rezultat estetic perfect"],
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Albire Profesională",
    description:
      "Cea mai populară procedură dentară cosmetică, realizată în cabinet sub supraveghere medicală. Oferă rezultate vizibile imediat, folosind geluri de albire cu concentrație controlată.",
    features: ["Rezultate într-o singură ședință", "Fără sensibilitate post-operatorie", "Zâmbet mult mai alb"],
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Coroane Dentare",
    description:
      "Calote dentare care acoperă și protejează dinții deteriorați sau implanturile. Restabilesc rezistența dinților și oferă funcționalitate uimitoare pentru mestecat și măcinare.",
    features: ["Zirconiu sau ceramică premium", "Rezistență mecanică ridicată", "Potrivire anatomică perfectă"],
  },
  {
    icon: <AlignLeft className="w-8 h-8" />,
    title: "Aparate Dentare",
    description:
      "Dispozitive ortodontice care aliniază și îndreaptă dinții, ajutând la poziționarea lor corectă în raport cu mușcătura. Esențiale pentru sănătatea dentară și estetica facială.",
    features: ["Soluții moderne și discrete", "Corecție ortodontică eficientă", "Pentru copii și adulți"],
  },
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "Protetică Dentară",
    description:
      "Înlocuirea sau repararea dinților lipsă ori deteriorați. Soluții protetice care îmbunătățesc zâmbetul, capacitatea de a mesteca și sănătatea osului maxilar.",
    features: ["Proteze fixe și mobilizabile", "Reabilitări orale complexe", "Materiale de ultimă generație"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-400/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary-400/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent-300 text-sm font-semibold mb-6">
              Servicii Medicale
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
              Tratamente{" "}
              <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-500 bg-clip-text text-transparent">
                Stomatologice
              </span>
            </h1>
            <p className="text-lg text-primary-100/70 max-w-3xl mx-auto leading-relaxed">
              Descoperă excelența în estetică și sănătate dentară. La Clinica Doctor Curt, îmbinăm tehnologia de ultimă oră cu grija pentru pacient pentru a oferi rezultate de excepție.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                delay={index * 0.1}
                className="group relative"
              >
                <div className="h-full p-8 lg:p-10 bg-white rounded-3xl border border-neutral-100 shadow-soft transition-all duration-500 hover:shadow-card hover:border-primary-200">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left: Icon & Title */}
                    <div className="md:w-1/3">
                      <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary-600 group-hover:text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors">
                        {service.title}
                      </h3>
                      <div className="hidden md:block">
                        <div className="h-1 w-12 bg-accent-400 rounded-full" />
                      </div>
                    </div>

                    {/* Right: Description & Features */}
                    <div className="md:w-2/3">
                      <p className="text-neutral-500 leading-relaxed mb-8 text-lg">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-neutral-700 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                         <a
                          href="/programare"
                          className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition-colors group/link"
                        >
                          Programează o consultație
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-12 bg-primary-50 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-900">100%</p>
              <p className="text-sm text-primary-600 font-medium uppercase tracking-wider">Fără durere</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-900">Premium</p>
              <p className="text-sm text-primary-600 font-medium uppercase tracking-wider">Materiale</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-900">24h</p>
              <p className="text-sm text-primary-600 font-medium uppercase tracking-wider">Timp răspuns</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary-900">Top</p>
              <p className="text-sm text-primary-600 font-medium uppercase tracking-wider">Tehnologie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </div>
  );
}
