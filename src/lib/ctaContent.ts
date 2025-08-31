import { asLink, asText } from "@prismicio/client";

export type CTAButton = { title: string; href: string };

export type CTAContent = {
  title?: string;
  description?: string;
  inputPlaceholder?: string;
  button: CTAButton;           // single (not repeatable)
  legal?: string;
  sideImageUrl?: string;
  backgroundImageUrl?: string;
};

export function parseCTAContent(slice: any): CTAContent {
  const sp = slice?.primary ?? {};

  // Map existing fields to CTA structure
  const title = typeof sp.cta_title === "string" ? sp.cta_title : undefined;
  const description = asText(sp.cta_description) ?? undefined;
  
  // Parse button from button_link field
  const buttonHref = asLink(sp.cta_button_link) ?? "#";
  const buttonTitle = sp.cta_button_link?.text || "Sign up";
  
  return {
    title,
    description,
    inputPlaceholder: "Enter your email", // Default since not in schema
    button: { title: buttonTitle, href: buttonHref }, 
    backgroundImageUrl: sp.cta_background_image?.url,
  };
}
