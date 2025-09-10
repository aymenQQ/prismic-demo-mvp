import type { ReactNode } from "react";
import { createClient } from "@/prismicio";
import { Navbar } from "@/components/navbar";

import { getTheme } from "@/lib/theme";
import { tokensToCssVars } from "@/lib/theme/tokens";
import { buildNavbarCssVars } from "@/lib/build-css/navbar";

export default async function PageLayout(
  { children, params }: { children: ReactNode; params: Promise<{ uid: string }> }
) {
  const { uid } = await params;

  const client = createClient();
  const page = await client.getByUID("page", uid);

  if ((page.data as any)?.hide_navbar) {
    // Still wrap page in brand vars so slices match the brand
    const pageCssVars = tokensToCssVars(getTheme());
    return <div style={pageCssVars}>{children}</div>;
  }

  const settings = await client.getSingle("settings");

  // Choose brand from env for now (no Prismic fields needed)
  const theme = getTheme();
  const pageCssVars = tokensToCssVars(theme);
  const navbarCssVars = buildNavbarCssVars(theme);

  return (
    <div style={pageCssVars}>
      <div style={navbarCssVars}>
        <Navbar settings={settings.data} />
      </div>
      {children}
    </div>
  );
}
