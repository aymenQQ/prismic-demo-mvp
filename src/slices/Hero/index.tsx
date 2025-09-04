import type { CSSProperties } from "react";
import { PrismicRichText } from "@prismicio/react";
import { buildHeroCssVars } from "@/lib/styles";
import { parseHeroContent } from "@/lib/heroContent";
import { buildHeadingRichText } from "@/lib/richtextPresets";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";


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
  };

  const titleTextStyle: CSSProperties = {
    color: "var(--hero-title-text-color)",
    fontFamily: "var(--hero-title-text-font)",
    fontSize: "var(--hero-title-text-size)",
    margin: 0,
  };
  const descriptionTextStyle: CSSProperties = {
    color: "var(--hero-description-text-color)",
    fontFamily: "var(--hero-description-text-font)",
    fontSize: "var(--hero-description-text-size)",
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
  const gridLeftStyle: CSSProperties = {
    justifySelf: "start",
  };
  const gridRightStyle: CSSProperties = { 
    justifySelf: "end" 
  };
  const gridSingleStyle: CSSProperties = {
    ...gridStyle,
    gridTemplateColumns: "1fr",
    position: "relative",
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
              {heroContent.buttons.slice(0, 2).map((button, i) =>       // slice(x,y) : x = minimum buttons ; y = maximum buttons
                (
                  <PrismicNextLink key={i} field={button.field} style={buttonStyle}>
                    {button.title}
                  </PrismicNextLink>
                ))}
            </div>
          </div>

          <div style={gridRightStyle}>
            {heroContent.sideImage && (
              <PrismicNextImage field={heroContent.sideImage} alt="" style={sideImageStyle} />
            )}
          </div>
        </div>
      </section>
    );
  }

  // Variant 2 : withBackgroundImage
  return (
    <section style={headerStyleWithBg}>
      {heroContent.backgroundImage && (
        <PrismicNextImage field={heroContent.backgroundImage} alt="" style={backgroundImageStyle} />
      )}

      <div style={gridSingleStyle}>
        <div style={cardStyle}>
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
            {heroContent.buttons.slice(0, 2).map((button, i) =>       // slice(x,y) : x = minimum buttons ; y = maximum buttons
              (
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
