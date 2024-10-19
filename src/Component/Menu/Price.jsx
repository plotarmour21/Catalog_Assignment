import PropTypes from "prop-types";
export default function Price({
  latestPrice,
  priceChange,
  priceChangePercentage,
}) {
  return (
    <div className="w-[326px]  absolute h-[122px] top-[60px] left[60px]">
      <div className="font-circular text-[70px] font-normal font-circular text-[#1A243A] w-[269px] h-[89px] leading-[88.56px]">
        {latestPrice?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <span
        className={`text-lg  ${
          priceChange >= 0 ? "text-[#67BF6B]" : "text-red-500"
        }`}
      >
        {priceChange >= 0 ? "+" : ""}
        {priceChange.toFixed(2)} ({priceChangePercentage.toFixed(2)}%)
      </span>
      <div className="w-[49px] h-[30px] absolute  top-[15px] left-[320px] font-circular text-[24px] font-normal text-[#BDBEBF] leading-[30.36px]">
        USD
      </div>
    </div>
  );
}
Price.propTypes = {
  latestPrice: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  priceChangePercentage: PropTypes.number.isRequired,
};
