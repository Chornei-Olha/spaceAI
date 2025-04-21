"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NewsItem {
  title: string;
  description: string;
  image: string;
  date: string;
}

const NewsSection = ({ news }: { news: NewsItem[] }) => {
  return (
    <section className="w-full max-w-6xl px-6 py-10 mx-auto space-y-12">
      {news.map((item, index) => (
        <NewsCard key={index} item={item} />
      ))}
    </section>
  );
};

const NewsCard = ({ item }: { item: NewsItem }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        width={1200}
        height={600}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-500">{item.date}</div>
        <h3 className="text-2xl font-bold">{item.title}</h3>
        <p className="whitespace-pre-line text-gray-700">
          {expanded
            ? item.description
            : item.description.slice(0, 200) +
              (item.description.length > 200 ? "..." : "")}
        </p>
        {item.description.length > 200 && (
          <button
            onClick={toggleExpanded}
            className="text-blue-600 hover:underline font-medium"
          >
            {expanded ? "Close ↖︎" : "More info ↘︎"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
