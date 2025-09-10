import type { LinkField, ImageFieldImage, RichTextField } from "@prismicio/client";

export type CTAButton = { title: string; field: LinkField };
export type CTAVariant = "default" | "withBackgroundImage" | "carBackground";

export type CTAContent = {
  variant: CTAVariant;
  title?: RichTextField;
  description?: RichTextField;
  price?: RichTextField;
  buttons: CTAButton[];
  backgroundImage?: ImageFieldImage;
};

function parseCTAButtons(links: LinkField[] | LinkField | null | undefined) {
  const arr: LinkField[] = Array.isArray(links) ? links : links ? [links] : [];

  return arr
    .map((link) => ({
      title: ((link as any).text ?? "").trim(),
      field: link,
    }))
    .filter((b) => b.title.length > 0);
}

export function parseCTAContent(slice: any): CTAContent {
  const p = slice?.primary ?? {};
  const v: CTAVariant =
    slice?.variation === "withBackgroundImage" ? "withBackgroundImage" :
    slice?.variation === "carBackground"       ? "carBackground" :
    "default";

  return {
    variant: v,
    title: p.cta_title ?? undefined,
    description: p.cta_description ?? undefined,
    price: p.price ?? undefined,                     
    backgroundImage: p.cta_background_image ?? undefined,
    buttons: parseCTAButtons(p.cta_button_link),
  };
}
