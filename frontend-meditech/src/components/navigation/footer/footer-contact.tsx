
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export function FooterContact() {
  return (
    <div>
      <h3 className="mb-5 font-semibold text-white">
        Contact Information
      </h3>

      <ul className="space-y-4 text-sm text-slate-300">
        <li className="flex gap-3">
          <MapPin className="shrink-0 text-teal-400" size={18} />
          <a
            href="https://maps.app.goo.gl/UiF6FAjbtVwmVzcp7"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-teal-400"
          >
          <span>
            23 Shamsur Rahman Road, 
            <br />
            Santidham more,
            <br />
             Khulna, Bangladesh
          </span>
          </a>
        </li>

        <li className="flex gap-3">
          <Phone className="shrink-0 text-teal-400" size={18} />
          <a href="tel:+8801827055040">
            +880 1827-055-040
          </a>
        </li>

        <li className="flex gap-3">
          <Mail className="shrink-0 text-teal-400" size={18} />
          <a href="mailto:info@example.com">
            info@meditech.com
          </a>
        </li>

        <li className="flex gap-3">
          <Clock className="shrink-0 text-teal-400" size={18} />
          <span>
            Opening Hours: Every day, 8:00 AM – 10:00 PM.
          </span>
        </li>
      </ul>
    </div>
  );
}
