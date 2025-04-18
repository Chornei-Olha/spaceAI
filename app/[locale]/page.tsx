import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full px-4 md:px-6 py-10 space-y-24">
      {/* Заголовок */}
      <section className="flex justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-10">
          {t("title")}
        </h1>
      </section>

      {/* Секция без картинки */}
      <section className="space-y-4 text-base sm:text-lg leading-relaxed mx-auto">
        <p>{t("text1")}</p>
        <p>{t("text2")}</p>
      </section>

      {/* Контрастный блок */}
      <section className="border border-gray-300 rounded-xl p-8 shadow-lg bg-white dark:bg-zinc-900 dark:border-zinc-700 max-w-4xl mx-auto">
        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-center">
          <p>
            {t("text3")} <strong>Space AI</strong>.
          </p>
          <p>{t("text4")}</p>
        </div>
      </section>

      {/* Секция с картинкой слева */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/nft-invest.jpg"
            alt="NFT market"
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-base sm:text-lg leading-relaxed">
          <p>{t("text5")}</p>
          <p>{t("text6")}</p>
          <p>{t("text7")}</p>
        </div>
      </section>

      {/* Блок без картинки */}
      <section className="space-y-4 text-base sm:text-lg leading-relaxed mx-auto">
        <p>
          {t("text8")} <strong>Space AI</strong> — {t("text9")}{" "}
          <a
            href="https://www.spaios.com/index.html"
            target="_blank"
            className="text-blue-600 underline"
          >
            www.spaios.com
          </a>
        </p>
        <p>
          {t("text10")} <strong>{t("text11")}</strong>!
        </p>
      </section>

      {/* Call to Action */}
      <section className="border border-blue-400 rounded-2xl p-10 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100 max-w-3xl mx-auto text-center shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Ви готові до фінансової революції?
        </h2>
        <p className="text-lg sm:text-xl">
          Переходьте на новий рівень інвестицій з криптовалютою і будьте у
          тренді!
        </p>
      </section>

      {/* Секция с картинкой справа */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/web3-platform.jpg"
            alt="Web3 platform"
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-base sm:text-lg leading-relaxed">
          <p>
            <strong>Space AI</strong> — {t("text12")}
          </p>
          <p>
            <strong>{t("text13")}</strong> {t("text14")}
          </p>
          <p>
            {t("text15")}{" "}
            <a
              href="https://www.spaios.com/index.html"
              target="_blank"
              className="text-blue-600 underline"
            >
              www.spaios.com
            </a>{" "}
            | {t("text16")} <strong>{t("text11")}</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
