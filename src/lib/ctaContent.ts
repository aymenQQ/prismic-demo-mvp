import { asLink, asText } from "@prismicio/client";

export type CTAButton = { title: string; href: string };

export type CTAContent = {
  title?: string;
  description?: string;
  inputPlaceholder?: string;
  button: CTAButton;
  backgroundImageUrl?: string;
};

export function parseCTAContent(slice: any): CTAContent {
  const sp = slice?.primary ?? {};

  const title = typeof sp.cta_title === "string" ? sp.cta_title : undefined;
  const description = asText(sp.cta_description) ?? undefined;
  
  const buttonHref = asLink(sp.cta_button_link) ?? "#";
  const buttonTitle = sp.cta_button_link?.text || "Sign up";

  const inputPlaceholder = sp.cta_input_placeholder ?? "Enter your email";
  const button = { title: buttonTitle, href: buttonHref };
  const backgroundImageUrl = sp.cta_background_image?.url;

  return {
    title,
    description,
    inputPlaceholder,
    button, 
    backgroundImageUrl,
  };
}
