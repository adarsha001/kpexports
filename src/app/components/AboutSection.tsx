import { motion } from "motion/react";
import { Building2, Users, Star, Globe } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Building2, label: "Established", value: "2008" },
    { icon: Users, label: "Employees", value: "11-25" },
    { icon: Star, label: "Rating", value: "4.4/5" },
    { icon: Globe, label: "Countries", value: "5+" },
  ];

  return (
    <section
      id="about"
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
            About us
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
            About{" "}
            <em style={{ fontStyle: "italic", color: "#2563eb" }}>KP Exports</em>
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
            Excellence in textile manufacturing and digital printing since 2008
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwaW5kdXN0cnklMjBtYW51ZmFjdHVyaW5nJTIwbW9kZXJufGVufDF8fHx8MTc4MjEzNDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="KP Exports Manufacturing"
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                }}
                className="sm:h-[320px] md:h-[360px] lg:h-[400px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(15,23,42,0.8)",
                marginBottom: 12,
              }}
            >
              <strong style={{ color: "#2563eb" }}>KP Exports</strong> was established in 2008 in Navi Mumbai, Maharashtra. We specialize in digital fabric printing and supply of premium-quality textiles including Cotton, Linen, Satin, and Jacquard fabrics.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(15,23,42,0.8)",
                marginBottom: 16,
              }}
            >
              Customers can print their own designs sourced from platforms like Shutterstock, Pinterest, or custom artwork. We serve fashion brands, garment manufacturers, exporters, boutiques, designers, and wholesalers across India and international markets.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(37,99,235,0.15)",
                    borderRadius: 10,
                    padding: "14px 10px",
                    backdropFilter: "blur(4px)",
                    textAlign: "center",
                  }}
                >
                  <stat.icon
                    size={20}
                    className="mx-auto mb-1"
                    style={{ color: "#2563eb" }}
                  />
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#2563eb",
                      marginBottom: 2,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      fontWeight: 400,
                      color: "rgba(15,23,42,0.5)",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}