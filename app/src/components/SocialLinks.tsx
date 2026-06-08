import { motion } from "framer-motion";
import { MessageCircle, Github, ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/config";

export default function SocialLinks() {
  const links = [
    {
      name: "Discord",
      description: "Join the community for support, presets, and updates.",
      icon: MessageCircle,
      href: socialLinks.discord,
      color: "#5865F2",
    },
    {
      name: "GitHub",
      description: "Star the repo, report issues, or contribute.",
      icon: Github,
      href: socialLinks.github,
      color: "var(--text-primary)",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="card-surface rounded-xl p-5 group card-surface-hover transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-3">
            <link.icon
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              style={{ color: link.color }}
              strokeWidth={1.5}
            />
            <ArrowUpRight
              className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              style={{ color: "var(--text-muted)" }}
            />
          </div>
          <h3
            className="text-sm font-bold mb-1"
            style={{ color: "var(--text-primary)" }}
          >
            {link.name}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {link.description}
          </p>
        </motion.a>
      ))}
    </div>
  );
}
