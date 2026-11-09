import { MapPin, Navigation } from "lucide-react";
import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function ContactLocation() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Our Diagnostic Center"
          description="We welcome you to Khulna Meditech Diagnostic & Consultation Center."
          animation="up"
        />

        <ScrollReveal animation="up">
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <MapPin size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Khulna Meditech Diagnostic Center
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Khulna, Bangladesh
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Khulna+Meditech+Diagnostic+Consultation+Center"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
              >
                Get Directions
                <Navigation size={17} />
              </a>
            </div>

            <div className="h-[350px] w-full bg-slate-100">
              <iframe
                title="Khulna Meditech Diagnostic Center"
                src="https://maps.google.com/maps?q=23%20Shamsur%20Rahman%20Road%2C%20Santidham%20More%2C%20Khulna%2C%20Bangladesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
