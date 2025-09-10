import { Inter, Lora, Poppins, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
export const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
export const lora = Lora({ subsets: ["latin"], display: "swap", variable: "--font-lora" });
export const poppins = Poppins({ subsets: ["latin"], display: "swap", variable: "--font-poppins", weight: ["400", "600"] });
export const robotoMono = Roboto_Mono({ subsets: ["latin"], display: "swap", variable: "--font-roboto-mono" });

export const bmwTypeNext = localFont({
  src: [
    { path: "../app/fonts/BMWTypeNextPro-Regular.woff2", weight: "300", style: "normal" },
    { path: "../app/fonts/BMWTypeNextPro-Regular.woff",  weight: "400", style: "normal" },
  ],
  variable: "--font-bmw",
  display: "swap",
});


export const fontStacks = {
  bmw: "var(--font-bmw), Arial, Helvetica, Roboto, sans-serif",
};

const map: Record<string, string> = {
  inter: "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  lora: "var(--font-lora), Georgia, serif",
  poppins: "var(--font-poppins), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  roboto_mono: "var(--font-roboto-mono), ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  system: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
};

export function fontFamilyFromSelect(value?: string): string {
  const key = (value ?? "system").toLowerCase();
  return map[key] ?? map.system;
}