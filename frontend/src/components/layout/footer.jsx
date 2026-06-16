import Link from "next/link";
import Image from "next/image";

export default function Footer({ logo, columns, copyrightText }) {
  console.log(copyrightText);

  return (
    <footer className="w-full block">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[20%]">
            <div className="text-[]">Quick Links</div>
            {navigation.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
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

          {/* {defaultLinks.map((col) => (
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
          ))} */}
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {copyrightText}
        </div>
      </div>
    </footer>
  );
}
