import type { CSSProperties } from "react";
import type { HeroVariantKey, Theme } from "@/lib/theme/tokens";
import { heroVarsFromTheme } from "@/lib/theme/roles";

/** Build only the vars Hero slice consumes (override-only). */
export function buildHeroCssVars(theme: Theme, variant: HeroVariantKey): CSSProperties {
  return heroVarsFromTheme(theme, variant);
}
