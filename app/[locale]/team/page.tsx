import Image from "next/image";
import TeamCarousel from "@/components/ui/TeamCarousel";

const teamMembers = [
  {
    name: "Олег Сидоренко",
    image: "/team/oleg.jpg",
    telegram: "https://t.me/Vitalii_Rudenko",
    website: "https://andrey.dev",
  },
  {
    name: "Наталія Іваненко",
    image: "/team/natalia.jpg",
    telegram: "https://t.me/sofia_rudenko",
    website: "https://andrey.dev",
  },
  {
    name: "Андрій Смолій",
    image: "/team/andriy.jpg",
    telegram: "https://t.me/AhillesAA",
    website: "https://andrey.dev",
  },
  {
    name: "Світлана Левченко",
    image: "/team/svitlana.jpg",
    telegram: "https://t.me/Tani_Happy",
    website: "https://andrey.dev",
  },
  {
    name: "Іван Петров",
    image: "/team/ivan.jpg",
    telegram: "https://t.me/Vokodko",
    website: "https://andrey.dev",
  },
  {
    name: "Марія Коваль",
    image: "/team/maria.jpg",
    telegram: "https://t.me/evgen3217",
    website: "https://andrey.dev",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* 🔥 Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/team/banner.jpg" // <-- Подставь сюда своё изображение в /public/team/banner.jpg
          alt="Team Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Об&apos;єднані однією метою
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
            Наша команда — ваш фундамент для впевненого старту
          </p>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-14">
          {/* Заголовок */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-purple-600 mb-6">
              Наша команда
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Ви хочете досягти успіху в криптовалюті? Ви шукаєте шляхи, як це
              зробити правильно?
              <br />
              <span className="font-semibold text-gray-800 block mt-2">
                Тоді ви в правильному місці та в правильний час! Вітаємо вас,
                наші нові партнери!
              </span>
            </p>
          </div>

          {/* Основний текст */}
          <div className="text-left sm:text-center max-w-3xl mx-auto space-y-6 text-gray-600 text-base sm:text-lg">
            <p>
              У нашій дружній та великій команді — люди різних фахових
              спеціальностей: інженери, лікарі, військові, бізнесмени, вчителі.
              Молоді, середнього та старшого віку. Жодних обмежень!
            </p>
            <p>Ми запрошуємо всіх приєднуватися та отримувати прибутки!</p>
            <p>
              <span className="font-semibold text-gray-800">
                Що для цього потрібно?
              </span>
              <br />
              Написати одному з наших лідерів, отримати коротку інструкцію та
              допомогу — як створити свій особистий Кабінет. Розпочати
              інвестування та отримувати прибутки.
            </p>
            <p>
              Цікавтесь новинами компанії. При бажанні — залучайте партнерів до
              бізнесу та отримуйте фінансові бонуси.
            </p>
            <p className="font-semibold text-purple-300">
              Звертайтеся з будь-яких питань до членів нашої команди!
              Долучайтеся — ми щиро вам раді. Разом зробимо життя кращим!
            </p>
          </div>

          {/* Підзаголовок перед фото/картками */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-yellow-500 pt-10">
            Наша чудова професійна команда:
          </h3>
        </div>
      </div>

      {/* 👥 Carousel */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <TeamCarousel teamMembers={teamMembers} />
      </div>
    </section>
  );
};

export default TeamSection;
