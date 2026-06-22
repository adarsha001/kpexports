import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { ServicesSection } from "./components/ServicesSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { GallerySection } from "./components/GallerySection";
import { ExportSection } from "./components/ExportSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { BusinessInfoSection } from "./components/BusinessInfoSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <WhyChooseSection />
        <GallerySection />
        <ExportSection />
        <ReviewsSection />
        <BusinessInfoSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}
