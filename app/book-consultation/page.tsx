import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Consultation | CGM Advisory Pte. Ltd.",
  description: "Schedule a consultation with CGM Advisory. Your submission will be delivered directly to admin@cgmadvisorypteltd.com.",
};

export default function BookConsultationPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            Direct Client Intake
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Book a Consultation
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Let us know your requirements. Filled responses are securely routed directly to{" "}
            <span className="text-blue-600 font-semibold">admin@cgmadvisorypteltd.com</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Info sidebar */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6 lg:col-span-1">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Office &amp; Inquiries
            </h3>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Singapore Office</span>
                  <span>44 Bendemeer Road, #04-1470, Singapore 330044</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Email Intake</span>
                  <a
                    href="mailto:admin@cgmadvisorypteltd.com"
                    className="text-blue-600 hover:underline"
                  >
                    admin@cgmadvisorypteltd.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Direct Telephone</span>
                  <a
                    href="tel:+6589845965"
                    className="text-slate-600 hover:text-blue-600 hover:underline transition-colors"
                  >
                    +65 8984 5965
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 block">Operating Hours</span>
                  <span>Monday – Friday: 9:00 AM – 6:00 PM SGT</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 bg-blue-50/70 p-4 rounded-xl">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900 leading-relaxed">
                  All inquiries remain strictly confidential. Non-disclosure agreements (NDAs) can be executed upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm
              headline="Consultation Request Form"
              subheadline="Complete the form below to receive a response from a partner or senior corporate advisor."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

