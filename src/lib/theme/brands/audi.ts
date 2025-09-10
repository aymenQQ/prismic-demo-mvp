import type { Theme } from "../tokens";

export const audiTheme: Theme = {
  palette: {
    bg: "#ffffff",
    surface: "#0b0b0b",
    text: "#0a0a0a",
    textStrong: "#000",
    brand: "#D00000",
    brandAlt: "#111",
    accent: "#f2f2f2",
    divider: "rgba(0,0,0,.12)",
  },
  fonts: { heading: "roboto_mono", body: "lora" },
  radii: { sm: "6px", md: "12px", lg: "20px", xl: "28px" },
  spacing: (n) => `${n * 4}px`,
  scale: (n) => `${Math.round(16 * Math.pow(1.2, n))}px`,

  overrides: {
    navbar: {
      "--navbar-background-color": "#ffffff",
      "--navbar-logo-size": "50px",
      "--navbar-link-text-color": "#6b6b6b",
      "--navbar-border-bottom": "none",
      "--navbar-border-width": "100%",
    },
    hero: {
      default: {
        "--hero-background-color": "#ffffff",
        "--hero-title-text-color": "#ffffff",
        "--hero-title-text-font":
          "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-title-text-size": "clamp(28px, 4vw, 44px)",

        "--hero-description-text-color": "#ffffff",
        "--hero-description-text-font":
          "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-description-text-size": "clamp(16px, 2vw, 20px)",

        "--hero-overlay":
          "linear-gradient(180deg, #000000ab 8%, #00000080 40%, #0000 65%)",

        "--hero-button-corner-radius": "0px",
        "--hero-button-color": "#ffffff",
        "--hero-button-text-color": "#000000",
        "--hero-button-text-size": "16px",
        "--hero-button-text-font":
          "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",

        "--hero-side-image-scale": "1",
        "--hero-side-image-corner-radius": "12px",
        "--hero-background-image-scale": "1",
        "--hero-background-image-corner-radius": "0px",
        "--hero-height": "965px",
      },

      withBackground: {
        "--hero-background-color": "#0b0b0b",
        "--hero-overlay":
          "linear-gradient(180deg, #000000f0 15%, #00000080 40%, #0000 65%)",

        "--hero-tagline-text-color": "#fff",
        "--hero-tagline-text-font":
          "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-tagline-text-size": "12px",

        "--hero-title-text-color": "#fff",
        "--hero-title-text-font":
          "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-title-text-size": "clamp(40px, 12vw, 300px)",

        "--hero-description-text-color": "#fff",
        "--hero-description-text-font":
          "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-description-text-size": "20px",

        "--hero-button-corner-radius": "5px",
        "--hero-button-color": "#ffffff",
        "--hero-button-text-color": "#fff",
        "--hero-button-text-size": "18px",
        "--hero-button-text-font":
          "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",

        "--hero-side-image-scale": "1",
        "--hero-side-image-corner-radius": "12px",
        "--hero-background-image-scale": "1",
        "--hero-background-image-corner-radius": "0px",
        "--hero-height": "840px",
      },
    },

    cta: {
      carBackground: {
        "--cta-overlay":
          "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.75) 26%, rgba(0,0,0,.45) 46%, rgba(0,0,0,0) 62%)",
        "--cta-pad": "80px 5%",

        "--cta-title-font": "var(--font-bmw, var(--font-heading))",
        "--cta-title-size": "88px",
        "--cta-title-tracking": "0.02em",
        "--cta-title-color": "#fff",

        "--cta-description-font": "var(--font-bmw, var(--font-body))",
        "--cta-description-color": "rgba(255,255,255,.85)",
        "--cta-description-size": "24px",

        "--cta-price-font": "var(--font-bmw, var(--font-heading))",
        "--cta-price-size": "56px",
        "--cta-price-tracking": "0.01em",
        "--cta-price-color": "#fff",

        "--cta-button-font": "var(--font-bmw, var(--font-heading))",
        "--cta-button-size": "18px",
        "--cta-button-bg": "#D00000",
        "--cta-button-text": "#fff",
        "--cta-button-corner-radius": "5px",

        "--cta-height": "640px",
      },
    },
  },
};
