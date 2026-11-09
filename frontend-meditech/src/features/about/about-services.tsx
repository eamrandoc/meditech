import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutServices } from "@/data/about-data";

export function AboutServices() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading Animation - Up */}
        <SectionHeading
          eyebrow="What We Offer"
          title="Our Healthcare Services"
          description="Explore the healthcare services available through Khulna Meditech."
          animation="up"
        />

        {/* Services Cards Animation - Up */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal
                key={service.title}
                animation="up"
                staggerIndex={index}
              >
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}









// import Link from "next/link";

// import {
//   Microscope,
//   Stethoscope,
//   Activity,
//   ArrowRight,
// } from "lucide-react";
// import { SectionHeading } from "@/components/shared/section-heading";



// const services = [
//   {
//     icon: Microscope,
//     title: "Pathology & Laboratory Tests",
//     description:
//       "Diagnostic laboratory testing services to support medical assessment and healthcare decisions.",
//     href: "/diagnostic-tests",
//   },
//   {
//     icon: Stethoscope,
//     title: "Medical Consultation",
//     description:
//       "Medical consultation services to help patients receive appropriate healthcare guidance.",
//     href: "/doctors",
//   },
//   {
//     icon: Activity,
//     title: "Health Checkup Packages",
//     description:
//       "Health screening packages designed to support routine health assessment.",
//     href: "/test-packages",
//   },
// ];

// export function AboutServices() {
//   return (
//     <section className="py-20 lg:py-24">

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         <SectionHeading
//           eyebrow="Our Healthcare Services"
//           title="Services Designed Around Your Health"
//           description="Explore our diagnostic and consultation service categories to find the healthcare support you need."
//         />

//         <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.title}
//                 className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
//               >

//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">

//                   <Icon size={30} />

//                 </div>

//                 <h3 className="mt-7 text-xl font-bold text-slate-900">
//                   {service.title}
//                 </h3>

//                 <p className="mt-4 text-sm leading-7 text-slate-600">
//                   {service.description}
//                 </p>

//                 <Link
//                   href={service.href}
//                   className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-900"
//                 >
//                   Explore Service
//                   <ArrowRight
//                     size={17}
//                     className="transition group-hover:translate-x-1"
//                   />
//                 </Link>

//               </article>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }
