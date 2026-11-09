
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Appointments", href: "/appointments" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Diagnostic Tests", href: "/tests" },
  { label: "Test Packages", href: "/packages" },
  { label: "Health Checkup", href: "/services" },
];

export function FooterLinks() {
  return (
    <>
      <div>
        <h3 className="mb-5 font-semibold text-white">
          Quick Links
        </h3>

        <ul className="space-y-3">
          {quickLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-slate-300 hover:text-teal-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-5 font-semibold text-white">
          Our Services
        </h3>

        <ul className="space-y-3">
          {services.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-slate-300 hover:text-teal-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
