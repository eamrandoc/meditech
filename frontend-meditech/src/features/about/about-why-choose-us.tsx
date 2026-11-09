import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";

import {
  Microscope,
  Stethoscope,
  ShieldCheck,
  Clock,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { whyChooseUs } from "@/data/about-data";

const features = [
  {
    icon: Microscope,
    title: "Diagnostic Care",
    description:
      "Supporting healthcare decisions through diagnostic services.",
  },
  {
    icon: Stethoscope,
    title: "Consultation",
    description:
      "Healthcare guidance through medical consultation services.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Trust",
    description:
      "Respecting patient privacy and dignity.",
  },
  {
    icon: Clock,
    title: "Convenience",
    description:
      "Working toward a smooth patient service experience.",
  },
];

export function AboutWhyChooseUs() {
  return (
    <section className="bg-teal-950 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Left Content Animation - Left */}
        <ScrollReveal animation="left">
          <div>

            <SectionHeading
              eyebrow="Why Choose Us"
              title="Healthcare with Care, Commitment & Responsibility"
              alignment="left"
              animation="left"
              className="[&>h2]:text-white [&>p]:text-teal-100/80 [&>span]:text-teal-300"
            />

            <p className="mt-6 leading-8 text-teal-100/80">
              Choosing a healthcare provider is an important
              decision. We aim to make your experience
              comfortable and supportive at every step.
            </p>

            <div className="mt-9 space-y-6">
              {whyChooseUs.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 text-teal-300">
                    ✓
                  </span>

                  <span className="text-sm leading-7 text-teal-50">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* Right Feature Cards Animation - Right */}
        <ScrollReveal animation="right">
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:p-7 ${
                    index % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <Icon
                    size={32}
                    className="text-teal-300"
                  />

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-teal-100/80">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}