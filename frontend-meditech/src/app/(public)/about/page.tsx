import { AboutCommitment } from "@/features/about/about-commitment";
import { AboutCoreValues } from "@/features/about/about-core-values";
import { AboutCTA } from "@/features/about/about-cta";
import { AboutFacilities } from "@/features/about/about-facilities";
import { AboutHero } from "@/features/about/about-hero";
import { AboutHighlights } from "@/features/about/about-highlights";
import { AboutIntroduction } from "@/features/about/about-introduction";
import { AboutMissionVision } from "@/features/about/about-mission-vision";
import { AboutServices } from "@/features/about/about-services";
import { AboutStatistics } from "@/features/about/about-statistics";
import { AboutWhyChooseUs } from "@/features/about/about-why-choose-us";

export const metadata = {
  title: "About Us | Khulna Meditech",
  description:
     "Learn about Khulna Meditech Diagnostic & Consultation Center, our mission, vision, values, and commitment to patient-focused healthcare in Khulna.",
};

export default function AboutPage() {
  return (
    <main>     

      <AboutHero />

      <AboutIntroduction />

      <AboutStatistics />

      <AboutHighlights />

      <AboutFacilities />

      <AboutMissionVision />

      <AboutCoreValues />

      <AboutWhyChooseUs />

      <AboutServices />

      <AboutCommitment />

      <AboutCTA />


    </main>
  );
}


