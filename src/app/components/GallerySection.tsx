import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Instagram, Play } from "lucide-react";

export function GallerySection() {
  const GALLERY_ITEMS = [
    {
      title: "Digital Printing",
      tag: "Process",
      img: "https://images.unsplash.com/photo-1634713157685-676e35324215?w=320&h=420&fit=crop&auto=format",
      alt: "Fabric cutting on manufacturing conveyor belt",
    },
    {
      title: "New Collections",
      tag: "Collection",
      img: "https://images.unsplash.com/photo-1771098403216-ca0c3c2858c0?w=320&h=420&fit=crop&auto=format",
      alt: "Colourful fabric rolls stacked at KP Exports",
    },
    {
      title: "Customer Orders",
      tag: "Orders",
      img: "https://images.unsplash.com/photo-1631127839872-91d2bd28e462?w=320&h=420&fit=crop&auto=format",
      alt: "Red and white floral textile customer order",
    },
    {
      title: "Design Samples",
      tag: "Samples",
      img: "https://images.unsplash.com/photo-1451928803901-7357a9e01215?w=320&h=420&fit=crop&auto=format",
      alt: "Floral print design sample fabric",
    },
    {
      title: "Loom Manufacturing",
      tag: "Behind Scenes",
      img: "https://images.unsplash.com/photo-1771098302131-4c453dbe5836?w=320&h=420&fit=crop&auto=format",
      alt: "Vintage loom manufacturing patterned fabric",
    },
    {
      title: "Digital Jacquard",
      tag: "Collection",
      img: "https://images.unsplash.com/photo-1636545633024-0a932871ce01?w=320&h=420&fit=crop&auto=format",
      alt: "Digital jacquard flower pattern close-up",
    },
  ];

  const fadeUp = {
    initial: {
      opacity: 0,
      y: 30,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
    },
    transition: {
      duration: 0.6,
    },
  };

  const GOLD = "#D4AF37";
  const NAVY = "#0F172A";

  return (
    <section className="py-4 sm:py-6 bg-muted/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
  <motion.div
  initial={{ opacity: 0, y: 30 }}
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
    Instagram
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
    Latest{" "}
    <em style={{ fontStyle: "italic", color: "#2563eb" }}>Prints</em>
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
    Explore our latest prints and collections on Instagram
  </p>
  
  <a
    href="https://instagram.com"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "'Inter', sans-serif",
      fontSize: "13px",
      fontWeight: 500,
      color: "#2563eb",
      textDecoration: "none",
      transition: "all 0.2s ease",
      padding: "8px 20px",
      borderRadius: 8,
      background: "rgba(37,99,235,0.1)",
      border: "1px solid rgba(37,99,235,0.2)",
      marginTop: "1rem",
    }}
    className="hover:bg-blue-50 hover:border-blue-300 hover:gap-3"
  >
    <Instagram size={16} />
    Follow Us on Instagram
  </a>
</motion.div>

        <div className="overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-2 sm:gap-3" style={{ width: "max-content" }}>
            {GALLERY_ITEMS.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative w-36 sm:w-40 md:w-48 lg:w-52 h-52 sm:h-60 md:h-64 lg:h-72 rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0"
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span
                    className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[8px] sm:text-xs font-semibold"
                    style={{ backgroundColor: GOLD, color: NAVY }}
                  >
                    {g.tag}
                  </span>
                </div>
                
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                  <p className="text-white text-xs sm:text-sm font-semibold leading-tight">
                    {g.title}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
                    <Instagram size={10} className="text-white/50" />
                    <span className="text-white/50 text-[8px] sm:text-xs">@kp_exports</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}