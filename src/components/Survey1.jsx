import React, { useEffect, useState } from "react";
import {  useSelector, useDispatch } from "react-redux";

import Square from "../assets/add-square.png";
import { setSurvey1Boolean } from "../redux/reducer";

function Survey1() {
  const dispatch = useDispatch();
  const survey1Boolean = useSelector((state) => state.reducer.survey1Boolean,);
  const [value, setValue] = useState([]);

 useEffect(() => {
  if (value){
    dispatch(setSurvey1Boolean(true));
    }else dispatch(setSurvey1Boolean(false));

 }, [value])
  return (
    <div className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[564px] mb-20 bg-white rounded-2xl ">
      <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
        Survey 1
      </h1>
      
      <div className="flex flex-col gap-[16px] ">
        <input
          type="text"
          placeholder="Question"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="flex flex-row items-center py-[10px] px-[16px] h-[48px] bg-[#F1F4F8] gap-[8px] border border-solid border-[#CECECE] rounded-2xl w-[595px] "
        />

        <button className="flex flex-row items-center py-[8px] px-[16px] gap-[6px] w-[158px] h-[38px] bg-white border border-dashed border-[#793EF5] rounded-2xl ">
       
 <img src={Square} alt="" />{" "} <span className="font-sans font-medium leading-[22px] text-[15px] text-[#793EF5] capitalize ">add question</span>
        </button>
      </div>
    </div>
  );
}

export default Survey1;
