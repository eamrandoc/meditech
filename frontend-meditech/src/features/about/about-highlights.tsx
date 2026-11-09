import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import Image from "next/image";

const highlights = [
  {
    title: "Home Sample Collection",
    description:
      "A convenient sample collection option at home, subject to service availability.",
    image: "/images/about/home-collection.jpg",
  },
  {
    title: "Doctor Appointment",
    description:
      "Convenient appointment arrangements for patients seeking medical consultation.",
    image: "/images/about/doctor-appointment.jpg",
  },
  {
    title: "Online Report Access",
    description:
      "A convenient way for patients to access their diagnostic reports online.",
    image: "/images/about/online-report.jpg",
  },
];

export function AboutHighlights() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading Animation - Up */}
        <SectionHeading
          eyebrow="Patient Convenience"
          title="Healthcare Made More Convenient"
          description="We aim to make accessing healthcare services easier and more convenient for our patients."
          animation="up"
        />

        {/* Highlight Cards Animation - Up */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <ScrollReveal
              key={item.title}
              animation="up"
              staggerIndex={index}
            >
              <article className="group h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>

              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}