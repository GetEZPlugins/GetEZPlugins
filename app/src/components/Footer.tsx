import { Link } from "react-router-dom";
import { MessageCircle, Github } from "lucide-react";
import { socialLinks, siteConfig } from "@/data/config";
import { navLinks } from "@/data/config";

export default function Footer() {
  return (
    <footer
      className="mt-16 py-8"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-2.5">
            <img
              src="/images/Full-Gradient-Logo.png"
              alt=""
              className="w-6 h-6 rounded-md object-cover"
            />
            <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              {siteConfig.name}
            </span>
          </div>

          {/* Center: Nav */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-1 text-xs font-medium rounded-md transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-muted)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social icons */}
          <div className="flex items-center gap-2">
            <a
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#5865F2";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--bg-surface-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--bg-surface-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-6 pt-4 text-center" style={{ borderTop: "1px solid var(--border-color)" }}>
          <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
            Made with care by Symest! All plugins are free and open source.
          </p>
        </div>
      </div>
    </footer>
  );
}
