import React from "react";
import Square from "../../assets/add-square.png";
import Funnel from "../../assets/Funnel.png";
import Calender from "../../assets/calendar-2.png";
import ArrowDown from "../../assets/arrow-square-down.png";
import QualifiedCandidates from "../../assets/Qualified Candidates.png";
import ButtonGroups from "../../assets/Buttons group.png";
import { useNavigate } from "react-router-dom";
const InternshipGuide = () => {
  const navigate = useNavigate();
  return (
    <div >
      <div className="absolute left-[280px] top-[57px] items-start w-[1000px]">
        <header className="flex justify-between items-center mb-6">
          <h1 className=" text-[32px] font-semibold">Internships</h1>
          <button
            className="flex gap-2 capitalize bg-[#793EF5] rounded-xl py-[12px] px-[16px] text-white"
            onClick={() => {
              navigate("/internshipdescription");
            }}
          >
            <img className="w-6" src={Square} alt="" />{" "}
            <span>create new internship</span>
          </button>
        </header>
        <div className="flex flex-row justify-between items-start p-[16px] gap-[16px] h-[270px] rounded-2xl bg-white">
          <div className="flex flex-col items-start p-[16px] gap-[10px] w-[280px] h-[230px] bg-[#F6F5F9] rounded-xl ">
            <h1 className="capitalize font-bold text-[20px]">
              internship insights
            </h1>
            <p>
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic.
            </p>
          </div>
          <div>
            <div className="flex h-[48px] items-center justify-between bg-[#F2F2F2] gap-[10px] p-[8px] rounded-2xl mb-8">
              <div className="flex flex-row gap-2">
                <button className="bg-[#793EF5] py-[6px] px-[12px] rounded-xl text-white">
                  This week
                </button>
                <button className="bg-white py-[6px] px-[12px] rounded-xl text-black ">
                  This month
                </button>
              </div>
              <button className="flex flex-row gap-2 py-[6px] px-[12px] bg-[#FFFFFF] rounded-xl">
                {" "}
                <img className="w-6" src={Calender} alt="" /> select dates
              </button>
            </div>

            <img src={Funnel} alt="" />
          </div>
        </div>
        <div className=" flex flex-col">
          <div className="px-[16px] py-[12px] mt-6 flex flex-row gap-3">
            <div className="flex flex-row justify-between w-[280px]">
              <h1>Internship Title</h1>
              <img src={ArrowDown} className="w-6" alt="" />
            </div>

            <div className="flex flex-row justify-between w-[200px]">
              <h1>Completion Period</h1>
              <img src={ArrowDown} className="w-6" alt="" />
            </div>

            <div className="flex flex-row justify-between w-[154px]">
              <h1>Total Enrolled</h1>
              <img src={ArrowDown} className="w-6" alt="" />
            </div>

            <div className="flex flex-row justify-between w-[185px]">
              <h1>Qualified Candidates</h1>
              <img src={ArrowDown} className="w-6" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1   bg-white rounded-xl mb-5">
          <article className="flex flex-row ">
            <div className="w-[300px] p-[16px] flex flex-col h-[96px]  ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mb-3">
                  Product Design GVI
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  Amet miniymi mollit non deserunt est sit aliqua dolor do amet
                  sint.{" "}
                </p>
              </div>
            </div>

            <div className=" w-[200px] p-[16px] flex flex-col h-[96px]  ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mt-2">
                  120 Days
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  (created on 10/12/2021){" "}
                </p>
              </div>
            </div>

            <div className=" w-[160px] p-[16px] items-center text-center mr-1 mt-4">
              <div className="bg-[#F0EFFD]  text-center px-[8px] py-[10px] rounded-xl">
                <h1 className="text-[#793EF5] text-[18px] font-semibold  ">
                  20000
                </h1>
              </div>
            </div>

            <div className=" w-[220px]  mt-6 items-center">
              <img src={QualifiedCandidates} alt="" />
            </div>

            <div className="  items-center  mt-10 ">
              <img src={ButtonGroups} alt="" />
            </div>
          </article>

          <article className="flex flex-row">
            <div className="w-[300px] p-[16px] flex flex-col h-[96px]  ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mb-3">
                  Product Design GVI
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  Amet miniymi mollit non deserunt est sit aliqua dolor do amet
                  sint.{" "}
                </p>
              </div>
            </div>

            <div className=" w-[200px] p-[16px] flex flex-col h-[96px]  ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mt-2">
                  120 Days
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  (created on 10/12/2021){" "}
                </p>
              </div>
            </div>

            <div className=" w-[160px] p-[16px] items-center text-center mr-1 mt-4">
              <div className="bg-[#F0EFFD]  text-center px-[8px] py-[10px] rounded-xl">
                <h1 className="text-[#793EF5] text-[18px] font-semibold  ">
                  20000
                </h1>
              </div>
            </div>

            <div className=" w-[220px]  mt-6 items-center">
              <img src={QualifiedCandidates} alt="" />
            </div>

            <div className="  items-center  mt-10 ">
              <img src={ButtonGroups} alt="" />
            </div>
          </article>

          <article className=" flex flex-row">
            <div className="w-[300px] p-[16px] flex flex-col h-[96px] ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mb-3">
                  Product Design GVI
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  Amet miniymi mollit non deserunt est sit aliqua dolor do amet
                  sint.{" "}
                </p>
              </div>
            </div>

            <div className=" w-[200px] p-[16px] flex flex-col h-[96px] ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mt-2">
                  120 Days
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  (created on 10/12/2021){" "}
                </p>
              </div>
            </div>

            <div className=" w-[160px] p-[16px] items-center text-center mr-1 mt-4">
              <div className="bg-[#F0EFFD]  text-center px-[8px] py-[10px] rounded-xl">
                <h1 className="text-[#793EF5] text-[18px] font-semibold  ">
                  20000
                </h1>
              </div>
            </div>

            <div className=" w-[220px]  mt-6 items-center">
              <img src={QualifiedCandidates} alt="" />
            </div>

            <div className="  items-center  mt-10 ">
              <img src={ButtonGroups} alt="" />
            </div>
          </article>

          <article className=" flex flex-row">
            <div className="w-[300px] p-[16px] flex flex-col h-[96px]  ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mb-3">
                  Product Design GVI
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  Amet miniymi mollit non deserunt est sit aliqua dolor do amet
                  sint.{" "}
                </p>
              </div>
            </div>

            <div className=" w-[200px] p-[16px] flex flex-col h-[96px]">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mt-2">
                  120 Days
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  (created on 10/12/2021){" "}
                </p>
              </div>
            </div>

            <div className=" w-[160px] p-[16px] items-center text-center mr-1 mt-4">
              <div className="bg-[#F0EFFD]  text-center px-[8px] py-[10px] rounded-xl">
                <h1 className="text-[#793EF5] text-[18px] font-semibold  ">
                  20000
                </h1>
              </div>
            </div>

            <div className=" w-[220px]  mt-6 items-center">
              <img src={QualifiedCandidates} alt="" />
            </div>

            <div className="  items-center  mt-10 ">
              <img src={ButtonGroups} alt="" />
            </div>
          </article>

          <article className=" flex flex-row">
            <div className="w-[300px] p-[16px] flex flex-col h-[96px]  ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mb-3">
                  Product Design GVI
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  Amet miniymi mollit non deserunt est sit aliqua dolor do amet
                  sint.{" "}
                </p>
              </div>
            </div>

            <div className=" w-[200px] p-[16px] flex flex-col h-[96px] ">
              <div className="w-[195px] h-[64px] ">
                <h1 className="font-[Space Grotesk] font-semibold text-[16px] mt-2">
                  120 Days
                </h1>
                <p className="text-[12px] font-[Space Grotesk] font-medium h-[32px] ">
                  (created on 10/12/2021){" "}
                </p>
              </div>
            </div>

            <div className=" w-[160px] p-[16px] items-center text-center mr-1 mt-4">
              <div className="bg-[#F0EFFD]  text-center px-[8px] py-[10px] rounded-xl">
                <h1 className="text-[#793EF5] text-[18px] font-semibold  ">
                  20000
                </h1>
              </div>
            </div>

            <div className=" w-[220px]  mt-6 items-center">
              <img src={QualifiedCandidates} alt="" />
            </div>

            <div className="  items-center  mt-10 ">
              <img src={ButtonGroups} alt="" />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default InternshipGuide;
