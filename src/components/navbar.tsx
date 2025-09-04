import type { CSSProperties } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { parseNavContent } from "@/lib/navbarContent";

export function Navbar({ settings }: { settings: any }) {
  const navContent = parseNavContent(settings);

  const headerStyle: CSSProperties = {
    background: "var(--navbar-background-color)",
    //borderBottom: "1px solid #000000",
    position: navContent.navRendering ? "sticky" : undefined,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  };
  const headerContainerStyle: CSSProperties = {
    maxWidth: "95%",
    margin: "auto",
    padding: "10px 2%",
  };

  const logoStyle: CSSProperties = {
    height: "var(--navbar-logo-size)",
    width: "auto",
    display: "block",
  };

  const linkStyle: CSSProperties = {
    display: "inline-block",
    padding: "8px 14px",
    color: "var(--navbar-link-text-color)",
    fontFamily: "var(--navbar-link-text-font)",
    fontSize: "var(--navbar-link-text-size)",
    textDecoration: "none",
  };

  const buttonStyle: CSSProperties = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "var(--navbar-button-corner-radius)",
  background: "var(--navbar-button-color)",
  color: "var(--navbar-button-text-color)",
  fontFamily: "var(--navbar-button-text-font)",
  fontSize: "var(--navbar-button-text-size)",
  textDecoration: "none",
  fontWeight: 600,
};

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: 10,
  };
  const gridLeftStyle: CSSProperties = {
    justifySelf: "start",
    display: "flex",
    alignItems: "center",
    gap: 10,
  };
  const gridMiddleStyle: CSSProperties = { 
    justifySelf: "center" 
  };
  const gridRightStyle: CSSProperties = {
    justifySelf: "end",
    display: "flex",
    alignItems: "center",
    gap: 10,
  };


  return (
    <header style={headerStyle}>
      <div style={headerContainerStyle}>
        <div style={gridStyle}>
          {/* Left part */}
          <div style={gridLeftStyle}>
            {navContent.logoImage && (
              <PrismicNextImage field={navContent.logoImage} alt="" style={logoStyle} />
            )}
          </div>

          {/* Center part */}
          <nav style={gridMiddleStyle}>
            {navContent.navLinks.slice(0, 4).map((link, i) => 
              (
                <PrismicNextLink key={i} field={link.field} style={linkStyle}>
                  {link.title}
                </PrismicNextLink>
              ))}
          </nav>

          {/* Right part */}
          <div style={gridRightStyle}>
            {navContent.navButtons.slice(0, 2).map((button, i) => 
              (
                <PrismicNextLink key={i} field={button.field} style={buttonStyle}>
                  {button.title}
                </PrismicNextLink>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
