import type { CSSProperties } from "react";
import { buildCtaCssVars } from "@/lib/styles";
import { parseCTAContent } from "@/lib/ctaContent";

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
    overflow: "hidden",
    minHeight: "var(--cta-height)",
  };

  const headingTextStyle: CSSProperties = {
    color: "var(--cta-title-text-color)",
    fontFamily: "var(--cta-title-text-font)",
    fontSize: "var(--cta-title-text-size)",
    lineHeight: 1.15,
    margin: 0,
  };
  const bodyTextStyle: CSSProperties = {
    color: "var(--cta-description-text-color)",
    fontFamily: "var(--cta-description-text-font)",
    fontSize: "var(--cta-description-text-size)",
    lineHeight: 1.5,
    marginTop: 12,
    marginBottom: 0,
    maxWidth: 700,
  };

  const formRowStyle: CSSProperties = { 
    display: "grid", 
    gridTemplateColumns: "1fr auto", 
    gap: 40,
  };
  const inputStyle: CSSProperties = {
    background: "#ffffff",
    padding: "10px 12px",
    borderRadius: "5px",
    border: "1px",
    width: "100%",
    fontSize: "20px",
    fontFamily: "var(--cta-description-text-font)",
  };
  const buttonStyle: CSSProperties = {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "var(--cta-button-corner-radius)",
    background: "var(--cta-button-color)",
    color: "var(--cta-button-text-color)",
    fontSize: "var(--cta-button-text-size)",
    fontFamily: "var(--cta-button-text-font)",
    textDecoration: "none",
    fontWeight: 600,
    lineHeight: 1.2,
  };


  const imageStyleBackground: CSSProperties = {
    position: "absolute",
    inset: 0,
    margin: "auto",
    transform: "scale(calc(var(--cta-background-image-scale) * 1))",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    pointerEvents: "none",
    zIndex: 0,
    borderRadius: "var(--cta-background-image-corner-radius)",
  };
  
  const leftCardStyle: CSSProperties = {
    display: "block",
    flexDirection: "column",
    gap: "16px",
    padding: "30px 200px 30px 40px",
    background: "var(--cta-card-color)",
    width: "fit-content",
    maxWidth: "min(100%, 80ch)",
    borderRadius: "var(--cta-card-corner-radius)",
  };

  const rightCardStyle: CSSProperties = {
    display: "block",
    flexDirection: "column",
    gap: "16px",
    padding: "10px 15px 10px 15px",
    background: "var(--cta-card-color)",
    width: "fit-content",
    maxWidth: "min(100%, 80ch)",
    borderRadius: "var(--cta-card-corner-radius)",


  };

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
    marginTop: 10,
  };

  const gridLeftStyle: CSSProperties = {
    justifySelf: "start",
  };

  const gridMiddleStyle: CSSProperties = { 
    justifySelf: "center",
  };

  const gridRightStyle: CSSProperties = {
    justifySelf: "end",
    
  };

  const gridSingleStyle: CSSProperties = {
    ...gridStyle,
    gridTemplateColumns: "1fr",
    position: "relative",
    zIndex: 2,
  };

  // Variation 1 : content on left, input+button on right (default)
  if (slice?.variation === "default") {
    return (
      <section style={headerStyle}>
        <div style={gridStyle}>
          <div style={gridLeftStyle}>
            <div style={gridSingleStyle}>
            {ctaContent.title && <h1 style={headingTextStyle}>{ctaContent.title}</h1>}
            {ctaContent.description && <p style={bodyTextStyle}>{ctaContent.description}</p>}
          </div>
          </div>

          <div style={gridMiddleStyle}></div>

          <div style={gridRightStyle}>
          <div style={gridSingleStyle}>
            <div style={formRowStyle}>
              <input 
                placeholder={ctaContent.inputPlaceholder || ""}
                style={inputStyle}
              />
              <a href={ctaContent.button.href} style={buttonStyle}>
                {ctaContent.button.title}
              </a>
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
        <img src={ctaContent.backgroundImageUrl} style={imageStyleBackground} />
      

        <div style={gridStyle}>
          <div style={gridLeftStyle}>
          <div style={gridSingleStyle}>
            <div style={leftCardStyle}>
            {ctaContent.title && <h1 style={headingTextStyle}>{ctaContent.title}</h1>}
            {ctaContent.description && <p style={bodyTextStyle}>{ctaContent.description}</p>}
            </div>
          </div>
          </div>

          <div style={gridMiddleStyle}></div>

          <div style={gridRightStyle}>
          <div style={gridSingleStyle}>
          <div style={rightCardStyle}>   
            <div style={formRowStyle}>
              <input 
                type="email" 
                name="email" 
                placeholder={ctaContent.inputPlaceholder}
                aria-label="Email"
                style={inputStyle}
              />
              <a href={ctaContent.button.href} style={buttonStyle}>
                {ctaContent.button.title}
              </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
