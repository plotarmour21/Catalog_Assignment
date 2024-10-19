import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { format } from "date-fns";
import PropTypes from "prop-types";


const ChartData = ({ data, isFullscreen }) => {
  const volumeData = data.map((item) => ({
    date: item.date,
    volume: item.Price || Math.random() * 1000,
  }));

  return (
    <div className="absolute top-[386px] left-[10px] z-50">
      <AreaChart
        data={data}
        width={isFullscreen ? window.innerWidth - 20 : 839}
        height={isFullscreen ? 560 : 400}
      >
        <CartesianGrid
          strokeDasharray="1 1"
          fill="#FFFFFF"
          horizontal={false}
        />
        <XAxis
          dataKey="date"
          tickFormatter={(timestamp) => format(new Date(timestamp), "MMM dd")}
          strokeWidth={0.2}
        />
        <YAxis
          domain={["auto", "auto"]}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
          tick={{ angle: 0, textAnchor: "end", dx: 3 }}
          strokeWidth={0.2}
        />

        <Tooltip
          labelFormatter={(label) =>
            format(new Date(label), "MMM dd, yyyy HH:mm")
          }
          formatter={(value) => [`$${value.toFixed(2)}`, "Price"]}
        />
        <Legend />

        <Area
          type="monotone"
          dataKey="price"
          stroke="#4B40EE"
          fill="url(#colorPrice)"
          fillOpacity={0.12}
          strokeWidth={2}
        />
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4B40EE" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4B40EE" stopOpacity={0.1} />
          </linearGradient>
        </defs>
      </AreaChart>
      <div className="absolute top-[299px]  left-[54px] z-10">
        <BarChart
          data={volumeData}
          width={isFullscreen ? window.innerWidth : 801}
          height={40}
          margin={{ top: 1, right: 30, left: 20, bottom: 2 }}
          strokeWidth={20}
          barSize={2}
          barGap={10}
        >
          <CartesianGrid strokeDasharray="0 1" />

          <Bar dataKey="volume" fill="#E6E8EB " />
        </BarChart>
      </div>
   
    </div>
  );
};

ChartData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      price: PropTypes.number.isRequired,
      volume: PropTypes.number,
    })
  ).isRequired,
  isFullscreen: PropTypes.bool.isRequired,
};

export default ChartData;
