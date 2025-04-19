"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-full border-b pr-4 flex justify-between items-center bg-[#210a36]">
      {/* 🔗 Логотип как ссылка на главную */}
      <Link href={`/${locale}/`} className="flex items-center">
        <Image
          src="/images/Logo.jpg"
          alt="Logo"
          width={200}
          height={40}
          priority
        />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-4 items-center text-lg text-white text-center">
        <Link href={`/${locale}/`}>{t("home")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
        <Link href={`/${locale}/documents`}>{t("documents")}</Link>
        <Link href={`/${locale}/business`}>{t("business")}</Link>
        <Link href={`/${locale}/team`}>{t("team")}</Link>
        <Link href={`/${locale}/news`}>{t("news")}</Link>

        <select
          value={locale}
          onChange={handleLanguageChange}
          className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
        >
          <option value="en">EN</option>
          <option value="uk">UK</option>
          <option value="ru">RU</option>
        </select>
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
          <Link href={`/${locale}/`} onClick={() => setIsOpen(false)}>
            {t("home")}
          </Link>
          <Link href={`/${locale}/about`} onClick={() => setIsOpen(false)}>
            {t("about")}
          </Link>
          <Link href={`/${locale}/documents`} onClick={() => setIsOpen(false)}>
            {t("documents")}
          </Link>
          <Link href={`/${locale}/business`} onClick={() => setIsOpen(false)}>
            {t("business")}
          </Link>
          <Link href={`/${locale}/team`} onClick={() => setIsOpen(false)}>
            {t("team")}
          </Link>
          <Link href={`/${locale}/news`} onClick={() => setIsOpen(false)}>
            {t("news")}
          </Link>
          <select
            value={locale}
            onChange={(e) => {
              handleLanguageChange(e);
              setIsOpen(false);
            }}
            className="mt-2 rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="uk">UK</option>
            <option value="ru">RU</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Navbar;
