"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/80">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Current Market home">
          <Image src="/logo.svg" alt="Current Market" width={44} height={44} priority />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-ink">Current Market</span>
            <span className="text-xs text-ink-muted">The Brand Intelligence Lab</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 transition-colors duration-200 ${
                isActive(item.href) ? "text-accent-violet" : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent-violet" aria-hidden />
              )}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-card-border"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-card-border bg-background/95">
          <nav className="container flex flex-col py-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 transition-colors duration-200 ${
                  isActive(item.href) ? "text-accent-violet" : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
