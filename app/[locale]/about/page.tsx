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

const AboutPage = () => {
  const t = useTranslations("AboutPage");

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
      <section className="w-full px-6 max-w-7xl mx-auto space-y-12 text-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Space AI Investments Limited</h2>
            <p>{t("companyParagraph1")}</p>
            <p>{t("companyParagraph2")}</p>
          </div>
          <img
            src="/images/IMG_20250410_173212_737.jpg"
            alt="Про компанію"
            className="rounded-2xl shadow-md w-full"
          />
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
          <img
            src="/images/IMG-20250331-WA0172.jpg"
            alt="AI Logic"
            className="rounded-2xl shadow-md w-full"
          />
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

          <img
            src="/images/IMG-20250320-WA0051.jpg"
            alt="Social Impact"
            className="rounded-2xl shadow-md w-auto max-h-[600px]"
          />
        </div>
      </section>

      {/* Final Message */}
      <section className="w-full px-6 pb-20 text-center max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t("futureTogetherTitle")}</h2>
        <p className="text-gray-600">{t("futureTogetherText")}</p>
      </section>
    </div>
  );
};

export default AboutPage;
