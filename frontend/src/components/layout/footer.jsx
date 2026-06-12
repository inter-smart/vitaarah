import Link from "next/link";
import Image from "next/image";

const defaultLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "FAQ", href: "/faq" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export default function Footer({ logo, columns, copyright }) {
  const copyrightText = copyright || "Vitaarah. All rights reserved.";

  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            {logo?.url ? (
              <Link href="/">
                <Image
                  src={logo.url}
                  alt={logo.alternativeText || "Vitaarah"}
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            ) : (
              <Link href="/" className="text-xl font-bold tracking-tight">
                Vitaarah
              </Link>
            )}
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              A modern Next.js boilerplate with Tailwind CSS and best practices
              built in.
            </p>
          </div>

          {defaultLinks.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {copyrightText}
        </div>
      </div>
    </footer>
  );
}
