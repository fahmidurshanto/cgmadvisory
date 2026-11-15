import HeroHeadline from "@/components/HeroHeadline";
import HeroSlider from "@/components/HeroSlider";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowWeWork from "@/components/HowWeWork";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      {/* 1. Full-Screen Grand Corporate Headline Section with Singapore Skyline */}
      <HeroHeadline />

      {/* 2. BDO-Style 9-Service Dynamic Slideshow */}
      <HeroSlider />

      {/* 3. Vistra-Style Bento Grid 9-Service Overview */}
      <ServicesOverview />

      {/* 4. Why Choose CGM (4 key pillars) */}
      <WhyChooseSection />

      {/* 5. How We Work (4-step visual timeline) */}
      <HowWeWork />

      {/* 6. Testimonials Slider (12 client reviews) */}
      <TestimonialsSlider />

      {/* 7. Contact & Consultation Form */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            headline="Start Your Consultation with CGM Advisory"
            subheadline="Fill out the details below to dispatch your inquiry directly to admin@cgmadvisorypteltd.com. Our Singapore advisory team will review and respond promptly."
          />
        </div>
      </section>
    </div>
  );
}
