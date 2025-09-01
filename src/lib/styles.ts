import type { CSSProperties } from "react";
import { fontFamilyFromSelect } from "@/lib/fonts";

export function buildGlobalCssVars(data: any): CSSProperties {
  return {

    // Backgrounds
    ["--background-color" as any]: data.background_color ?? "#ffffff",

    // Buttons & Cards Colors
    ["--brand-first-color" as any]: data.brand_first_color ?? "#575757",
    ["--brand-second-color" as any]: data.brand_second_color ?? "#ffffff",

    // Titles
    ["--title-text-color" as any]: data.title_text_color ?? "#111111",
    ["--title-text-font" as any]: fontFamilyFromSelect(data.title_text_font),
    ["--title-text-size" as any]: typeof data.title_text_size === "number" ? `${data.title_text_size}px` : "48px",

    // Descriptions
    ["--description-text-color" as any]: data.description_text_color ?? "#111111",
    ["--description-text-font" as any]: fontFamilyFromSelect(data.description_text_font),
    ["--description-text-size" as any]: typeof data.description_text_size === "number" ? `${data.description_text_size}px` : "24px",
    
    // Buttons
    ["--button-text-color" as any]: data.button_text_color ?? "#111111",
    ["--button-text-font" as any]: fontFamilyFromSelect(data.button_text_font),
    ["--button-text-size" as any]: typeof data.button_text_size === "number" ? `${data.button_text_size}px` : "18px",
    ["--button-corner-radius" as any]: typeof data.button_corner_radius === "number" ? `${data.button_corner_radius}px` : "8px",
   
  };
}

export function buildNavbarCssVars(data: any): CSSProperties {
  return {

    // Logo
    ["--navbar-logo-size" as any]: typeof data.navbar_logo_size === "number" ? `${data.navbar_logo_size}px` : "50px",

    // Background
    ["--navbar-background-color" as any]: data.navbar_background_color ?? "var(--background-color)",

    // Links
    ["--navbar-link-text-color" as any]: data.navbar_link_text_color ?? "var(--description-text-color)",
    ["--navbar-link-text-font" as any]: fontFamilyFromSelect(data.navbar_link_text_font),
    ["--navbar-link-text-size" as any]: typeof data.navbar_link_text_size === "number" ? `${data.navbar_link_text_size}px` : "var(--description-text-size)",

    // Buttons
    ["--navbar-button-color" as any]: data.navbar_button_color ?? "var(--brand-first-color)",
    ["--navbar-button-text-color" as any]: data.navbar_button_text_color ?? "var(--button-text-color)",
    ["--navbar-button-text-font" as any]: fontFamilyFromSelect(data.navbar_button_text_font),
    ["--navbar-button-text-size" as any]: typeof data.navbar_button_text_size === "number" ? `${data.navbar_button_text_size}px` : "var(--button-text-size)",
    ["--navbar-button-corner-radius" as any]: typeof data.navbar_button_corner_radius === "number" ? `${data.navbar_button_corner_radius}px` : "var(--button-corner-radius)",

  };
}


export function buildHeroCssVars(slice: any): CSSProperties {
  const sp = slice?.primary ?? {};

  return {

    // Background & Side Image (default variant) & Background Image (withBackgroundImage variant)
    ["--hero-background-color" as any]: sp.hero_background_color ?? "var(--background-color)",
    ["--hero-background-image-scale" as any]: typeof sp.hero_background_image_scale === "number" ? `${sp.hero_background_image_scale}%` : undefined,
    ["--hero-background-image-corner-radius" as any]: typeof sp.hero_background_image_corner_radius === "number" ? `${sp.hero_background_image_corner_radius}px` : undefined,
    ["--hero-side-image-url" as any]: sp.hero_side_image?.url ? `url("${sp.hero_side_image.url}")` : undefined,

    // Hero height
    ["--hero-height" as any]: typeof sp.hero_height === "number" ? `${sp.hero_height}px` : "600px",

    // Title
    ["--hero-title-text-color" as any]: sp.hero_title_text_color ?? "var(--title-text-color)",
    ["--hero-title-text-font" as any]: fontFamilyFromSelect(sp.hero_title_text_font),
    ["--hero-title-text-size" as any]: typeof sp.hero_title_text_size === "number" ? `${sp.hero_title_text_size}px` : "var(--title-text-size)",
  
    // Description
    ["--hero-description-text-color" as any]: sp.hero_description_text_color ?? "var(--description-text-color)",
    ["--hero-description-text-font" as any]: fontFamilyFromSelect(sp.hero_description_text_font),
    ["--hero-description-text-size" as any]: typeof sp.hero_description_text_size === "number" ? `${sp.hero_description_text_size}px` : "var(--description-text-size)",

    // Buttons
    ["--hero-button-color" as any]: sp.hero_button_color ?? "var(--brand-first-color)",
    ["--hero-button-text-color" as any] : sp.hero_button_text_color ?? "var(--button-text-color)",
    ["--hero-button-text-font" as any]: fontFamilyFromSelect(sp.hero_button_text_font),
    ["--hero-button-text-size" as any]: typeof sp.hero_button_text_size === "number" ? `${sp.hero_button_text_size}px` : "var(--button-text-size)",
    ["--hero-button-corner-radius" as any]: typeof sp.hero_button_corner_radius === "number" ? `${sp.hero_button_corner_radius}px` : "var(--button-corner-radius)",

    // Card
    ["--hero-card-color" as any]: sp.hero_card_color ?? "var(--brand-second-color)",
    ["--hero-card-corner-radius" as any]: typeof sp.hero_card_corner_radius === "number" ? `${sp.hero_card_corner_radius}px` : undefined,
    
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
    ["--cta-title-text-color" as any]: sp.cta_title_text_color ?? "var(--title-text-color)",
    ["--cta-title-text-font" as any]: fontFamilyFromSelect(sp.cta_title_text_font) ?? "var(--title-text-font)",
    ["--cta-title-text-size" as any]: typeof sp.cta_title_text_size === "number" ? `${sp.cta_title_text_size}px` : "var(--title-text-size)",

    // Description
    ["--cta-description-text-color" as any]: sp.cta_description_text_color ?? "var(--description-text-color)",
    ["--cta-description-text-size" as any]: typeof sp.cta_description_text_size === "number" ? `${sp.cta_description_text_size}px` : "var(--description-text-size)",
    ["--cta-description-text-font" as any]: fontFamilyFromSelect(sp.cta_description_text_font) ?? "var(--description-text-font)",

    // Button
    ["--cta-button-color" as any]: sp.cta_button_color ?? "var(--brand-first-color)",
    ["--cta-button-text-color" as any]: sp.cta_button_text_color ?? "var(--button-text-color)",
    ["--cta-button-text-font" as any]: fontFamilyFromSelect(sp.cta_button_text_font),
    ["--cta-button-text-size" as any]: typeof sp.cta_button_text_size === "number" ? `${sp.cta_button_text_size}px` : "var(--button-text-size)",
    ["--cta-button-corner-radius" as any]: typeof sp.cta_button_corner_radius === "number" ? `${sp.cta_button_corner_radius}px` : "var(--button-corner-radius)",

    // Card
    ["--cta-card-color" as any]: sp.cta_card_color ?? "var(--brand-second-color)",
    ["--cta-card-corner-radius" as any]: typeof sp.cta_card_corner_radius === "number" ? `${sp.cta_card_corner_radius}px` : undefined,

  };
}

export function buildFaqCssVars(slice: any): CSSProperties {
  const sp = slice?.primary ?? slice ?? {};
  const styleItems = Array.isArray(sp.styles) ? sp.styles : [];
  const style = styleItems[0] ?? {};

  return {

    // Background
    ["--faq-background-color" as any]: style.faq_background_color ?? "var(--background-color)",

    // Title
    ["--faq-title-text-color" as any]: style.faq_title_text_color ?? "var(--title-text-color)", 
    ["--faq-title-text-font" as any]: fontFamilyFromSelect(style.faq_title_text_font) ?? "var(--title-text-font)",
    ["--faq-title-text-size" as any]: typeof style.faq_title_text_size === "number" ? `${style.faq_title_text_size}px` : "var(--title-text-size)",

    // Description
    ["--faq-description-text-color" as any]: style.faq_description_text_color ?? "var(--description-text-color)",
    ["--faq-description-text-font" as any]: fontFamilyFromSelect(style.faq_description_text_font) ?? "var(--description-text-font)",
    ["--faq-description-text-size" as any]: typeof style.faq_description_text_size === "number" ? `${style.faq_description_text_size}px` : "var(--description-text-size)",

    // Question
    ["--faq-question-text-color" as any]: style.faq_question_text_color ?? "var(--title-text-color)",
    ["--faq-question-text-font" as any]: fontFamilyFromSelect(style.faq_question_text_font) ?? "var(--title-text-font)",
    ["--faq-question-text-size" as any]: typeof style.faq_question_text_size === "number" ? `${style.faq_question_text_size}px` : "var(--title-text-size)",

    // Answer
    ["--faq-answer-text-color" as any]: style.faq_answer_text_color ?? "var(--description-text-color)",
    ["--faq-answer-text-font" as any]: fontFamilyFromSelect(style.faq_answer_text_font) ?? "var(--description-text-font)",
    ["--faq-answer-text-size" as any]: typeof style.faq_answer_text_size === "number" ? `${style.faq_answer_text_size}px` : "var(--description-text-size)",

    // Separator
    ["--faq-divider-color" as any]: style.faq_divider_color ?? "rgba(0,0,0,.2)",
  };
}

export function buildPageCssVars(data: any): CSSProperties {
  return { ...buildGlobalCssVars(data), ...buildNavbarCssVars(data), ...buildHeroCssVars(data), ...buildCtaCssVars(data), ...buildFaqCssVars(data) };
}
