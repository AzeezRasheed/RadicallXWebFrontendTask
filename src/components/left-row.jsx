import React, { useState, useEffect } from "react";
import Menu from "../assets/menu.png";
import Arrow from "../assets/aright/arrow-right.png";
import Square from "../assets/aright2/add-square.png";
import Arrow2 from "../assets/aright2/arrow-right.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setRightRow } from "../redux/reducer";
import TickCircle from "../assets/tick-circle.png";
function Left() {
  const [isActive, setIsactive] = useState("");
  const dispatch = useDispatch();

  const rightRow = useSelector((state) => state.reducer.rightRow);
  const overviewBoolean = useSelector((state) => state.reducer.overviewBoolean);
  const  scheduleBoolean = useSelector((state) => state.reducer.scheduleBoolean);
  const resourcesBoolean = useSelector((state) => state.reducer.resourcesBoolean);
  
  const survey1Boolean = useSelector((state) => state.reducer.survey1Boolean);
  const survey2Boolean = useSelector((state) => state.reducer.survey2Boolean);
  const basicSettingsBoolean = useSelector(
    (state) => state.reducer.basicSettingsBoolean
  );
  const heroImageBoolean = useSelector(
    (state) => state.reducer.heroImageBoolean
  );
  return (
    <div className="left-[2px]  w-[634px] top-[212px] absolute">
      <div className="flex flex-col gap-[16px] mb-20">
        {/* Overview */}
        {rightRow === "overview" ? (
        <div className="flex items-start flex-row  gap-[24px]  p-0">
        <div className="py-[10px]">
          {" "}
          <img src={Menu} alt="" />
        </div>

        <button className="  p-[24px] gap-[28px] w-[604px] h-[360px] bg-white border  rounded-2xl border-[#E0E0E0]  focus:border-[#793EF5] focus:shadow-xl">
          <div className="flex  h-[292px]  gap-[28px] mb-3 flex-col">
            <div className="flex justify-between items-start">
              <div className="flex flex-row gap-[8px]  ">
                <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                overview
                </div>{" "}
              </div>

              {isActive === "overview" ? (
                <img src={Arrow} alt="" />
              ) : (
                <img src={Arrow2} alt="" />
              )}
            </div>
            {/* Inner of resources */}
            <div className=" flex flex-col gap-3">
              <div className="flex gap-3 flex-row items-center py-[16px] px-[24px] h-[56px] bg-white border border-solid border-[#E0E0E0] rounded-2xl">
                {" "}
                <img src={Menu} alt="" />{" "}
                <p className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
             brief
                </p>{" "}
              </div>

              <div className="flex gap-3 flex-row items-center py-[16px] px-[24px] h-[56px] bg-white border border-solid border-[#E0E0E0] rounded-2xl">
                {" "}
                <img src={Menu} alt="" />{" "}
                <p className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                requirements
                </p>{" "}
              </div>

              <div className="flex gap-3 flex-row items-center py-[16px] px-[24px] h-[56px] bg-white border border-solid border-[#E0E0E0] rounded-2xl">
                {" "}
                <img src={Menu} alt="" />{" "}
                <p className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
               milestones
                </p>{" "}
              </div>

              <button className=" border-dashed border-2  border-[#793EF5] py-[16px] px-[24px] gap-[3px] items-center justify-center flex rounded-2xl  h-[56px]">
                <img src={Square} alt="" />{" "}
                <span className="capitalize font-[SpaceGrotesk] text-[#793EF5] text-[16px] leading-6 tracking-wide">
                  add more
                </span>
              </button>
            </div>
          </div>
        </button>
      </div>
        ) : (
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              {" "}
              <img src={Menu} alt="" />
            </div>
            <button
              onClick={() => {
                setIsactive("overview");
                dispatch(setRightRow("overview"));
              }}
              className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
            >
              <div className="flex flex-row gap-[8px]  ">
                <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                  overview
                </div>{" "}
              </div>

              {isActive === "overview" ? (
                <img src={Arrow} alt="" />
              ) : (
                <img src={Arrow2} alt="" />
              )}
            </button>
          </div>
        )}

        {/* Schedule */}
        {rightRow === "schedule" ? (
          <div className="flex items-start flex-row  gap-[24px]  p-0">
          <div className="py-[10px]">
            {" "}
            <img src={Menu} alt="" />
          </div>

          <button className="  p-[24px] gap-[28px] w-[604px] h-[360px] bg-white border  rounded-2xl border-[#E0E0E0]  focus:border-[#793EF5] focus:shadow-xl">
            <div className="flex  h-[292px]  gap-[28px] mb-3 flex-col">
              <div className="flex justify-between items-start">
                <div className="flex flex-row gap-[8px]  ">
                  <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                    schedule
                  </div>{" "}
                </div>

                {isActive === "schedule" ? (
                  <img src={Arrow} alt="" />
                ) : (
                  <img src={Arrow2} alt="" />
                )}
              </div>
              {/* Inner of resources */}
              <div className=" flex flex-col gap-3">
                <div className="flex gap-3 flex-row items-center py-[16px] px-[24px] h-[56px] bg-white border border-solid border-[#E0E0E0] rounded-2xl">
                  {" "}
                  <img src={Menu} alt="" />{" "}
                  <p className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                   duration
                  </p>{" "}
                </div>

                <div className="flex gap-3 flex-row items-center py-[16px] px-[24px] h-[56px] bg-white border border-solid border-[#E0E0E0] rounded-2xl">
                  {" "}
                  <img src={Menu} alt="" />{" "}
                  <p className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                   timeline
                  </p>{" "}
                </div>

                <div className="flex gap-3 flex-row items-center py-[16px] px-[24px] h-[56px] bg-white border border-solid border-[#E0E0E0] rounded-2xl">
                  {" "}
                  <img src={Menu} alt="" />{" "}
                  <p className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                  deliverables
                  </p>{" "}
                </div>

                <button className=" border-dashed border-2  border-[#793EF5] py-[16px] px-[24px] gap-[3px] items-center justify-center flex rounded-2xl  h-[56px]">
                  <img src={Square} alt="" />{" "}
                  <span className="capitalize font-[SpaceGrotesk] text-[#793EF5] text-[16px] leading-6 tracking-wide">
                    add more
                  </span>
                </button>
              </div>
            </div>
          </button>
        </div>
        ) : (
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              {" "}
              <img src={Menu} alt="" />
            </div>
            <button
              onClick={() => {
                setIsactive("schedule");
                dispatch(setRightRow("schedule"));
              }}
              className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
            >
              <div className="flex flex-row gap-[8px]  ">
                <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                 schedule
                </div>{" "}
              </div>

              {isActive === "schedule" ? (
                <img src={Arrow} alt="" />
              ) : (
                <img src={Arrow2} alt="" />
              )}
            </button>
          </div>
        )}

        {/* Resources */}
        {rightRow === "resources" ? (
          <div className="flex items-start flex-row mb-3 gap-[24px]  p-0">
            <div className="py-[10px]">
              {" "}
              <img src={Menu} alt="" />
            </div>

            <button className="  p-[24px] gap-[28px] w-[604px] h-[292px] bg-white border  rounded-2xl border-[#E0E0E0]  focus:border-[#793EF5] focus:shadow-xl">
              <div className="flex  h-[292px]  gap-[28px]  flex-col">
                <div className="flex justify-between items-start">
                  <div className="flex flex-row gap-[8px]  ">
                    <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                      resources
                    </div>{" "}
                  </div>

                  {isActive === "resources" ? (
                    <img src={Arrow} alt="" />
                  ) : (
                    <img src={Arrow2} alt="" />
                  )}
                </div>
                {/* Inner of resources */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 flex-row items-center py-[16px] px-[24px] h-[56px] bg-white border border-solid border-[#E0E0E0] rounded-2xl">
                    {" "}
                    <img src={Menu} alt="" />{" "}
                    <p className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                      overview
                    </p>{" "}
                  </div>

                  <div className="flex gap-3 flex-row items-center py-[16px] px-[24px] h-[56px] bg-white border border-solid border-[#E0E0E0] rounded-2xl">
                    {" "}
                    <img src={Menu} alt="" />{" "}
                    <p className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                      events
                    </p>{" "}
                  </div>

                  <button className=" border-dashed border-2  border-[#793EF5] py-[16px] px-[24px] gap-[3px] items-center justify-center flex rounded-2xl  h-[56px]">
                    <img src={Square} alt="" />{" "}
                    <span className="capitalize font-[SpaceGrotesk] text-[#793EF5] text-[16px] leading-6 tracking-wide">
                      add more
                    </span>
                  </button>
                </div>
              </div>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              {" "}
              <img src={Menu} alt="" />
            </div>
            <button
              onClick={() => {
                setIsactive("resources");
                dispatch(setRightRow("resources"));
              }}
              className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
            >
              <div className="flex flex-row gap-[8px]  ">
                <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
                  resources
                </div>{" "}
              </div>

              {isActive === "resources" ? (
                <img src={Arrow} alt="" />
              ) : (
                <img src={Arrow2} alt="" />
              )}
            </button>
          </div>
        )}

        <button className=" border ml-10 border-[#793EF5] bg-purple-200 py-[16px] px-[24px] gap-[4px] items-center justify-center flex rounded-2xl w-[595px] h-[56px]">
          <img src={Square} alt="" />{" "}
          <span className="capitalize font-[SpaceGrotesk] text-[#793EF5] text-[16px] leading-6 tracking-wide">
            add chapter
          </span>
        </button>
      </div>
    </div>
  );
}

export default Left;


