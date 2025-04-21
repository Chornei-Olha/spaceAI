import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image"; // Импортируем компонент Image
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

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return (
    <section className="w-full bg-[#f6f6f6] text-gray-800 mb-[30px] space-y-20">
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
      <section className="w-full px-6 max-w-7xl mx-auto space-y-12 text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Space AI Investments Limited</h2>
            <p>{t("companyParagraph1")}</p>
            <p>{t("companyParagraph2")}</p>
          </div>
          <div className="w-full">
            <Image
              src="/images/IMG_20250410_173212_737.jpg"
              alt="Про компанію"
              width={800} // Ширина изображения
              height={500} // Высота изображения
              className="rounded-2xl shadow-md w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("howTitle")}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("howList1")}</li>
              <li>{t("howList2")}</li>
              <li>{t("howList3")}</li>
              <li>{t("howList4")}</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("refTitle")}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t("refList1")}</li>
              <li>{t("refList2")}</li>
              <li>{t("refList3")}</li>
            </ul>
          </div>
        </div>

        {/* Новая секция о розподілі прибутку та доходах команд */}
        <div className="w-full border border-gray-300 rounded-xl p-6 shadow-sm bg-gray-50 space-y-4">
          <h2 className="text-2xl font-bold mb-4">{t("incomeTitle")}</h2>
          <p>{t("incomeDescription")}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>{t("incomeUserProfitTitle")}:</strong>{" "}
              {t("incomeUserProfitText")}
            </li>
            <li>
              <strong>{t("incomeReferralBonusTitle")}:</strong>{" "}
              {t("incomeReferralBonusText")}
            </li>
            <li>
              <strong>{t("incomeTeamBonusTitle")}:</strong>{" "}
              {t("incomeTeamBonusText")}
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">{t("teamGrowthTitle")}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>{t("teamGrowthS1")}</li>
            <li>{t("teamGrowthS2")}</li>
            <li>{t("teamGrowthS3")}</li>
            <li>{t("teamGrowthS4")}</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">
            {t("weeklySalaryTitle")}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>{t("weeklySalaryS1")}</li>
            <li>{t("weeklySalaryS2")}</li>
            <li>{t("weeklySalaryS3")}</li>
            <li>{t("weeklySalaryS4")}</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">
            {t("monthlySalaryTitle")}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>{t("monthlyInvestors50")}</li>
            <li>{t("monthlyInvestors200")}</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <Image
              src="/images/IMG-20250331-WA0172.jpg"
              alt="AI Logic"
              width={800} // Ширина изображения
              height={500} // Высота изображения
              className="rounded-2xl shadow-md w-full"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{t("aiLogicTitle")}</h2>
            <p>{t("aiLogicParagraph1")}</p>
            <p>{t("aiLogicParagraph2")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 flex flex-col gap-[50px]">
            <div>
              <h2 className="text-2xl font-bold">{t("socialImpactTitle")}</h2>
              <p>{t("socialImpactText")}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t("msbTitle")}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{t("msb1")}</li>
                <li>{t("msb2")}</li>
                <li>{t("msb3")}</li>
                <li>{t("msb4")}</li>
                <li>{t("msb5")}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t("futurePlansTitle")}</h2>
              <p>{t("futurePlansText")}</p>
            </div>
          </div>

          <div className="w-full">
            <Image
              src="/images/IMG-20250320-WA0051.jpg"
              alt="Social Impact"
              width={800} // Ширина изображения
              height={600} // Высота изображения
              className="rounded-2xl shadow-md w-auto max-h-[600px]"
            />
          </div>
        </div>
      </section>

      <section className="border border-blue-400 rounded-2xl p-5 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100 max-w-3xl mx-auto text-left shadow-md">
        <h2 className="text-2xl font-bold">{t("inviteTitle")}</h2>
        <p>{t("inviteDescription1")}</p>
        <p>{t("inviteDescription2")}</p>
        <p>
          <a
            href="https://www.facebook.com/groups/spaceaicrypt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Facebook Group
          </a>{" "}
          |{" "}
          <a
            href="https://t.me/Space_AI_world"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Telegram
          </a>{" "}
          |{" "}
          <a
            href="https://www.spaios.us/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {t("registrationDocs")}
          </a>
        </p>
        <p>{t("inviteDescription3")}</p>
        <p>{t("inviteDescription4")}</p>
        <p className="font-semibold">{t("inviteClosing")}</p>
        <p className="text-sm text-gray-500">
          #криптовалюта #крипта #crypt #USDT #SAT #SpaceAI #Space_AI
        </p>
      </section>

      {/* Final Message */}
      <section className="w-full px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t("futureTogetherTitle")}</h2>
        <p className="text-gray-600">{t("futureTogetherText")}</p>
      </section>
    </section>
  );
};

export default AboutPage;
