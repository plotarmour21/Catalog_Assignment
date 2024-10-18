import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import Menu from "./Menu";
import FullscreenIcon from "./icons/FullscreenIcon";
import CompareIcon from "./icons/CompareIcon";

export default function CryptoChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState("7");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${timeRange}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const result = await response.json();
        const formattedData = result.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp),
          price: price,
        }));
        setData(formattedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeRange]);

  if (loading) return <div className="text-center">Loading... 📈</div>;
  if (error)
    return <div className="text-center text-red-500">Error 😥: {error}</div>;

  const latestPrice = data[data.length - 1]?.price;
  const priceChange = latestPrice - data[0]?.price;
  const priceChangePercentage = (priceChange / data[0]?.price) * 100;

  return (
    <div className="w-[90%] h-[343px] top-[60px] left-[60px] gap-0 opacity-1 absolute">
      <div className="w-[326px] h-[122px]">
        <div className="font-circular text-[70px] font-normal text-[#1A243A] w-[269px] h-[89px]">
          {latestPrice?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <span
          className={`text-lg ${
            priceChange >= 0 ? "text-[#67BF6B]" : "text-red-500"
          }`}
        >
          {priceChange >= 0 ? "+" : ""}
          {priceChange.toFixed(2)} ({priceChangePercentage.toFixed(2)}%)
        </span>
        <div className="w-[49px] h-[30px] absolute top-6 left-[318px] font-circular text-[24px] font-normal text-[#BDBEBF] leading-[30.36px]">
          USD
        </div>
      </div>

      <Menu />

      <section className="flex  w-[750px] justify-between ">
        <div className=" h-[33px] left-[60px] top-[325px]  mb-5 mt-5 ">
          <nav className="w-auto h-[23px]  flex leading-[22.7px] left-[94px] ">
            <FullscreenIcon />
            <span className="top-[330px] left-[94px] w-[83px] h-[23px] leading-[22.77px] pl-[14px] mr-[34px]  ">
              Fullscreen
            </span>

            <CompareIcon />
            <span className="left-[242px] top-[330px] h-[23px] w-[76px] leading-[22.77px] pl-[14px] ">
              Compare
            </span>
          </nav>
        </div>
        <div className="mb-4 flex gap-2 items-center">
          <button
            className={`px-3 py-1 rounded ${
              timeRange === "1" ? "bg-[#4B40EE] text-white" : " text-gray-700"
            }`}
            onClick={() => setTimeRange("1")}
          >
            1d
          </button>
          <button
            className={`px-3 py-1 rounded ${
              timeRange === "3" ? "bg-[#4B40EE] text-white" : " text-gray-700"
            }`}
            onClick={() => setTimeRange("3")}
          >
            3d
          </button>
          <button
            className={`px-3 py-1 rounded ${
              timeRange === "7" ? "bg-[#4B40EE] text-white" : " text-gray-700"
            }`}
            onClick={() => setTimeRange("7")}
          >
            1w
          </button>
          <button
            className={`px-3 py-1 rounded ${
              timeRange === "30" ? "bg-[#4B40EE] text-white" : " text-gray-700"
            }`}
            onClick={() => setTimeRange("30")}
          >
            1m
          </button>
          <button
            className={`px-3 py-1 rounded ${
              timeRange === "180" ? "bg-[#4B40EE] text-white" : " text-gray-700"
            }`}
            onClick={() => setTimeRange("180")}
          >
            6m
          </button>
          <button
            className={`px-3 py-1 rounded ${
              timeRange === "365" ? "bg-[#4B40EE] text-white" : " text-gray-700"
            }`}
            onClick={() => setTimeRange("365")}
          >
            1y
          </button>
          <button
            className={`px-3 py-1 rounded ${
              timeRange === "max" ? "bg-[#4B40EE] text-white" : " text-gray-700"
            }`}
            onClick={() => setTimeRange("max")}
          >
            Max
          </button>
        </div>
      </section>

      <ResponsiveContainer width={839} maheight={400} pl-10 z-50>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(timestamp) => format(new Date(timestamp), "MMM dd")}
          />
          <YAxis
            domain={["auto", "auto"]}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
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
            stroke="#4B40EE"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
