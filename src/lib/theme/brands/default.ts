import type { Theme } from "../tokens";

export const defaultTheme: Theme = {
  palette: {
    bg: "#faf7f2",
    surface: "#ffffff",
    text: "#222",
    textStrong: "#111",
    brand: "#111111",
    brandAlt: "#444",
    accent: "#0055ff",
    divider: "rgba(0,0,0,.15)",
  },
  fonts: {
    heading: "var(--font-lora), Georgia, serif",
    body: "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  radii: { sm: "6px", md: "12px", lg: "16px", xl: "24px" },
  spacing: (n) => `${n * 4}px`,
  scale:   (n) => `${Math.round(16 * Math.pow(1.2, n))}px`,
};

