import { useState, useEffect } from "react";
import Price from "../Menu/Price";
import ChartControls from "./ChartControls";
import ChartData from "./ChartData";
import Summary from "../Menu/Summary";

import PropTypes from "prop-types";

export default function CryptoChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState("7");
  const [cryptoType, setCryptoType] = useState("bitcoin");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    console.log("Fullscreen is now: ", !isFullscreen);
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
    console.log("Zoom is now: ", !isZoomed);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${cryptoType}/market_chart?vs_currency=usd&days=${timeRange}`
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
  }, [timeRange, cryptoType]);

  if (loading) return <div className="text-center">Loading... 📈</div>;
  if (error)
    return <div className="text-center text-red-500">Error 😥: {error}</div>;

  const latestPrice = data[data.length - 1]?.price;
  const priceChange = latestPrice - data[0]?.price;
  const priceChangePercentage = (priceChange / data[0]?.price) * 100;

  return (
    <div className="absolute w-[1000px] h-[789px] ml-10">
      <Price
        latestPrice={latestPrice}
        priceChange={priceChange}
        priceChangePercentage={priceChangePercentage}
      />
      <ChartControls
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        compareEth={cryptoType === "ethereum"}
        setCompareEth={(isEth) => setCryptoType(isEth ? "ethereum" : "bitcoin")}
        setCryptoType={setCryptoType}
        isZoomed={isZoomed}
        toggleZoom={toggleZoom}
      />
      <ChartData data={data} isFullscreen={isFullscreen} isZoomed={isZoomed} />
 
    
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
      <Summary latestPrice={latestPrice} />
    </div>
  );
}

PriceComponent.propTypes = {
  latestPrice: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  priceChangePercentage: PropTypes.number.isRequired,
};
