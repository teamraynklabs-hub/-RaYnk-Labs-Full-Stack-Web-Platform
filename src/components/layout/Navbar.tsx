"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          WebApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-sm hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="text-sm hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-primary">
            Contact
          </Link>

          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-sm"
            >
              Contact
            </Link>

            <div className="pt-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
