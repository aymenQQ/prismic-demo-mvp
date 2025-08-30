import { asLink } from "@prismicio/client";

export type NavLink = { title: string; href: string };
export type NavButton = { title: string; href: string };

export type NavContent = {
  logoUrl?: string;
  navLinks: NavLink[];
  navButtons: NavButton[];
};

function parseLogoUrl(data: any): string | undefined {
  return data?.navbar_logo?.url ?? data?.logo?.url ?? undefined;
}

function parseRepeatableLinks(field: any, fallbackTitle: string) {
  const items = Array.isArray(field) ? field : field ? [field] : [];

  return items
    .map((item: any) => {
      const href = asLink(item?.link ?? item) ?? "#";
      const titleCandidate =
        (typeof item?.label === "string" && item.label.trim()) ||
        (typeof item?.text === "string" && item.text.trim()) ||
        (typeof item === "string" && item.trim()) ||
        fallbackTitle;

      return { title: titleCandidate, href };
    })
    .filter((i) => Boolean(i.href));
}

export function parseNavTextLinks(data: any): NavLink[] {
  return parseRepeatableLinks(data?.navbar_text_link, "Link");
}

export function parseNavButtonLinks(data: any): NavButton[] {
  return parseRepeatableLinks(data?.navbar_button_link, "Button");
}

export function parseNavContent(data: any): NavContent {
  return {
    logoUrl: parseLogoUrl(data),
    navLinks: parseNavTextLinks(data),
    navButtons: parseNavButtonLinks(data),
  };
}
