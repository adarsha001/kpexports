import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import logoImage from "../../imports/kplogo1.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2 mb-4 shadow-md">
              <img src={logoImage} alt="KP Exports" className="h-10 w-auto" />
              <div className="text-left">
                <div className="text-[#1e3a8a] font-bold text-base leading-tight">KP Exports</div>
                <div className="text-gray-400 text-xs">Est. 2008</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Premium fabric manufacturing and digital printing solutions since 2008.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/91"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("reviews")} className="hover:text-white transition-colors">
                  Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="hover:text-white transition-colors cursor-pointer">Cotton Fabrics</li>
              <li className="hover:text-white transition-colors cursor-pointer">Linen Fabrics</li>
              <li className="hover:text-white transition-colors cursor-pointer">Satin Fabrics</li>
              <li className="hover:text-white transition-colors cursor-pointer">Jacquard Fabrics</li>
              <li className="hover:text-white transition-colors cursor-pointer">Digital Printed Fabrics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>Navi Mumbai, Maharashtra</li>
              <li>
                <a href="mailto:info@kpexports.com" className="hover:text-white transition-colors">
                  info@kpexports.com
                </a>
              </li>
              <li>
                <a href="tel:+91" className="hover:text-white transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs bg-green-600 px-2 py-1 rounded">GST Registered</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <p>© 2024 KP Exports. All rights reserved.</p>
            <p className="text-center">
              Premium Fabric Manufacturing & Digital Printing Solutions Since 2008
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
