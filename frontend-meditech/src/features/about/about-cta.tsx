import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";

export function AboutCTA() {
  return (
    <section className="bg-teal-700 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

        {/* CTA Heading Animation - Up */}
        <ScrollReveal animation="up">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Your Health Deserves the Best Care
            </h2>

            <p className="mt-3 text-teal-100">
              Get in touch with Khulna Meditech today.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Buttons Animation - Up */}
        <ScrollReveal animation="up">
          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Book Appointment
              <CalendarDays size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}