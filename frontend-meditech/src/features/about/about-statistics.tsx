// import { Activity, Microscope, Users, Award } from "lucide-react";

// const statistics = [
//   {
//     label: "Happy Patients",
//     value: "—",
//     icon: Users,
//   },
//   {
//     label: "Diagnostic Tests",
//     value: "—",
//     icon: Microscope,
//   },
//   {
//     label: "Healthcare Services",
//     value: "—",
//     icon: Activity,
//   },
//   {
//     label: "Years of Experience",
//     value: "—",
//     icon: Award,
//   },
// ];

// export function AboutStatistics() {
//   return (
//     <section className="bg-primary py-16 text-white">
//       <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 lg:grid-cols-4">
//         {statistics.map((item) => {
//           const Icon = item.icon;

//           return (
//             <div key={item.label} className="text-center">
//               <Icon className="mx-auto mb-4" size={32} />

//               <h3 className="text-3xl font-bold sm:text-4xl">
//                 {item.value}
//               </h3>

//               <p className="mt-2 text-sm text-white/75">
//                 {item.label}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Users,
  Stethoscope,
  Microscope,
  HeartHandshake,
} from "lucide-react";

const statistics = [
  {
    id: 1,
    icon: Users,
    value: "9999",
    label: "Happy Patients",
    description: "Patients served by our center",
  },
  {
    id: 2,
    icon: Stethoscope,
    value: "55",
    label: "Expert Doctors",
    description: "Doctors available for consultation",
  },
  {
    id: 3,
    icon: Microscope,
    value: "99",
    label: "Diagnostic Tests",
    description: "Diagnostic tests available",
  },
  {
    id: 4,
    icon: HeartHandshake,
    value: "10",
    label: "Years of Service",
    description: "Dedicated to healthcare",
  },
];

export function AboutStatistics() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading Animation - Up */}
        <SectionHeading
          eyebrow="Our Achievements"
          title="Our Impact in Numbers"
          description="Discover our commitment to serving the community through diagnostic and healthcare services."
          animation="up"
        />

        {/* Statistics Cards Animation - Scale */}
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.id}
                animation="scale"
                staggerIndex={index}
              >
                <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-slate-800 sm:text-base">
                    {item.label}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
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