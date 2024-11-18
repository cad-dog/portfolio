"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex space-x-4">
        {links.map((link, index) => (
          <Link
            key={index}
            className={clsx("h-[26px] text-gray-500 hover:text-gray-100", {
              "border-b-2 border-gray-500 hover:border-gray-100":
                pathname === link.href,
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
