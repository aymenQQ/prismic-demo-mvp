import type { CSSProperties } from "react";
import type { Theme } from "@/lib/theme/tokens";
import { navbarVarsFromTheme } from "@/lib/theme/roles";

export function buildNavbarCssVars(theme: Theme): CSSProperties {
  return navbarVarsFromTheme(theme);
}
