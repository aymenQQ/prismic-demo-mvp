import { Metadata } from "next";
import { notFound } from "next/navigation";
import { filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components as sliceComponents } from "@/slices";

import { extractSeo } from "@/lib/seo";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid);
  return (
    <div style={{ display: "grid", gap: "var(--slice-gap)" }}>
      <SliceZone slices={page.data.slices} components={sliceComponents} />
    </div>
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
