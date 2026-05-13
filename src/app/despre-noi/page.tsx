"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  Search, 
  Microscope, 
  Quote, 
  Calendar,
  Sparkles,
  Camera,
  Layers,
  CheckCircle2,
  Heart
} from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const techItems = [
  {
    icon: Camera,
    title: "Cameră Digitală Intraorală",
    description: "Permite vizualizarea în detaliu a cavității bucale, facilitând diagnosticul precis și înțelegerea tratamentului de către pacient."
  },
  {
    icon: Search,
    title: "Scanner Intraoral",
    description: "Înlocuim amprentele tradiționale inconfortabile cu scanări digitale ultra-rapide și precise pentru lucrări protetice perfecte."
  },
  {
    icon: Zap,
    title: "Waterlase iPlus",
    description: "Tehnologie laser de ultimă generație pentru tratamente minim invazive, fără durere și cu o recuperare mult mai rapidă."
  },
  {
    icon: Microscope,
    title: "Microscop Stomatologic",
    description: "Precizie extremă în tratamentele de canal și intervențiile chirurgicale, crescând rata de succes a salvării dinților."
  }
];

const testimonials = [
  {
    name: "Leona Nery",
    text: "O echipă de profesioniști desăvârșiți! Am venit cu teamă, dar am plecat cu un zâmbet nou și plină de încredere. Recomand cu drag Clinica Doctor Curt.",
    rating: 5
  },
  {
    name: "Ionuț Bucur",
    text: "Tehnologia de aici este impresionantă. Scanner-ul intraoral a făcut totul mult mai ușor. Rezultatul implantului este peste așteptări.",
    rating: 5
  },
  {
    name: "Adriana Ady",
    text: "Atmosferă caldă și servicii impecabile. Domnul doctor mi-a explicat fiecare pas al tratamentului. Sunt foarte mulțumită!",
    rating: 5
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col whitespace-normal">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/90 to-primary-800/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
            alt="Medical Clinic Interior"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection direction="up" className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-accent-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Excelență în Stomatologie
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Redefining Your Smile with <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">Precision and Care</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Descoperiți un concept modern unde respectul față de pacient și tehnologia de vârf se întâlnesc pentru a crea zâmbete perfecte.
            </p>
            <div className="flex gap-4">
              <a href="/programare" className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-primary-950 font-bold hover:shadow-xl hover:shadow-accent-400/30 transition-all active:scale-95">
                Book a Consultation
              </a>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1760&auto=format&fit=crop"
                  alt="Doctor Team Working"
                  width={800}
                  height={1000}
                  className="object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-4">Misiunea Noastră</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
                Respect, Intimitate și Profesionalism la Cele Mai Înalte Standarde
              </h3>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Bine ați venit! <strong>Clinica Doctor Curt</strong> este o clinică stomatologică modernă, cu un nou sediu înființat în București, la cele mai înalte standarde.
                </p>
                <p>
                  Clinica stomatologică cochetă și primitoare promovează un concept aplicat cu succes în țările occidentale: respectul față de pacient și intimitatea acestuia, dar și față de meseria noastră.
                </p>
                <p>
                  Echipa noastră de stomatologi experimentați și dedicați vă va ajuta să vă recăpătați sănătatea orală și să obțineți zâmbetul pe care îl meritați. Ne concentrăm pe fiecare pacient în parte, asigurându-ne că primiți tratamente personalizate.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">Tratamente Personalizate</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">Echipă Experimentată</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">Atmosferă Relaxantă</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">Confort Sporit</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection direction="up">
              <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-4">Tehnologie Avansată</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Inovație pentru Siguranța Dumneavoastră</h3>
              <p className="text-lg text-neutral-600">
                Utilizăm echipamente de ultimă generație pentru a oferi diagnostice precise și tratamente minim invazive, asigurând cel mai înalt nivel de îngrijire.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techItems.map((item, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 transition-all duration-500">
                    <item.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-4">{item.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-primary-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-900/20 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent-300 text-sm font-medium mb-8">
                <ShieldCheck className="w-4 h-4" />
                Siguranță Garantată
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Sterilizare și Siguranță: Prioritatea Noastră Absolută
              </h2>
              <div className="space-y-6 text-lg text-white/70">
                <p>
                  Controlul infecțiilor în cabinetele noastre este extrem de important pentru noi. Menținem cu strictețe procesele de sterilizare conform standardelor recomandate de <strong>Directia Sanitara Publica (DSP)</strong>.
                </p>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent-400" />
                  </div>
                  <p>
                    Ne mândrim să oferim îngrijirea de care aveți nevoie pentru a vă păstra zâmbetul sănătos într-un mediu protejat.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex-shrink-0 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-accent-400" />
                  </div>
                  <p>
                    Investim continuu în educație și participăm la congrese medicale pentru a rămâne la curent cu noile tehnici și produse.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left">
               <div className="relative group">
                  <div className="absolute -inset-4 bg-accent-400/20 rounded-3xl blur-2xl group-hover:bg-accent-400/30 transition-all duration-700" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-2">
                    <Image
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop"
                      alt="Sterilization Equipment"
                      width={800}
                      height={600}
                      className="rounded-2xl object-cover"
                    />
                  </div>
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection direction="up">
              <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-4">Social Proof</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 font-display">Ce Spun Pacienții Noștri</h3>
              <p className="text-lg text-neutral-600">
                Cuvintele pacienților noștri sunt cea mai bună carte de vizită. Ne bucurăm să transformăm fiecare vizită într-o experiență pozitivă.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                <div className="h-full glass-card p-10 bg-white border border-neutral-100 rounded-[2rem] shadow-soft hover:shadow-card transition-all duration-500 flex flex-col">
                  <div className="flex text-accent-400 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary-50 opacity-50" />
                    <p className="relative z-10 text-neutral-700 italic leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-neutral-50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center font-bold text-primary-700">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{review.name}</p>
                      <p className="text-sm text-neutral-500">Pacient Clinica Doctor Curt</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="bg-gradient-to-r from-primary-900 to-primary-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-elevated">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                  Pregătiți să vă <span className="text-accent-400">transformați zâmbetul?</span>
                </h2>
                <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                  Programați o consultație astăzi și faceți primul pas către zâmbetul pe care l-ați visat întotdeauna.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="/programare" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-primary-950 font-bold text-lg hover:shadow-2xl hover:shadow-accent-400/30 hover:scale-105 transition-all">
                    <Calendar className="w-6 h-6" />
                    Book a Consultation
                  </a>
                  <a href="tel:0724542600" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all">
                    Contactează-ne direct
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
