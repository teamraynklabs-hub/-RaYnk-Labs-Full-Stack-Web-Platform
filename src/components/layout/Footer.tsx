import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold">WebApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A modern web application built with scalable and secure technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} WebApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
