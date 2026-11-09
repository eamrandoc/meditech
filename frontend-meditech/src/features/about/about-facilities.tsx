import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import Image from "next/image";

const facilities = [
  {
    title: "Diagnostic Laboratory",
    description:
      "A dedicated laboratory environment for diagnostic testing services.",
    image: "/images/about/diagnostic-lab.jpg",
  },
  {
    title: "Patient Waiting Area",
    description:
      "A welcoming waiting environment for patients and their attendants.",
    image: "/images/about/waiting-area.jpg",
  },
  {
    title: "Reception & Support",
    description:
      "A reception area to assist patients with service information and guidance.",
    image: "/images/about/reception.jpg",
  },
];

export function AboutFacilities() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading Animation - Up */}
        <SectionHeading
          eyebrow="Our Infrastructure"
          title="Our Facilities & Environment"
          description="We aim to maintain a welcoming and comfortable environment for patients visiting our center."
          animation="up"
        />

        {/* Facilities Cards Animation - Up */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, index) => (
            <ScrollReveal
              key={item.title}
              animation="up"
              staggerIndex={index}
            >
              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative h-64 overflow-hidden">
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