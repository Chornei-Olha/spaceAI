import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

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
    <div className="flex flex-col gap-16 w-full">
      {/* Hero section */}
      <section className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300">
          {t("heroDescription")}
        </p>
      </section>

      {/* Full custom content section */}
      <section className="w-full px-6 max-w-6xl mx-auto space-y-12 text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Документи компанії</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Гарна репутація, підтверджена фактами:</strong> Офіс
                Державного секретаря штату Колорадо видав сертифікат факту
                доброї репутації про те що компанія створена відповідно до
                законодавства штату, дотримується вимог і має добру репутацію.{" "}
                <a
                  href="https://abk.spaios.com/config/PDF11.pdf"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Переглянути документ
                </a>
                .
              </li>
              <li>
                <strong>Свідоцтво про реєстрацію підприємства:</strong>{" "}
                <a
                  href="https://abk.spaios.com/config/PDF22.pdf"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Оригінал документу
                </a>
                .
              </li>
              <li>
                <strong>MSB ліцензія:</strong> Інформація про статус реєстрації
                MSB станом на 26.08.2024. Реєстрація компанії на сайті MSB
                Registrant Search не є схваленням чи підтвердженням державними
                органами.{" "}
                <a
                  href="https://abk.spaios.com/config/PDF33.pdf"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Оригінал документу
                </a>
                .
              </li>
            </ul>
          </div>
          <img
            src="/images/documents.jpg"
            alt="Документи компанії"
            className="rounded-2xl shadow-md w-full"
          />
        </div>
      </section>

      {/* Final Message */}
      <section className="w-full px-6 pb-20 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t("futureTitle")}</h2>
        <p className="text-gray-600">{t("futureText")}</p>
      </section>
    </div>
  );
};

export default DocumentsSection;
