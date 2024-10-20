import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { FaDownload } from "react-icons/fa";
import { format } from "date-fns";
import { useState } from "react";
import { Button } from "../ui/button";
import PropTypes from "prop-types";
import html2canvas from "html2canvas";
import { FaRegChartBar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import Dev from "../Dev";

const ChartData = ({ data, isFullscreen }) => {
  const [chartType, setChartType] = useState("area");

  const exportData = () => {
    const csvContent =
      `data:text/csv;charset=utf-8,Date,Price,Volume\n` +
      data
        .map(
          (item) =>
            `${format(new Date(item.date), "yyyy-MM-dd")},${item.price},${
              item.volume || 0
            }`
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "chart_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportChartAsImage = () => {
    const chartElement = document.getElementById("chart-container");
    html2canvas(chartElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "chart_image.png";
      link.click();
    });
  };

  const volumeData = data.map((item) => ({
    date: item.date,
    volume: item.volume || Math.random() * 1000,
  }));

  return (
    <div className="absolute top-[386px] left-[10px] z-50">
      <div id="chart-container">
        {" "}
        {chartType === "area" && (
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
              tickFormatter={(timestamp) =>
                format(new Date(timestamp), "MMM dd")
              }
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
              animationDuration={500}
            />
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4B40EE" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4B40EE" stopOpacity={0.1} />
              </linearGradient>
            </defs>
          </AreaChart>
        )}
        {chartType === "line" && (
          <LineChart
            data={data}
            width={isFullscreen ? window.innerWidth - 20 : 839}
            height={isFullscreen ? 560 : 400}
          >
            <CartesianGrid
              strokeDasharray="1 1"
              fill="#FFFFFF"
              horizontal={true}
            />
            <XAxis
              dataKey="date"
              tickFormatter={(timestamp) =>
                format(new Date(timestamp), "MMM dd")
              }
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
            <Line
              type="monotone"
              dataKey="price"
              stroke="#046C4E"
              strokeWidth={1.5}
              animationDuration={500}
            />
          </LineChart>
        )}
        {chartType === "bar" && (
          <BarChart
            data={data}
            width={isFullscreen ? window.innerWidth - 20 : 839}
            height={isFullscreen ? 560 : 400}
          >
            <CartesianGrid
              strokeDasharray="1 1"
              fill="#FFFFFF"
              horizontal={true}
            />
            <XAxis
              dataKey="date"
              tickFormatter={(timestamp) =>
                format(new Date(timestamp), "MMM dd")
              }
              strokeWidth={0.1}
            />
            <YAxis
              domain={["auto", "auto"]}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
              tick={{ angle: 0, textAnchor: "end", dx: 3 }}
              strokeWidth={0.1}
            />
            <Tooltip
              labelFormatter={(label) =>
                format(new Date(label), "MMM dd, yyyy HH:mm")
              }
              formatter={(value) => [`$${value.toFixed(2)}`, "Price"]}
            />
            <Legend />
            <Bar dataKey="price" fill="#7E3AF2" animationDuration={500} />
          </BarChart>
        )}
        <div
          className={`absolute z-1 ${
            isFullscreen ? "top-[450px]" : "top-[299px]"
          } left-[54px]`}
        >
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
            <Bar dataKey="volume" fill="#E6E8EB" />
          </BarChart>
        </div>
      </div>

      <div className="flex gap-4 mt-4 justify-center">
        <Button
          onClick={() => setChartType("area")}
          variant="default"
          aria-label="Show Area Chart"
        >
          <FcAreaChart /> Area Chart
        </Button>
        <Button
          onClick={() => setChartType("line")}
          variant="default"
          aria-label="Show Line Chart"
        >
          <FaChartLine /> Line Chart
        </Button>
        <Button
          onClick={() => setChartType("bar")}
          variant="default"
          aria-label="Show Bar Chart"
        >
          <FaRegChartBar /> Bar Chart
        </Button>
        <Button onClick={exportData} variant="default" aria-label="Export Data">
          <FaDownload /> Export Data
        </Button>
        <Button
          onClick={exportChartAsImage}
          variant="default"
          aria-label="Export Chart as Image"
        >
          <FaDownload /> Chart Image
        </Button>
      </div>
      <Dev />
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
