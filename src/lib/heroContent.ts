import { asLink, asText } from "@prismicio/client";

export type HeroButton = { title: string; href: string };

export type HeroContent = {
  heading?: string;
  description?: string;
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

/**
 * Parser principal du contenu du Hero (une seule source de vérité).
 * On retourne des props prêtes pour le composant.
 */
export function parseHeroContent(slice: any): HeroContent {
  const sp = slice?.primary ?? {};

  return {
    heading: typeof sp.hero_heading === "string" ? sp.hero_heading : undefined,
    description: (asText(sp.hero_description) ?? undefined),
    buttons: parseHeroButtons(sp.hero_button_link),
    sideImageUrl: sp.hero_side_image?.url,
    backgroundImageUrl: sp.hero_background_image?.url,
  };
}
