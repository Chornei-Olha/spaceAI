import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
import Image from "next/image"; // Import the Image component

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.aboutTitle;

  return {
    title,
  };
}

const DocumentsSection = () => {
  const t = useTranslations("DocumentsSection");

  return (
    <section className="w-full bg-[#f6f6f6] text-gray-800">
      {/* 🔥 Banner */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/bitcoin.jpg"
          alt="Team Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
            {t("heroDescription")}
          </p>
        </div>
      </div>

      {/* Full custom content section */}
      <section className="w-full px-6 pt-7 max-w-6xl mx-auto space-y-12 text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{t("sectionTitle")}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>{t("item1Title")}</strong> {t("item1Text")}{" "}
                <a
                  href="https://abk.spaios.com/config/PDF11.pdf"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {t("item1Link")}
                </a>
                .
              </li>
              <li>
                <strong>{t("item2Title")}</strong>{" "}
                <a
                  href="https://abk.spaios.com/config/PDF22.pdf"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {t("item2Link")}
                </a>
                .
              </li>
              <li>
                <strong>{t("item3Title")}</strong> {t("item3Text")}{" "}
                <a
                  href="https://abk.spaios.com/config/PDF33.pdf"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {t("item3Link")}
                </a>
                .
              </li>
            </ul>
          </div>
          {/* Updated Image Component */}
          <div className="w-full">
            <Image
              src="/images/IMG_20250306_234850_829.jpg"
              alt="Документи компанії"
              width={600} // Specify the width of the image
              height={400} // Specify the height of the image
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="w-full px-6 pt-20 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t("futureTitle")}</h2>
        <p className="text-gray-600">{t("futureText")}</p>
      </section>
    </section>
  );
};

export default DocumentsSection;
