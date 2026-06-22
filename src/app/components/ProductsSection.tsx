import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ProductsSection() {
  const products = [
    {
      name: "Cotton Fabrics",
      description: "Premium quality cotton fabrics for apparel & home textiles.",
      image: "https://images.unsplash.com/photo-1601056639638-c53c50e13ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBmYWJyaWMlMjB0ZXh0aWxlJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzgyMTM0NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Linen Fabrics",
      description: "Natural linen with excellent breathability and elegant drape.",
      image: "https://images.unsplash.com/photo-1776278515617-09ab61ec1eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGZhYnJpYyUyMG5hdHVyYWwlMjBiZWlnZXxlbnwxfHx8fDE3ODIxMzQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Satin Fabrics",
      description: "Luxurious satin with smooth finish for formal garments.",
      image: "https://images.unsplash.com/photo-1619043518800-7f14be467dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRpbiUyMHNpbGslMjBsdXh1cnklMjBmYWJyaWN8ZW58MXx8fHwxNzgyMTM0NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Jacquard Fabrics",
      description: "Intricate woven patterns for fashion and upholstery.",
      image: "https://images.unsplash.com/photo-1655149238677-9b5cb1a0afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWNxdWFyZCUyMHBhdHRlcm5lZCUyMHRleHRpbGUlMjB3ZWF2ZXxlbnwxfHx8fDE3ODIxMzQ0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Digital Printed",
      description: "Vibrant digital prints with high color accuracy.",
      image: "https://images.unsplash.com/photo-1552710307-537199cd41c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHByaW50ZWQlMjBmYWJyaWMlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3ODIxMzQ0MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Custom Design",
      description: "Bring your unique designs to life with advanced printing.",
      image: "https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmYXNoaW9uJTIwZmFicmljJTIwZGVzaWdufGVufDF8fHx8MTc4MjEzNDQzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Fashion Fabrics",
      description: "Trendy fabrics curated for designers & manufacturers.",
      image: "https://images.unsplash.com/photo-1693031630369-bd429a57f115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZmFicmljJTIwcHJpbnRpbmclMjB0ZXh0aWxlJTIwbWFjaGluZXxlbnwxfHx8fDE3ODIxMzQ0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Bulk Supply",
      description: "Large quantity orders with competitive pricing.",
      image: "https://images.unsplash.com/photo-1517146783983-418c681b56c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwd2FyZWhvdXNlJTIwZmFicmljJTIwcm9sbHN8ZW58MXx8fHwxNzgyMTM0NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section
      id="products"
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
            Our collection
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
            Premium{" "}
            <em style={{ fontStyle: "italic", color: "#2563eb" }}>Fabrics</em>
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
            Premium fabrics & custom printing solutions for your unique needs
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {products.map((product, index) => (
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
              }}
            >
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  marginBottom: 12,
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  className="hover:scale-105"
                />
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
                {product.name}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "rgba(15,23,42,0.5)",
                  lineHeight: 1.6,
                  marginBottom: 12,
                  flex: 1,
                }}
              >
                {product.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#2563eb",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                className="hover:gap-2"
              >
                View Details
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}