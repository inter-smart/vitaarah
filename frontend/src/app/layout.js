import "./globals.css";
import { cn } from "@/lib/utils";
import { getFontVariables } from "@/lib/fonts";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { getLayoutData } from "@/lib/layout";
import Providers from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: {
    default: "Vitaarah",
    template: "%s | Vitaarah",
  },
  description: "A modern Next.js boilerplate with Tailwind CSS.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
};

export default async function RootLayout({ children }) {
  const fontVariables = getFontVariables();
  const { header, footer } = await getLayoutData();

  const headerProps = header
    ? {
        logo: header.logo
          ? {
              url: getStrapiMediaUrl(header.logo.url),
              alternativeText: header.logo.alternativeText,
            }
          : null,
        navigation: header.navigation || [],
        ctaButton: header.ctaButton || null,
      }
    : {};

  const footerProps = footer
    ? {
        ...footer,
        logo: footer.logo
          ? {
              url: getStrapiMediaUrl(footer.logo.url),
              alternativeText: footer.logo.alternativeText,
            }
          : null,
        quickLinks: footer.quickLinks || [],
        legalLinks: footer.legalLinks || [],
      }
    : {};

  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className={cn("flex min-h-screen flex-col antialiased")}>
        <Providers>
          {/* <Header {...headerProps} /> */}
          {/* <main className="flex-1">{children}</main> */}
          {/* <Footer {...footerProps} data={footer} /> */}
        </Providers>
      </body>
    </html>
  );
}
