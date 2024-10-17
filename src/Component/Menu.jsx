import React from "react";

export default function Menu() {
  return (
    <nav className="w-[1000px] h-[43px] mt-5 ">
      <div>
        <ul className="flex border-b border-gray-200 font-circular">
          <li>
            <button className="px-3 py-2 font-medium text-gray-500 hover:text-gray-700 text-[18px]">
              Summary
            </button>
          </li>
          <li>
            <button className="px-3 py-2 text-[18px] font-medium text-blue-600 border-b-2 border-blue-600">
              Chart
            </button>
          </li>
          <li>
            <button className="px-3 py-2 text-[18px] font-medium text-gray-500 hover:text-gray-700">
              Statistics
            </button>
          </li>
          <li>
            <button className="px-3 py-2 text-[18px] font-medium text-gray-500 hover:text-gray-700">
              Analysis
            </button>
          </li>
          <li>
            <button className="px-3 py-2 text-[18px] font-medium text-gray-500 hover:text-gray-700">
              Settings
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
