
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    value: "23 Shamsur Rahman Road, Santidham More, Khulna, Bangladesh",
    description: "Visit our diagnostic center.",
    color: "teal",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+880 1827-055-040",
    description: "Call us for assistance.",
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "info@meditech.com",
    description: "Send us your queries.",
    color: "purple",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Every Day",
    description: "8:00 AM – 10:00 PM",
    color: "orange",
  },
] as const;

export function ContactInformation() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Get In Touch"
          title="We'd Love to Hear From You"
          description="Reach out to us for information, assistance, or healthcare-related inquiries."
          animation="up"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            const colors = {
              teal: "bg-teal-100 text-teal-700",
              blue: "bg-blue-100 text-blue-700",
              purple: "bg-purple-100 text-purple-700",
              orange: "bg-orange-100 text-orange-700",
            };

            return (
              <ScrollReveal
                key={item.title}
                animation="up"
                delay={index * 0.1}
              >
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors[item.color]}`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  {item.title === "Phone Number" ? (
                    <a
                      href="tel:+8801827055040"
                      className="mt-3 block break-words font-semibold text-teal-700 hover:text-teal-900"
                    >
                      {item.value}
                    </a>
                  ) : item.title === "Email Address" ? (
                    <a
                      href="mailto:info@meditech.com"
                      className="mt-3 block break-words font-semibold text-teal-700 hover:text-teal-900"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-3 break-words font-semibold text-teal-700">
                      {item.value}
                    </p>
                  )}

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
