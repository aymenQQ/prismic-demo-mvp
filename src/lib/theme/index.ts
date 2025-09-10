// lib/theme/index.ts
import { defaultTheme } from "./brands/default";
import { bmwTheme } from "./brands/bmw";
import { newbrandTheme } from "./brands/newbrand";
import { audiTheme } from "./brands/audi";
import type { Theme } from "./tokens";

const themes: Record<string, Theme> = {
  default: defaultTheme,
  bmw: bmwTheme,
  audi: audiTheme,
  newbrand: newbrandTheme,
};

export function getTheme(): Theme {
  const key = process.env.NEXT_PUBLIC_BRAND_KEY ?? "default";
  return themes[key] ?? defaultTheme;
}
