import { NavLink } from "@/lib/navbarContent";
import { NavButton } from "@/lib/navbarContent";

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
  return (
    <header
      style={{ 
        background: "var(--navbar_background_color, var(--background-color))",
        color: "var(--navbar-text-color)",
        fontFamily: "var(--navbar-text-font, var(--text-body-font))",
        fontSize: "var(--navbar-text-size, var(--text-body-size))",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "95%",
          margin: "0 auto",
          padding: "10px 16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* Left of the Navbar : Logo if uploaded or Website name fallback */}
          <div style={{ justifySelf: "start", display: "flex", alignItems: "center", gap: 10 }}>
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={siteName}
                style={{ height: "var(--navbar-logo-height)", width: "auto", display: "block", borderRadius: "var(--navbar-button-corner-radius)" }}
              />
            ) : (
              <span style={{ fontWeight: 700 }}>{siteName || "Site"}</span>
            )}
          </div>

          {/* Center of the Navbar : Three Links initialized */}
          <nav aria-label="Main navigation" style={{ justifySelf: "center" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                gap: 28,
              }}
            >
              {navLinks.slice(0, 3).map((link, i) => (      // Modify "slice(min, max)" to the minimim & maximum number of links you want your navbar to display
                <li key={i}>
                  <a
                    href={link.href}
                    style={{
                      color: "var(--navbar-text-color)",
                      textDecoration: "none",
                      lineHeight: 1.2,
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right of the Navbar : Two buttons initialized */}
          <div
            style={{
              justifySelf: "end",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {navButtons.slice(0, 2).map((btn, i) => (       // Modify "slice(min, max)" to the minimim & maximum number of buttons you want your navbar to display
              <a
                key={i}
                href={btn.href}
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "var(--navbar-button-corner-radius)",
                  background: "var(--navbar-button-color)",
                  color: "var(--navbar-button-text-color)",
                  textDecoration: "none",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {btn.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
