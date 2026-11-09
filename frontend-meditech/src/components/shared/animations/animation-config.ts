
// import type { Variants, Transition } from "framer-motion";

// export const ANIMATION_CONFIG = {
//   duration: 0.7,
//   delay: 0.15,
//   slideDistance: 35,
//   scale: 0.92,
//   viewportAmount: 0.15,
//   once: true,
//   ease: "easeOut" as const,
// };

// export const ANIMATION_VARIANTS: Record<
//   string,
//   Variants
// > = {
//   fade: {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//     },
//   },

//   up: {
//     hidden: {
//       opacity: 0,
//       y: ANIMATION_CONFIG.slideDistance,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//     },
//   },

//   down: {
//     hidden: {
//       opacity: 0,
//       y: -ANIMATION_CONFIG.slideDistance,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//     },
//   },

//   left: {
//     hidden: {
//       opacity: 0,
//       x: -ANIMATION_CONFIG.slideDistance,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//     },
//   },

//   right: {
//     hidden: {
//       opacity: 0,
//       x: ANIMATION_CONFIG.slideDistance,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//     },
//   },

//   scale: {
//     hidden: {
//       opacity: 0,
//       scale: ANIMATION_CONFIG.scale,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//     },
//   },
// };

// export const getAnimationTransition = (
//   duration: number = ANIMATION_CONFIG.duration,
//   delay: number = 0,
// ): Transition => ({
//   duration,
//   delay,
//   ease: ANIMATION_CONFIG.ease,
// });















import type { Variants, Transition } from "framer-motion";

export const ANIMATION_CONFIG = {
  desktop: {
    duration: 0.7,
    delay: 0.15,
    slideDistance: 35,
    scale: 0.92,
  },

  mobile: {
    duration: 0.5,
    delay: 0.1,
    slideDistance: 18,
    scale: 0.96,
  },

  viewportAmount: 0.15,
  once: true,
  ease: "easeOut" as const,
};

export type AnimationType =
  | "fade"
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale";

export function getAnimationVariants(
  isMobile: boolean,
): Record<AnimationType, Variants> {
  const settings = isMobile
    ? ANIMATION_CONFIG.mobile
    : ANIMATION_CONFIG.desktop;

  return {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },

    up: {
      hidden: {
        opacity: 0,
        y: settings.slideDistance,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    down: {
      hidden: {
        opacity: 0,
        y: -settings.slideDistance,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },

    left: {
      hidden: {
        opacity: 0,
        x: -settings.slideDistance,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    right: {
      hidden: {
        opacity: 0,
        x: settings.slideDistance,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },

    scale: {
      hidden: {
        opacity: 0,
        scale: settings.scale,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },
  };
}

export function getAnimationTransition(
  duration: number,
  delay: number,
): Transition {
  return {
    duration,
    delay,
    ease: ANIMATION_CONFIG.ease,
  };
}
