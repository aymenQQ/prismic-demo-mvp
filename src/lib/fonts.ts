import { Inter, Lora, Poppins, Roboto_Mono } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
export const lora = Lora({ subsets: ["latin"], display: "swap", variable: "--font-lora" });
export const poppins = Poppins({ subsets: ["latin"], display: "swap", variable: "--font-poppins", weight: ["400", "600"] });
export const robotoMono = Roboto_Mono({ subsets: ["latin"], display: "swap", variable: "--font-roboto-mono" });


const map: Record<string, string> = {
  inter: "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  lora: "var(--font-lora), Georgia, serif",
  poppins: "var(--font-poppins), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  roboto_mono:
    "var(--font-roboto-mono), ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  system: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
};

export function fontFamilyFromSelect(value?: string): string {
  const key = (value ?? "system").toLowerCase();
  return map[key] ?? map.system;
}