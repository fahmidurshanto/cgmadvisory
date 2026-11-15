import HeroSlider from "@/components/HeroSlider";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowWeWork from "@/components/HowWeWork";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      {/* 1. Hero & Dynamic Slideshow */}
      <HeroSlider />

      {/* 2. Services Overview (Grid of 9 cards) */}
      <ServicesOverview />

      {/* 3. Why Choose CGM (4 key pillars) */}
      <WhyChooseSection />

      {/* 4. How We Work (4-step visual timeline) */}
      <HowWeWork />

      {/* 5. Testimonials Slider (10-15 client reviews) */}
      <TestimonialsSlider />

      {/* 6. Contact & Consultation Form */}
      <section className="py-24 bg-slate-100">
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
