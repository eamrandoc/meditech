import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Award } from "lucide-react";

export function AboutCommitment() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* Icon Animation - Up */}
        <ScrollReveal animation="up">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
            <Award size={32} />
          </div>
        </ScrollReveal>

        {/* Content Animation - Fade */}
        <ScrollReveal animation="fade">
          <div className="mt-6">
            <SectionHeading
              eyebrow="Our Promise"
              title="Our Commitment to You"
              description="At Khulna Meditech Diagnostic & Consultation Center, we recognize that every patient deserves attention, respect, and responsible healthcare services. We are committed to continuously improving our services and creating a positive healthcare experience for the people we serve."
              animation="up"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}