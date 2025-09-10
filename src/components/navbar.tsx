import type { CSSProperties } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { parseNavContent } from "@/lib/navbarContent";
import { getTheme } from "@/lib/theme";
import { buildNavbarCssVars } from "@/lib/build-css/navbar";

export function Navbar({ settings }: { settings: any }) {
  const navContent = parseNavContent(settings);

  const navVars = buildNavbarCssVars(getTheme()) as CSSProperties & Record<string, string | number>;

  const headerStyle: CSSProperties = {
    ...navVars,
    background: "var(--navbar-background-color)",
    position: (navContent.navRendering
      ? ((navVars["--navbar-position"] as string) ?? "sticky")
      : "absolute") as CSSProperties["position"],
    top: 0,
    left: 0,
    right: 0,
    zIndex: Number((navVars["--navbar-z-index"] as number | string | undefined) ?? 100),
    backdropFilter: "var(--navbar-backdrop-filter)"
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
        <div style={{
          width: "var(--navbar-border-width)",
          borderBottom: "var(--navbar-border-bottom)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "var(--navbar-divider-margin-top, 0)",
        }} />
      </div>
    </header>
  );
}
