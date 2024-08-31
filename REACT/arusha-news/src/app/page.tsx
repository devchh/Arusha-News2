
// import './globals.css'; // Ensure this imports your Tailwind CSS
// import React from "react";
// import Head from "next/head";

// src/app/page.tsx
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Main content of the page */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Title */}
        <h1 className="text-8xl text-center my-9 font-Averia Serif Libre">
          Arusha News
        </h1>

        {/* Navigation Bar */}
        <nav className="w-full bg-white shadow-md">
          <div className="container mx-auto flex justify-center py-4">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Politics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Sports
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Weekly Edition Selector */}
        <div className="my-6">
          <label htmlFor="edition" className="text-lg font-medium mr-2">
            Select Weekly Edition:
          </label>
          <select id="edition" className="p-2 border rounded-md">
            <option value="week1">Week 1</option>
            <option value="week2">Week 2</option>
            <option value="week3">Week 3</option>
          </select>
        </div>

        {/* News Articles Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-4">
          {/* Article 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Article Title 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
          </div>

          {/* Article 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Article Title 2</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
          </div>

          {/* Article 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Article Title 3</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the component as the default export
export default HomePage;
