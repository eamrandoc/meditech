
import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";

import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-teal-800 to-teal-600">

      {/* Background Decorations */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-white/10" />

      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[40px] border-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

        <div className="max-w-3xl">

          {/* Badge Animation - Up */}
          <ScrollReveal animation="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-teal-50">
              <HeartPulse size={17} />
              About Our Organization
            </span>
          </ScrollReveal>

          {/* Heading Animation - Fade */}
          <ScrollReveal animation="fade" delay={0.1}>
            <h1 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Caring for Your Health,
              <span className="mt-2 block text-teal-200">
                Building a Healthier Future.
              </span>
            </h1>
          </ScrollReveal>

          {/* Description Animation - Up */}
          <ScrollReveal animation="up" delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-teal-50/90 sm:text-lg">
              Welcome to Khulna Meditech Diagnostic & Consultation Center.
              We are committed to supporting individuals and families
              through diagnostic services, medical consultation,
              and patient-focused healthcare.
            </p>
          </ScrollReveal>

          {/* CTA Animation - Up */}
          <ScrollReveal animation="up" delay={0.25}>
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}







//  <div className="mb-6 flex items-center gap-2 text-sm text-white/70">
//             <Home size={16} />

//             <Link href="/">Home</Link>

//             <span>/</span>

//             <span className="text-white">About Us</span>
//           </div>
