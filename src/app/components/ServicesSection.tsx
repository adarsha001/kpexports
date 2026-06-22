import { motion } from "motion/react";
import { Upload, Image, Palette, Beaker, Package, Droplet, Zap } from "lucide-react";

const services = [
  { icon: Upload,  title: "Print your own design",   desc: "Upload custom artwork for premium fabric printing" },
  { icon: Image,   title: "Shutterstock designs",     desc: "Print from millions of licensed designs with precision" },
  { icon: Palette, title: "Pinterest inspiration",    desc: "Share your finds and we'll bring them to fabric" },
  { icon: Beaker,  title: "Pattern development",      desc: "Create unique patterns with our in-house designers" },
  { icon: Package, title: "Sampling services",        desc: "Order samples before committing to bulk production" },
  { icon: Zap,     title: "Bulk production",          desc: "Large-scale manufacturing without quality trade-offs" },
  { icon: Droplet, title: "Color matching",           desc: "Precise Pantone-grade matching to your specifications" },
  { icon: Zap,     title: "Fast delivery",            desc: "Quick turnaround times without compromise on quality" },
];

const steps = [
  { icon: Upload,  num: "Step 01", label: "Upload" },
  { icon: Palette, num: "Step 02", label: "Print" },
  { icon: Package, num: "Step 03", label: "Deliver" },
];

export function ServicesSection() {
  return (
    <section
      id="services"
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
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10.5px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#2563eb",
            marginBottom: "0.75rem",
          }}>
            What we offer
          </p>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            color: "#0f172a",
            margin: "0 0 0.5rem",
          }}>
            Bring your designs{" "}
            <em style={{ fontStyle: "italic", color: "#2563eb" }}>to life</em>
          </h2>

          <div style={{ width: 36, height: 2, background: "#2563eb", margin: "0.9rem auto", borderRadius: 2 }} />

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "rgba(15,23,42,0.6)",
            maxWidth: 500,
            margin: "0 auto",
            letterSpacing: "0.01em",
          }}>
            Comprehensive digital printing services — from first concept to finished fabric,
            tailored exactly to your needs.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-5xl mx-auto mb-14">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(37,99,235,0.15)",
                borderRadius: 10,
                padding: "18px 14px",
                backdropFilter: "blur(4px)",
              }}
            >
              <div style={{
                width: 34, height: 34,
                background: "rgba(37,99,235,0.12)",
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 12,
              }}>
                <Icon size={17} color="#2563eb" />
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12.5px",
                fontWeight: 600,
                color: "rgba(15,23,42,0.92)",
                lineHeight: 1.35,
                marginBottom: 6,
                letterSpacing: "0.01em",
              }}>
                {title}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                color: "rgba(15,23,42,0.5)",
                lineHeight: 1.6,
              }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex items-center justify-center max-w-2xl mx-auto mt-12"
>
  {steps.map(({ icon: Icon, num, label }, i) => (
    <div key={label} className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-1.5">
        {/* Icon Circle with Soundwave Effect */}
        <div className="relative">
          {/* Soundwave rings */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/60 animate-ping" 
                 style={{ animationDuration: '1.5s', animationDelay: `${i * 0.2}s` }} />
            <div className="absolute inset-[-6px] rounded-full border-2 border-blue-400/40 animate-ping" 
                 style={{ animationDuration: '1.8s', animationDelay: `${i * 0.2 + 0.3}s` }} />
            <div className="absolute inset-[-12px] rounded-full border-2 border-blue-400/20 animate-ping" 
                 style={{ animationDuration: '2.1s', animationDelay: `${i * 0.2 + 0.6}s` }} />
            <div className="absolute inset-[-18px] rounded-full border-2 border-blue-400/10 animate-ping" 
                 style={{ animationDuration: '2.4s', animationDelay: `${i * 0.2 + 0.9}s` }} />
          </div>
          
          {/* Main circle */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
            <Icon size={22} className="text-white md:w-6 md:h-6" />
          </div>
          
          {/* Step number badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-blue-500 z-20">
            <span className="text-[8px] font-bold text-blue-600">{i + 1}</span>
          </div>
        </div>
        
        {/* Label */}
        <span className="text-[10px] md:text-xs font-semibold text-gray-700 tracking-wide">
          {label}
        </span>
        
        {/* Step number */}
        <span className="text-[8px] md:text-[10px] text-blue-400 font-medium">
          {num}
        </span>
      </div>
      
      {/* Arrow between steps */}
      {i < steps.length - 1 && (
        <div className="w-12 md:w-16 mx-1 md:mx-2 flex items-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-blue-400 transform rotate-45" />
          </div>
        </div>
      )}
    </div>
  ))}
</motion.div>

      </div>
    </section>
  );
}