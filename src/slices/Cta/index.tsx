import type { CSSProperties } from "react";
import { buildCtaCssVars } from "@/lib/styles";
import { parseCTAContent } from "@/lib/ctaContent";
import { PrismicRichText } from "@prismicio/react";
import { buildHeadingRichText } from "@/lib/richtextPresets";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";


export default function Cta({ slice }: { slice: any }) {
  const ctaCssVars: CSSProperties = buildCtaCssVars(slice);
  const ctaContent = parseCTAContent(slice);


  const headerStyle: CSSProperties = {
    ...ctaCssVars,
    background: "var(--cta-background-color)",
    padding: "60px 5%",
  };
  const headerStyleWithBg: CSSProperties = {
    ...ctaCssVars,
    background: "var(--cta-background-color)",
    padding: "60px 5%",
    position: "relative",
  };


  const titleTextStyle: CSSProperties = {
    color: "var(--cta-title-text-color)",
    fontFamily: "var(--cta-title-text-font)",
    fontSize: "var(--cta-title-text-size)",
    margin: 0,
  };
  const descriptionTextStyle: CSSProperties = {
    color: "var(--cta-description-text-color)",
    fontFamily: "var(--cta-description-text-font)",
    fontSize: "var(--cta-description-text-size)",
    maxWidth: 700,
  };


  const formRowStyle: CSSProperties = { 
    display: "grid", 
    gridTemplateColumns: "1fr auto", 
    gap: 40,
  };
  const inputStyle: CSSProperties = {
    background: "#ffffff",
    padding: "8px 12px",
    borderRadius: "5px",
    border: "1px",
    width: "100%",
    fontSize: "20px",
    fontFamily: "var(--cta-description-text-font)",
  };
  const buttonStyle: CSSProperties = {
    display: "inline-block",
    padding: "14px 14px",
    borderRadius: "var(--cta-button-corner-radius)",
    background: "var(--cta-button-color)",
    color: "var(--cta-button-text-color)",
    fontSize: "var(--cta-button-text-size)",
    fontFamily: "var(--cta-button-text-font)",
    textDecoration: "none",
    fontWeight: 600,
    lineHeight: 1,
  };


  const backgroundImageStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    margin: "auto",
    transform: "scale(calc(var(--cta-background-image-scale) * 1))",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 0,
    borderRadius: "var(--cta-background-image-corner-radius)",
  };
  

  const cardStyle: CSSProperties = {
    display: "block",
    flexDirection: "column",
    gap: "16px",
    padding: "30px 100px 30px 40px",
    background: "var(--cta-card-color)",
    width: "fit-content",
    maxWidth: "min(100%, 80ch)",
    borderRadius: "var(--cta-card-corner-radius)",
  };


  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
  };
  const gridLeftStyle: CSSProperties = {
    justifySelf: "start",
  };
  const gridRightStyle: CSSProperties = {
    justifySelf: "end",   
  };
  const gridSingleStyle: CSSProperties = {
    ...gridStyle,
    gridTemplateColumns: "1fr",
    position: "relative",
  };
  
  
  // Reset margin for headers
  const resetMargin = buildHeadingRichText(titleTextStyle);


  // Variation 1 : content on left, input+button on right (default)
  if (slice?.variation === "default") {
    return (
      <section style={headerStyle}>
        <div style={gridStyle}>
          <div style={gridLeftStyle}>
            <div style={gridSingleStyle}>
            {ctaContent.title && (
              <div style={titleTextStyle}>
                <PrismicRichText field={ctaContent.title} components={resetMargin}/>
              </div>
            )}
            {ctaContent.description && (
              <div style={descriptionTextStyle}>
                <PrismicRichText field={ctaContent.description}/>
              </div>
            )}
          </div>
          </div>

          <div style={gridRightStyle}>
          <div style={gridSingleStyle}>
            <div style={formRowStyle}>
              <input 
                placeholder={ctaContent.inputPlaceholder || ""}
                style={inputStyle}
              />
              {ctaContent.button && (
                <PrismicNextLink field={ctaContent.button.field} style={buttonStyle}>
                  {ctaContent.button.title}
                </PrismicNextLink>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variation 2 : background image with card content (withBackgroundImage)
  return (
    <section style={headerStyleWithBg}>
        {ctaContent.backgroundImage && (
          <PrismicNextImage field={ctaContent.backgroundImage} alt="" style={backgroundImageStyle} />
        )}
      
        <div style={gridStyle}>
          <div style={gridLeftStyle}>
          </div>

          <div style={gridRightStyle}>
          <div style={gridSingleStyle}>
          <div style={cardStyle}>
          {ctaContent.title && (
              <div style={titleTextStyle}>
                <PrismicRichText field={ctaContent.title} components={resetMargin}/>
              </div>
              )}
            {ctaContent.description && (
              <div style={descriptionTextStyle}>
                <PrismicRichText field={ctaContent.description}/>
              </div>
              )}
              <div style={formRowStyle}>
              <input 
                placeholder={ctaContent.inputPlaceholder}
                style={inputStyle}
              />
              {ctaContent.button && (
                <PrismicNextLink field={ctaContent.button.field} style={buttonStyle}>
                  {ctaContent.button.title}
                </PrismicNextLink>
              )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
