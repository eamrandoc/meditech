import { ContactFAQ } from "@/features/contact/contact-faq";
import { ContactForm } from "@/features/contact/contact-form";
import { ContactHero } from "@/features/contact/contact-hero";
import { ContactInformation } from "@/features/contact/contact-information";
import { ContactLocation } from "@/features/contact/contact-location";



export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactInformation />

      <ContactForm />

      <ContactLocation />

      <ContactFAQ />
    </main>
  );
}
