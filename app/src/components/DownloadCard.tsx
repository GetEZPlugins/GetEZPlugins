import { motion } from "framer-motion";
import { Monitor, Terminal, ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

interface DownloadCardProps {
  product: Product;
  index: number;
}

export default function DownloadCard({ product, index }: DownloadCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="card-surface rounded-xl p-6"
    >
      {/* Product header */}
      <div className="flex items-center gap-3 mb-5">
        {product.logoImage && (
          <img
            src={product.logoImage}
            alt={product.name}
            className="h-8 object-contain"
          />
        )}
        <div>
          <h3
            className="text-lg font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {product.name}
          </h3>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {product.tagline}
          </p>
        </div>
      </div>

      {/* Download buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {/* With UI */}
        <div className="space-y-2">
          <p
            className="text-[11px] font-semibold uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            With UI
          </p>
          <div className="flex flex-col gap-2">
            {product.downloads.withUI?.windows && (
              <a
                href={product.downloads.withUI.windows}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white gradient-bg hover:gradient-bg-hover transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                <Monitor className="w-4 h-4" />
                Windows
              </a>
            )}
            {product.downloads.withUI?.mac && (
              <a
                href={product.downloads.withUI.mac}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white gradient-bg hover:gradient-bg-hover transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                <Monitor className="w-4 h-4" />
                macOS
              </a>
            )}
            {!product.downloads.withUI?.windows &&
              !product.downloads.withUI?.mac && (
                <span
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
                  style={{
                    backgroundColor: "var(--bg-surface-hover)",
                    color: "var(--text-muted)",
                  }}
                >
                  Coming soon
                </span>
              )}
          </div>
        </div>

        {/* Without UI */}
        <div className="space-y-2">
          <p
            className="text-[11px] font-semibold uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            Without UI
          </p>
          <div className="flex flex-col gap-2">
            {product.downloads.withoutUI?.windows && (
              <a
                href={product.downloads.withoutUI.windows}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                style={{
                  border: "1.5px solid var(--border-color)",
                  color: "var(--text-primary)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--bg-surface-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border-color)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                }}
              >
                <Terminal className="w-4 h-4" />
                Windows
              </a>
            )}
            {product.downloads.withoutUI?.mac && (
              <a
                href={product.downloads.withoutUI.mac}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                style={{
                  border: "1.5px solid var(--border-color)",
                  color: "var(--text-primary)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--bg-surface-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border-color)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                }}
              >
                <Terminal className="w-4 h-4" />
                macOS
              </a>
            )}
            {!product.downloads.withoutUI?.windows &&
              !product.downloads.withoutUI?.mac && (
                <span
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
                  style={{
                    backgroundColor: "var(--bg-surface-hover)",
                    color: "var(--text-muted)",
                  }}
                >
                  Coming soon
                </span>
              )}
          </div>
        </div>
      </div>

      {/* Direct download link */}
      {(product.downloads.direct?.windows || product.downloads.direct?.mac) && (
        <div className="pt-3" style={{ borderTop: "1px solid var(--border-color)" }}>
          <a
            href={
              product.downloads.direct.windows || product.downloads.direct.mac || "#"
            }
            className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
          >
            <ExternalLink className="w-3 h-3" />
            No thanks, just let me download them directly
          </a>
        </div>
      )}
    </motion.div>
  );
}
