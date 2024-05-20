"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import quabbinThumbnail from "@/public/quabbinThumbnail.png";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-16 w-full z-30 sticky top-0 flex items-center bg-orange-950">
      <div className="px-10">
        <Image src={quabbinThumbnail} alt="Logo" />
      </div>
      <Link
        className={`px-5 link ${pathname === "/" ? "underline" : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`px-5 link ${pathname === "/Stats" ? "underline" : ""}`}
        href="/Stats"
      >
        Stats
      </Link>
      <Link
        className={`px-5 link ${
          pathname === "/Spreadsheet" ? "underline" : ""
        }`}
        href="/Spreadsheet"
      >
        Spreadsheet
      </Link>
    </nav>
  );
}
