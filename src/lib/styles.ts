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

    // Text
    ["--navbar-text-color" as any]: data.navbar_text_color ?? "var(--text-color)",
    ["--navbar-text-font" as any]: fontFamilyFromSelect(data.navbar_text_font ?? data.text_body_fonts),
    ["--navbar-text-size" as any]: typeof data.navbar_text_size === "number" ? `${data.navbar_text_size}px` : "var(--text-body-size)",

    // Buttons
    ["--navbar-button-color" as any]: data.navbar_button_color ?? "var(--brand-color)",
    ["--navbar-button-text-color" as any]: data.navbar_button_text_color ?? "var(--text-color)",
    ["--navbar-button-corner-radius" as any]: typeof data.navbar_button_corner_radius === "number" ? `${data.navbar_button_corner_radius}px` : undefined,

  };
}


export function buildHeroCssVars(slice: any): CSSProperties {
  const sp = slice?.primary ?? {};

  return {

    // Background & Background Image (withBackgroundImage variant)
    ["--hero-background-color" as any]: sp.hero_background_color ?? "var(--background-color)",
    ["--hero-background-image-url" as any]: sp.hero_background_image?.url ? `url("${sp.hero_background_image.url}")` : undefined,
    ["--hero-background-image-scale" as any]: typeof sp.hero_background_image_scale === "number" ? `${sp.hero_background_image_scale}%` : undefined,
    ["--hero-background-image-corner-radius" as any]: typeof sp.hero_background_image_corner_radius === "number" ? `${sp.hero_background_image_corner_radius}px` : undefined,

    // Hero height
    ["--hero-height" as any]: typeof sp.hero_fixed_height === "number" ? `${sp.hero_fixed_height}px` : "600px",

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

export function buildPageCssVars(data: any): CSSProperties {
  return { ...buildGlobalCssVars(data), ...buildNavbarCssVars(data), ...buildHeroCssVars(data) };
}
