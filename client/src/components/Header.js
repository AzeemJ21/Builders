"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const PHONE_NUMBER_DISPLAY = "+923224488025";
  const PHONE_NUMBER_TEL = "+923224488025";

  const nav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Societies", href: "/societies" },
    { name: "Plots", href: "/plot" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-white/70 dark:bg-neutral-900/70 shadow-sm"
          : "bg-transparent"
      }`}
      aria-label="Main"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between gap-2">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <Image
            src={"/Footer2.png"}
            alt="Logo"
            width={90}
            height={90}/>
            
          </Link>

          <nav className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 lg:block" aria-label="Primary">
            <ul className="flex items-center gap-1 rounded-full border border-neutral-200/70 bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`inline-block rounded-full px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                        active
                          ? "bg-red-600 text-white"
                          : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${PHONE_NUMBER_TEL}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER_TEL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 active:translate-y-0"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-xl p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 lg:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden ${open ? "block" : "hidden"}`}
        >
          <div className="mt-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md dark:border-neutral-800 dark:bg-neutral-900">
            <nav aria-label="Mobile">
              <ul className="flex flex-col p-2 text-base">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`block rounded-xl px-3 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                          active
                            ? "bg-red-600 text-white"
                            : "text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex gap-2 border-t border-neutral-200 p-2 dark:border-neutral-800">
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={`https://wa.me/${PHONE_NUMBER_TEL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
    </header>
  );
}
