import type { Theme } from "../tokens";

export const bmwTheme: Theme = {
  palette: {
    bg:      "#E6F0FF",
    surface: "#0D3C8B",
    text:       "#0B0B0B",
    textStrong: "#000000",
    brand:    "#1C69D4",
    brandAlt: "#0D3C8B",
    accent:   "#E6F0FF",
    divider: "rgba(0,0,0,.12)",
  },
  fonts: {
    heading: "roboto_mono",
    body:    "lora",
  },
  radii: { sm: "6px", md: "12px", lg: "20px", xl: "28px"},
  spacing: (n: number) => `${n * 4}px`,
  scale:   (n: number) => `${Math.round(16 * Math.pow(1.2, n))}px`,

  overrides: {
    page: {
      "--slice-gap": "50px",
    },
    navbar: {
      "--navbar-background-color": "transparent",
      "--navbar-logo-size": "55px",
      "--navbar-position": "absolute",
      "--navbar-z-index": "1000",
      "--navbar-divider-margin-top": "15px",

      "--navbar-link-text-color": "#ffffff",
      "--navbar-link-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
      "--navbar-link-text-size": "16px",

      "--navbar-button-color": "#1C69D4",
      "--navbar-button-text-color": "#ffffff",
      "--navbar-button-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
      "--navbar-button-text-size": "16px",
      "--navbar-button-corner-radius": "5px",

      "--navbar-border-bottom": "1px solid #ffffff",
      "--navbar-border-width": "100%",
    },
    hero: {
      default: {
        "--hero-background-color": "#0D3C8B",
        "--hero-title-text-color": "#0B0B0B",
        "--hero-title-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-title-text-size": "clamp(28px, 4vw, 44px)",

        "--hero-description-text-color": "#333333",
        "--hero-description-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-description-text-size": "clamp(16px, 2vw, 20px)",

        "--hero-button-corner-radius": "24px",
        "--hero-button-color": "#1C69D4",
        "--hero-button-text-color": "#ffffff",
        "--hero-button-text-size": "16px",
        "--hero-button-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",

        "--hero-card-color": "",
        "--hero-card-corner-radius": "",

        "--hero-overlay": "linear-gradient(0deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.06) 35%, rgba(0,0,0,0.00) 60%)",

        "--hero-side-image-scale": "1",
        "--hero-side-image-corner-radius": "12px",

        "--hero-background-image-scale": "1",
        "--hero-background-image-corner-radius": "0px",

        "--hero-height": "440px"
      },
  
      withBackground: {
        "--hero-background-color": "#0D3C8B",

        "--hero-tagline-text-color": "#ffffff",
        "--hero-tagline-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-tagline-text-size": "clamp(15px, 20vw, 10px)",

        "--hero-title-text-color": "#ffffff",
        "--hero-title-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-title-text-size": "clamp(40px, 12vw, 300px)",
  
        "--hero-description-text-color": "#ffffff",
        "--hero-description-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
        "--hero-description-text-size": "clamp(30px, 20vw, 20px)",
  
        "--hero-button-corner-radius": "5px",
        "--hero-button-color": "#1C69D4",
        "--hero-button-text-color": "#ffffff",
        "--hero-button-text-size": "20px",
        "--hero-button-text-font": "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
  
        "--hero-side-image-scale": "1",
        "--hero-side-image-corner-radius": "12px",
  
        "--hero-background-image-scale": "1",
        "--hero-background-image-corner-radius": "0px",

        "--hero-overlay": "linear-gradient(90deg, rgba(0,0,0,0.98) 10%, rgba(0,0,0,0.06) 35%, rgba(0,0,0,0.00) 55%)",
  
        "--hero-card-color": "#0E2F6B",
        "--hero-card-corner-radius": "18px",
  
        "--hero-height": "840px"
        
      },
    },

    cta: {
      default: {
        "--cta-background-color": "#ffffff",
        "--cta-pad": "60px 5%",
        "--cta-title-font": "var(--font-bmw)",
        "--cta-title-size": "clamp(28px, 6vw, 56px)",
        "--cta-title-tracking": "0.01em",
        "--cta-title-color": "#0B0B0B",

        "--cta-description-font": "var(--font-bmw)",
        "--cta-description-color": "#333333",
        "--cta-description-size": "clamp(16px, 2vw, 20px)",

        "--cta-button-font": "var(--font-bmw)",
        "--cta-button-size": "16px",
        "--cta-button-bg": "#1C69D4",
        "--cta-button-text": "#ffffff",
        "--cta-button-corner-radius": "12px",

        "--cta-card-color": "#0E2F6B",
        "--cta-card-corner-radius": "12px",

        "--cta-overlay": "linear-gradient(0deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.06) 35%, rgba(0,0,0,0.00) 60%)",

        "--cta-height": "auto",
      },
      carBackground: {
        "--cta-overlay":
          "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 26%, rgba(0,0,0,0.45) 46%, rgba(0,0,0,0.00) 62%)",

        "--cta-pad": "80px 5%",
        "--cta-title-font": "var(--font-bmw, var(--font-heading))",
        "--cta-title-size": "100px",
        "--cta-title-tracking": "0.02em",
        "--cta-title-color": "#fff",

        "--cta-description-font": "var(--font-bmw, var(--font-body))",
        "--cta-description-color": "rgba(255,255,255,.85)",
        "--cta-description-size": "28px",

        "--cta-price-font": "var(--font-bmw, var(--font-heading))",
        "--cta-price-size": "64px",
        "--cta-price-tracking": "0.01em",
        "--cta-price-color": "#fff",

        "--cta-button-font": "var(--font-bmw, var(--font-heading))",
        "--cta-button-size": "18px",
        "--cta-button-bg": "#1C69D4",
        "--cta-button-text": "#fff",
        "--cta-button-corner-radius": "5px",

        "--cta-height": "640px",
      },
    },
  },
};
