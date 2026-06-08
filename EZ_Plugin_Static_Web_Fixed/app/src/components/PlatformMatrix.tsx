import { motion } from "framer-motion";
import { Monitor } from "lucide-react";
import { products, getStatusDisplay } from "@/data/products";
import AnimatedSection from "./AnimatedSection";

export default function PlatformMatrix() {
  return (
    <AnimatedSection>
      <section className="py-0">
        <div className="flex items-center gap-3 mb-6">
          <Monitor className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
          <h2 className="text-xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Supported Platforms
          </h2>
        </div>

        <div className="card-surface rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th
                    className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Plugin
                  </th>
                  <th
                    className="text-center px-5 py-3.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Windows (VST3)
                  </th>
                  <th
                    className="text-center px-5 py-3.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    macOS (VST3 / AU)
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, rowIndex) => {
                  const winStatus = getStatusDisplay(product.platforms.windows);
                  const macStatus = getStatusDisplay(product.platforms.mac);

                  return (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: rowIndex * 0.08 }}
                      className="group transition-colors duration-200"
                      style={{
                        borderBottom: "1px solid var(--border-color)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "var(--bg-surface-hover)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "transparent";
                      }}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          {product.logoImage && (
                            <img
                              src={product.logoImage}
                              alt=""
                              className="w-6 h-6 object-contain"
                            />
                          )}
                          <span
                            className="text-sm font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center">
                        {product.platforms.windows === "coming-soon" ? (
                          <span
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium mono-font"
                            style={{
                              backgroundColor: "rgba(245, 158, 11, 0.1)",
                              color: "#F59E0B",
                            }}
                          >
                            Coming Soon
                          </span>
                        ) : (
                          <span
                            className="mono-font text-base font-medium"
                            style={{ color: winStatus.colorClass }}
                            title={winStatus.label}
                          >
                            {winStatus.symbol}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-center">
                        {product.platforms.mac === "coming-soon" ? (
                          <span
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium mono-font"
                            style={{
                              backgroundColor: "rgba(245, 158, 11, 0.1)",
                              color: "#F59E0B",
                            }}
                          >
                            Coming Soon
                          </span>
                        ) : (
                          <span
                            className="mono-font text-base font-medium"
                            style={{ color: macStatus.colorClass }}
                            title={macStatus.label}
                          >
                            {macStatus.symbol}
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div
            className="flex flex-wrap items-center gap-5 px-5 py-3 text-[11px]"
            style={{
              borderTop: "1px solid var(--border-color)",
              color: "var(--text-muted)",
            }}
          >
            <span className="flex items-center gap-1.5">
              <span className="mono-font text-sm text-[#22C55E]">✓</span> Supported
            </span>
            <span className="flex items-center gap-1.5">
              <span className="mono-font text-sm text-[#EF4444]">✕</span> Not available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="mono-font text-sm text-[#F59E0B]">○</span> Coming soon
            </span>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
