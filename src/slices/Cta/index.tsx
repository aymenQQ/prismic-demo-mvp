// src/slices/Cta/index.tsx
import type { CSSProperties } from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { parseCTAContent } from "@/lib/ctaContent";
import { buildCtaCssVars } from "@/lib/build-css/cta";

const leftCol: CSSProperties = { display: "flex", flexDirection: "column", gap: 16, zIndex: 2 };

export default function Cta({ slice }: { slice: any }) {
  const cta = parseCTAContent(slice);
  const cssVars = buildCtaCssVars(cta.variant);

  if (cta.variant === "carBackground") {
    const section: CSSProperties = {
      position: "relative",
      overflow: "hidden",
      height: "var(--cta-height)",
      ...cssVars,
      color: "var(--cta-title-color, #fff)",
    };

    const overlay: CSSProperties = {
      position: "absolute", inset: 0, zIndex: 1,
      background: "var(--cta-overlay, none)",
      pointerEvents: "none",
    };

    const bgWrap: CSSProperties = { position: "absolute", inset: 0 };
    const bgImg: CSSProperties  = { objectFit: "cover", width: "100%", height: "100%" };

    const container: CSSProperties = {
      position: "relative",
      zIndex: 2,
      maxWidth: "1200px",
      marginLeft: "5%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    };

    const priceStyle: CSSProperties = {
      fontFamily: "var(--cta-price-font, inherit)",
      fontSize: "var(--cta-price-size, 56px)",
      lineHeight: 1,
      fontWeight: 300,
      letterSpacing: "var(--cta-price-tracking, 0)",
      color: "var(--cta-price-color, #fff)",
    };

    const button: CSSProperties = {
      display: "inline-block",
      padding: "15px 50px",
      borderRadius: "var(--cta-button-corner-radius)",
      textDecoration: "none",
      background: "var(--cta-button-bg)",
      color: "var(--cta-button-text)",
      fontFamily: "var(--cta-button-font, inherit)",
      fontSize: "var(--cta-button-size, 18px)",
      fontWeight: 300,
    };

    return (
      <section style={section}>
        {/* background image */}
        {cta.backgroundImage && (
          <div style={bgWrap}>
            <PrismicNextImage field={cta.backgroundImage} alt="" style={bgImg} />
          </div>
        )}

        {/* overlay */}
        <div style={overlay} />

        {/* content */}
        <div style={container}>
          <div style={leftCol}>
            {cta.title && (
              <div
                style={{
                  fontFamily: "var(--cta-title-font, inherit)",
                  fontSize: "var(--cta-title-size, 112px)",
                  lineHeight: "0.9",
                  fontWeight: 300,
                  letterSpacing: "var(--cta-title-tracking, 0)",
                }}
              >
                <PrismicRichText field={cta.title} />
              </div>
            )}

            {cta.description && (
              <div
                style={{
                  fontFamily: "var(--cta-description-font, inherit)", // ← NEW
                  color: "var(--cta-description-color, rgba(255,255,255,.85))",
                  fontSize: "var(--cta-description-size, 28px)",
                  fontWeight: 300,
                }}
              >
                <PrismicRichText field={cta.description} />
              </div>
            )}

            {cta.price && (
              <div style={priceStyle}>
                <PrismicRichText field={cta.price} />
              </div>
            )}

            <div style={{ display: "flex", gap: 16 }}>
              {cta.buttons.slice(0, 2).map((b, i) => (
                <PrismicNextLink key={i} field={b.field} style={button}>
                  {b.title}
                </PrismicNextLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // default variant: same structure as carBackground but without background image; text inside a card
  if (cta.variant === "default") {
    return (
      <section
        style={{
          ...cssVars,
          padding: "var(--cta-pad, 60px 5%)",
          background: "var(--cta-background-color)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "var(--cta-overlay, none)", pointerEvents: "none" }} />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "var(--cta-grid-columns, 1fr)",
            gridTemplateAreas: "var(--cta-areas, 'content')",
            gap: "var(--cta-grid-gap, 20px)",
            alignItems: "center",
            minHeight: "var(--cta-height, auto)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "block",
              flexDirection: "column",
              gap: "16px",
              padding: "30px 100px 30px 40px",
              background: "var(--cta-card-color)",
              width: "fit-content",
              maxWidth: "min(100%, 80ch)",
              borderRadius: "var(--cta-card-corner-radius)",
              gridArea: "var(--cta-content-area, content)",
            }}
          >
            {cta.title && (
              <div
                style={{
                  fontFamily: "var(--cta-title-font, inherit)",
                  fontSize: "var(--cta-title-size, 56px)",
                  lineHeight: 1,
                  fontWeight: 300,
                  letterSpacing: "var(--cta-title-tracking, 0)",
                  color: "var(--cta-title-color, inherit)",
                }}
              >
                <PrismicRichText field={cta.title} />
              </div>
            )}

            {cta.description && (
              <div
                style={{
                  fontFamily: "var(--cta-description-font, inherit)",
                  color: "var(--cta-description-color, inherit)",
                  fontSize: "var(--cta-description-size, 20px)",
                  fontWeight: 300,
                }}
              >
                <PrismicRichText field={cta.description} />
              </div>
            )}

            {cta.price && (
              <div
                style={{
                  fontFamily: "var(--cta-price-font, inherit)",
                  fontSize: "var(--cta-price-size, 48px)",
                  lineHeight: 1,
                  fontWeight: 300,
                  letterSpacing: "var(--cta-price-tracking, 0)",
                  color: "var(--cta-price-color, inherit)",
                }}
              >
                <PrismicRichText field={cta.price} />
              </div>
            )}

            <div style={{ display: "flex", gap: 16 }}>
              {cta.buttons.slice(0, 2).map((b, i) => (
                <PrismicNextLink
                  key={i}
                  field={b.field}
                  style={{
                    display: "inline-block",
                    padding: "15px 50px",
                    borderRadius: "var(--cta-button-corner-radius)",
                    textDecoration: "none",
                    background: "var(--cta-button-bg)",
                    color: "var(--cta-button-text)",
                    fontFamily: "var(--cta-button-font, inherit)",
                    fontSize: "var(--cta-button-size, 18px)",
                    fontWeight: 300,
                  }}
                >
                  {b.title}
                </PrismicNextLink>
              ))}
            </div>
          </div>
          {(cta.backgroundImage) && (
            <div style={{ gridArea: "var(--cta-media-area, media)", justifySelf: "end" }}>
              <PrismicNextImage field={cta.backgroundImage} alt="" style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }} />
            </div>
          )}
        </div>
      </section>
    );
  }

  // …fallback for other variants unchanged
  return <section style={{ padding: "60px 5%" }} />;
}
