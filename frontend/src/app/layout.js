import "./globals.css";
import { cn } from "@/lib/utils";
import { getFontVariables } from "@/lib/fonts";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { getLayoutData } from "@/lib/layout";
import Providers from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingActionButtons from "@/components/layout/floating-action-buttons";
import { PageTransitionProvider } from "@/components/common/page-transition/PageTransitionProvider";
import { SmoothScrollProvider } from "@/components/common/smooth-scroll/SmoothScrollProvider";

export async function generateMetadata() {
  const layoutData = await getLayoutData();
  const seo = layoutData.siteSetting?.seo;
  const siteName = layoutData.siteSetting?.site_name || "Vitaarah";
  const favicon = layoutData.siteSetting?.favicon;

  return {
    title: {
      default: seo?.meta_title || siteName,
      template: `%s | ${siteName}`,
    },
    description: seo?.meta_description || "",
    keywords: seo?.keywords,
    alternates: {
      canonical: seo?.canonical_url,
    },
    openGraph: seo?.og_image
      ? {
          title: seo?.meta_title || siteName,
          description: seo?.meta_description || "",
          images: [getStrapiMediaUrl(seo.og_image.url)],
        }
      : undefined,
    twitter: seo?.og_image
      ? {
          title: seo?.meta_title || siteName,
          description: seo?.meta_description || "",
          images: [getStrapiMediaUrl(seo.og_image.url)],
        }
      : undefined,
    icons: {
      icon: favicon ? getStrapiMediaUrl(favicon.url) : "/favicon.ico",
    },
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL,
    ),
  };
}

export default async function RootLayout({ children }) {
  const fontVariables = getFontVariables();
  const layoutData = await getLayoutData();

  const header = layoutData.header;
  const footer = layoutData.footer;
  const siteSetting = layoutData.siteSetting;

  const headerProps = header
    ? {
        ...header,
        header_logo: header.header_logo
          ? {
              url: getStrapiMediaUrl(header.header_logo.url),
              alternativeText: header.header_logo.alternativeText,
            }
          : null,
        navigation: header.navigation || [],
        cta_button: header.cta_button || null,
        mega_menu_image: header.mega_menu_image
          ? {
              url: getStrapiMediaUrl(header.mega_menu_image.url),
              alternativeText: header.mega_menu_image.alternativeText,
            }
          : null,
      }
    : {};

  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className={cn("flex min-h-screen flex-col antialiased")}>
        <SmoothScrollProvider>
          <Providers>
          <Header
            {...headerProps}
            support_phone={siteSetting?.support_phone}
            support_email={siteSetting?.support_email}
            social_links={siteSetting?.social_links}
          />
          <main className="pt-(--header-y) flex-1">
            <PageTransitionProvider>
              {children}
            </PageTransitionProvider>
          </main>
          <Footer data={footer} siteSettings={siteSetting} />
          <FloatingActionButtons
            supportPhone={siteSetting?.support_phone}
            supportWhatsapp={siteSetting?.support_whatsapp_number}
          />
          </Providers>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
