import type { CSSProperties } from "react";
import { PrismicRichText } from "@prismicio/react";
import { buildFaqCssVars } from "@/lib/styles";
import { parseFAQContent } from "@/lib/faqContent";
import { buildHeadingRichText } from "@/lib/richtextPresets";


export default function Faq({ slice }: { slice: any }) {
  const faqCssVars: CSSProperties = buildFaqCssVars(slice);
  const faqContent = parseFAQContent(slice);


  const sectionStyle: CSSProperties = {
    ...faqCssVars,
    background: "var(--faq-background-color)",
    padding: "60px 5%",
  };
  const containerStyle: CSSProperties = {
    maxWidth: "700px",
    margin: "auto",
  };


  const titleStyle: CSSProperties = {
    color: "var(--faq-title-text-color)",
    fontFamily: "var(--faq-title-text-font)",
    fontSize: "var(--faq-title-text-size)",
    textAlign: "center",
  };
  const descriptionStyle: CSSProperties = {
    color: "var(--faq-description-text-color)",
    fontFamily: "var(--faq-description-text-font)",
    fontSize: "var(--faq-description-text-size)",
    marginBottom: 36,
    textAlign: "center",
  };


  const listStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };
  const separatorStyle: CSSProperties = {
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
    paddingLeft: 12,
    color: "var(--faq-answer-text-color)",
    fontFamily: "var(--faq-answer-text-font)",
    fontSize: "var(--faq-answer-text-size)",
  };


  // Reset margin for headers
  const resetMargin = buildHeadingRichText(summaryStyle);


  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {faqContent.title && (
          <div style={titleStyle}>
            <PrismicRichText field={faqContent.title}/>
          </div>
        )}
        {faqContent.description && (
          <div style={descriptionStyle}>
            <PrismicRichText field={faqContent.description}/>
          </div> 
        )}

        <div style={listStyle}>
          {faqContent.items.map((item, i) => (
            <details key={i} style={separatorStyle}>
              <summary style={summaryStyle}>
                <PrismicRichText field={item.question} components={resetMargin}/>
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
