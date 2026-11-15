"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Process", href: "/our-process" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md text-slate-900 shadow-md py-2.5 border-b border-slate-200"
          : "bg-white text-slate-900 py-3.5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo (left) */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center transition-transform group-hover:scale-102">
              <Image
                src="/logo.jpg"
                alt="CGM Advisory Pte. Ltd."
                width={160}
                height={55}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors relative py-1 hover:border-b-2 hover:border-amber-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Consultation Button (right) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-200"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 pt-2 border-t border-slate-200 space-y-3 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/book-consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-md"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
