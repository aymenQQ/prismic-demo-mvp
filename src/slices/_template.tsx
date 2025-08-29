import { SliceComponentProps } from "@prismicio/react";

export type TemplateSliceProps = SliceComponentProps<any>;

export default function TemplateSlice({ slice }: TemplateSliceProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        padding: "2rem",
        backgroundColor: "var(--secondary-color)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <h2>Template Slice</h2>
        <p>Variation: {slice.variation}</p>
        
        {/* Ajoutez ici votre contenu selon le modèle Prismic */}
        {/* Exemple: */}
        {/* {isFilled.keyText(slice.primary.title) && (
          <h1>{slice.primary.title}</h1>
        )} */}
      </div>
    </section>
  );
}
