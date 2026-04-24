"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navLinks = [
  { href: "/ingredients", label: "Ingredients" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/ingredients"
          className="flex items-center gap-2.5 group"
          aria-label="MealExplorer Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-md">
            <span className="text-lg" role="img" aria-hidden="true">🍽️</span>
          </div>
          <div>
            <span className="block text-base font-extrabold tracking-tight text-zinc-900 leading-tight">
              Meal<span className="text-brand-500">Explorer</span>
            </span>
            <span className="block text-[10px] font-medium text-zinc-400 leading-none">
              Powered by TheMealDB
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-50 text-brand-600"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://www.themealdb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-700"
          >
            API Docs ↗
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden rounded-lg p-2 text-zinc-500 hover:bg-zinc-100"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-zinc-100 bg-white px-4 pb-4 pt-2">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-50 text-brand-600"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
