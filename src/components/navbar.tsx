import { NavLink, NavButton } from "@/lib/navbarContent";
import type { CSSProperties } from "react";

export function Navbar({
  logoUrl,
  siteName,
  navLinks = [],
  navButtons = [],
}: {
  logoUrl?: string;
  siteName?: string;
  navLinks?: NavLink[];
  navButtons?: NavButton[];
}) {

  const headerStyle: CSSProperties = {
    background: "var(--navbar_background_color)",
    color: "var(--navbar-text-color)",
    fontFamily: "var(--navbar-text-font)",
    fontSize: "var(--navbar-text-size)",
    //borderBottom: "1px solid #000000",
    position: "sticky",
    top: 0,
  };

  const headerContainerStyle: CSSProperties = {
    maxWidth: "95%",
    margin: "0 auto",
    padding: "10px 16px",
  };

  const logoStyle: CSSProperties = {
    height: "var(--navbar-logo-size)",
    width: "auto",
    display: "block",
    borderRadius: "var(--navbar-button-corner-radius)",
  };

  const siteNameStyle: CSSProperties = {
    fontWeight: 700,
  };

  const navListStyle: CSSProperties = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: 28,
  };

  const linkStyle: CSSProperties = {
    color: "var(--navbar-text-color)",
    textDecoration: "none",
    lineHeight: 1.2,
  };

  const buttonStyle: CSSProperties = {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "var(--navbar-button-corner-radius)",
    background: "var(--navbar-button-color)",
    color: "var(--navbar-button-text-color)",
    textDecoration: "none",
    fontWeight: 600,
    lineHeight: 1.2,
  };

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: 12,
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
            {logoUrl ? (
              <img src={logoUrl} alt={siteName} style={logoStyle} />
            ) : (
              <span style={siteNameStyle}>{siteName || "Site"}</span>
            )}
          </div>

          {/* Center part */}
          <nav aria-label="Main navigation" style={gridMiddleStyle}>
            <ul style={navListStyle}>
              {navLinks.slice(0, 3).map((link, i) => (
                <li key={i}>
                  <a href={link.href} style={linkStyle}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right part */}
          <div style={gridRightStyle}>
            {navButtons.slice(0, 2).map((btn, i) => (
              <a key={i} href={btn.href} style={buttonStyle}>
                {btn.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
