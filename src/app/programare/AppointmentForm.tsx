"use client";

import { useState, FormEvent, useTransition } from "react";
import { Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // 1. Oprim orice acțiune implicită a browserului sau a Netlify
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Verificare Honeypot
    const honeypot = formData.get("bot-field");
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    // 2. Verificare explicită a variabilelor de mediu
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    console.log("Verificare domeniu și configurație...");
    if (!supabaseUrl || !supabaseKey) {
      console.error("EROARE CONFIGURARE: Variabilele NEXT_PUBLIC_SUPABASE_URL sau NEXT_PUBLIC_SUPABASE_ANON_KEY lipsesc!");
      alert("A apărut o eroare de configurare. Vă rugăm să ne contactați telefonic.");
      return;
    }

    startTransition(async () => {
      try {
        const data = {
          nume: formData.get("name"),
          telefon: formData.get("phone"),
          email: formData.get("email"),
          mesaj: formData.get("message"),
        };

        // 3. Forțăm trimiterea direct către Supabase
        const { error } = await supabase.from("programari").insert([data]);

        if (error) {
          // 4. Mesaj specific pentru CORS
          if ((error as any).message?.toLowerCase().includes("fetch") || !(error as any).status) {
            console.error("EROARE CORS/NETWORK DETECTATĂ: Trimiterea a eșuat. Verifică dacă noul domeniu este adăugat în Supabase Dashboard -> Authentication -> Settings -> Site URL / Redirect URLs.");
          }
          throw error;
        }

        setSubmitted(true);
        form.reset();
      } catch (error: any) {
        console.error("Eroare la trimiterea formularului:", error);
        
        // Show specific error info if available
        let detailedError = error.message || "A apărut o problemă la trimiterea datelor.";
        if (error.details) detailedError += `\nDetails: ${error.details}`;
        if (error.hint) detailedError += `\nHint: ${error.hint}`;
        
        alert("Eroare: " + detailedError);
      }
    });
  };

  if (submitted) {
    return (
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-4">
          <Send className="w-8 h-8 text-primary-600" />
        </div>
        <h4 className="text-xl font-bold text-neutral-900 mb-2">Cerere trimisă cu succes!</h4>
        <p className="text-neutral-600">
          Vă mulțumim pentru interes. Veți fi contactat de echipa noastră în cel mai scurt timp pentru confirmare.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors"
        >
          Trimite o altă cerere
        </button>
      </div>
    );
  }

  return (
    <form name="programare" onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="programare" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            placeholder="Ion Popescu"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            placeholder="07XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
          placeholder="email@exemplu.ro"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Detalii suplimentare
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-neutral-50/50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
          placeholder="Cum vă putem ajuta?"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full mt-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-400 to-accent-500 text-primary-950 font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-accent-400/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
      >
        {isPending ? "Se procesează..." : "Solicită Programare"}
      </button>
      <p className="text-center text-xs text-neutral-500 mt-4">
        Prin trimiterea acestui formular ești de acord cu{" "}
        <a href="/termeni-si-conditii" className="underline hover:text-neutral-700">Termenii și Condițiile</a> și{" "}
        <a href="/politica-de-confidentialitate" className="underline hover:text-neutral-700">Politica de Confidențialitate</a>.
      </p>
    </form>
  );
}
