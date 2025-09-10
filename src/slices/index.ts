// src/slices/index.ts
import Hero from "./Hero";
import Cta from "./Cta";
import Faq from "./Faq";

// Map slice IDs (from Slice Machine) -> components.
// If your FAQ slice API ID is "faq_list", use:  "faq_list": Faq,
export const components = {
  hero: Hero,
  cta: Cta,
  faq_list: Faq,
} as const;

// (Optional) keep named re-exports if other code imports them
export { default as hero } from "./Hero";
export { default as cta } from "./Cta";
export { default as faq } from "./Faq";
