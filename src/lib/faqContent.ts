import { RichTextField } from "@prismicio/client";

export type FAQItem = {
  question?: RichTextField;
  answer?: RichTextField;
};

export type FAQContent = {
  title?: RichTextField;
  description?: RichTextField;
  items: FAQItem[];
};

function parseFAQItems(field: any): FAQItem[] {
  return (Array.isArray(field) ? field : [])
    .map((item: any) => ({ question: item?.question, answer: item?.answer }))
    .filter((item) => item.question || item.answer);
}

export function parseFAQContent(slice: any): FAQContent {
  const sp = slice?.primary ?? {};

  const title = sp.faq_title ?? undefined;
  const description = sp.faq_description ?? undefined;
  const items = parseFAQItems(sp.faq_items);

  return {
    title,
    description,
    items,
  };
}
