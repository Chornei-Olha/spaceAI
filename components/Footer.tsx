"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaFacebook, FaTelegram } from "react-icons/fa"; // Импортируем иконки

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gray-900 text-white pb-10 md:pb-0 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-0 pt-0">
        {/* Лого */}
        <div className="w-full flex justify-center md:justify-start">
          <Link href={`/${locale}/`} className="w-full">
            <Image
              src="/images/Logo.jpg"
              alt="Logo"
              width={400} // можно подогнать под нужный размер
              height={60}
              priority
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>

        {/* Слоган */}
        <div className="text-center">
          <p className="text-lg italic">&quot;{t("slogan")}&quot;</p>
        </div>

        {/* Контакты и соцсети */}
        <div className="text-center md:text-right space-y-4">
          {/* <p>📧 {t("email")}</p>
          <p>📍 {t("location")}</p> */}

          {/* Социальные иконки */}
          <div className="flex justify-center gap-6 mt-4">
            {/* Ссылка на Facebook */}
            <Link
              href="https://www.facebook.com/groups/cryptspaceai "
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook
                size={28}
                className="text-white hover:text-blue-500"
              />
            </Link>

            {/* Ссылка на Telegram */}
            <Link
              href="t.me/Space_AI_world  "
              target="_blank"
              aria-label="Telegram"
            >
              <FaTelegram
                size={28}
                className="text-white hover:text-blue-400"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
