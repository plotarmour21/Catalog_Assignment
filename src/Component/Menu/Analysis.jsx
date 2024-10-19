import React from "react";

export default function Analysis() {
  return (
    <div className="p-6 max-w-9xl mx-auto absolute top-[160px]">
      <h2 className="text-2xl font-semibold text-center mb-6 mt-10">Bitcoin Analysis</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Market Trends</h3>
        <p className="text-lg text-gray-600 mb-4">
          Bitcoin's price is heavily influenced by various factors such as market demand, institutional investments, global economic events, and more. Here's a look at its recent performance and market analysis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Price Trend</h4>
            <p className="text-xl font-semibold text-blue-500">
              📈 Steady Growth: +7.5% over the last week
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Market Sentiment</h4>
            <p className="text-xl font-semibold text-green-500">
              Bullish: Investors are optimistic about Bitcoin's future.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Regulatory Impact</h4>
            <p className="text-xl font-semibold text-yellow-500">
              📜 Increased scrutiny in major markets, possible regulations ahead.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Volume Analysis</h4>
            <p className="text-xl font-semibold text-purple-500">
              🚀 Trading Volume Surge: 15% increase in the last 24 hours
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-bold text-gray-700">Key Takeaways</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Bitcoin remains resilient despite recent market fluctuations.</li>
            <li>Institutional adoption continues to grow, adding credibility.</li>
            <li>Continued regulatory discussions could influence future price movements.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
