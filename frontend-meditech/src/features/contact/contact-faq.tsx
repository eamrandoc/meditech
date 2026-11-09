
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const faqs = [
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our appointment page or contact our center directly.",
  },
  {
    question: "What diagnostic services do you provide?",
    answer:
      "We provide diagnostic services and medical consultation. Please contact our center for the available tests and services.",
  },
  {
    question: "How can I get information about test reports?",
    answer:
      "Please contact our center directly for information about diagnostic reports and collection procedures.",
  },
  {
    question: "Can I contact you for general inquiries?",
    answer:
      "Yes. You can use our contact form, call our center, or visit us in person.",
  },
];

export function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to some common questions about contacting us."
          animation="up"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} animation="up" delay={index * 0.05}>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  aria-expanded={activeIndex === index}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-teal-700 transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeIndex === index && (
                  <div className="border-t border-slate-100 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6">
                    {faq.answer}
                  </div>
                )}

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
