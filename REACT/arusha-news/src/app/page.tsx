// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

// Sample articles data
const initialArticles = [
  {
    id: 1,
    title: "Officials working to restore Ngorongoro social services",
    content: `Government officials have started assessing the work involved in restoring key social services to several villages, as recently ordered by President Samia Suluhu Hassan when she halted what was seen as forced evictions of the indigenous Maasai in the Ngorongoro Crater. The Ngorongoro District Commissioner (DC), Col Wilson Sakulo, told ‘The Arusha News’ that officials, for example, have started inspecting blocked toilets and overflowing latrines in schools and health facilities with the intention of providing a conducive environment for human habitation...`,
    tags: ["Politics"],
  },
  {
    id: 2,
    title: "DR SAMIA CHARTS BOLD VISION FOR TANZANIA’S FUTURE",
    content: `
    President Samia Suluhu Hassan has outlined a bold vision for Tanzania’s future, calling for strategic investment, food security, and efficient management of public institutions.

    Speaking at the official opening of the second forum for Chairpersons of Board of Directors and CEOs of public institutions in Arusha, President Samia highlighted the critical importance of food security and strategic investments like the Mkulazi Sugar Factory, a collaboration between the National Social Security Fund (NSSF) and the Prison Corporation Sole (PCS), to ensure availability of food security.
  `,
    tags: ["Sports"],
  },
  {
    id: 3,
    title: "Arusha Dominates National Athletics Championships in Mwanza",
    content: `
      Arusha has asserted its dominance in athletics by retaining the national title with ten gold medals at the recently concluded National Athletics Championships in Mwanza. 
  
      Arusha athletes also brought home five silver and six bronze medals, maintaining their top position from last year’s championships in Morogoro. Secretary of the Arusha Athletics Association, Rogathi Akhwari, expressed his delight at the results, emphasizing the region’s continued supremacy. 
  
      "We are thrilled that our athletes performed exceptionally well in Mwanza," he stated. 
  
      Zanzibar Urban West claimed second position with an impressive haul of seven gold, three silver, and three bronze medals. The Coast Region secured third place with three gold and two silver medals.
    `,
    tags: ["Sports"], // Changed from ["Entertainment"] to ["Sports"] to better align with the article's content.
  },
  
  {
    id: 4,
    title: "Politics and Sports Article",
    content: "Content for a politics and sports article...",
    tags: ["Politics", "Sports"],
  },
  {
    id: 5,
    title: "Business Article 1",
    content: "Content for a business article...",
    tags: ["Business"],
  },
];

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter articles based on selected tag
  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;  // Fix: This line needed correction to ensure proper use of ternary operator

  return (
    <>
      {/* Main content of the page */}
      <div className="flex flex-col items-center justify-start min-h-screen py-4">
        {/* Title */}
        <h1 className="text-8xl text-center my-4 font-serif">
          <em text-sm>the</em> ARUSHA NEWS
        </h1>

        {/* Navigation Bar */}
        <nav className="w-full shadow-md my-6">
          <div className="container mx-auto flex justify-center py-4">
            <ul className="flex space-x-4">
              <li>
                <Link href="#" onClick={() => setSelectedTag(null)} className="text-gray-700 hover:text-gray-900">
                  All
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setSelectedTag("Politics")} className="text-gray-700 hover:text-gray-900">
                  Politics
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setSelectedTag("Business")} className="text-gray-700 hover:text-gray-900">
                  Business
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setSelectedTag("Sports")} className="text-gray-700 hover:text-gray-900">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setSelectedTag("Entertainment")} className="text-gray-700 hover:text-gray-900">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Search Bar */}
        <div className="w-full flex justify-center mb-8">
          <input type="text" placeholder="Search..." className="border p-2 rounded-md w-1/2" />
        </div>

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
