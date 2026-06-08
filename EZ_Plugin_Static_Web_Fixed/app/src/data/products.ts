// ============================================
// PRODUCT DATA
// Add, remove, or edit plugins here.
// The UI will update automatically.
// ============================================

export type PlatformStatus = "yes" | "no" | "coming-soon";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imageLight: string;
  imageDark: string;
  logoImage?: string;
  platforms: {
    windows: PlatformStatus;
    mac: PlatformStatus;
  };
  // Download URLs — leave empty if not available yet
  downloads: {
    withUI?: {
      windows?: string;
      mac?: string;
    };
    withoutUI?: {
      windows?: string;
      mac?: string;
    };
    // Direct download URLs (bypass installer)
    direct?: {
      windows?: string;
      mac?: string;
    };
  };
}

export const products: Product[] = [
  {
    id: "ez-level",
    name: "EZ Level",
    tagline: "Metering & dynamics, simplified.",
    description:
      "A comprehensive metering and dynamics toolkit featuring Balance, Level, Stereo Width, Filter Lab, and Transient shaping. Get perfect levels every time with intuitive visual feedback.",
    features: [
      "Balance control with correlation metering",
      "Precision level meter with peak/RMS readout",
      "Stereo width adjustment with mono check",
      "Filter Lab for tonal shaping",
      "Transient shaper for punch and sustain",
      "Input/Output spectrum analyzer",
      "Delta, bypass, and A/B comparison",
      "JSON preset import/export",
    ],
    imageLight: "/images/EZ Level light theme.png",
    imageDark: "/images/EZ Level dark theme.png",
    logoImage: "/images/EZ Level Logo.png",
    platforms: {
      windows: "yes",
      mac: "yes",
    },
    downloads: {
      withUI: {
        windows: "#", // Replace with actual download URL
        mac: "#",
      },
      withoutUI: {
        windows: "#",
        mac: "#",
      },
      direct: {
        windows: "#",
        mac: "#",
      },
    },
  },
  // ============================================
  // ADD MORE PLUGINS HERE — just copy the template:
  //
  // {
  //   id: "ez-eq",
  //   name: "EZ EQ",
  //   tagline: "Sculpt your sound.",
  //   description: "A powerful parametric EQ...",
  //   features: ["Feature 1", "Feature 2", ...],
  //   imageLight: "/images/ez-eq-light.png",
  //   imageDark: "/images/ez-eq-dark.png",
  //   logoImage: "/images/ez-eq-logo.png",
  //   platforms: { windows: "yes", mac: "coming-soon" },
  //   downloads: { ... },
  // },
  // ============================================
];

// Helper to get status display
export function getStatusDisplay(status: PlatformStatus): {
  symbol: string;
  label: string;
  colorClass: string;
} {
  switch (status) {
    case "yes":
      return { symbol: "\u2713", label: "Supported", colorClass: "text-[#22C55E]" };
    case "no":
      return { symbol: "\u2715", label: "Not available", colorClass: "text-[#EF4444]" };
    case "coming-soon":
      return { symbol: "\u25CB", label: "Coming soon", colorClass: "text-[#F59E0B]" };
  }
}
