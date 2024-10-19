export default function Summary() {
  return (
    <div className="p-6 max-w-4xl ">
      <h2 className="text-2xl font-semibold text-center mb-6 absolute top-[180px] left-20 ">
        Bitcoin Summary
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg top-[280px] absolute mt-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
        <p className="text-lg text-gray-600 mb-4">
          Bitcoin (BTC) is a decentralized digital currency that allows
          peer-to-peer transactions without the need for a central authority. It
          was introduced in 2009 by an anonymous person or group of people using
          the name Satoshi Nakamoto. Bitcoin has gained significant attention as
          both a digital currency and a store of value.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Market Cap</h4>
            <p className="text-xl font-semibold text-blue-500">$850 Billion</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Current Price</h4>
            <p className="text-xl font-semibold text-green-500">$68,610</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">
              Circulating Supply
            </h4>
            <p className="text-xl font-semibold text-yellow-500">
              18.7 Million BTC
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Adoption</h4>
            <p className="text-xl font-semibold text-purple-500">
              Over 100 Million Users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
