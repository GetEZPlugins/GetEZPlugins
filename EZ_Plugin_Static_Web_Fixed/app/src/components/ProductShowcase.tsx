import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useTheme } from "@/hooks/useTheme";
import AnimatedSection from "./AnimatedSection";

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const activeProduct = products[activeIndex];

  return (
    <AnimatedSection>
      <section className="py-0">
        {/* Product selector tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className="relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: index === activeIndex ? "var(--bg-surface)" : "transparent",
                color: index === activeIndex ? "var(--text-primary)" : "var(--text-secondary)",
                border: index === activeIndex ? "1.5px solid var(--gradient-from)" : "1.5px solid var(--border-color)",
                boxShadow: index === activeIndex ? "var(--card-shadow)" : "none",
              }}
            >
              
              <span className="relative z-10 flex items-center gap-2">
                {product.logoImage && (
                  <img
                    src={product.logoImage}
                    alt=""
                    className="w-5 h-5 object-contain"
                  />
                )}
                {product.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active product display */}
        <div className="card-surface rounded-xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {activeProduct.logoImage && (
                    <img
                      src={activeProduct.logoImage}
                      alt={activeProduct.name}
                      className="h-8 object-contain"
                    />
                  )}
                  <h3 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                    {activeProduct.name}
                  </h3>
                </div>
                <p className="text-base font-medium mb-2 gradient-text">
                  {activeProduct.tagline}
                </p>
                <p
                  className="text-[15px] leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {activeProduct.description}
                </p>

                <ul className="space-y-2.5">
                  {activeProduct.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "#22C55E" }}
                        strokeWidth={2.5}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Hover any ? button in the plugin for guidance
                  </span>
                </div>
              </div>

              {/* Right: Screenshot with theme crossfade */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden" style={{ backgroundColor: "var(--bg-body)" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeProduct.id}-${theme}`}
                    src={
                      theme === "dark"
                        ? activeProduct.imageDark
                        : activeProduct.imageLight
                    }
                    alt={`${activeProduct.name} interface`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </AnimatedSection>
  );
}
