import type { CSSProperties, ReactNode } from "react";
import type { JSXMapSerializer } from "@prismicio/react";

const withReset = (style: CSSProperties): CSSProperties => ({ margin: 12, ...style });

export const buildHeadingRichText = (style: CSSProperties): JSXMapSerializer => ({
    heading1: ({ children }: { children: ReactNode }) => <h1 style={withReset(style)}>{children}</h1>,
    heading2: ({ children }) => <h2 style={withReset(style)}>{children}</h2>,
    heading3: ({ children }) => <h3 style={withReset(style)}>{children}</h3>,
    heading4: ({ children }) => <h4 style={withReset(style)}>{children}</h4>,
    heading5: ({ children }) => <h5 style={withReset(style)}>{children}</h5>,
    heading6: ({ children }) => <h6 style={withReset(style)}>{children}</h6>,
});