import NewsSection from "@/components/NewsSection";
import { useTranslations } from "next-intl";

export default function NewsPage() {
  const t = useTranslations("NewsSection");

  const newsData = [
    {
      title: t("news1.title"),
      description: t("news1.description"),
      image: "/images/IMG_20250310_191501_742.png", // Check if the image path is correct
      date: "19/04/2025",
    },
  ];

  return (
    <main>
      {/* другие секции */}
      <NewsSection news={newsData} />
    </main>
  );
}
