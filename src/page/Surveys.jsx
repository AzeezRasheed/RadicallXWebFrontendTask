import React from "react";
import Arrow from "../assets/arrow-left.png";
import Arrow2 from "../assets/arrow/arrow-right.png";
import ArrowRight from "../assets/arrow-right.png";
import Tick from "../assets/aright/tick-circle.png";
import UntickCircle from "../assets/untick-circle(1).png";
import { useSelector } from "react-redux";
import SurveyLeft from "../components/Surveys/SurveyLeft";
import SurveyRight from "../components/Surveys/SurveyRight";
import { useNavigate } from "react-router-dom";
function Surveys() {
  const navigate = useNavigate();

  const survey1Boolean = useSelector((state) => state.reducer.survey1Boolean);
  const survey2Boolean = useSelector((state) => state.reducer.survey2Boolean);

  return (
    <div className="items-center max-w-screen-lg ">
      <div className=" flex p-[24px] items-center h-[80px] w-[1270px] max-w-[1290px] bg-white absolute top-5 left-6 rounded-full justify-between shadow-xl">
        <button
          className="flex gap-2"
          onClick={() => {
            navigate("/internshipguide");
          }}
        >
          <img src={Arrow} alt="#"></img>{" "}
          <span className="text-[18px] font-medium">Back</span>
        </button>
        <h1 className=" font-semibold    text-[#1E1E1E] text-[28px] tracking-wide capitalize leading-6 ml-40 font-[SpaceGrotesk] ">
          Add new Internship
        </h1>

        {survey1Boolean && survey2Boolean ? (
          <button
            className="flex gap-2 items-center 
bg-[#793EF5] py-[12px] px-[16px] rounded-2xl"
            onClick={() => navigate("/settings")}
          >
            <span className="text-[14px] capitalize text-center font-medium leading-6 text-white tracking-wide">
              continue to next step{" "}
            </span>
            <img src={ArrowRight} alt="#"></img>
          </button>
        ) : (
          <button
            disabled
            className="flex gap-2 items-center 
bg-[#E2E6EB] py-[12px] px-[16px] rounded-2xl"
          >
            <span className="text-[14px] capitalize text-center font-medium leading-6 text-[#828282] tracking-wide">
              continue to next step{" "}
            </span>
            <img src={Arrow2} alt="#"></img>
          </button>
        )}
      </div>

      <div className="flex flex-row justify-between items-center p-[24px] gap-[20px] absolute w-[1270px] max-w-[1290px]h-[60px] left-[23px] top-[118px] border border-solid border-[#D0D4DA] rounded-full ">
        <div className="flex flex-row items-center p-0 gap-[8px] w-[210px] h-[24px] ">
          <img src={Tick} alt="#" />{" "}
          <p className="text-[#793EF5] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">
            Internship Description
          </p>
        </div>

        <div className="flex flex-row items-center p-0 gap-[8px] w-[210px] h-[24px]">
          <img src={Tick} alt="#" />{" "}
          <p className="text-[#793EF5] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">
            Internship Guide
          </p>
        </div>

        <div className="flex flex-row items-center p-0 gap-[8px] w-[210px] h-[24px]">
          {survey1Boolean && survey2Boolean ? (
            <>
              <img src={Tick} alt="#" />{" "}
              <p className="text-[#793EF5] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">
                Surveys
              </p>
            </>
          ) : (
            <>
              <img src={UntickCircle} alt="#" />{" "}
              <p className="text-[#1E1E1E] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">
                Surveys
              </p>
            </>
          )}
        </div>

        <div className="flex flex-row items-center p-0 gap-[8px] w-[99px] h-[24px] opacity-30 ">
          <img src={UntickCircle} alt="#" />{" "}
          <p className="text-[#1E1E1E] w-[178px] h-[24px] font-sans font-normal text-[16px] leading-[24px] flex items-center tracking-wide">
            Settings
          </p>
        </div>
      </div>

      <div className="absolute flex flex-row ">
        <SurveyLeft />
        <SurveyRight />
      </div>
    </div>
  );
}

export default Surveys;
