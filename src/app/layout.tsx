import type { ReactNode } from "react";
import "./globals.css";
import { getTheme } from "@/lib/theme";
import { bmwTypeNext, inter, lora, poppins, robotoMono } from "@/lib/fonts";

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = getTheme();
  return (
    <html lang="en">
      <body className={`${bmwTypeNext.variable} ${inter.variable} ${lora.variable} ${poppins.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
