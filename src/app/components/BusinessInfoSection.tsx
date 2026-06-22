import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Building2, Briefcase, Scale, MapPin, FileCheck, User } from "lucide-react";

export function BusinessInfoSection() {
  const businessInfo = [
    {
      icon: Building2,
      label: "Nature",
      value: "Manufacturer",
    },
    {
      icon: Briefcase,
      label: "Additional",
      value: "Retail Business",
    },
    {
      icon: Scale,
      label: "Legal Status",
      value: "Proprietorship",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Navi Mumbai, MH",
    },
    {
      icon: FileCheck,
      label: "GST Registered",
      value: "Since July 2017",
    },
    {
      icon: User,
      label: "CEO",
      value: "M. Jha",
    },
  ];

  return (
    <section
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
            Company Info
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
            Business{" "}
            <em style={{ fontStyle: "italic", color: "#2563eb" }}>Details</em>
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

          <Badge
            className="mt-3"
            style={{
              background: "rgba(37,99,235,0.1)",
              color: "#2563eb",
              border: "1px solid rgba(37,99,235,0.2)",
              fontSize: "10px",
              fontWeight: 500,
              padding: "4px 12px",
            }}
          >
            ✓ GST Verified
          </Badge>
        </motion.div>

        {/* Business Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-w-5xl mx-auto">
          {businessInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(37,99,235,0.15)",
                borderRadius: 10,
                padding: "14px 10px",
                backdropFilter: "blur(4px)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  background: "rgba(37,99,235,0.1)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 6px",
                }}
              >
                <info.icon size={16} style={{ color: "#2563eb" }} />
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  fontWeight: 500,
                  color: "rgba(15,23,42,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 2,
                }}
              >
                {info.label}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#0f172a",
                  lineHeight: 1.3,
                }}
              >
                {info.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              borderRadius: 10,
              padding: "20px 24px",
              textAlign: "center",
              boxShadow: "0 4px 6px -1px rgba(37,99,235,0.2), 0 2px 4px -1px rgba(37,99,235,0.1)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 4,
              }}
            >
              15+ Years Excellence
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
              }}
            >
              Since 2008, KP Exports has been a trusted name in textile manufacturing 
              with commitment to quality and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}