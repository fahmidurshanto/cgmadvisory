import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/data/content";
import { Mail, MapPin, Phone, ShieldCheck, ArrowRight, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07162c] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-white rounded-xl p-2.5 shadow-lg inline-block">
                <Image
                  src="/logo.jpg"
                  alt="CGM Advisory Pte. Ltd."
                  width={180}
                  height={62}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>
            
            <p className="text-amber-400 font-semibold text-sm tracking-wide">
              &ldquo;Connecting Business &amp; Law&rdquo;
            </p>
            
            <p className="text-slate-400 text-xs leading-relaxed">
              Strategic business consultancy, solicitor-backed legal documentation, corporate services, and event management under one roof in Singapore.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-amber-500/30 text-[11px] text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                ACRA Reg. &amp; Solicitor-Backed Network
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-300 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/our-process" className="hover:text-amber-300 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="hover:text-amber-300 transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services List (9 items) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Our 9 Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-amber-300 transition-colors block truncate"
                    title={s.title}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">
              Contact Details
            </h4>
            <ul className="space-y-4 text-xs text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  1 Raffles Place, #28-00 One Raffles Place, Singapore 048616
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+65 6712 8890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:admin@cgmadvisorypteltd.com"
                  className="text-amber-400 hover:underline font-medium"
                >
                  admin@cgmadvisorypteltd.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon – Fri: 9:00 AM – 6:00 PM (SGT)</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Request Consultation Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 CGM Advisory Pte. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>Singapore Registration No. 202300000X</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Engagement</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
