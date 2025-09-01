import { RichTextField } from "@prismicio/client";

export type FAQItem = {
  question: RichTextField;
  answer: RichTextField;
};

export type FAQContent = {
  title?: RichTextField;
  description?: RichTextField;
  items: FAQItem[];
};

export function parseFAQContent(slice: any): FAQContent {
  const sp = slice?.primary ?? {};
  const item = Array.isArray(sp.faq_items) ? sp.faq_items : [];

  const title = sp.faq_title ?? undefined;
  const description = sp.faq_description ?? undefined;
  const items = item.map((item: any) => ({
    question: item.question ?? null,
    answer: item.answer ?? null,
    }));

  return {
    title,
    description,
    items,
  };
}
