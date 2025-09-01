import type { CSSProperties } from "react";
import { PrismicRichText } from "@prismicio/react";
import { buildHeroCssVars } from "@/lib/styles";
import { parseHeroContent } from "@/lib/heroContent";
import { buildHeadingRichText } from "@/lib/richtextPresets";


export default function Hero({ slice }: { slice: any }) {
  
  const heroCssVars: CSSProperties = buildHeroCssVars(slice);
  const heroContent = parseHeroContent(slice);


  const headerStyle: CSSProperties = {
    ...heroCssVars,
    background: "var(--hero-background-color)",
    padding: "60px 5%",
  };
  const headerStyleWithBg: CSSProperties = {
    ...heroCssVars,
    background: "var(--hero-background-color)",
    padding: "60px 5%",
    position: "relative",
    overflow: "hidden",
    minHeight: "var(--hero-height)",
  };


  const titleTextStyle: CSSProperties = {
    color: "var(--hero-title-text-color)",
    fontFamily: "var(--hero-title-text-font)",
    fontSize: "var(--hero-title-text-size)",
    lineHeight: 1.15,
    margin: 0,
  };
  const descriptionTextStyle: CSSProperties = {
    color: "var(--hero-description-text-color)",
    fontFamily: "var(--hero-description-text-font)",
    fontSize: "var(--hero-description-text-size)",
    lineHeight: 1.5,
    marginTop: 12,
    marginBottom: 24,
    maxWidth: 700,
  };


  const buttonsWrapStyle: CSSProperties = { 
    display: "flex", 
    gap: 10, 
    flexWrap: "wrap",
     };
  const buttonStyle: CSSProperties = {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "var(--hero-button-corner-radius)",
    background: "var(--hero-button-color)",
    color: "var(--hero-button-text-color)",
    fontSize: "var(--hero-button-text-size)",
    fontFamily: "var(--hero-button-text-font)",
    textDecoration: "none",
    fontWeight: 600,
    lineHeight: 1.2,
  };


  const imageStyle: CSSProperties = {
    display: "block",
    width: "100%",
    height: "auto",
    maxHeight: "var(--hero-height)",
    objectFit: "contain",
    borderRadius: 0,
  };
  const imageStyleBackground: CSSProperties = {
    position: "absolute",
    inset: 0,
    margin: "auto",
    transform: "scale(calc(var(--hero-background-image-scale) * 1))",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    pointerEvents: "none",
    zIndex: 0,
    borderRadius: "var(--hero-background-image-corner-radius)",
  };
  
  
  const contentCardStyle: CSSProperties = {
    display: "block",
    flexDirection: "column",
    gap: "16px",
    padding: "30px 200px 30px 40px",
    background: "var(--hero-card-color)",
    width: "fit-content",
    maxWidth: "min(100%, 80ch)",
    borderRadius: "var(--hero-card-corner-radius)",
  };


  const gridStyle: CSSProperties = {
    display: "grid",
    alignItems: "center",
    gap: 24,
    minHeight: "var(--hero-height)",
    gridTemplateColumns: "1fr 1fr",
  };
  const gridLeftStyle: CSSProperties = {};
  const gridRightStyle: CSSProperties = { 
    justifySelf: "end" 
  };
  const gridSingleStyle: CSSProperties = {
    ...gridStyle,
    gridTemplateColumns: "1fr",
    position: "relative",
    zIndex: 2,
  };


  // Reset margin for headers
  const resetMargin = buildHeadingRichText(titleTextStyle);


  // Variation 1 : default
  if (slice?.variation === "default") {
    return (
      <section style={headerStyle}>
        <div style={gridStyle}>
          <div style={gridLeftStyle}>
            {heroContent.title && (
              <div style={titleTextStyle}>
                <PrismicRichText field={heroContent.title} components={resetMargin}/>
              </div>
            )}
            {heroContent.description && (
              <div style={descriptionTextStyle}>
                <PrismicRichText field={heroContent.description}/>
              </div>
            )}
            <div style={buttonsWrapStyle}>
              {heroContent.buttons.slice(0, 2).map((btn, i) => (  // slice(x,y) : x = minimum buttons ; y = maximum buttons
                <a key={i} href={btn.href} style={buttonStyle}>
                  {btn.title}
                </a>
              ))}
            </div>
          </div>

          <div style={gridRightStyle}>
            <img src={heroContent.sideImageUrl} style={imageStyle} />
          </div>
        </div>
      </section>
    );
  }

  // Variant 2 : withBackgroundImage
  return (
    <section style={headerStyleWithBg}>
      <img src={heroContent.backgroundImageUrl} style={imageStyleBackground} />

      <div style={gridSingleStyle}>
        <div style={contentCardStyle}>
        {heroContent.title && (
              <div style={titleTextStyle}>
                <PrismicRichText field={heroContent.title} components={resetMargin}/>
              </div>
            )}
            {heroContent.description && (
              <div style={descriptionTextStyle}>
                <PrismicRichText field={heroContent.description}/>
              </div>
            )}
          <div style={buttonsWrapStyle}>
            {heroContent.buttons.slice(0, 2).map((btn, i) => (
              <a key={i} href={btn.href} style={buttonStyle}>
                {btn.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
