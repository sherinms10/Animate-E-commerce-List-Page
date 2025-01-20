
import React, { useState } from "react";

const Filter = ({ onFilterChange, onSortChange }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = ["Electronics", "Clothing", "Home Appliances"];
  const priceRanges = ["Under ₹150", "₹150 - ₹500", "Above ₹500"];
  const sortingOptions = ["Price: Low to High", "Price: High to Low"];

  const handleFilterToggle = () => setIsFilterOpen(!isFilterOpen);
  const handleSortToggle = () => setIsSortOpen(!isSortOpen);

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
    setIsFilterOpen(false); 
  };

  const handleSortClick = (sort) => {
    onSortChange(sort);
    setIsSortOpen(false);
  };

  return (
    <div className="flex justify-end items-center mb-6 bg-white p-4 rounded shadow">
    
      <div className="relative">
        <button
          onClick={handleFilterToggle}
          className="px-4 py-2 bg-blue-500 mr-5 text-white rounded hover:bg-blue-600 transition"
        >
          Filter
        </button>
        {isFilterOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-48 z-10">
            <ul className="divide-y divide-gray-200">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {category}
                </li>
              ))}
              {priceRanges.map((range) => (
                <li
                  key={range}
                  onClick={() => handleFilterClick(range)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {range}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      
      <div className="relative">
        <button
          onClick={handleSortToggle}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Sort
        </button>
        {isSortOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-48 z-10">
            <ul className="divide-y divide-gray-200">
              {sortingOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSortClick(option)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
