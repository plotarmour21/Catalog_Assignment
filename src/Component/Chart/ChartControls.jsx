import React from "react";
import FullscreenIcon from "../icons/FullscreenIcon";
import CompareIcon from "../icons/CompareIcon";
import PropTypes from "prop-types";

const ChartControls = ({
  timeRange,
  setTimeRange,
<<<<<<< HEAD
  isFullscreen,
=======
>>>>>>> cd0b22c40025d60c86c0c2c7ae384697bb6ed1ff
  toggleFullscreen,
  compareEth,
  setCompareEth,
  setCryptoType,
}) => {
  return (
<<<<<<< HEAD
    <section className="flex w-[750px] justify-between absolute top-[290px] z-50">
      <div className="h-[33px] left-[60px] mb-5 mt-5">
        <nav className="w-auto h-[23px] flex leading-[22.7px] left-[94px] items-center">
          <div
            onClick={toggleFullscreen}
            className="flex items-center cursor-pointer"
          >
            <FullscreenIcon onClick={toggleFullscreen} />
            <span className="left-[242px] top-[330px] h-[23px] w-[116px] leading-[22.77px] pl-[14px] mr-1 font-circular text-[#6F7177]">
              {isFullscreen ? "ExitFullscreen" : "Fullscreen"}
            </span>
          </div>
          <CompareIcon onClick={toggleFullscreen} />
          <span className="text-[#6F7177] font-circular px-5 ">Compare</span>
=======
    <section className="flex w-[750px] justify-between absolute top-[220px]">
      <div className="h-[33px] left-[60px] top-[325px] mb-5 mt-5">
        <nav className="w-auto h-[23px] flex leading-[22.7px] left-[94px]">
          <FullscreenIcon onClick={toggleFullscreen} />
          <span className="left-[242px] top-[330px] h-[23px] w-[76px] leading-[22.77px] pl-[14px] mr-10">
            FullScreen
          </span>
          <CompareIcon />
          <span className="text-gray-700 font-circular px-5">Compare</span>
>>>>>>> cd0b22c40025d60c86c0c2c7ae384697bb6ed1ff

          <select
            id="compareOption"
            value={compareEth ? "eth" : ""}
            onChange={(e) => {
              setCompareEth(e.target.value === "eth");
              setCryptoType(e.target.value === "eth" ? "ethereum" : "bitcoin");
            }}
<<<<<<< HEAD
            className="ml-2 p-1 border w-[90px] h-6 text-[#6F7177] border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4B40EE] focus:border-[#4B40EE]"
          >
            <option value="">Bitcoin</option>
            <option value="eth">ETH</option>
=======
            className="ml-2 p-1 border w-[90px] h-6  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4B40EE] focus:border-[#4B40EE]"
          >
            <option value=" ">Bitcoin </option>
            <option value="eth">ETH</option>
            {/* <option value="ltc" disabled>
              LTC
            </option>
            <option value="xrp" disabled>
              XRP
            </option>
            <option value="ada" disabled>
              ADA
            </option>
            <option value="doge" disabled>
              DOGE
            </option>
            <option value="sol" disabled>
              SOL
            </option>
            <option value="bnb" disabled>
              BNB
            </option> */}
>>>>>>> cd0b22c40025d60c86c0c2c7ae384697bb6ed1ff
          </select>
        </nav>
      </div>

      <div className="mb-4 flex gap-2 items-center">
        {["1", "3", "7", "30", "180", "365", "max"].map((range) => (
          <button
            key={range}
            className={`px-3 py-1 rounded ${
<<<<<<< HEAD
              timeRange === range ? "bg-[#4B40EE] text-white" : "text-[#6F7177]"
=======
              timeRange === range ? "bg-[#4B40EE] text-white" : "text-gray-700"
>>>>>>> cd0b22c40025d60c86c0c2c7ae384697bb6ed1ff
            }`}
            onClick={() => setTimeRange(range)}
          >
            {range === "1"
              ? "1d"
              : range === "3"
              ? "3d"
              : range === "7"
              ? "1w"
              : range === "30"
              ? "1m"
              : range === "180"
              ? "6m"
              : range === "365"
              ? "1y"
              : "Max"}
          </button>
        ))}
      </div>
    </section>
  );
};

ChartControls.propTypes = {
  timeRange: PropTypes.string.isRequired,
  setTimeRange: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool.isRequired,
  toggleFullscreen: PropTypes.func.isRequired,
<<<<<<< HEAD
=======
  isFullscreen: PropTypes.bool.isRequired,
>>>>>>> cd0b22c40025d60c86c0c2c7ae384697bb6ed1ff
  compareEth: PropTypes.bool.isRequired,
  setCompareEth: PropTypes.func.isRequired,
  setCryptoType: PropTypes.func.isRequired,
};

export default ChartControls;
