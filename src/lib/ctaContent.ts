import { RichTextField } from "@prismicio/client";
import type { LinkField, ImageFieldImage } from "@prismicio/client";

export type CTAButton = { title: any; field: LinkField };

export type CTAContent = {
  title?: RichTextField;
  description?: RichTextField;
  inputPlaceholder?: string;
  button: CTAButton;
  backgroundImage?: ImageFieldImage;
};

function parseCTAButton(link: LinkField): CTAButton {
  const title = ((link as any).text ?? "").trim();
  return { title, field: link };
}

export function parseCTAContent(slice: any): CTAContent {
  const sp = slice?.primary ?? {};

  const title = sp.cta_title ?? undefined;
  const description = sp.cta_description ?? undefined;
  const inputPlaceholder = sp.cta_input_placeholder ?? "Enter your email";
  const button = parseCTAButton(sp.cta_button_link);
  const backgroundImage = sp.cta_background_image as ImageFieldImage | undefined;

  return {
    title,
    description,
    inputPlaceholder,
    button, 
    backgroundImage,
  };
}
