import { RichTextField } from "@prismicio/client";
import type { LinkField, ImageFieldImage } from "@prismicio/client";

export type HeroButton = { title: string; field?: LinkField };

export type HeroContent = {
  title?: RichTextField;
  description?: RichTextField;
  buttons: HeroButton[];
  sideImage?: ImageFieldImage;
  backgroundImage?: ImageFieldImage;
};

function parseHeroButtons(links: LinkField[]): HeroButton[] {
  
  return links
    .map((link) => ({
      title: ((link as any).text ?? "").trim(),
      field: link,
    }))
    .filter((b) => b.title.length > 0);
}

export function parseHeroContent(slice: any): HeroContent {
  const sp = slice?.primary ?? {};

  const title = sp.hero_title ?? undefined;
  const description = sp.hero_description ?? undefined;
  const buttons = parseHeroButtons(sp.hero_button_link);
  const sideImage = sp.hero_side_image as ImageFieldImage | undefined;
  const backgroundImage = sp.hero_background_image as ImageFieldImage | undefined;

  return {
    title,
    description,
    buttons,
    sideImage,
    backgroundImage,
  };
}
