import type { CSSProperties } from "react";
import { buildHeroCssVars } from "@/lib/styles";
import { parseHeroContent } from "@/lib/heroContent";


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


  const headingTextStyle: CSSProperties = {
    color: "var(--hero-heading-text-color)",
    fontFamily: "var(--hero-heading-text-font)",
    fontSize: "var(--hero-heading-text-size)",
    lineHeight: 1.15,
    margin: 0,
  };
  const bodyTextStyle: CSSProperties = {
    color: "var(--hero-body-text-color)",
    fontFamily: "var(--hero-body-text-font)",
    fontSize: "var(--hero-body-text-size)",
    lineHeight: 1.5,
    marginTop: 12,
    marginBottom: 20,
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
    transform: "scale(calc(var(--hero-background-image-scale) * 1))", // ancre au centre
    width: "100%",   // 1 = 100% ; 0.8 = 80%, etc.
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
    padding: "70px 210px 70px 70px",
    background: "var(--hero-card-color)",
    width: "fit-content",
    maxWidth: "min(100%, 80ch)",
    borderRadius: "var(--hero-card-corner-radius)",
  };

  


  const gridWrap: CSSProperties = {
    display: "grid",
    alignItems: "center",
    gap: 24,
    minHeight: "var(--hero-height)",
  };
  const gridStyle: CSSProperties = {
    ...gridWrap,
    gridTemplateColumns: "1fr 1fr",
  };
  const gridLeftStyle: CSSProperties = {};
  const gridRightStyle: CSSProperties = { 
    justifySelf: "end" 
  };
  const gridStyleSingle: CSSProperties = {
    ...gridWrap,
    gridTemplateColumns: "1fr",
    position: "relative",
    zIndex: 2,
  };

  

  const overlayStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
  };


  // Variation 1 : image à droite (default)
  if (slice?.variation === "default") {
    return (
      <section style={headerStyle}>
        <div style={gridStyle}>
          <div style={gridLeftStyle}>
            {heroContent.heading && <h1 style={headingTextStyle}>{heroContent.heading}</h1>}
            {heroContent.description && <p style={bodyTextStyle}>{heroContent.description}</p>}
            <div style={buttonsWrapStyle}>
              {heroContent.buttons.slice(0, 2).map((btn, i) => (
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

  // Variation 2 : image en background (withBackgroundImage)
  return (
    <section style={headerStyleWithBg}>
      <img src={heroContent.backgroundImageUrl} style={imageStyleBackground} />


      <div style={gridStyleSingle}>
        <div style={contentCardStyle}>
          {heroContent.heading && <h1 style={headingTextStyle}>{heroContent.heading}</h1>}
          {heroContent.description && <p style={bodyTextStyle}>{heroContent.description}</p>}
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
