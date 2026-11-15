"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { SERVICES } from "@/data/content";

interface ContactFormProps {
  preselectedService?: string;
  headline?: string;
  subheadline?: string;
}

export default function ContactForm({
  preselectedService = "",
  headline = "Book a Consultation",
  subheadline = "Speak with our corporate advisors and legal documentation specialists in Singapore."
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: preselectedService || "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Your consultation request has been successfully submitted to admin@cgmadvisorypteltd.com. A senior consultant will respond promptly."
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: preselectedService || "",
          message: ""
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "An error occurred while submitting. Please contact admin@cgmadvisorypteltd.com directly."
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to connect to the server. Please email admin@cgmadvisorypteltd.com directly."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      id="contact-form"
      className="w-full mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 relative overflow-hidden"
    >
      {/* Decorative top accent line with brand gold gradient */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#07162c] via-amber-400 to-[#07162c]"></div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
          Direct Inquiries &amp; Advisory
        </div>
        <h2 className="text-3xl font-black tracking-tight text-[#07162c]">{headline}</h2>
        <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">{subheadline}</p>
        <p className="mt-1 text-xs text-slate-500">All submissions are delivered directly to <span className="text-[#07162c] font-bold underline decoration-amber-500">admin@cgmadvisorypteltd.com</span></p>
      </div>

      {status.type === "success" ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
          <h4 className="text-lg font-bold">Request Dispatched Successfully</h4>
          <p className="text-sm mt-1 text-emerald-700">{status.message}</p>
          <button
            onClick={() => setStatus({ type: null, message: "" })}
            className="mt-6 px-6 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition cursor-pointer shadow-md"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status.type === "error" && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#07162c] mb-2">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Marcus Tan"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition text-sm text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#07162c] mb-2">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="marcus@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition text-sm text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#07162c] mb-2">
                Contact Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+65 6123 4567"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition text-sm text-slate-900"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#07162c] mb-2">
                Company / Organization
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name Pte. Ltd."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition text-sm text-slate-900"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#07162c] mb-2">
              Primary Area of Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition text-sm text-slate-900"
            >
              <option value="">General Corporate Consultation</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.category})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#07162c] mb-2">
              Tell us about your requirements <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details regarding the scope, specific documents required, timeline, or key objectives..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition text-sm text-slate-900"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#07162c] via-[#0b2545] to-[#134074] hover:from-[#0b2545] hover:to-[#1e56a0] disabled:opacity-70 text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 border border-amber-500/30 flex items-center justify-center gap-3 cursor-pointer group"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
                <span>Sending details to admin@cgmadvisorypteltd.com...</span>
              </>
            ) : (
              <>
                <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-amber-300 shadow-sm">
                  <Send className="w-3.5 h-3.5" />
                </div>
                <span>Submit Consultation Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}
