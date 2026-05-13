# Clinica Dr. Curt - Stomatologie Modernă

Un proiect Next.js performant și modern pentru prezentarea serviciilor clinicii stomatologice Dr. Curt.

## 🚀 Arhitectură & Tehnologii

Proiectul este construit folosind cele mai noi standarde din ecosistemul React:

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Limbaj**: [TypeScript](https://www.typescriptlang.org/) pentru siguranță tipului
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Componente UI**: Radix UI / Custom Components
- **Bază de date/CMS**: [Sanity.io](https://www.sanity.io/) sau [Supabase](https://supabase.com/) (configurabil)
- **Animații**: [Framer Motion](https://www.framer.com/motion/)
- **Iconițe**: [Lucide React](https://lucide.dev/)

## 🛠️ Structura Proiectului

```text
app/
├── src/
│   ├── app/            # Next.js App Router (pagini și layout-uri)
│   ├── components/     # Componente React reutilizabile
│   ├── lib/            # Utilități și configurări (Supabase, Sanity, etc.)
│   └── styles/         # Fișiere CSS globale
├── public/             # Asset-uri statice (imagini, fonturi)
└── package.json        # Dependințe și scripturi
```

## 🏁 Quick Start

### Pre-requisite

- Node.js 18.x sau mai nou
- npm / yarn / pnpm

### Instalare

1. Clonează repository-ul:
   ```bash
   git clone https://github.com/AndreiNeptune/clinica-drcurt.git
   cd clinica-drcurt
   ```

2. Instalează dependințele:
   ```bash
   npm install
   ```

3. Configurează variabilele de mediu:
   ```bash
   cp .env.local.example .env.local
   # Adaugă cheile necesare în .env.local
   ```

4. Rulează serverul de dezvoltare:
   ```bash
   npm run dev
   ```

## 👨‍💻 Autor

Acest proiect a fost dezvoltat de [Andrei](https://github.com/AndreiNeptune).
