import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { inter, lora, poppins, robotoMono } from "@/lib/fonts"
import type { ReactNode } from "react";

export default async function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} ${poppins.variable} ${robotoMono.variable}`}
        style={{ margin: 0, padding: 0 }}
        >
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
