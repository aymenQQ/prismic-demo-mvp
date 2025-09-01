import { asLink, RichTextField } from "@prismicio/client";

export type HeroButton = { title: string; href: string };

export type HeroContent = {
  title?: RichTextField;
  description?: RichTextField;
  buttons: HeroButton[];
  sideImageUrl?: string;
  backgroundImageUrl?: string;
};

function parseHeroButtons(field: any): HeroButton[] {
  const items = Array.isArray(field) ? field : field ? [field] : [];

  return items
    .map((item: any) => {
      const href = asLink(item?.link ?? item) ?? "#";
      const titleCandidate =
        (typeof item?.label === "string" && item.label.trim()) ||
        (typeof item?.text === "string" && item.text.trim()) ||
        (typeof item === "string" && item.trim()) ||
        "Button";

      return { title: titleCandidate, href };
    })
    .filter((b) => Boolean(b.href));
}

export function parseHeroContent(slice: any): HeroContent {
  const sp = slice?.primary ?? {};

  const title = sp.hero_title ?? undefined;
  const description = sp.hero_description ?? undefined;

  const buttons = parseHeroButtons(sp.hero_button_link);

  const sideImageUrl = sp.hero_side_image?.url;
  const backgroundImageUrl = sp.hero_background_image?.url;

  return {
    title,
    description,
    buttons,
    sideImageUrl,
    backgroundImageUrl,
  };
}
