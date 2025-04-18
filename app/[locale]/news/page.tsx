import NewsSection from "@/components/NewsSection";
import { useTranslations } from "next-intl";

export default function NewsPage() {
  const t = useTranslations("NewsSection");

  const newsData = [
    {
      title: t("news1.title"),
      description: t("news1.description"),
      image: "/images/news1.jpg",
      date: "19 квітня 2025",
    },
  ];

  return (
    <main>
      {/* другие секции */}
      <NewsSection news={newsData} />
    </main>
  );
}
