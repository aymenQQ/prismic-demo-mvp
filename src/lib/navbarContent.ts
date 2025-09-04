import type { LinkField, ImageFieldImage } from "@prismicio/client";

export type NavLink = { title: string; field?: LinkField };
export type NavButton = { title: string; field?: LinkField };

export type NavContent = {
  logoImage?: ImageFieldImage;
  navLinks: NavLink[];
  navButtons: NavButton[];
  navRendering: boolean;
};

function parseLogoImage(data: any): ImageFieldImage | undefined {
  return (data?.navbar_logo as ImageFieldImage) ?? undefined;
}

function parseRepeatableLinks(field: LinkField[]) {
  const links = Array.isArray(field) ? field : [];

  return links
  .map((link) => ({
    title: ((link as any).text ?? "").trim(),
    field: link,
  }))
  .filter((b) => b.title.length > 0);
}


export function parseNavTextLinks(data: any): NavLink[] {
  return parseRepeatableLinks(data?.navbar_text_link);
}

export function parseNavButtonLinks(data: any): NavButton[] {
  return parseRepeatableLinks(data?.navbar_button_link);
}

export function parseNavContent(data: any): NavContent {

  const logoImage = parseLogoImage(data);
  const navLinks = parseNavTextLinks(data);
  const navButtons =  parseNavButtonLinks(data);
  const navRendering = data?.navbar_rendering;
  
  return {
    logoImage,
    navLinks,
    navButtons,
    navRendering
  };
}
