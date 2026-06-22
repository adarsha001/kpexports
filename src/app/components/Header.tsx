import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "../../imports/kplogo1.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#1e3a8a] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+91" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a href="mailto:info@kpexports.com" className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">info@kpexports.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            Premium Fabrics Since 2008
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Bigger */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="KP Exports Logo" 
              className="h-14 w-auto object-contain" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("hero")} className="text-sm hover:text-[#1e3a8a] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-[#1e3a8a] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("products")} className="text-sm hover:text-[#1e3a8a] transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm hover:text-[#1e3a8a] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-sm hover:text-[#1e3a8a] transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-[#1e3a8a] transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left py-2 hover:text-[#1e3a8a] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 hover:text-[#1e3a8a] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left py-2 hover:text-[#1e3a8a] transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 hover:text-[#1e3a8a] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-left py-2 hover:text-[#1e3a8a] transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 hover:text-[#1e3a8a] transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 w-full">
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}