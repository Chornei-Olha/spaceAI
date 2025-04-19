"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import TeamCarousel from "@/components/ui/TeamCarousel";

const teamMembers = [
  {
    name: "Віталій",
    image: "/images/team/vitaliyCut.jpg",
    telegram: "https://t.me/Vitalii_Rudenko",
    website:
      "https://app.spaceaius.com/#/pages/login/login?invitationCode=2094014634",
  },
  {
    name: "Софія",
    image: "/images/team/sofiya.jpg",
    telegram: "https://t.me/sofia_rudenko",
    website:
      "https://app.spaceaius.com/#/pages/login/login?invitationCode=4082380296",
  },
  {
    name: "Артем",
    image: "/images/team/ArtemCut.jpg",
    telegram: "https://t.me/AhillesAA",
    website:
      "https://app.spaceaius.com/#/pages/login/login?invitationCode=8471200600",
  },
  {
    name: "Тетяна",
    image: "/images/team/tetyanaCut.jpg",
    telegram: "https://t.me/Tani_Happy",
    website:
      "https://app.spaceaius.com/#/pages/login/login?invitationCode=1788578427",
  },
  {
    name: "Володимир",
    image: "/images/team/volodimirCut.jpg",
    telegram: "https://t.me/Vokodko",
    website:
      "https://app.spaceaius.com/#/pages/login/login?invitationCode=6682176310",
  },
  {
    name: "Євген",
    image: "/images/team/evgen.jpg",
    telegram: "https://t.me/evgen3217",
    website:
      "https://app.spaceaius.com/#/pages/login/login?invitationCode=5102408827",
  },
];

const TeamSection = () => {
  const t = useTranslations("Team");

  return (
    <section className="w-full bg-white text-gray-800 mb-[30px]">
      {/* 🔥 Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/team/banner.jpg"
          alt="Team Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            {t("bannerTitle")}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
            {t("bannerSubtitle")}
          </p>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-14">
          <div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t("intro")}
              <br />
              <span className="font-semibold text-gray-800 block mt-2">
                {t("welcome")}
              </span>
            </p>
          </div>

          <div className="text-left sm:text-center max-w-3xl mx-auto space-y-6 text-gray-600 text-base sm:text-lg">
            <p>{t("diverseTeam")}</p>
            <p>{t("invitation")}</p>
            <p>
              <span className="font-semibold text-gray-800">
                {t("whatNeededTitle")}
              </span>
              <br />
              {t("whatNeededDesc")}
            </p>
            <p>{t("newsAndBonus")}</p>
            <p className="font-semibold text-purple-300">{t("finalNote")}</p>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-500 pt-10">
            {t("teamTitle")}
          </h3>
        </div>
      </div>

      <div className="mt-12 max-w-6xl mx-auto px-4">
        <TeamCarousel teamMembers={teamMembers} />
      </div>
    </section>
  );
};

export default TeamSection;
