import { motion } from "motion/react";
import { Star, Quote, TrendingUp, Package, Truck } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Priya Sharma",
      company: "Fashion Boutique",
      rating: 5,
      text: "Excellent quality fabrics and timely delivery. The digital printing is outstanding with vibrant colors.",
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Saudi Textile Trading",
      rating: 5,
      text: "We've been ordering for 3 years. Their custom printing is top-notch and pricing is competitive.",
    },
    {
      name: "David Thompson",
      company: "UK Fashion House",
      rating: 4,
      text: "Great fabric quality and responsive service. They helped us with custom designs perfectly.",
    },
    {
      name: "Meera Patel",
      company: "Designer Studio",
      rating: 5,
      text: "KP Exports made our vision come to life! Quality exceeded expectations. Will order again!",
    },
  ];

  const stats = [
    { icon: TrendingUp, label: "Response Rate", value: "87%" },
    { icon: Package, label: "Product Quality", value: "94%" },
    { icon: Truck, label: "Delivery", value: "92%" },
  ];

  // Duplicate reviews for infinite scroll effect
  const allReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="py-16 md:py-20 overflow-hidden"
      style={{
        background: "#f8fafc",
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
            Testimonials
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
            Trusted{" "}
            <em style={{ fontStyle: "italic", color: "#2563eb" }}>Worldwide</em>
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
            What our customers say about us
          </p>

          {/* Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    star <= 4 ? 'fill-blue-500 text-blue-500' : 'fill-gray-300 text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xl sm:text-2xl text-blue-600 font-bold">4.4/5</span>
          </div>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
          {stats.map((stat, index) => (
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
              <stat.icon
                size={28}
                className="mx-auto mb-2"
                style={{ color: "#2563eb" }}
              />
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#2563eb",
                  marginBottom: 4,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "rgba(15,23,42,0.5)",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviews - Auto Scrolling Left to Right */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {allReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="w-72 sm:w-80 md:w-96 flex-shrink-0"
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(37,99,235,0.15)",
                    borderRadius: 10,
                    padding: "20px 18px",
                    backdropFilter: "blur(4px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Quote
                    size={20}
                    style={{ color: "#2563eb", marginBottom: 12 }}
                  />
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={
                          star <= review.rating
                            ? 'fill-blue-500 text-blue-500'
                            : 'fill-gray-300 text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "rgba(15,23,42,0.7)",
                      lineHeight: 1.6,
                      marginBottom: 12,
                      flex: 1,
                      fontStyle: "italic",
                    }}
                  >
                    "{review.text}"
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid rgba(37,99,235,0.1)",
                      paddingTop: 12,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0f172a",
                      }}
                    >
                      {review.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "rgba(15,23,42,0.5)",
                      }}
                    >
                      {review.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth edges */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "60px",
              height: "100%",
              background: "linear-gradient(to right, #f8fafc, transparent)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "60px",
              height: "100%",
              background: "linear-gradient(to left, #f8fafc, transparent)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
}