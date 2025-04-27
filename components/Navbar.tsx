"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import t from "../messages/uk"; // Используем переводы из uk.ts

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#210a36]">
      <div className="max-w-7xl mx-auto pr-4 flex justify-between items-center ">
        {/* Логотип как ссылка на главную */}
        <Link href={"/"} className="flex items-center relative">
          <Image
            src="/images/Logo.jpg"
            alt="Logo"
            width={300}
            height={40}
            priority
            className="z-10"
          />
          {/* Псевдоэлемент для размытия нижнего края */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent blur-sm"></div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-4 items-center text-lg text-white text-center">
          <Link
            href={"/"}
            className="active:text-[#5fbdcf] hover:text-[#fd9443]"
          >
            {t.navbarLinks.home}
          </Link>
          <Link
            href={"/about"}
            className="active:text-[#5fbdcf] hover:text-[#fd9443]"
          >
            {t.navbarLinks.about}
          </Link>
          <Link
            href={"/documents"}
            className="active:text-[#5fbdcf] hover:text-[#fd9443]"
          >
            {t.navbarLinks.documents}
          </Link>
          <Link
            href={"/business"}
            className="active:text-[#5fbdcf] hover:text-[#fd9443]"
          >
            {t.navbarLinks.business}
          </Link>
          <Link
            href={"/news"}
            className="active:text-[#5fbdcf] hover:text-[#fd9443]"
          >
            {t.navbarLinks.news}
          </Link>
          <Link
            href={"/team"}
            className="active:text-[#5fbdcf] hover:text-[#fd9443]"
          >
            {t.navbarLinks.team}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 z-50 gap-4 md:hidden text-lg text-black">
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              {t.navbarLinks.home}
            </Link>
            <Link href={"/about"} onClick={() => setIsOpen(false)}>
              {t.navbarLinks.about}
            </Link>
            <Link href={"/documents"} onClick={() => setIsOpen(false)}>
              {t.navbarLinks.documents}
            </Link>
            <Link href={"/business"} onClick={() => setIsOpen(false)}>
              {t.navbarLinks.business}
            </Link>
            <Link href={"/news"} onClick={() => setIsOpen(false)}>
              {t.navbarLinks.news}
            </Link>
            <Link href={"/team"} onClick={() => setIsOpen(false)}>
              {t.navbarLinks.team}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
