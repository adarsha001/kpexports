import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function ExportSection() {
  const countries = [
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "United States", flag: "🇺🇸" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Oman", flag: "🇴🇲" },
    { name: "Tanzania", flag: "🇹🇿" },
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
            Global reach
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
            Worldwide{" "}
            <em style={{ fontStyle: "italic", color: "#2563eb" }}>Service</em>
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
            Trusted by businesses globally for quality fabrics and reliable service
          </p>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 max-w-4xl mx-auto"
        >
          <div
            style={{
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGJ1c2luZXNzJTIwZ2xvYmFsfGVufDF8fHx8MTc4MjEzNDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="World Map"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
              className="sm:h-[280px] md:h-[340px] lg:h-[400px]"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(37,99,235,0.1)",
              }}
            />
          </div>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(37,99,235,0.15)",
                borderRadius: 10,
                padding: "18px 14px",
                backdropFilter: "blur(4px)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  marginBottom: 8,
                }}
              >
                {country.flag}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "rgba(15,23,42,0.8)",
                }}
              >
                <MapPin size={12} color="#2563eb" />
                <span>{country.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}