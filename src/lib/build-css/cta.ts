import type { CSSProperties } from "react";
import { getTheme } from "@/lib/theme";
import { ctaVarsFromTheme } from "@/lib/theme/roles";
import type { CTAVariantKey } from "@/lib/theme/tokens";

export function buildCtaCssVars(variant: CTAVariantKey): CSSProperties {
  const t = getTheme();
  return ctaVarsFromTheme(t, variant);
}
