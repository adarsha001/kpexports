import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      requirement: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 overflow-hidden"
      style={{
        background: " #f8fafc",
        fontFamily: "'Inter', sans-serif",
        color: "#0f172a",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10.5px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2563eb",
              marginBottom: "0.75rem",
            }}
          >
            Contact us
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#0f172a",
              margin: "0 0 0.5rem",
            }}
          >
            Get In{" "}
            <em style={{ fontStyle: "italic", color: "#2563eb" }}>Touch</em>
          </h2>

          <div
            style={{
              width: 36,
              height: 2,
              background: "#2563eb",
              margin: "0.9rem auto",
              borderRadius: 2,
            }}
          />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.75,
              color: "rgba(15,23,42,0.6)",
              maxWidth: 500,
              margin: "0 auto",
              letterSpacing: "0.01em",
            }}
          >
            Ready to start your order? Contact us today for a quote or any inquiries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(37,99,235,0.15)",
                borderRadius: 10,
                padding: "24px",
                backdropFilter: "blur(4px)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: "16px",
                }}
              >
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="requirement" className="text-sm font-medium text-gray-700">
                    Fabric Requirement
                  </Label>
                  <Input
                    id="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="e.g., Cotton, Satin, Custom Print"
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Request Quote
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(37,99,235,0.15)",
                borderRadius: 10,
                padding: "24px",
                backdropFilter: "blur(4px)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: "16px",
                }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(37,99,235,0.1)",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} style={{ color: "#2563eb" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#0f172a", marginBottom: 2 }}>
                      KP Exports
                    </div>
                    <p style={{ color: "rgba(15,23,42,0.6)", fontSize: "14px" }}>
                      Navi Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(37,99,235,0.1)",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} style={{ color: "#2563eb" }} />
                  </div>
                  <a
                    href="tel:+91"
                    style={{
                      color: "rgba(15,23,42,0.7)",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    className="hover:text-blue-600"
                  >
                    +91 XXXXX XXXXX
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(37,99,235,0.1)",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} style={{ color: "#2563eb" }} />
                  </div>
                  <a
                    href="mailto:info@kpexports.com"
                    style={{
                      color: "rgba(15,23,42,0.7)",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    className="hover:text-blue-600"
                  >
                    info@kpexports.com
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                className="gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                onClick={() => window.open("https://wa.me/91", "_blank")}
              >
                <MessageCircle size={16} />
                WhatsApp
              </Button>
              <Button
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                onClick={() => window.location.href = "tel:+91"}
              >
                <Phone size={16} />
                Call Now
              </Button>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                borderRadius: 10,
                padding: "20px 24px",
                boxShadow: "0 4px 6px -1px rgba(37,99,235,0.2), 0 2px 4px -1px rgba(37,99,235,0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: 8,
                }}
              >
                Business Hours
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "14px",
                  marginBottom: 4,
                }}
              >
                Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "14px",
                }}
              >
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}