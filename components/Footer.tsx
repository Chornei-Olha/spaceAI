"use client";

import Image from "next/image";
import Link from "next/link";
import t from "../messages/uk";
import { FaFacebook, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pb-10 md:pb-0 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-0 pt-0">
        {/* Лого */}
        <div className="w-full flex justify-center md:justify-start">
          <Link href="/" className="w-full">
            <Image
              src="/images/Logo.jpg"
              alt="Logo"
              width={400}
              height={60}
              priority
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>

        {/* Слоган */}
        <div className="text-center">
          <p className="text-lg italic">&quot;{t.footer.slogan}&quot;</p>
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
              href="https://t.me/Space_AI_world"
              target="_blank"
              aria-label="Telegram"
            >
              <FaTelegram
                size={28}
                className="text-white hover:text-blue-400"
              />
            </Link>
          </div>
          <div className="flex justify-center md:justify-end mt-4">
            <a target="_blank" href="https://mycounter.ua/">
              <img
                src="https://get.mycounter.ua/counter.php?id=176849"
                title="MyCounter - лічильник і статистика"
                alt="MyCounter"
                width="88"
                height="51"
                style={{ border: 0 }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
