import { motion } from "motion/react";
import { Printer, Package, Globe, Award } from "lucide-react";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3, ease: [0.22, 1, 0.36, 1] } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center bg-[#0f2057] overflow-hidden">
      
      {/* Animated Textile Background with Parallax feel */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <motion.svg
          width="100%"
          height="100%"
          animate={{ x: [-20, 20], y: [-20, 20] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 20, ease: "linear" }}
        >
          <defs>
            <pattern id="weave" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="white" strokeWidth="1" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#weave)" />
        </motion.svg>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2057] via-[#0f2057]/80 to-[#0f2057]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // Adds a subtle "breathing" lift to the entire content block
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-1.5 mb-6 px-4 py-1.5 rounded-full border text-[11px] font-semibold tracking-[0.12em] uppercase"
              style={{ background: "rgba(250,204,21,0.12)", borderColor: "rgba(250,204,21,0.4)", color: "#fde68a" }}>
              <Award size={12} />
              Trusted since 2008
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.18 }}>
            Custom Fabric Digital Printing & <br className="hidden md:block" /> 
            <span className="text-[#fde68a] italic">Fabric Supply</span> Solutions
          </motion.h1>

          <motion.p variants={itemVariants} className="mb-5 italic text-[clamp(1rem,2vw,1.2rem)] text-white/50" style={{ fontFamily: "'Playfair Display', serif" }}>
            Manufacturing premium textiles for the world since 2008
          </motion.p>

          <motion.p variants={itemVariants} className="mx-auto mb-9 text-[15px] leading-[1.8] text-white/68 max-w-[540px]">
            Premium Cotton, Linen, Satin, Jacquard, and custom-printed fabrics — crafted with precision and shipped worldwide.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <button onClick={() => scrollToSection("contact")} className="bg-[#facc15] text-[#0f172a] px-8 py-3.5 rounded-[6px] font-bold text-[13px] tracking-[0.04em] hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
              Get a quote
            </button>
            <button onClick={() => scrollToSection("products")} className="border border-white/35 px-8 py-3.5 rounded-[6px] text-[13px] hover:bg-white/10 transition-all hover:border-white/50">
              View products →
            </button>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Printer, label: "Custom design", note: "Any motif" },
              { icon: Package, label: "Low & bulk", note: "No minimum" },
              { icon: Globe, label: "Worldwide", note: "100+ countries" },
              { icon: Award, label: "15+ years", note: "Est. 2008" },
            ].map((item) => (
              <motion.div 
                key={item.label} 
                variants={itemVariants} 
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-[12px] p-5 flex flex-col items-center gap-3 backdrop-blur-sm hover:border-[#fde68a]/30 transition-colors"
              >
                <div className="p-2 bg-[#fde68a]/10 rounded-lg">
                  <item.icon size={20} color="#fde68a" />
                </div>
                <span className="text-[12px] font-semibold text-white/90">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}