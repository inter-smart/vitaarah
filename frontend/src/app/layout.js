import "./globals.css";
import { cn } from "@/lib/utils";
import { getFontVariables } from "@/lib/fonts";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { getLayoutData } from "@/lib/layout";
import Providers from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// [local-data-start] Set to true to use local mock data instead of API
const USE_LOCAL_DATA = true;
// [local-data-end]

// [local-data-start]
const LOCAL_HEADER = {
  "id": 5,
  "documentId": "msoz6wmw1z2uo610ve01otpr",
  "createdAt": "2026-06-05T05:29:12.523Z",
  "updatedAt": "2026-06-09T05:24:14.557Z",
  "publishedAt": "2026-06-09T05:24:14.576Z",
  "logo": {
    "id": 1,
    "documentId": "d9rgdtbuq29sh6458khjwe6y",
    "name": "logo.svg",
    "alternativeText": "brand",
    "caption": null,
    "focalPoint": null,
    "width": 256,
    "height": 66,
    "formats": null,
    "hash": "logo_986682bcbe",
    "ext": ".svg",
    "mime": "image/svg+xml",
    "size": 16.25,
    "url": "/uploads/logo_986682bcbe.svg",
    "previewUrl": null,
    "provider": "local",
    "provider_metadata": null,
    "createdAt": "2026-06-05T05:09:35.670Z",
    "updatedAt": "2026-06-09T05:20:02.271Z",
    "publishedAt": "2026-06-05T05:09:35.671Z"
  },
  "favicon": null,
  "navigation": [
    {
      "id": 24,
      "label": "Welcome ",
      "url": "/welcome ",
      "isExternal": false
    },
    {
      "id": 25,
      "label": "Healing Arts",
      "url": "/healing-arts",
      "isExternal": false
    }
  ],
  "ctaButton": {
    "id": 15,
    "label": "+971 5590 68096",
    "url": "+971559068096"
  }
};

const LOCAL_FOOTER = {
  "id": 2,
  "documentId": "p6wusdsiikga3ev4bd9di1o1",
  "shortDescription": "Our approach to wellness is rooted in holistic healing, where the mind, body, and spirit are nurtured as one. We believe true health comes from achieving a natural balance within, aligning mental clarity with physical vitality. ",
  "createdAt": "2026-06-16T12:34:40.011Z",
  "updatedAt": "2026-06-16T12:51:30.081Z",
  "publishedAt": "2026-06-16T12:51:30.097Z",
  "emailAddress": "vitaarah@admin.in",
  "copyrightText": "Vitaarah. All rights reserved.",
  "phoneNumber": "+971 559068096",
  "googleMapsUrl": "https://www.embla-carousel.com/docs",
  "uaeAddress": null,
  "logo": {
    "id": 30,
    "documentId": "az8he66vf8y3ewjayhox0np5",
    "name": "footer-logo.svg",
    "alternativeText": null,
    "caption": null,
    "focalPoint": null,
    "width": 361,
    "height": 93,
    "formats": null,
    "hash": "footer_logo_20714a0615",
    "ext": ".svg",
    "mime": "image/svg+xml",
    "size": 16.27,
    "url": "/uploads/footer_logo_20714a0615.svg",
    "previewUrl": null,
    "provider": "local",
    "provider_metadata": null,
    "createdAt": "2026-06-16T12:31:03.497Z",
    "updatedAt": "2026-06-16T12:31:03.497Z",
    "publishedAt": "2026-06-16T12:31:03.498Z"
  },
  "quickLinks": [
    {
      "id": 34,
      "label": "Welcome",
      "url": "/",
      "isExternal": false
    },
    {
      "id": 35,
      "label": "Our Legacy",
      "url": "/legacy",
      "isExternal": false
    },
    {
      "id": 36,
      "label": "Healing Arts ",
      "url": "/",
      "isExternal": false
    },
    {
      "id": 37,
      "label": "Immersive Healing Journeys",
      "url": "/",
      "isExternal": false
    },
    {
      "id": 38,
      "label": "The Visionary",
      "url": "/",
      "isExternal": false
    },
    {
      "id": 39,
      "label": "Contact Us",
      "url": "/contact",
      "isExternal": false
    }
  ],
  "legalLinks": [
    {
      "id": 40,
      "label": "Privacy Policy",
      "url": "/privacy",
      "isExternal": false
    },
    {
      "id": 41,
      "label": "Terms & Conditions",
      "url": "/terms",
      "isExternal": false
    }
  ],
  "socialLinks": []
};
// [local-data-end]

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
  // [local-data-start]
  let header, footer;

  if (USE_LOCAL_DATA) {
    header = LOCAL_HEADER;
    footer = LOCAL_FOOTER;
  } else {
    const layoutData = await getLayoutData();
    header = layoutData.header;
    footer = layoutData.footer;
  }
  // [local-data-end]

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
          <Header {...headerProps} />
          <main className="flex-1">{children}</main>
          <Footer {...footerProps} data={footer} />
        </Providers>
      </body>
    </html>
  );
}
