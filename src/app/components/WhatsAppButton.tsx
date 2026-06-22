import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/91", "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap hidden group-hover:block"
      >
        Chat with us!
      </motion.div>
    </motion.button>
  );
}
