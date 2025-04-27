import React from "react";
import { Sparkles, Users, Coins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import t from "../../messages/uk";

const BusinessSection = () => {
  return (
    // <div className="flex flex-col gap-16 w-full text-white">
    //   <section className="w-full bg-[url('/images/bitcoin.jpg')] py-24 px-6 flex flex-col items-center text-center">
    //     <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
    //       {t("title")}
    //     </h1>
    //     <p className="text-lg md:text-xl max-w-2xl text-white">
    //       {t("heroDescription")}
    //     </p>
    //   </section>

    <section className="w-full bg-[#f6f6f6] text-gray-800 mb-[30px]">
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
            {t.businessSection.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
            {t.businessSection.heroDescription}
          </p>
        </div>
      </div>

      <section className="w-full px-2 max-w-6xl mx-auto mt-[50px]">
        <div className="space-y-8">
          {/* Section 2 */}
          <div className="flex items-center gap-2 text-[#5fbdcf] text-2xl font-semibold">
            <Users className="w-6 h-6 " />
            <h2>{t.businessSection.sections.section2.title}</h2>
          </div>
          <Card>
            <CardContent className="space-y-4 pt-6 text-black">
              <p>{t.businessSection.sections.section2.description}</p>
              <p>
                <strong>
                  {t.businessSection.sections.section2.invitationCodeSystem}
                </strong>
              </p>
              <p>{t.businessSection.sections.section2.referrerIncome}</p>
              <p>
                <strong>
                  {
                    t.businessSection.sections.section2.referralProgram
                      .generation6
                  }
                </strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  {
                    t.businessSection.sections.section2.referralProgram
                      .generation1
                  }
                </li>
                <li>
                  {
                    t.businessSection.sections.section2.referralProgram
                      .generation2
                  }
                </li>
                <li>
                  {
                    t.businessSection.sections.section2.referralProgram
                      .generation3
                  }
                </li>
                <li>
                  {
                    t.businessSection.sections.section2.referralProgram
                      .generation4
                  }
                </li>
                <li>
                  {
                    t.businessSection.sections.section2.referralProgram
                      .generation5
                  }
                </li>
                <li>
                  {
                    t.businessSection.sections.section2.referralProgram
                      .generation6to1
                  }
                </li>
              </ul>
              <p>
                <strong>
                  {
                    t.businessSection.sections.section2.bonusForDeposit
                      .generation4
                  }
                </strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  {
                    t.businessSection.sections.section2.bonusForDeposit
                      .generation1
                  }
                </li>
                <li>
                  {
                    t.businessSection.sections.section2.bonusForDeposit
                      .generation2
                  }
                </li>
                <li>
                  {
                    t.businessSection.sections.section2.bonusForDeposit
                      .generation3
                  }
                </li>
              </ul>
              <p>
                <strong>
                  {t.businessSection.sections.section2.qualification}
                </strong>
              </p>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <div className="flex items-center gap-2 text-[#5fbdcf] text-2xl font-semibold">
            <Coins className="w-6 h-6" />
            <h2>{t.businessSection.sections.section3.title}</h2>
          </div>
          <Card>
            <CardContent className="space-y-4 pt-6 text-black">
              <p>{t.businessSection.intro}</p>

              <p>
                <strong>{t.businessSection.stakeTitle}</strong>
                <br />
                {t.businessSection.stakeText}
              </p>

              <p>{t.businessSection.unstakeText}</p>

              <p>
                <strong>{t.businessSection.rewardsTitle}</strong>
                <br />
                {t.businessSection.rewardsText}
              </p>

              <p>{t.businessSection.sections.section3.description}</p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>
                    {t.businessSection.sections.section3.stakingSAT}
                  </strong>
                </li>
                <li>
                  <strong>
                    {t.businessSection.sections.section3.earlyCompletion}
                  </strong>
                </li>
              </ul>
              <p className="text-center">
                <strong>
                  {t.businessSection.sections.section3.interestRates.apr}
                </strong>
              </p>
              <table className="w-1/2 mx-auto text-left border mt-4 border-collapse">
                <thead>
                  <tr className="bg-blue-50 text-black">
                    <th className="p-2 border">
                      {t.businessSection.sections.section3.interestRates.amount}
                    </th>
                    <th className="p-2 border">
                      {t.businessSection.sections.section3.interestRates.apr}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-blue-50 text-black">
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
              <p>{t.businessSection.sections.section3.userChoice}</p>
              <div className="bg-blue-50 border border-blue-200 text-blue-800 text-base md:text-lg p-4 rounded-xl shadow-sm">
                {t.businessSection.boostInfo}
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <div className="flex items-center gap-2 text-[#5fbdcf] text-2xl font-semibold">
            <Sparkles className="w-6 h-6" />
            <h2>{t.businessSection.sections.section4.title}</h2>
          </div>
          <Card>
            <CardContent className="space-y-4 pt-6 text-black">
              <p>{t.businessSection.sections.section4.description}</p>
              <ul className="list-disc list-inside ml-4">
                <li>{t.businessSection.sections.section4.bonus}</li>
                <li>{t.businessSection.sections.section4.S1}</li>
                <li>{t.businessSection.sections.section4.referrerIncome}</li>
              </ul>
              <p>
                <strong>
                  {t.businessSection.sections.section4.monthlyIncome}
                </strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>{t.businessSection.sections.section4.S2}</li>
                <li>{t.businessSection.sections.section4.monthlyIncomeS2}</li>
              </ul>
              <p>{t.businessSection.sections.section4.growthToS4}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border border-blue-400 rounded-2xl mt-10 p-5 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100 max-w-3xl mx-auto text-left shadow-md">
        <h2 className="text-2xl font-bold">{t.homePage.inviteTitle}</h2>
        <p>{t.homePage.inviteDescription1}</p>
        <p>{t.homePage.inviteDescription2}</p>
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
            {t.homePage.registrationDocs}
          </a>
        </p>
        <p>{t.homePage.inviteDescription3}</p>
        <p>{t.homePage.inviteDescription4}</p>
        <p className="font-semibold">{t.homePage.inviteClosing}</p>
        <p className="text-sm text-gray-500">
          #криптовалюта #крипта #crypt #USDT #SAT #SpaceAI #Space_AI
        </p>
      </section>
    </section>
  );
};

export default BusinessSection;
