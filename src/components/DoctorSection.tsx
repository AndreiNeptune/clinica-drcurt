"use client";

import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import AnimatedSection from "./AnimatedSection";

export default function DoctorSection() {
  return (
    <section id="doctor" className="pt-24 pb-12 lg:py-32 bg-background overflow-hidden text-balance">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Background accent */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-primary-100 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-accent-100 rounded-3xl" />

              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[3/4]">
                <Image
                  src="/images/doctor-premiu.png"
                  alt="Dr. Curt Nicu — Specialist Estetică Dentară"
                  fill
                  className="object-cover"
                  quality={90}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-950/80 to-transparent" />

                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                    <p className="text-white font-bold text-lg">Dr. Curt Nicu</p>
                    <p className="text-primary-200 text-sm">Medic Specialist Estetică Dentară</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-5">
                Despre Doctor
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-6 leading-tight">
                Dr. Curt Nicu
              </h2>

              <p className="text-xl text-primary-700 font-semibold mb-6">
                Medic Specialist în Estetică Dentară
              </p>

              <div className="space-y-4 text-neutral-600 text-[15px] leading-relaxed mb-8">
                <p>
                  Cu o vastă experiență în domeniul stomatologiei estetice, Dr. Curt Nicu este dedicat
                  transformării zâmbetelor pacienților săi prin tehnici moderne și abordări personalizate.
                </p>
                <p>
                  Specializat în fațete dentare cu aspect natural, implanturi și albire profesională,
                  Dr. Curt combină cunoștințele tehnice cu un ochi artistic deosebit pentru a obține
                  rezultate care depășesc așteptările.
                </p>
                <p>
                  Fiecare caz este abordat cu atenție individualizată, asigurând că planul de tratament
                  este perfect adaptat nevoilor și dorințelor fiecărui pacient.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-50 border border-primary-100">
                  <Award className="w-5 h-5 text-primary-600 shrink-0" />
                  <span className="text-sm font-medium text-primary-800">Specialist Estetică Dentară</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-50 border border-primary-100">
                  <GraduationCap className="w-5 h-5 text-primary-600 shrink-0" />
                  <span className="text-sm font-medium text-primary-800">Formare Continuă</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <span className="text-neutral-400 text-sm mr-1">Urmărește-ne:</span>
                <a
                  href="https://www.instagram.com/dr.curt.nicu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/dr.curt.nicu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
