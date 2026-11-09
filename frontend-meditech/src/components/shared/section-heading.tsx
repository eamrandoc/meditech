// interface SectionHeadingProps {
//   eyebrow?: string;
//   title: string;
//   description?: string;
//   centered?: boolean;
// }

import { AnimationType } from "./animations/animation-config";
import { ScrollReveal } from "./animations/scroll-reveal";

// export function SectionHeading({
//   eyebrow,
//   title,
//   description,
//   centered = true,
// }: SectionHeadingProps) {
//   return (
//     <div
//       className={`max-w-3xl space-y-4 ${
//         centered ? "mx-auto text-center" : "text-left"
//       }`}
//     >
//       {eyebrow && (
//         <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
//           {eyebrow}
//         </span>
//       )}

//       <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
//         {title}
//       </h2>

//       {description && (
//         <p className="text-base leading-8 text-muted-foreground sm:text-lg">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
  animation?: AnimationType;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "center",
  className = "",
  animation = "up",
}: SectionHeadingProps) {
  return (
    <ScrollReveal animation={animation}>
      <div
        className={`
        max-w-2xl
        ${alignment === "center" ? "mx-auto text-center" : "text-left"}
        ${className}
      `}
      >
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            {eyebrow}
          </span>
        )}

        <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-base leading-7 text-slate-600">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
