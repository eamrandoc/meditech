// import { SectionHeading } from "@/components/shared/section-heading";
// import { Eye, Target } from "lucide-react";


// const items = [
//   {
//     title: "Our Mission",
//     description:
//       "Our mission is to provide accessible, dependable and quality diagnostic and consultation services with a strong commitment to patient care, comfort and quality healthcare experiences.",
//     icon: Target,
//     color: "teal",
//   },
//   {
//     title: "Our Vision",
//     description:
//       "Our vision is to become a trusted healthcare and diagnostic service provider in Khulna, recognized for patient satisfaction, professional service, and continuous improvement.",
//     icon: Eye,
//     color: "blue",
//   },
// ] as const;;


// export function AboutMissionVision() {
//   return (
//     <section className="bg-slate-50 py-20 lg:py-24">

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         <SectionHeading
//           eyebrow="Our Purpose"
//           title="Our Mission & Vision"
//           description="We strive to make healthcare services more accessible, dependable, and patient-focused."
//         />

//         <div className="mt-14 grid gap-8 md:grid-cols-2">


//   {items.map((item) => {
//             const Icon = item.icon;

//             const colorStyles = {
//               teal: {
//                 border: "border-teal-100",
//                 iconBg: "bg-teal-100",
//                 iconColor: "text-teal-700",
//               },
//               blue: {
//                 border: "border-blue-100",
//                 iconBg: "bg-blue-100",
//                 iconColor: "text-blue-700",
//               },
//             };

//             const styles = colorStyles[item.color];

//             return (
//               <div
//                 key={item.title}
//                 className={`rounded-2xl border ${styles.border} bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
//               >
//                 <div
//                   className={`flex h-14 w-14 items-center justify-center rounded-xl ${styles.iconBg} ${styles.iconColor}`}
//                 >
//                   <Icon size={28} />
//                 </div>

//                 <h3 className="mt-6 text-2xl font-bold text-slate-900">
//                   {item.title}
//                 </h3>

//                 <p className="mt-4 leading-8 text-slate-600">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}



//             {/* Mission */}
//           {/* <div className="rounded-2xl border border-teal-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
// <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
//            <Target size={28} />
//            </div>

//             <h3 className="mt-6 text-2xl font-bold text-slate-900">
//               Our Mission
//             </h3>

//             <p className="mt-4 leading-8 text-slate-600">
//               Our mission is to provide dependable diagnostic
//               and consultation services while prioritizing
//               patient comfort and quality healthcare experiences.
//             </p>

//           </div> */}
//  {/* Vision */}
//           {/* <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

//              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
//              <Eye size={28} />
//             </div>

//             <h3 className="mt-6 text-2xl font-bold text-slate-900">
//               Our Vision
//             </h3>

//             <p className="mt-4 leading-8 text-slate-600">
             
//               Our vision is to become a trusted healthcare
//                and diagnostic service provider in Khulna,
//               recognized for patient satisfaction,
//               professional service, and continuous improvement.
//             </p>

//           </div> */}

//         </div>
//       </div>
//     </section>
//   );
// }









import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Eye, Target } from "lucide-react";

const items = [
  {
    title: "Our Mission",
    description:
      "Our mission is to provide accessible, dependable and quality diagnostic and consultation services with a strong commitment to patient care, comfort and quality healthcare experiences.",
    icon: Target,
    color: "teal",
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to become a trusted healthcare and diagnostic service provider in Khulna, recognized for patient satisfaction, professional service, and continuous improvement.",
    icon: Eye,
    color: "blue",
  },
] as const;

export function AboutMissionVision() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading Animation - Up */}
        <SectionHeading
          eyebrow="Our Purpose"
          title="Our Mission & Vision"
          description="We strive to make healthcare services more accessible, dependable, and patient-focused."
          animation="up"
        />

        {/* Mission & Vision Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;

            const colorStyles = {
              teal: {
                border: "border-teal-100",
                iconBg: "bg-teal-100",
                iconColor: "text-teal-700",
              },
              blue: {
                border: "border-blue-100",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-700",
              },
            };

            const styles = colorStyles[item.color];

            return (
              <ScrollReveal
                key={item.title}
                animation={index === 0 ? "left" : "right"}
              >
                <div
                  className={`h-full rounded-2xl border ${styles.border} bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${styles.iconBg} ${styles.iconColor}`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
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