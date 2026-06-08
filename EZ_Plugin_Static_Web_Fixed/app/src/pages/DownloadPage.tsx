import { motion } from "framer-motion";
import { Download, Package } from "lucide-react";
import { products } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
import DownloadCard from "@/components/DownloadCard";
import SocialLinks from "@/components/SocialLinks";

export default function DownloadPage() {
  return (
    <div className="pt-16">
      {/* ===== HERO ===== */}
      <section className="pt-12 pb-6 sm:pt-16 sm:pb-8">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center max-w-xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-bg mb-5"
            >
              <Download className="w-7 h-7 text-white" />
            </motion.div>

            <h1
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Download EZ Plugins
            </h1>
            <p
              className="text-[15px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Get the latest versions for your platform. Download the complete EZ Plugins installer, or the no-UI build for lightweight workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== DOWNLOAD CARDS ===== */}
      <section className="py-6">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-5 rounded-full gradient-bg" />
              <h2
                className="text-xl font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Installers
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {products.map((product, index) => (
              <DownloadCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Empty state message when no download URLs are set */}
          {products.every(
            (p) =>
              !p.downloads.withUI?.windows &&
              !p.downloads.withUI?.mac &&
              !p.downloads.withoutUI?.windows &&
              !p.downloads.withoutUI?.mac
          ) && (
            <AnimatedSection delay={0.2}>
              <div
                className="card-surface rounded-xl p-8 text-center mt-6"
              >
                <Package
                  className="w-10 h-10 mx-auto mb-3"
                  style={{ color: "var(--text-muted)" }}
                />
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Coming soon
                </h3>
                <p
                  className="text-sm max-w-md mx-auto"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Download links will be added once the first release is ready.
                  Join our Discord to get notified when they&apos;re available.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ===== COMMUNITY ===== */}
      <section className="py-8">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-5 rounded-full gradient-bg" />
              <h2
                className="text-xl font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Community
              </h2>
            </div>
          </AnimatedSection>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
