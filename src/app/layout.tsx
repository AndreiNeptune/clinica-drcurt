import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicadoctorcurt.ro"),
  title: "Clinica Doctor Curt | Estetică Dentară de Excelență în București",
  description:
    "Clinica Doctor Curt oferă servicii premium de estetică dentară: fațete dentare, implanturi, albire profesională, coroane și protetică dentară. Proceduri fără durere, rezultate vizibile imediat. Str. Vulturilor 93A, Sector 3, București.",
  keywords: [
    "clinica dentara bucuresti",
    "fatete dentare",
    "implanturi dentare",
    "albire dentara",
    "estetica dentara",
    "doctor curt",
    "stomatolog bucuresti",
    "coroane dentare",
    "aparate dentare",
    "protetica dentara",
  ],
  authors: [{ name: "Clinica Doctor Curt" }],
  openGraph: {
    title: "Clinica Doctor Curt | Estetică Dentară de Excelență",
    description:
      "Proceduri sigure, complet fără durere, cu rezultate vizibile încă de la prima ședință. Zâmbetul tău, misiunea noastră.",
    url: "https://clinicadoctorcurt.ro",
    siteName: "Clinica Doctor Curt",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 800,
        height: 600,
        alt: "Clinica Doctor Curt Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinica Doctor Curt | Estetică Dentară de Excelență",
    description: "Proceduri sigure, complet fără durere, cu rezultate vizibile încă de la prima ședință. Zâmbetul tău, misiunea noastră.",
    images: ["/images/logo.webp"],
  },
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
