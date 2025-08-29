import { asLink } from "@prismicio/client";

export type NavLink = { title: string; href: string };
export type NavButton = { title: string; href: string };

export function parseNavLinks(data: any): NavLink[] {
  const groups = Array.isArray(data.navbar_links) ? data.navbar_links : [];
  
  return groups
    .map((groupItem: any) => groupItem?.text_links)
    .filter(Boolean)
    .map((link: any) => ({
      title:
        typeof link?.text === "string" && link.text.trim().length > 0
          ? link.text
          : "Link",
      href: asLink(link) ?? "#",
    }));
}

export function parseNavButtons(data: any): NavButton[] {
  const groups = Array.isArray(data.navbar_buttons) ? data.navbar_buttons : [];

   return groups
    .map((groupItem: any) => groupItem?.buttons)
    .filter(Boolean)
    .map((link: any) => ({
      title:
        typeof link?.text === "string" && link.text.trim().length > 0
          ? link.text
          : "Action",
      href: asLink(link) ?? "#",
    }));
}
