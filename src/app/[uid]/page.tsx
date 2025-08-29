import { Metadata } from "next";
import { notFound } from "next/navigation";
import { filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Navbar } from "@/components/navbar";

import { buildPageCssVars } from "@/lib/styles";
import { parseNavLinks, parseNavButtons } from "@/lib/navbarContent";
import { extractSeo } from "@/lib/seo";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());
  const data = page.data as any;

  const pageCssVars = buildPageCssVars(data);
  const navLinks = parseNavLinks(data);
  const navButtons = parseNavButtons(data);

  return (
    <main style={pageCssVars}>
      <Navbar
        logoUrl={data.logo?.url}
        siteName={data.website_name ?? page.uid}
        navLinks={navLinks}
        navButtons={navButtons}
      />
      <SliceZone slices={data.slices} components={components} />
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());
  const { title, description, ogUrl } = extractSeo(page.data as any);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogUrl ? [{ url: ogUrl }] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page", {
    filters: [filter.not("my.page.uid", "home")],
  });
  return pages.map((page) => ({ uid: page.uid }));
}
