import type { CSSProperties } from "react";
import type { Theme, HeroVariantKey, CTAVariantKey } from "./tokens";

type CSSWithVars = CSSProperties & Record<`--${string}`, string | number>;
type SliceKey = "navbar" | "hero" | "cta";

/** Return only what the brand provided; no defaults. */
function passThrough(
  theme: Theme,
  slice: SliceKey,
  variant?: string
): CSSWithVars {
  const o =
    (variant
      ? (theme.overrides?.[slice] as any)?.[variant]
      : (theme.overrides?.[slice] as any)) || {};
  return o as CSSWithVars;
}

/* ----------------------------- NAVBAR ----------------------------- */
export function navbarVarsFromTheme(t: Theme): CSSWithVars {
  return passThrough(t, "navbar"); // returns {} if brand has no navbar overrides
}

/* ------------------------------ HERO ------------------------------ */
export function heroVarsFromTheme(
  t: Theme,
  variant: HeroVariantKey
): CSSWithVars {
  return passThrough(t, "hero", variant);
}

/* ------------------------------- CTA ------------------------------ */
export function ctaVarsFromTheme(
  t: Theme,
  variant: CTAVariantKey
): CSSWithVars {
  return passThrough(t, "cta", variant);
}

