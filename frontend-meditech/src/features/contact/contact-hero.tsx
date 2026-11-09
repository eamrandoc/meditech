import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Phone,
} from "lucide-react";

import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-teal-800 to-teal-600">

      {/* Background Decorations */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-white/10" />

      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[40px] border-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <div className="max-w-3xl">

          {/* Badge Animation */}
          <ScrollReveal animation="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-teal-50">
              <HeartPulse size={17} />
              Contact Us
            </span>
          </ScrollReveal>

          {/* Heading Animation */}
          <ScrollReveal animation="fade" delay={0.1}>
            <h1 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              We are Here to Help,
              <span className="mt-2 block text-teal-200">
                Your Health Matters.
              </span>
            </h1>
          </ScrollReveal>

          {/* Description Animation */}
          <ScrollReveal animation="up" delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-teal-50/90 sm:text-lg">
              Have questions about our diagnostic services or medical
              consultations? Get in touch with Khulna Meditech Diagnostic
              & Consultation Center. We're happy to assist you.
            </p>
          </ScrollReveal>

          {/* Contact Details */}
          <ScrollReveal animation="up" delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-teal-50/90">

              <div className="flex items-center gap-2">
                <Phone size={17} className="text-teal-200" />
                <a
                  href="tel:+8801827055040"
                  className="transition hover:text-white"
                >
                  +880 1827-055-040
                </a>
              </div>

              <div className="flex items-center gap-2">
                <HeartPulse size={17} className="text-teal-200" />
                Every Day: 8:00 AM – 10:00 PM
              </div>

            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="up" delay={0.25}>
            <div className="mt-9 flex flex-wrap gap-4">

              {/* Send Message */}
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                Send a Message
                <ArrowRight size={18} />
              </Link>

              {/* Call Us */}
              <a
                href="tel:+8801827055040"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={18} />
                Call Us Now
              </a>

              {/* Book Appointment */}
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
