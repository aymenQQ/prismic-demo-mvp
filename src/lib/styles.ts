import type { CSSProperties } from "react";
import { fontFamilyFromSelect } from "@/lib/fonts";

export function buildGlobalCssVars(data: any): CSSProperties {
  return {

    // Background
    ["--background-color" as any]: data.background_color ?? "#ffffff",

    // Headings
    ["--text-heading-font" as any]: fontFamilyFromSelect(data.text_heading_font),
    ["--text-heading-size" as any]: typeof data.text_heading_size === "number" ? `${data.text_heading_size}px` : "48px",

    // Bodies
    ["--text-color" as any]: data.text_color ?? "#111111",
    ["--text-body-font" as any]: fontFamilyFromSelect(data.text_body_fonts),
    ["--text-body-size" as any]: typeof data.text_body_size === "number" ? `${data.text_body_size}px` : "24px",

    // Buttons
    ["--brand-color" as any]: data.brand_color ?? "#575757",
    ["--button-corner-radius" as any]: typeof data.button_corner_radius === "number" ? `${data.button_corner_radius}px` : "10px",

    // Card
    ["--card-color" as any]: data.card_color ?? "#ffffff",

  };
}

export function buildNavbarCssVars(data: any): CSSProperties {
  return {

    // Logo
    ["--navbar-logo-size" as any]: typeof data.navbar_logo_size === "number" ? `${data.navbar_logo_size}px` : "50px",

    // Background
    ["--navbar_background_color" as any]: data.navbar_background_color ?? "var(--background-color)",

    // Links
    ["--navbar-link-text-color" as any]: data.navbar_link_text_color ?? "var(--text-color)",
    ["--navbar-link-text-font" as any]: fontFamilyFromSelect(data.navbar_link_text_font ?? data.text_body_fonts),
    ["--navbar-link-text-size" as any]: typeof data.navbar_link_text_size === "number" ? `${data.navbar_link_text_size}px` : "var(--text-body-size)",

    // Buttons
    ["--navbar-button-color" as any]: data.navbar_button_color ?? "var(--brand-color)",
    ["--navbar-button-text-color" as any]: data.navbar_button_text_color ?? "var(--text-color)",
    ["--navbar-button-text-font" as any]: fontFamilyFromSelect(data.navbar_button_text_font),
    ["--navbar-button-text-size" as any]: typeof data.navbar_button_text_size === "number" ? `${data.navbar_button_text_size}px` : "var(--text-body-size)",
    ["--navbar-button-corner-radius" as any]: typeof data.navbar_button_corner_radius === "number" ? `${data.navbar_button_corner_radius}px` : undefined,

  };
}


export function buildHeroCssVars(slice: any): CSSProperties {
  const sp = slice?.primary ?? {};

  return {

    // Background & Background Image (withBackgroundImage variant)
    ["--hero-background-color" as any]: sp.hero_background_color ?? "var(--background-color)",
    ["--hero-background-image-scale" as any]: typeof sp.hero_background_image_scale === "number" ? `${sp.hero_background_image_scale}%` : undefined,
    ["--hero-background-image-corner-radius" as any]: typeof sp.hero_background_image_corner_radius === "number" ? `${sp.hero_background_image_corner_radius}px` : undefined,

    // Hero height
    ["--hero-height" as any]: typeof sp.hero_height === "number" ? `${sp.hero_height}px` : "600px",

    // Heading
    ["--hero-heading-text-color" as any]: sp.hero_heading_text_color ?? "var(--text-color)",
    ["--hero-heading-text-font" as any]: fontFamilyFromSelect(sp.hero_heading_text_font),
    ["--hero-heading-text-size" as any]: typeof sp.hero_heading_text_size === "number" ? `${sp.hero_heading_text_size}px` : "var(--text-heading-size)",
  
    // Body
    ["--hero-body-text-color" as any]: sp.hero_body_text_color ?? "var(--text-color)",
    ["--hero-body-text-font" as any]: fontFamilyFromSelect(sp.hero_body_text_font),
    ["--hero-body-text-size" as any]: typeof sp.hero_body_text_size === "number" ? `${sp.hero_body_text_size}px` : "var(--text-body-size)",

    // Buttons
    ["--hero-button-color" as any]: sp.hero_button_color ?? "var(--brand-color)",
    ["--hero-button-text-color" as any] : sp.hero_button_text_color ?? "var(--text-color)",
    ["--hero-button-text-font" as any]: fontFamilyFromSelect(sp.hero_button_text_font),
    ["--hero-button-text-size" as any]: typeof sp.hero_button_text_size === "number" ? `${sp.hero_button_text_size}px` : "var(--text-body-size)",
    ["--hero-button-corner-radius" as any]: typeof sp.hero_button_corner_radius === "number" ? `${sp.hero_button_corner_radius}px` : "var(--button-corner-radius)",

    // Card
    ["--hero-card-color" as any]: sp.hero_card_color ?? "var(--card-color)",
    ["--hero-card-corner-radius" as any]: typeof sp.hero_card_corner_radius === "number" ? `${sp.hero_card_corner_radius}px` : "var(--button-corner-radius)",

    // Side Image (default variant)
    ["--hero-side-image-url" as any]: sp.hero_side_image?.url ? `url("${sp.hero_side_image.url}")` : undefined,

  };
}

export function buildCtaCssVars(slice: any): CSSProperties {
  const sp = slice?.primary ?? slice ?? {};

  return {
    // Background & Background Image
    ["--cta-background-color" as any]: sp.cta_background_color ?? "var(--background-color)",
    ["--cta-background-image-scale" as any]: typeof sp.cta_background_image_scale === "number" ? `${sp.cta_background_image_scale}%` : undefined,
    ["--cta-background-image-corner-radius" as any]: typeof sp.cta_background_image_corner_radius === "number" ? `${sp.cta_background_image_corner_radius}px` : undefined,
    
    // CTA height
    ["--cta-height" as any]: typeof sp.cta_height === "number" ? `${sp.cta_height}px` : "200px",

    // Title
    ["--cta-title-text-color" as any]: sp.cta_title_text_color ?? "var(--text-color)",
    ["--cta-title-text-font" as any]: fontFamilyFromSelect(sp.cta_title_text_font) ?? "var(--text-heading-font)",
    ["--cta-title-text-size" as any]: typeof sp.cta_title_text_size === "number" ? `${sp.cta_title_text_size}px` : "var(--text-heading-size)",

    // Description
    ["--cta-description-text-color" as any]: sp.cta_description_text_color ?? "var(--text-color)",
    ["--cta-description-text-size" as any]: typeof sp.cta_description_text_size === "number" ? `${sp.cta_description_text_size}px` : "var(--text-body-size)",
    ["--cta-description-text-font" as any]: fontFamilyFromSelect(sp.cta_description_text_font) ?? "var(--text-body-font)",

    // Button
    ["--cta-button-color" as any]: sp.cta_button_color ?? "var(--brand-color)",
    ["--cta-button-text-color" as any]: sp.cta_button_text_color ?? "var(--text-color)",
    ["--cta-button-text-font" as any]: fontFamilyFromSelect(sp.cta_button_text_font),
    ["--cta-button-text-size" as any]: typeof sp.cta_button_text_size === "number" ? `${sp.cta_button_text_size}px` : "var(--text-body-size)",
    ["--cta-button-corner-radius" as any]: typeof sp.cta_button_corner_radius === "number" ? `${sp.cta_button_corner_radius}px` : "var(--button-corner-radius)",

    // Card
    ["--cta-card-color" as any]: sp.cta_card_color ?? "transparent",
    ["--cta-card-corner-radius" as any]: typeof sp.cta_card_corner_radius === "number" ? `${sp.cta_card_corner_radius}px` : "0px",

  };
}

export function buildPageCssVars(data: any): CSSProperties {
  return { ...buildGlobalCssVars(data), ...buildNavbarCssVars(data), ...buildHeroCssVars(data), ...buildCtaCssVars(data) };
}
