export default function Statistic() {
  return (
    <>
      <div className="mt-[200px]">
        <h2 className="text-2xl font-semibold text-center ">Statistics</h2>
        <div className="p-6 max-w-full mx-auto relative top-20 ml-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800">Total Sales</h3>
              <p className="text-3xl font-semibold text-blue-500">1,234</p>
              <p className="text-gray-500">in the last month</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800">Active Users</h3>
              <p className="text-3xl font-semibold text-green-500">543</p>
              <p className="text-gray-500">currently online</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800">Total Revenue</h3>
              <p className="text-3xl font-semibold text-yellow-500">$12,345</p>
              <p className="text-gray-500">this quarter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
