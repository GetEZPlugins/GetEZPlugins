import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Github, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/config";
import { products } from "@/data/products";
import { useTheme } from "@/hooks/useTheme";
import AnimatedSection from "@/components/AnimatedSection";
import ProductShowcase from "@/components/ProductShowcase";
import PlatformMatrix from "@/components/PlatformMatrix";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  const { theme } = useTheme();
  const heroProduct = products[0];

  return (
    <div className="pt-16">
      {/* ===== HERO SECTION ===== */}
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium mb-5"
                style={{
                  backgroundColor: "rgba(192, 132, 252, 0.1)",
                  color: "var(--gradient-from)",
                }}
              >
                <Sparkles className="w-3 h-3" />
                Free VST3 plugins for everyone
              </motion.div>

              <h1
                className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Professional audio.
                <br />
                <span className="gradient-text">Simplified.</span>
              </h1>

              <p
                className="text-[15px] sm:text-base leading-relaxed mb-7 max-w-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                {siteConfig.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white gradient-bg hover:gradient-bg-hover transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Link>
                <a
                  href="https://github.com/YOUR_USERNAME/ez-plugins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    border: "1.5px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </motion.div>

            {/* Right: Plugin screenshot */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-body)",
                  boxShadow: "var(--card-shadow-hover)",
                }}
              >
                <motion.img
                  key={theme}
                  src={
                    theme === "dark"
                      ? heroProduct.imageDark
                      : heroProduct.imageLight
                  }
                  alt={`${heroProduct.name} interface`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SHOWCASE ===== */}
      <section className="py-8">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-5 rounded-full gradient-bg" />
              <h2
                className="text-xl font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                The Plugins
              </h2>
            </div>
          </AnimatedSection>
          <ProductShowcase />
        </div>
      </section>

      {/* ===== PLATFORM MATRIX ===== */}
      <section className="py-8">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <PlatformMatrix />
        </div>
      </section>

      {/* ===== COMMUNITY / SOCIAL ===== */}
      <section className="py-8">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-5 rounded-full gradient-bg" />
              <h2
                className="text-xl font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Get Involved
              </h2>
            </div>
          </AnimatedSection>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
