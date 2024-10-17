import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  Line,
} from "recharts";

// Function to format numbers
const formatNumber = (num) => {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default function Chart() {
  const data = [
    { name: "Page A", current_value: 63179.71, initial_investment: 62000.0 },
    { name: "Page B", current_value: 22100.5, initial_investment: 21000.0 },
    { name: "Page C", current_value: 20000.0, initial_investment: 20000.0 },
    { name: "Page D", current_value: 27800.75, initial_investment: 25000.0 },
    { name: "Page E", current_value: 18900.25, initial_investment: 18000.0 },
    { name: "Page F", current_value: 43900.1, initial_investment: 23000.0 },
    { name: "Page G", current_value: 64900.9, initial_investment: 30000.0 },
  ];

  return (
    <div className="w-[939px] h-[343px] top-[386px] left-[80px] gap-0 opacity-1 absolute">
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />

        <YAxis tickFormatter={formatNumber} />

        <Tooltip formatter={(value) => formatNumber(value)} />

        <Legend />

        {/* Line for current value */}
        <Line type="monotone" dataKey="current_value" stroke="#8884d8" />

        {/* Line for initial investment */}
        <Line type="monotone" dataKey="initial_investment" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
