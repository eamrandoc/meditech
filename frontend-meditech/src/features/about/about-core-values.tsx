import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutValues } from "@/data/about-data";

export function AboutCoreValues() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading Animation - Up */}
        <SectionHeading
          eyebrow="What We Believe"
          title="Our Core Values"
          description="Our values guide the way we serve our patients and build relationships with our community."
          animation="up"
        />

        {/* Core Values Cards Animation - Scale */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <ScrollReveal
                key={value.title}
                animation="scale"
                staggerIndex={index}
              >
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
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