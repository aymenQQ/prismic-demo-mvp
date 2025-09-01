import type { CSSProperties } from "react";
import { PrismicRichText } from "@prismicio/react";
import { buildFaqCssVars } from "@/lib/styles";
import { parseFAQContent } from "@/lib/faqContent";

export default function Faq({ slice }: { slice: any }) {
  const faqCssVars: CSSProperties = buildFaqCssVars(slice);
  const content = parseFAQContent(slice);

  const sectionStyle: CSSProperties = {
    ...faqCssVars,
    background: "var(--faq-background-color)",
    padding: "60px 5%",
  };
  const containerStyle: CSSProperties = {
    maxWidth: "700px",
    margin: "0 auto",
  };


  const titleStyle: CSSProperties = {
    color: "var(--faq-title-text-color)",
    fontFamily: "var(--faq-title-text-font)",
    fontSize: "var(--faq-title-text-size)",
    lineHeight: 1.15,
    margin: 0,
    textAlign: "center",
  };


  const descriptionStyle: CSSProperties = {
    color: "var(--faq-description-text-color)",
    fontFamily: "var(--faq-description-text-font)",
    fontSize: "var(--faq-description-text-size)",
    lineHeight: 1.5,
    marginTop: 12,
    marginBottom: 36,
    textAlign: "center",
  };


  const listStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };


  const detailsStyle: CSSProperties = {
    borderBottom: "1px solid var(--faq-divider-color)",
  };


  const summaryStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    listStyle: "none",
    outline: "none",
    color: "var(--faq-question-text-color)",
    fontFamily: "var(--faq-question-text-font)",
    fontSize: "var(--faq-question-text-size)",
  };


  const answerStyle: CSSProperties = {
    marginTop: 18,
    color: "var(--faq-answer-text-color)",
    fontFamily: "var(--faq-answer-text-font)",
    fontSize: "var(--faq-answer-text-size)",
    lineHeight: 1.6,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {content.title && (
          <div style={titleStyle}>
            <PrismicRichText field={content.title}/>
          </div>
        )}
        {content.description && (
          <div style={descriptionStyle}>
            <PrismicRichText field={content.description}/>
          </div> 
        )}

        <div style={listStyle}>
          {content.items.map((item, i) => (
            <details key={i} style={detailsStyle}>
              <summary style={summaryStyle}>
                <PrismicRichText field={item.question}/>
              </summary>
              {item.answer && (
                <div style={answerStyle}>
                  <PrismicRichText field={item.answer}/>
                </div>)}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
