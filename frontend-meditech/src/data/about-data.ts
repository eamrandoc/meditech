
import {
  HeartPulse,
  ShieldCheck,
  Users,
  HandHeart,
  Microscope,
  Stethoscope,
  CalendarDays,
  Activity,
  type LucideIcon,
} from "lucide-react";

interface AboutValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AboutService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutValues: AboutValue[] = [
  {
    icon: HeartPulse,
    title: "Patient-Centered Care",
    description:
      "We believe every patient deserves respectful, compassionate, and personalized healthcare.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "We value quality, accuracy, and reliability in diagnostic and healthcare services.",
  },
  {
    icon: HandHeart,
    title: "Compassion",
    description:
      "We treat every individual with kindness, dignity, and understanding.",
  },
  {
    icon: Users,
    title: "Professionalism",
    description:
      "We strive to maintain professional standards throughout the patient care experience.",
  },
];

export const aboutServices: AboutService[] = [
  {
    icon: Microscope,
    title: "Diagnostic Services",
    description:
      "Diagnostic testing and laboratory services to support healthcare decisions.",
  },
  {
    icon: Stethoscope,
    title: "Medical Consultation",
    description:
      "Access to medical consultation and professional healthcare guidance.",
  },
  {
    icon: Activity,
    title: "Health Checkups",
    description:
      "Health screening services to help individuals monitor their well-being.",
  },
  {
    icon: CalendarDays,
    title: "Appointment Services",
    description:
      "Convenient appointment arrangements for patients seeking healthcare services.",
  },
];

export const whyChooseUs: string[] = [
  "Patient-focused service experience",
  "Commitment to diagnostic quality",
  "Professional healthcare approach",
  "Respect for patient privacy and dignity",
  "Convenient appointment arrangements",
];
