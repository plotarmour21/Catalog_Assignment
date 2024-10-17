import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SimpleCryptoTracker = () => {
  const [priceData, setPriceData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPriceData({
          name: data.name,
          symbol: data.symbol,
          price: data.market_data.current_price.usd,
          change24h: data.market_data.price_change_percentage_24h,
        });
        setChartData(
          data.market_data.sparkline_7d.price.map((price, index) => ({
            day: index,
            price: price,
          }))
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden absolute -my-104">
      <div className="px-4 py-5">
        <h2 className="text-2xl font-bold text-gray-800">
          {priceData.name} ({priceData.symbol.toUpperCase()})
        </h2>
        <p className="text-3xl font-bold text-gray-900 mt-2">
          ${priceData.price.toLocaleString()}
        </p>
        <p
          className={`text-sm ${
            priceData.change24h >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {priceData.change24h >= 0 ? "▲" : "▼"}{" "}
          {Math.abs(priceData.change24h).toFixed(2)}% (24h)
        </p>
      </div>
      <div className="px-4 py-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          7 Day Price Chart
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleCryptoTracker;
