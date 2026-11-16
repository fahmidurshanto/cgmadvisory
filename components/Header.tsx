"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Consultation Button (right) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#07162c] via-[#0b2545] to-[#134074] hover:from-[#0b2545] hover:to-[#1e56a0] text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-amber-500/30 transition-all duration-300 group"
            >
              <span>Book Consultation</span>
              <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-amber-300 shadow-sm">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth Framer Motion Collapse/Expand */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden bg-white border-t border-slate-100"
            >
              <div className="pt-3 pb-6 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-800 hover:text-amber-600 hover:bg-slate-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                  className="pt-3 px-1"
                >
                  <Link
                    href="/book-consultation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#07162c] via-[#0b2545] to-[#134074] hover:from-[#0b2545] hover:to-[#1e56a0] text-white font-bold text-sm shadow-md border border-amber-500/30 transition-all duration-300 group"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
