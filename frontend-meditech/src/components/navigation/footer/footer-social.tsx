
import Link from "next/link";
import { FaceAngry, Inspect, JapaneseYenIcon } from "lucide-react";

export function FooterSocial() {
  const socials = [
    {
      name: "Facebook",
      href: "https://facebook.com/",
      icon: FaceAngry,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/",
      icon: Inspect,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/",
      icon: JapaneseYenIcon,
    },
  ];

  return (
    <div className="flex gap-3">
      {socials.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-teal-600"
        >
          <Icon size={18} />
        </Link>
      ))}
    </div>
  );
}
