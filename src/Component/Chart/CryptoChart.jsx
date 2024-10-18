import { useState, useEffect } from "react";


import Price from "../Menu/Price";

import ChartControls from "./ChartControls";
import ChartData from "./ChartData";
import PropTypes from "prop-types"; 
export default function CryptoChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState("7");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

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
    <div
      className={`${
        isFullscreen
          ? "fixed inset-0 bg-white z-50"
          : "w-[90%] h-[343px] top-[60px] left-[60px] gap-0 opacity-1 absolute"
      }`}
    >
     
     <Price
        latestPrice={latestPrice}
        priceChange={priceChange}
        priceChangePercentage={priceChangePercentage}
      />
    
<menu />
      <ChartControls
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />
      <ChartData data={data} isFullscreen={isFullscreen} />
    </div>
  );
}


function PriceComponent({ latestPrice, priceChange, priceChangePercentage }) {
  return (
    <div className="price-info">
      <Price
        latestPrice={latestPrice}
        priceChange={priceChange}
        priceChangePercentage={priceChangePercentage}
      />
    </div>
  );
}
PriceComponent.propTypes = {
  latestPrice: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  priceChangePercentage: PropTypes.number.isRequired
};
