import { Metadata } from "next";
import { notFound } from "next/navigation";
import { filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { buildPageCssVars } from "@/lib/styles";
import { extractSeo } from "@/lib/seo";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());
  const data = page.data as any;

  const pageCssVars = buildPageCssVars(data);

  return (
    <main style={pageCssVars}>
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
