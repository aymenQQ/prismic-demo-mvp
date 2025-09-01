import { asLink, RichTextField } from "@prismicio/client";

export type CTAButton = { title: any; href: any };

export type CTAContent = {
  title?: RichTextField;
  description?: RichTextField;
  inputPlaceholder?: string;
  button: CTAButton;
  backgroundImageUrl?: string;
};

export function parseCTAContent(slice: any): CTAContent {
  const sp = slice?.primary ?? {};

  const title = sp.cta_title ?? undefined;
  const description = sp.cta_description ?? undefined;
  
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
