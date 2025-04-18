import NewsSection from "@/components/NewsSection";

const newsData = [
  {
    title: "Запуск нового продукта",
    description:
      "Мы рады представить вам нашу новую разработку, которая изменит рынок.",
    image: "/images/news1.jpg",
    date: "16 апреля 2025",
  },
  {
    title: "Наша команда на конференции",
    description:
      "Участвовали в IT-событии года и рассказали о будущем технологий.",
    image: "/images/news2.jpg",
    date: "10 апреля 2025",
  },
];

export default function NewsPage() {
  return (
    <main>
      {/* другие секции */}
      <NewsSection news={newsData} />
    </main>
  );
}
