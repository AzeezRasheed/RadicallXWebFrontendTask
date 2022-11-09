import React, { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { setHeroImageBoolean } from "../redux/reducer";
function HeroImage () {
  const dispatch = useDispatch();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);


  const [value, setValue] = useState([]);

  useEffect(() => {
    if (value) {
      dispatch(setHeroImageBoolean(true));
    } else dispatch(setHeroImageBoolean(false));
  }, [value]);
  return (
    <div className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[564px] mb-20 bg-white rounded-2xl ">
      <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
        internship URL
      </h1>

      <div className="flex flex-col gap-[16px] ">
        <input
          type="text"
          placeholder="radicalx-internship-url"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="flex flex-row items-center py-[10px] px-[16px] h-[48px] bg-[#F1F4F8] gap-[8px] border border-solid border-[#CECECE] rounded-2xl w-[595px] "
        />

        <div className="flex flex-col items-start p-0 gap-[20px] h-[98px] w-[595px]">
          <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
            Access
          </h1>
          <div className="flex flex-col items-start p-0 gap-[12px] h-[60px]  w-[595px]">
            <div className="flex flex-row  gap-[12px] ">
              <input
                type="checkbox"
                defaultChecked={checked1}
                onChange={() => {setChecked1(true); setChecked2(false)}}
                className="w-[24px] h-[24px] opacity-50 "
              /> 
              <span className="capitalize text-[18px] font-normal leading-6 text-[#333333] tracking-wide">private internships</span>
            </div>
          </div>

          <div className="flex flex-col items-start p-0 gap-[12px] h-[60px]  w-[595px]">
            <div className="flex flex-row  gap-[12px] ">
              <input
                type="checkbox"
                defaultChecked={checked2}
                onChange={() => {setChecked2(true); setChecked1(false)}}
                className="w-[24px] h-[24px] opacity-50 "
              /> 
              <span className="capitalize text-[18px] font-normal leading-6 text-[#333333] tracking-wide">hidden internships</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start p-0 gap-[20px] h-[98px] w-[595px]">
          <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
           Security
          </h1>
          <div className="flex flex-col items-start p-0 gap-[12px] h-[60px]  w-[595px]">
            <div className="flex flex-row  gap-[12px] ">
              <input
                type="checkbox"
                defaultChecked={checked3}
                onChange={() => {setChecked3(!checked3)}}
                className="w-[24px] h-[24px] opacity-50 "
              /> 
              <span className="capitalize text-[18px] font-normal leading-6 text-[#333333] tracking-wide">Disable Text Copying</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroImage;
