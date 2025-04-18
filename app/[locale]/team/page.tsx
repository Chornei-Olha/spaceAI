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
    <section className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
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
            Об'єднані однією метою
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
            Наша команда — ваш фундамент для впевненого старту
          </p>
        </div>
      </div>

      {/* 💬 Intro Text */}
      <div className="py-24 px-4 md:px-8 max-w-5xl mx-auto space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
          Наша команда
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-white/90">
          Ви хочете досягти успіху в криптовалюті? Ви шукаєте шляхи як це
          зробити правильно? <br />
          <span className="font-semibold text-white">
            Тоді ви в правильному місці та в правильний час! Вітаємо вас, наші
            нові партнери!
          </span>
        </p>
        <div className="text-left md:text-center text-base md:text-lg space-y-4 max-w-3xl mx-auto text-white/80">
          <p>
            В нашій дружній та великій команді люди різних фахових
            спеціальностей: інженери, лікарі, військові, бізнесмени, вчителі.
            Молоді, люди середнього та старшого віку. Не має жодних обмежень!
          </p>
          <p>Ми запрошуємо усіх приєднуватися та отримувати кошти!</p>
          <p>
            <strong>Що для цього треба?</strong>
            <br />
            Написати одному із наших лідерів, отримати коротку інструкцію та
            допомогу – як створити свій особистий Кабінет. Розпочати
            інвестування та отримувати прибутки у вигляді інвестицій!
          </p>
          <p>
            Цікавтесь новинами Компанії. При бажанні, залучайте партнерів до
            бізнесу, отримуючи від Компанії фінансові бонуси.
          </p>
          <p className="font-semibold text-purple-300">
            Звертайтеся по усім питанням до членів нашої Команди! Долучайтеся до
            нас! Ми щиро вам раді! Зробимо своє життя краще!
          </p>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold mt-10 text-yellow-400">
          Наша чудова професійна Команда:
        </h3>
      </div>

      {/* 👥 Carousel */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <TeamCarousel teamMembers={teamMembers} />
      </div>
    </section>
  );
};

export default TeamSection;
