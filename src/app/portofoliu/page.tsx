"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

// Portfolio data extracted from the source site
const ALL_CATEGORIES = ["Toate", "Fațete dentare", "Coroane dentare", "Cazuri Complexe"];

const portfolioData = [
  {
    category: "Fațete dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2023/08/Clinica-Dr.-Curt-a1.webp",
    title: "Reabilitare Estetică Premium",
    description: "Fațete ceramice E-max pentru un zâmbet perfect aliniat și natural."
  },
  {
    category: "Fațete dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2023/08/WhatsApp-Image-2022-12-22-at-13.00.13-1-768x768-1.webp",
    title: "Corecție Culoare și Formă",
    description: "Zâmbet transformat complet cu ajutorul fațetelor minim invazive."
  },
  {
    category: "Cazuri Complexe",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/04/Post-8-Epuran-Sorina-patrat-reclama_2.jpg",
    title: "Reabilitare Totală",
    description: "Combinație de fațete și coroane pe suport de zirconiu."
  },
  {
    category: "Coroane dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.14.45-1.jpeg",
    title: "Restaurare Funcțională",
    description: "Coroane de zirconiu ultra-estetice pe dinți frontali."
  },
  {
    category: "Fațete dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.00.13.jpeg",
    title: "Design Hollywood Smile",
    description: "Transformare radicală utilizând tehnici moderne de fațetare."
  },
  {
    category: "Fațete dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/05/Post-10-Costea-Mihaela-27.02.2021-auriu.jpg",
    title: "Zâmbet Luminos",
    description: "Albire profesională urmată de aplicarea fațetelor ceramice."
  },
  {
    category: "Coroane dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.00.13-3.jpeg",
    title: "Protecție și Estetică",
    description: "Coroane pe implanturi cu aspect identic cu dinții naturali."
  },
  {
    category: "Cazuri Complexe",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.00.13-2.jpeg",
    title: "Restaurare Arcada Superioară",
    description: "Plan de tratament complex combinând multiple specialități."
  },
  {
    category: "Coroane dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.14.45-4.jpeg",
    title: "Zirconiu Multilayer",
    description: "Translucență maximă pentru un rezultat invizibil."
  },
  {
    category: "Fațete dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.03.42.jpeg",
    title: "Corecție Diastemă",
    description: "Închiderea spațiilor interdentare fără șlefuire agresivă."
  },
  {
    category: "Cazuri Complexe",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.49.34-1.jpeg",
    title: "Reabilitare Estetică",
    description: "Caz complex rezolvat prin metode conservatoare."
  },
  {
    category: "Cazuri Complexe",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.49.34.jpeg",
    title: "Zâmbet Nou, Încredere Nouă",
    description: "Transformarea completă a fizionomiei pacientului."
  },
  {
    category: "Cazuri Complexe",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.49.34-2.jpeg",
    title: "Implanturi + Coroaniță",
    description: "Reconstrucție funcțională cu implanturi dentare de ultimă generație."
  },
  {
    category: "Fațete dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2023/08/Doctor-Curt_14.webp",
    title: "Fațete Ceramice Premium",
    description: "Estetică superioară prin fațetare dentară personalizată."
  },
  {
    category: "Coroane dentare",
    url: "https://clinicadoctorcurt.ro/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-13.14.45-3.jpeg",
    title: "Restaurare Coroană Zirconiu",
    description: "Rezultat natural și durabil pentru dinții frontali."
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredItems = activeCategory === "Toate" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory || (activeCategory === "Cazuri Complexe" && item.category.includes("+")));

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6"
            >
              <Search className="w-4 h-4" />
              Portofoliu Cazuri Clinice
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 font-serif"
            >
              Transformări care <br />
              <span className="text-primary-600">Redau Încrederea</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 text-lg max-w-2xl mx-auto"
            >
              Descoperiți rezultatele muncii noastre prin exemple reale de pacienți care și-au recăpătat zâmbetul și funcționalitatea dentară.
            </motion.p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {ALL_CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeCategory === cat
                    ? "bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/20"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-600"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={`${item.url}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-neutral-200/50 border border-neutral-100 flex flex-col h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-white font-medium text-sm flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Vezi Detalii
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-primary-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-neutral-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Procedură</span>
                      <span className="text-xs font-semibold text-neutral-900">{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400">Nu am găsit cazuri pentru această categorie momentan.</p>
            </div>
          )}

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-12 rounded-[3rem] bg-neutral-900 text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Vrei un zâmbet similar?</h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Programează o consultație pentru a discuta planul tău personalizat de tratament.
            </p>
            <a
              href="/programare"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent-500 text-primary-950 font-bold text-xl hover:bg-accent-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent-500/20"
            >
              Solicită o Programare
              <ArrowLeft className="w-6 h-6 rotate-180" />
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
