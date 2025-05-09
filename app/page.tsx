import Image from "next/image";
import Link from "next/link";
import t from "../messages/uk";

export default function Home() {
  return (
    <section className="w-full bg-[#f6f6f6] text-gray-800 mb-[30px] space-y-20">
      {/* 🔥 Banner */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/cripta.jpg"
          alt="Team Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            {t.homePage.title}
          </h1>
        </div>
      </div>

      {/* Секция без картинки */}
      <section className="space-y-4 text-base sm:text-lg leading-relaxed mx-auto">
        <p>{t.homePage.text1}</p>
        <p>{t.homePage.text2}</p>
      </section>

      {/* Контрастный блок */}
      <section className="border border-gray-300 rounded-xl p-8 shadow-lg bg-white dark:bg-zinc-900 dark:border-zinc-700 max-w-4xl mx-auto">
        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-center">
          <p>
            {t.homePage.text3} <strong>Space AI</strong>.
          </p>
          <p>{t.homePage.text4}</p>
        </div>
      </section>

      {/* Секция с картинкой слева */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/IMG-20250409-WA0072.jpg"
            alt="NFT market"
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-base sm:text-lg leading-relaxed">
          <p>{t.homePage.text5}</p>
          <p>{t.homePage.text6}</p>
          <p>{t.homePage.text7}</p>
        </div>
      </section>

      {/* Блок без картинки */}
      <section className="space-y-4 text-base sm:text-lg leading-relaxed mx-auto">
        <p>
          {t.homePage.text8} <strong>Space AI</strong> — {t.homePage.text9}{" "}
          <a
            href="https://www.spaios.us/"
            target="_blank"
            className="text-blue-600 underline"
          >
            www.spaios.us
          </a>
        </p>
        <p>
          {t.homePage.text10}{" "}
          <strong>
            <Link
              href={"/team"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600"
            >
              <strong>{t.homePage.text11}</strong>
            </Link>
          </strong>
          !
        </p>
      </section>

      {/* Call to Action */}
      <section className="border border-blue-400 rounded-2xl p-10 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100 max-w-3xl mx-auto text-center shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          {t.homePage.callToActionTitle}
        </h2>
        <p className="text-lg sm:text-xl">{t.homePage.callToActionText}</p>
      </section>

      {/* Секция с картинкой справа */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/IMG_20250306_202144_849.png"
            alt="Web3 platform"
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-base sm:text-lg leading-relaxed">
          <p>
            <strong>Space AI</strong> — {t.homePage.text12}
          </p>
          <p>
            <strong>{t.homePage.text13}</strong> {t.homePage.text14}
          </p>
          <p>
            {t.homePage.text15}{" "}
            <a
              href="https://www.spaios.us/"
              target="_blank"
              className="text-blue-600 underline"
            >
              www.spaios.us
            </a>{" "}
            | {t.homePage.text16}{" "}
            <Link
              href={"/team"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600"
            >
              <strong>{t.homePage.text11}</strong>
            </Link>
            .
          </p>
        </div>
      </section>
    </section>
  );
}
