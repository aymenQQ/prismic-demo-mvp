import { asText } from "@prismicio/client";

export function extractSeo(data: any) {
  const title: string | undefined = data.seo_title ?? undefined;
  const descRT: any = data.seo_description;
  const description: string | undefined = descRT ? asText(descRT) ?? undefined : undefined;
  const ogUrl: string | undefined = data.og_image?.url ?? undefined;
  return { title, description, ogUrl };
}
