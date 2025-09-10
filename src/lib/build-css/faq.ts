import type { CSSProperties } from "react";
import type { Theme } from "@/lib/theme/tokens";
import { fontFamilyFromSelect } from "@/lib/fonts";

/**
 * Map Theme → all CSS vars referenced by Faq slice.
 */
export function buildFaqCssVars(t: Theme): CSSProperties {
  return {
    // Block
    ["--faq-background-color" as any]: t.palette.bg,

    // Title / description
    ["--faq-title-text-color" as any]: t.palette.textStrong,
    ["--faq-title-text-font" as any]: fontFamilyFromSelect(t.fonts.heading),
    ["--faq-title-text-size" as any]: "36px",

    ["--faq-description-text-color" as any]: t.palette.text,
    ["--faq-description-text-font" as any]: fontFamilyFromSelect(t.fonts.body),
    ["--faq-description-text-size" as any]: "18px",

    // Rows
    ["--faq-question-text-color" as any]: t.palette.textStrong,
    ["--faq-question-text-font" as any]: fontFamilyFromSelect(t.fonts.body),
    ["--faq-question-text-size" as any]: "18px",

    ["--faq-answer-text-color" as any]: t.palette.text,
    ["--faq-answer-text-font" as any]: fontFamilyFromSelect(t.fonts.body),
    ["--faq-answer-text-size" as any]: "16px",

    // Divider
    ["--faq-divider-color" as any]: t.palette.divider,
  } satisfies CSSProperties;
}
