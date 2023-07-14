import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const totalPages = 3;

const Pagination = () => {
  return (
    <div className="flex justify-center align-middle">
      <select className="mx-2 pl-1 w-[125px] text-[#1C1C1C] bg-white border border-gray-300 rounded-md py-2 pr-3 leading-tight focus:outline-none focus:border-blue-500">
        <option value="Show10">Show 10</option>
      </select>

      <ul className="flex">
        <li>
          <button
            type="button"
            className="border border-gray-300 focus:text-gray-500 h-full px-3 py-1 transition-colors duration-300 focus:bg-gray-200"
          >
            <FaChevronLeft />
          </button>
        </li>
        <ul className="flex">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <button
                type="button"
                className="border border-gray-300 focus:text-gray-500 h-full px-3 py-1 transition-colors duration-300 focus:bg-gray-200"
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <li>
          <button
            type="button"
            className="border border-gray-300 focus:text-gray-500 h-full px-3 py-1 transition-colors duration-300 focus:bg-gray-200 "
          >
            <FaChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
