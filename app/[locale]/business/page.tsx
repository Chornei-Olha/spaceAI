import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
import { Sparkles, Users, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.BusinessSection.title; // Получаем перевод для титула

  return {
    title,
  };
}

const BusinessSection = () => {
  const t = useTranslations("BusinessSection");

  return (
    <div className="flex flex-col gap-16 w-full text-white">
      <section className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-24 px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-white">
          {t("heroDescription")}
        </p>
      </section>

      <section className="w-full px-6 max-w-6xl mx-auto space-y-12">
        <div className="space-y-8">
          {/* Section 2 */}
          <div className="flex items-center gap-2 text-yellow-400 text-2xl font-semibold">
            <Users className="w-6 h-6" />
            <h2>{t("sections.section2.title")}</h2>
          </div>
          <Card>
            <CardContent className="space-y-4 pt-6 text-black">
              <p>{t("sections.section2.description")}</p>
              <p>
                <strong>{t("sections.section2.invitationCodeSystem")}</strong>
              </p>
              <p>{t("sections.section2.referrerIncome")}</p>
              <p>
                <strong>
                  {t("sections.section2.referralProgram.generation6")}
                </strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>{t("sections.section2.referralProgram.generation1")}</li>
                <li>{t("sections.section2.referralProgram.generation2")}</li>
                <li>{t("sections.section2.referralProgram.generation3")}</li>
                <li>{t("sections.section2.referralProgram.generation4")}</li>
                <li>{t("sections.section2.referralProgram.generation5")}</li>
                <li>
                  {t("sections.section2.referralProgram.generation6to10")}
                </li>
              </ul>
              <p>
                <strong>
                  {t("sections.section2.bonusForDeposit.generation4")}
                </strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>{t("sections.section2.bonusForDeposit.generation1")}</li>
                <li>{t("sections.section2.bonusForDeposit.generation2")}</li>
                <li>{t("sections.section2.bonusForDeposit.generation3")}</li>
              </ul>
              <p>
                <strong>{t("sections.section2.qualification")}</strong>
              </p>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <div className="flex items-center gap-2 text-green-400 text-2xl font-semibold">
            <Coins className="w-6 h-6" />
            <h2>{t("sections.section3.title")}</h2>
          </div>
          <Card>
            <CardContent className="space-y-4 pt-6 text-black">
              <p>{t("intro")}</p>

              <p>
                <strong>{t("stakeTitle")}</strong>
                <br />
                {t("stakeText")}
              </p>

              <p>{t("unstakeText")}</p>

              <p>
                <strong>{t("rewardsTitle")}</strong>
                <br />
                {t("rewardsText")}
              </p>

              <p>{t("sections.section3.description")}</p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>{t("sections.section3.stakingSAT")}</strong>
                </li>
                <li>
                  <strong>{t("sections.section3.earlyCompletion")}</strong>
                </li>
              </ul>
              <p>
                <strong>{t("sections.section3.interestRates.apr")}</strong>
              </p>
              <table className="w-full text-left border mt-4 border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-2 border">
                      {t("sections.section3.interestRates.amount")}
                    </th>
                    <th className="p-2 border">
                      {t("sections.section3.interestRates.apr")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 text-white">
                  <tr>
                    <td className="p-2 border">$100 - $999</td>
                    <td className="p-2 border">480%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">$1000 - $9999</td>
                    <td className="p-2 border">540%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">$10000 - $99999</td>
                    <td className="p-2 border">600%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">$100000+</td>
                    <td className="p-2 border">660%</td>
                  </tr>
                </tbody>
              </table>
              <p>{t("sections.section3.userChoice")}</p>
              <div className="bg-blue-50 border border-blue-200 text-blue-800 text-base md:text-lg p-4 rounded-xl shadow-sm">
                {t("boostInfo")}
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <div className="flex items-center gap-2 text-blue-400 text-2xl font-semibold">
            <Sparkles className="w-6 h-6" />
            <h2>{t("sections.section4.title")}</h2>
          </div>
          <Card>
            <CardContent className="space-y-4 pt-6 text-black">
              <p>{t("sections.section4.description")}</p>
              <ul className="list-disc list-inside ml-4">
                <li>{t("sections.section4.bonus")}</li>
                <li>{t("sections.section4.S1")}</li>
                <li>{t("sections.section4.referrerIncome")}</li>
              </ul>
              <p>
                <strong>{t("sections.section4.monthlyIncome")}</strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>{t("sections.section4.S2")}</li>
                <li>{t("sections.section4.monthlyIncomeS2")}</li>
              </ul>
              <p>{t("sections.section4.growthToS4")}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BusinessSection;
