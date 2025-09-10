import type { CSSProperties } from "react";

export type HeroVariantKey = string;
export type HeroCssVarOverrides = Partial<Record<`--hero-${string}`, string>>;
export type CTAVariantKey = string;
export type CTACssVarOverrides = Partial<Record<`--cta-${string}`, string>>;
export type NavbarCssVarOverrides = Partial<Record<`--navbar-${string}`, string>>;
export type PageCssVarOverrides = Partial<Record<`--${string}`, string>>;

export type ThemeOverrides = {
  hero?: Partial<Record<HeroVariantKey, HeroCssVarOverrides>>;
  cta?:  Partial<Record<CTAVariantKey,  CTACssVarOverrides>>;
  navbar?: NavbarCssVarOverrides;
  page?: PageCssVarOverrides;
};

export type Theme = {
  palette: { bg: string; surface: string; text: string; textStrong: string; brand: string; brandAlt: string; accent: string; divider: string };
  fonts: { heading: string; body: string };
  radii: { sm: string; md: string; lg: string; xl: string };
  spacing: (n: number) => string;
  scale:   (n: number) => string;

  overrides?: ThemeOverrides;

};

export function tokensToCssVars(t: Theme): CSSProperties {
  return {
    "--bg": t.palette.bg,
    "--surface": t.palette.surface,
    "--text": t.palette.text,
    "--text-strong": t.palette.textStrong,
    "--brand": t.palette.brand,
    "--brand-alt": t.palette.brandAlt,
    "--accent": t.palette.accent,
    "--divider": t.palette.divider,
    "--radius-sm": t.radii.sm,
    "--radius-md": t.radii.md,
    "--radius-lg": t.radii.lg,
    "--radius-xl": t.radii.xl,
    "--font-heading": t.fonts.heading,
    "--font-body": t.fonts.body,
    "--slice-gap": "0px",
    ...(t.overrides?.page ?? {}),
  } as CSSProperties;
}
