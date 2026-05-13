import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import TrustSection from "@/components/TrustSection";
import DoctorSection from "@/components/DoctorSection";
import AppointmentCTA from "@/components/AppointmentCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PortfolioSection />
      <TrustSection />
      <DoctorSection />
      <AppointmentCTA />
    </>
  );
}
