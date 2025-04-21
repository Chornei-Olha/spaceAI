import NewsSection from "@/components/NewsSection";
import { useTranslations } from "next-intl";

export default function NewsPage() {
  const t = useTranslations("NewsSection");

  const newsData = [
    {
      title: t("news2.title"),
      description: t("news2.description"),
      image: "/images/IMG_20250331_145326_047.jpg", // Check if the image path is correct
      date: "21/04/2025",
    },
    {
      title: t("news1.title"),
      description: t("news1.description"),
      image: "/images/kripta.jpg", // Check if the image path is correct
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
