// "use client";

// import {
//   motion,
//   useReducedMotion,
// } from "framer-motion";

// import type { ReactNode } from "react";

// import {
//   ANIMATION_CONFIG,
//   ANIMATION_VARIANTS,
//   getAnimationTransition,
// } from "./animation-config";

// type AnimationType =
//   | "fade"
//   | "up"
//   | "down"
//   | "left"
//   | "right"
//   | "scale";

// interface ScrollRevealProps {
//   children: ReactNode;
//   animation?: AnimationType;
//   delay?: number;
//   duration?: number;
//   className?: string;
//   once?: boolean;
// }

// export function ScrollReveal({
//   children,
//   animation = "up",
//   delay = 0,
//   duration = ANIMATION_CONFIG.duration,
//   className,
//   once = ANIMATION_CONFIG.once,
// }: ScrollRevealProps) {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       className={className}
//       variants={ANIMATION_VARIANTS[animation]}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{
//         once,
//         amount: ANIMATION_CONFIG.viewportAmount,
//       }}
//       transition={getAnimationTransition(
//         shouldReduceMotion ? 0 : duration,
//         shouldReduceMotion ? 0 : delay,
//       )}
//     >
//       {children}
//     </motion.div>
//   );
// }












"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import {
  ANIMATION_CONFIG,
  getAnimationVariants,
  getAnimationTransition,
  type AnimationType,
} from "./animation-config";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  staggerIndex?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  animation = "up",
  delay,
  duration,
  staggerIndex,
  className,
  once = ANIMATION_CONFIG.once,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 767px)"
    );

    const updateDevice = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  const settings = isMobile
    ? ANIMATION_CONFIG.mobile
    : ANIMATION_CONFIG.desktop;

  const variants = getAnimationVariants(isMobile);

  const finalDuration =
    duration ?? settings.duration;

 const finalDelay =
  delay ?? (
    staggerIndex !== undefined
      ? staggerIndex * settings.delay
      : 0
  );

  // Respect accessibility preferences.
  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={className}
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: ANIMATION_CONFIG.viewportAmount,
      }}
      transition={getAnimationTransition(
        finalDuration,
        finalDelay,
      )}
    >
      {children}
    </motion.div>
  );
}
