import type { CSSProperties } from "react";
import { PrismicRichText } from "@prismicio/react";
import { parseHeroContent } from "@/lib/heroContent";
import { buildHeadingRichText } from "@/lib/richtextPresets";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { getTheme } from "@/lib/theme";
import { buildHeroCssVars } from "@/lib/build-css/hero";


export default function Hero({ slice }: { slice: any }) {
  const heroContent = parseHeroContent(slice);

  const currentVariant =
    slice?.variation === "withBackgroundImage" ? "withBackground" : "default";

  const heroVars: CSSProperties = buildHeroCssVars(getTheme(), currentVariant);

  const headerStyle: CSSProperties = {
    ...heroVars,
    background: "var(--hero-background-color)",
    padding: "60px 5%",
  };
  const headerStyleWithBg: CSSProperties = {
    ...heroVars,
    background: "var(--hero-background-color)",
    padding: "60px 5%",
    position: "relative",
  };

  const taglineStyle: CSSProperties = {
    color: "var(--hero-tagline-text-color)",
    fontFamily: "var(--hero-tagline-text-font)",
    fontSize: "var(--hero-tagline-text-size)",
    letterSpacing: "0.8em",
    lineHeight: 1.0,
    fontWeight: 300,
  };

  const titleTextStyle: CSSProperties = {
    color: "var(--hero-title-text-color)",
    fontFamily: "var(--hero-title-text-font)",
    fontSize: "var(--hero-title-text-size)",
    margin: 0,
    lineHeight: 1.0,
    fontWeight: 300,
  };
  const descriptionTextStyle: CSSProperties = {
    color: "var(--hero-description-text-color)",
    fontFamily: "var(--hero-description-text-font)",
    fontSize: "var(--hero-description-text-size)",
    marginBottom: 24,
    maxWidth: 700,
    fontWeight: 300,
  };

  const buttonsWrapStyle: CSSProperties = { display: "flex", gap: 20, flexWrap: "wrap" };
  const buttonStyle: CSSProperties = {
    display: "inline-block",
    padding: "15px 50px",
    borderRadius: "var(--hero-button-corner-radius)",
    background: "var(--hero-button-color)",
    color: "var(--hero-button-text-color)",
    fontSize: "var(--hero-button-text-size)",
    fontFamily: "var(--hero-button-text-font)",
    textDecoration: "none",
    fontWeight: 300,
  };

  const overlayStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 1,                         
    background: "var(--hero-overlay, none)",
    pointerEvents: "none",             
  };

  const sideImageStyle: CSSProperties = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transform: "scale(calc(var(--hero-side-image-scale) * 1))",
    borderRadius: "var(--hero-side-image-corner-radius)",
  };
  const backgroundImageStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    margin: "auto",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 0,
    transform: "scale(calc(var(--hero-background-image-scale) * 1))",
    borderRadius: "var(--hero-background-image-corner-radius)",
  };

  const cardStyle: CSSProperties = {
    display: "block",
    flexDirection: "column",
    gap: "16px",
    padding: "30px 100px 30px 40px",
    background: "var(--hero-card-color)",
    width: "fit-content",
    maxWidth: "min(100%, 80ch)",
    borderRadius: "var(--hero-card-corner-radius)",
  };

  const gridStyle: CSSProperties = {
    display: "grid",
    alignItems: "center",
    minHeight: "var(--hero-height)",
    gridTemplateColumns: "1fr 1fr",
  };
  const gridLeftStyle: CSSProperties = { justifySelf: "start" };
  const gridRightStyle: CSSProperties = { justifySelf: "end" };
  const gridSingleWithBgStyle: CSSProperties = {
    ...gridStyle,
    gridTemplateColumns: "1fr",
    position: "relative",
  };


  const resetMargin = buildHeadingRichText(titleTextStyle);

  if (slice?.variation === "default") {
    return (
      <section style={{ ...headerStyle, position: "relative" }}>
        <div style={overlayStyle} />
        <div style={{ ...gridStyle, position: "relative", zIndex: 2 }}>
          <div style={gridLeftStyle}>
            <div style={cardStyle}>
              {heroContent.title && (
                <div style={titleTextStyle}>
                  <PrismicRichText field={heroContent.title} components={resetMargin} />
                </div>
              )}

              {heroContent.description && (
                <div style={descriptionTextStyle}>
                  <PrismicRichText field={heroContent.description} />
                </div>
              )}

              <div style={buttonsWrapStyle}>
                {heroContent.buttons.slice(0, 2).map((button, i) => (
                  <PrismicNextLink key={i} field={button.field} style={buttonStyle}>
                    {button.title}
                  </PrismicNextLink>
                ))}
              </div>
            </div>
          </div>
          <div style={gridRightStyle}>
            {(heroContent.sideImage || heroContent.backgroundImage) && (
              <PrismicNextImage
                field={(heroContent.sideImage ?? heroContent.backgroundImage)!}
                alt=""
                style={sideImageStyle}
              />
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={headerStyleWithBg}>
      {heroContent.backgroundImage && (
        <PrismicNextImage
          field={heroContent.backgroundImage}
          alt=""
          style={{...backgroundImageStyle, zIndex: 0, position: "absolute", inset: 0}}
        />
      )}

      <div style={overlayStyle} />

      <div style={{ ...gridSingleWithBgStyle, zIndex: 2 }}>
        <div style={gridLeftStyle}>
          {heroContent.tagline && (
            <div style={taglineStyle}>
              <PrismicRichText field={heroContent.tagline} components={resetMargin} />
            </div>
          )}
          {heroContent.title && (
            <div style={titleTextStyle}>
              <PrismicRichText field={heroContent.title} components={resetMargin} />
            </div>
          )}
          {heroContent.description && (
            <div style={descriptionTextStyle}>
              <PrismicRichText field={heroContent.description} />
            </div>
          )}
          <div style={buttonsWrapStyle}>
            {heroContent.buttons.slice(0, 2).map((button, i) => (
              <PrismicNextLink key={i} field={button.field} style={buttonStyle}>
                {button.title}
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
