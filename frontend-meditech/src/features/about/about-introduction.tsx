import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";
import Link from "next/link";

const highlights = [
  "Patient-focused healthcare services",
  "Modern diagnostic facilities",
  "Experienced healthcare professionals",
  "Commitment to quality and reliability",
];


export function AboutIntroduction() {
  return (
    <section className="py-20 lg:py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

       {/* Image Animation - Left */}
        <ScrollReveal animation="left">
        <div className="relative">

          <div className="overflow-hidden rounded-3xl bg-teal-50">
            <img
              src="/images/about/medical-center.jpg"
              alt="Khulna Meditech Diagnostic Center"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-7 right-4 max-w-xs rounded-2xl bg-teal-700 p-6 text-white shadow-xl sm:right-8">

            <HeartPulse size={32} />

            <h3 className="mt-3 text-xl font-bold">
              Your Health Matters
            </h3>

            <p className="mt-2 text-sm leading-6 text-teal-50">
              Committed to compassionate and
              patient-focused healthcare.
            </p>

          </div>
        </div>
</ScrollReveal>

       {/* Content Animation - Right */}
        <ScrollReveal animation="right">
        <div className="pt-8 lg:pt-0">

          <SectionHeading
            eyebrow="Who We Are"
            title="About Khulna Meditech Diagnostic & Consultation Center"
            alignment="left"
          />

          <p className="mt-6 leading-8 text-slate-600">
            Khulna Meditech Diagnostic & Consultation Center
            is a healthcare organization focused on diagnostic
            services and medical consultation.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            We understand that healthcare is an important
            part of every person life. Our aim is to create
            a welcoming environment where patients can seek
            healthcare services with confidence, comfort,
            and peace of mind.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Through a commitment to service quality,
            professional care, and patient satisfaction,
            we aspire to contribute positively to the
            healthcare needs of our community in Khulna.
          </p>
            {/* Highlights */}
           <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-primary" size={20} />

                <span className="text-sm font-medium sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/appointments"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-900"
          >
            Book an Appointment
            <ArrowRight size={18} />
          </Link>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
