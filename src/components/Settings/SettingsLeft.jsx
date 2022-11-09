import React, { useState, useEffect } from "react";
import Menu from "../../assets/menu.png";
import Arrow from "../../assets/aright/arrow-right.png";
import Square from "../../assets/aright2/add-square.png";
import Arrow2 from "../../assets/aright2/arrow-right.png";
import { useDispatch, useSelector } from "react-redux";
import { setRightRow } from "../../redux/reducer";
// import TickCircle from "../assets/tick-circle.png";

function SettingsLeft() {
  const [isActive, setIsactive] = useState("");
  const dispatch = useDispatch();

  const rightRow = useSelector((state) => state.reducer.rightRow);
  console.log(rightRow);


  
  return (
    <div className="left-[2px]  w-[634px] top-[212px] absolute">
      <div className="flex flex-col gap-[16px] ">
      
        <div className="flex  flex-row  gap-[24px]  p-0">
          <div className="flex items-center gap-5">
            {" "}
            <img src={Menu} alt="" />
          </div>
          <button
            onClick={() => {
              setIsactive("basicSettings");
              dispatch(setRightRow("basicSettings"));
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
            <div className="flex flex-row gap-[8px]  ">
              <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
               basic settings
              </div>{" "}
            </div>

            {isActive === "basicSettings" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </button>
        </div>
{/* survey 2 */}
        <div className="flex  flex-row  gap-[24px] mb-4  p-0">
          <div className="flex items-center gap-5">
            {" "}
            <img src={Menu} alt="" />
          </div>
          <button
            onClick={() => {
              setIsactive("heroImage");
              dispatch(setRightRow("heroImage"));
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
            <div className="flex flex-row gap-[8px]  ">
              <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
               hero image
              </div>{" "}
            </div>

            {isActive === "heroImage" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </button>
        </div>
      </div>
      <button className=" border-[2px] ml-10 border-[#793EF5] bg-purple-200 py-[16px] px-[24px] gap-[4px] items-center justify-center flex rounded-2xl w-[595px] h-[56px]">
        <img src={Square} alt="" />{" "}
        <span className="capitalize font-[SpaceGrotesk] text-[#793EF5] text-[16px] leading-6 tracking-wide">
          add chapter
        </span>
      </button>
    </div>
  );
}

export default SettingsLeft;
