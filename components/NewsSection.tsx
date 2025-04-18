// components/NewsSection.tsx
import Image from "next/image";

type NewsItem = {
  title: string;
  description: string;
  image: string;
  date?: string;
};

type NewsSectionProps = {
  news: NewsItem[];
};

const NewsSection = ({ news }: NewsSectionProps) => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Последние новости
        </h2>
        {news.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="w-full md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 space-y-3">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
