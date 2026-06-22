import { motion } from "motion/react";
import { DollarSign, Award, Users, Clock, Globe, Heart, Package2, ShieldCheck } from "lucide-react";

export function WhyChooseSection() {
  const features = [
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Best rates without compromising quality",
    },
    {
      icon: Award,
      title: "Premium Fabrics",
      description: "Finest materials from trusted suppliers",
    },
    {
      icon: Users,
      title: "Vendor Network",
      description: "Global relationships with fabric suppliers",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery to meet your deadlines",
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Serving customers across 5+ countries",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Dedicated support throughout your journey",
    },
    {
      icon: Package2,
      title: "Custom Quantities",
      description: "From small samples to bulk production",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous checks at every production stage",
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
            Why choose us
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
            Why Choose{" "}
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
            Experience excellence in textile manufacturing and digital printing
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
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
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  background: "rgba(37,99,235,0.12)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                  transition: "all 0.3s ease",
                }}
              >
                <feature.icon size={17} color="#2563eb" />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "rgba(15,23,42,0.92)",
                  lineHeight: 1.35,
                  marginBottom: 6,
                  letterSpacing: "0.01em",
                }}
              >
                {feature.title}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "rgba(15,23,42,0.5)",
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}