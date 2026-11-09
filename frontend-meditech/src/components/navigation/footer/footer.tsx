
import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { FooterLinks } from "./footer-links";
import { FooterContact } from "./footer-contact";
import { FooterSocial } from "./footer-social";
import CurrentYear from "@/components/shared/current-year";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <Logo light />

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">
              Khulna Meditech Diagnostic & Consultation Center aims to provide
              quality healthcare and diagnostic
              services for everyone.
            </p>

            <div className="mt-6">
              <FooterSocial />
            </div>
          </div>

          <FooterLinks />

          <FooterContact />

        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row">

          <p>
            ©  <CurrentYear /> Khulna Meditech Diagnostic & Consultation Center.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
