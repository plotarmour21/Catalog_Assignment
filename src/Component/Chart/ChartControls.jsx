import FullscreenIcon from "../icons/FullscreenIcon";
import CompareIcon from "../icons/CompareIcon";
import PropTypes from 'prop-types';

 const ChartControls = ({ timeRange, setTimeRange, toggleFullscreen }) => {

  return (
    <section className="flex w-[750px] justify-between absolute top-[220px]">
      <div className=" h-[33px] left-[60px] top-[325px] mb-5 mt-5 ">
        <nav className="w-auto h-[23px] flex leading-[22.7px] left-[94px] ">
          <FullscreenIcon onClick={toggleFullscreen} />
          <span className="left-[242px] top-[330px] h-[23px] w-[76px] leading-[22.77px] pl-[14px] mr-10">
            FullScreen
          </span>
          <CompareIcon />
          <span className="left-[242px] top-[330px] h-[23px] w-[76px] leading-[22.77px] pl-[14px] ">
            Compare
          </span>
        </nav>
      </div>
      <div className="mb-4 flex gap-2 items-center">
        {["1", "3", "7", "30", "180", "365", "max"].map((range) => (
          <button
            key={range}
            className={`px-3 py-1 rounded ${
              timeRange === range ? "bg-[#4B40EE] text-white" : " text-gray-700"
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
  toggleFullscreen: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool.isRequired,  
};

export default ChartControls;
