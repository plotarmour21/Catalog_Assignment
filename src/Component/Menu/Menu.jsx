import { useState } from "react";
import Summary from "./Summary";
import CryptoChart from "../Chart/CryptoChart";
import Statistics from "./Statistic";
import Analysis from "./Analysis";
import Settings from "./Settings";

export default function Menu() {
  const [activeItem, setActiveItem] = useState("Chart");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
   <nav className="max-w-[1000px] w-full h-[43px] mt-5 absolute top-[190px] left-[60px] z-50">

        <div>
          <ul className="flex border-b border-gray-200 font-circular">
            <li>
              <button
                className={`px-3 py-2 text-[18px] font-medium ${
                  activeItem === "Summary"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleClick("Summary")}
              >
                Summary
              </button>
            </li>
            <li>
              <button
                className={`px-3 py-2 text-[18px] font-medium ${
                  activeItem === "Chart"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleClick("Chart")}
              >
                Chart
              </button>
            </li>
            <li>
              <button
                className={`px-3 py-2 text-[18px] font-medium ${
                  activeItem === "Statistics"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleClick("Statistics")}
              >
                Statistics
              </button>
            </li>
            <li>
              <button
                className={`px-3 py-2 text-[18px] font-medium ${
                  activeItem === "Analysis"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleClick("Analysis")}
              >
                Analysis
              </button>
            </li>
            <li>
              <button
                className={`px-3 py-2 text-[18px] font-medium ${
                  activeItem === "Settings"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleClick("Settings")}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mt-5">
        {activeItem === "Summary" && <Summary />}
        {activeItem === "Chart" && <CryptoChart />}
        {activeItem === "Statistics" && <Statistics />}
        {activeItem === "Analysis" && <Analysis />}
        {activeItem === "Settings" && <Settings />}
      </div>
    </div>
  );
}
