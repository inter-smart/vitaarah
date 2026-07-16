import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/helvetica-light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-Oblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-BoldOblique.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
  preload: true,
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const things = localFont({
  src: [
    {
      path: "../../public/fonts/Things-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-things",
  display: "swap",
  preload: true,
});

export function getFontVariables() {
  return `${helvetica.variable} ${things.variable}`;
}
