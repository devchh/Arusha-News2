// src/app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Article from "../../pages/api/Articles"

// Sample articles data
const initialArticles = [
  {
    id: 1,
    title: "Politics Article 1",
    content: "Content for politics article 1...",
    tags: ["Politics"],
  },
  {
    id: 2,
    title: "Sports Article 1",
    content: "Content for sports article 1...",
    tags: ["Sports"],
  },
  {
    id: 3,
    title: "Entertainment Article 1",
    content: "Content for entertainment article 1...",
    tags: ["Entertainment"],
  },
  {
    id: 4,
    title: "Politics and Sports Article",
    content: "Content for a politics and sports article...",
    tags: ["Politics", "Sports"],
  },
  {
    id:5,
    title:"Business",
    tags: ["Business"],
  },
];

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter articles based on selected tag
  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;

  return (
    <>
      {/* Main content of the page */}
      <div className="flex flex-col items-center justify-start h-screen">
        {/* Title */}
        <h1 className="text-8xl text-center my-4 font-Averia Serif Libre">
          Arusha News
        </h1>

        {/* Navigation Bar */}
        <nav className="w-full shadow-md my-6 text-center">
          <div className="container mx-auto flex justify-center py-4">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#"
                  onClick={() => setSelectedTag(null)}
                  className="text-gray-700 hover:text-gray-900"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setSelectedTag("Politics")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Politics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setSelectedTag("Business")}
                  className="text-gray-700 hover:text-gray-900"
                  >
                    Business
                  </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setSelectedTag("Sports")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setSelectedTag("Entertainment")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Entertainment
                </Link>
              </li>
              <li>
              <input type="text" placeholder="Search.."></input>
              </li>
            </ul>
          </div>
        </nav>

        {/* News Articles Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-4">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
