import type { CSSProperties } from "react";
import { fontFamilyFromSelect } from "@/lib/fonts";


export function buildGlobalCssVars(data: any): CSSProperties {
  return {
    // Global colors
    ["--background-color" as any]: data.background_color ?? "#ffffff",
    ["--brand-color" as any]: data.brand_color ?? "808080",
    ["--text-color" as any]: data.text_color ?? "#111111",

    // Global button corner radius
    ["--button-corner-radius" as any]:
      typeof data.button_corner_radius === "number"
        ? `${data.button_corner_radius}px`  
        : "8px",

    // Global text size
    ["--text-body-size" as any]:
      typeof data.text_body_size === "number"
        ? `${data.text_body_size}px` 
        : "16px",
    ["--text-heading-size" as any]:
      typeof data.text_heading_size === "number"
        ? `${data.text_heading_size}px`
        : "28px",
    
    // Global text fonts
    ["--text-heading-font" as any]: fontFamilyFromSelect(data.text_heading_font),
    ["--text-body-font" as any]: fontFamilyFromSelect(data.text_body_fonts),
  };
}

export function buildNavbarCssVars(data: any): CSSProperties {
  return {
    ["--navbar-logo-height" as any]: 
      typeof data.navbar_logo_height === "number"
        ? `${data.navbar_logo_height}px`
        : "100px",

    ["--navbar_background_color" as any]: data.navbar_background_color,
    ["--navbar-text-color" as any]: data.navbar_text_color,
    ["--navbar-button-color" as any]: data.navbar_button_color,
    ["--navbar-button-text-color" as any]: data.navbar_button_text_color,

    ["--navbar-button-corner-radius" as any]:
      typeof data.navbar_button_corner_radius === "number"
        ? `${data.navbar_button_corner_radius}px`
        : "var(--button-corner-radius",
        
    ["--navbar-text-size" as any]:
      typeof data.navbar_text_size === "number"
        ? `${data.navbar_text_size}px`
        : "--text-body-size",

    ["--navbar-text-font" as any]: fontFamilyFromSelect(data.navbar_text_font),
  };
}

export function buildPageCssVars(data: any): CSSProperties {
  return { ...buildGlobalCssVars(data), ...buildNavbarCssVars(data) };
}
