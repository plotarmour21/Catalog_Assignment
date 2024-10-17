import React from "react";

export default function Price() {
  return (
    <>
      <div className="w-[326px] h-[122px] absolute top-[60px] left-[60px] bg-zinc">
        <div className="w-[269px] h-[89px] absolute  font-circular text-[70px] font-normal text-[#1A243A] leading-[89px]">
          63,179.71
        </div>
      </div>
      <div className="w-[141px] h-[23px] absolute top-[159px] left-[60px] font-circular text-[18px] font-normal text-[#67BF6B] leading-[22.77px]">
        +2,161.42 (3.54%)
      </div>

      <div className="w-[49px] h-[30px] absolute top-[77px] left-[337px] font-circular text-[24px] font-normal text-[#BDBEBF] leading-[30.36px]">
        USD
      </div>
    </>
  );
}
