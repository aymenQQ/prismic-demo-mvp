import type { ReactNode } from "react";
import { createClient } from "@/prismicio";
import { Navbar } from "@/components/navbar";
import { buildNavbarCssVars } from "@/lib/styles";

export default async function PageLayout(
  { children, params }: { children: ReactNode; params: Promise<{ uid: string }> }
) {
  const { uid } = await params;

  const client = createClient();
  const page = await client.getByUID("page", uid);

  if (page.data.hide_navbar) return <>{children}</>;

  const settings = await client.getSingle("settings");
  const navbarCssVars = buildNavbarCssVars(settings.data);

  return (
    <div style={navbarCssVars}>
        <Navbar settings={settings.data}/>
      {children}
    </div>
  );
}
