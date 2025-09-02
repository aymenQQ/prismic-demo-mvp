import { type Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const home = await client.getByUID("page", "homepage");

  // <SliceZone> renders the page's slices.
  return <SliceZone slices={home.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "homepage");

  return { 
    title: home.uid ?? "Homepage",
    description: undefined,
    openGraph: {
      title: undefined,
      images: undefined,
    },
  };
}
