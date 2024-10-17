import React from "react";
import FullscreenIcon from "./FullscreenIcon";
import CompareIcon from "./CompareIcon";
export default function Actions() {
  return (
    <div className=" w-[750px]  h-[33px] left-[60px] top-[325px]  mb-5 mt-5 ">
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
  );
}
