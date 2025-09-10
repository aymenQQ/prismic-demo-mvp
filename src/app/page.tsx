import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components as sliceComponents } from "@/slices";

export default async function HomePage() {
  const client = createClient();
  const home = await client.getByUID("page", "home");
  return (
    <div style={{ display: "grid", gap: "var(--slice-gap)" }}>
      <SliceZone slices={home.data.slices} components={sliceComponents} />
    </div>
  );
}
