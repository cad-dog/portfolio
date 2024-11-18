import Link from "next/link";
import NavLinks from "./nav-links";

export default function Navigation() {
  return (
    <div className="flex bg-slate-950 h-16 w-full px-4 py-1 items-center fixed">
      <Link
        className="inline-flex items-center border-2 border-gray-50 px-2 py-1 rounded-lg h-min hover:bg-slate-800"
        href="/"
      >
        CA
      </Link>
      <div className="mx-auto">
        <NavLinks />
      </div>
    </div>
  );
}
