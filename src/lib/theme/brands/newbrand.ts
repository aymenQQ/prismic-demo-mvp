import type { Theme } from "../tokens";

export const newbrandTheme: Theme = {
  palette: {
    bg: "",
    surface: "",
    text: "",
    textStrong: "",
    brand: "",
    brandAlt: "",
    accent: "",
    divider: "",
  },
  fonts: {
    heading: "",
    body: "",
  },
  radii: { sm: "", md: "", lg: "", xl: "" },
  spacing: () => "",
  scale: () => "",

  overrides: {
    page: {
      "--slice-gap": "0px", // vertical spacing between slices on the page
    },

    navbar: {
      "--navbar-background-color": "#ffffff", // navbar bar background
      "--navbar-logo-size": "48px", // height of the logo image
      "--navbar-position": "sticky", // CSS position of the navbar
      "--navbar-z-index": "1000", // stacking context for navbar
      "--navbar-divider-margin-top": "0px", // space above optional divider

      "--navbar-link-text-color": "#333333",
      "--navbar-link-text-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      "--navbar-link-text-size": "16px",

      "--navbar-button-color": "#111111",
      "--navbar-button-text-color": "#ffffff", 
      "--navbar-button-text-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      "--navbar-button-text-size": "16px",
      "--navbar-button-corner-radius": "8px", 

      "--navbar-border-bottom": "0px solid rgba(0,0,0,0.10)", // optional bottom at the bottom of the navbar
      "--navbar-border-width": "100%", // width of the bottom border
      "--navbar-backdrop-filter": "blur(0px)", // backdrop filter effect
    },

    hero: {
      default: {
        "--hero-background-color": "#ffffff", // hero section background

        "--hero-title-text-color": "#111111",
        "--hero-title-text-font": "var(--font-lora), Georgia, serif",
        "--hero-title-text-size": "36px",

        "--hero-description-text-color": "#333333",
        "--hero-description-text-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        "--hero-description-text-size": "18px",

        "--hero-button-corner-radius": "8px", 
        "--hero-button-color": "#111111",
        "--hero-button-text-color": "#ffffff",
        "--hero-button-text-size": "16px",
        "--hero-button-text-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",

        "--hero-card-color": "#f7f7f7",
        "--hero-card-corner-radius": "12px",

        "--hero-side-image-scale": "1", // scale size of side image (1 is 100%)
        "--hero-side-image-corner-radius": "12px",

        "--hero-background-image-scale": "1", // scale size of background image (1 is 100%)
        "--hero-background-image-corner-radius": "0px",

        "--hero-overlay": "linear-gradient(0deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.00) 0%)", // gradient overlay (direction, color, stops)
        "--hero-height": "auto", // min section height
      },

      withBackground: {
        "--hero-background-color": "#0b0b0b", // hero with background: base color

        "--hero-tagline-text-color": "#666666",
        "--hero-tagline-text-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", 
        "--hero-tagline-text-size": "12px", 

        "--hero-title-text-color": "#ffffff",
        "--hero-title-text-font": "var(--font-lora), Georgia, serif",
        "--hero-title-text-size": "48px",

        "--hero-description-text-color": "#eaeaea",
        "--hero-description-text-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        "--hero-description-text-size": "18px",

        "--hero-button-corner-radius": "8px",
        "--hero-button-color": "#ffffff",
        "--hero-button-text-color": "#000000",
        "--hero-button-text-size": "16px",
        "--hero-button-text-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",

        "--hero-side-image-scale": "1", // scale size of side image (1 is 100%)
        "--hero-side-image-corner-radius": "12px",

        "--hero-background-image-scale": "1", // scale size of background image (1 is 100%)
        "--hero-background-image-corner-radius": "0px",

        "--hero-overlay": "linear-gradient(0deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.00) 0%)", // gradient overlay (direction, color, stops)
        "--hero-height": "640px", // min height for bg variant
      },
    },

    cta: {
      default: {
        "--cta-background-color": "#ffffff", // CTA section background
        "--cta-pad": "60px 5%", // CTA section padding

        "--cta-title-font": "var(--font-lora), Georgia, serif",
        "--cta-title-size": "40px",
        "--cta-title-tracking": "0em",
        "--cta-title-color": "#111111",

        "--cta-description-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        "--cta-description-color": "#333333",
        "--cta-description-size": "18px",

        "--cta-price-font": "var(--font-lora), Georgia, serif",
        "--cta-price-size": "56px",
        "--cta-price-tracking": "0em",
        "--cta-price-color": "#111111",

        "--cta-button-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        "--cta-button-size": "16px",
        "--cta-button-bg": "#111111",
        "--cta-button-text": "#ffffff",
        "--cta-button-corner-radius": "8px",

        "--cta-card-color": "#f7f7f7",
        "--cta-card-corner-radius": "12px",

        "--cta-overlay": "linear-gradient(0deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.00) 0%)", // CTA gradient overlay (direction, color, stops)
        "--cta-height": "auto", // CTA min section height
      },

      carBackground: {
        "--cta-overlay": "linear-gradient(0deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.00) 0%)", // CTA gradient overlay (direction, color, stops)
        "--cta-pad": "80px 5%", // CTA padding over car bg

        "--cta-title-font": "var(--font-lora), Georgia, serif",
        "--cta-title-size": "88px",
        "--cta-title-tracking": "0em",
        "--cta-title-color": "#ffffff",

        "--cta-description-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        "--cta-description-color": "rgba(255,255,255,0.85)",
        "--cta-description-size": "24px",

        "--cta-price-font": "var(--font-lora), Georgia, serif",
        "--cta-price-size": "64px",
        "--cta-price-tracking": "0em",
        "--cta-price-color": "#ffffff",

        "--cta-button-font": "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        "--cta-button-size": "18px",
        "--cta-button-bg": "#111111",
        "--cta-button-text": "#ffffff",
        "--cta-button-corner-radius": "8px",

        "--cta-height": "640px", // min section height
      },
    },
  },
};


