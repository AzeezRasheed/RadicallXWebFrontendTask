import React, { useState, useEffect } from "react";
import Menu from "../../assets/menu.png";
import Arrow from "../../assets/aright/arrow-right.png";
import Square from "../../assets/aright2/add-square.png";
import Arrow2 from "../../assets/aright2/arrow-right.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setRightRow } from "../../redux/reducer";
import TickCircle from "../../assets/tick-circle.png";
function Left() {
  const [isActive, setIsactive] = useState("");
  const dispatch = useDispatch();

  const rightRow = useSelector((state) => state.reducer.rightRow);
  const categoryBoolean = useSelector((state) => state.reducer.categoryBoolean);
  const locationBoolean = useSelector((state) => state.reducer.locationBoolean);
  const descriptionBoolean = useSelector((state) => state.reducer.descriptionBoolean);
  const benefitBoolean = useSelector((state) => state.reducer.benefitBoolean);
  const introVideosBoolean  = useSelector((state) => state.reducer.introVideosBoolean);
  console.log(introVideosBoolean)
  const mentorDetailsBoolean = useSelector((state) => state.reducer.mentorDetailsBoolean);
  const recommendedRolesBoolean = useSelector((state) => state.reducer.recommendedRolesBoolean);
  const webLinksBoolean = useSelector((state) => state.reducer.webLinksBoolean);
  return (
    <div className="left-[2px]  w-[634px] top-[212px] absolute">
      <div className="flex flex-col gap-[16px] mb-20">
        <div className="flex items-center gap-5">
          <div>
            {" "}
            <img src={Menu} alt="" />
          </div>
          <Button
            onClick={() => {
              setIsactive("category");
              dispatch(setRightRow("category"));
            
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0]  focus:border-[#793EF5] focus:shadow-xl"
          >
            <div className="flex flex-row gap-[8px]  ">
            <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
              category
            </div>{" "}
           {categoryBoolean ?  <img src={TickCircle} alt="" /> : ''}
            </div>

            {isActive === "category" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div>
            {" "}
            <img src={Menu} alt="" />
          </div>
          <Button
            onClick={() => {
              setIsactive("description");
              dispatch(setRightRow("description"));
         
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
            <div className="flex flex-row gap-[8px]  ">
            <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
            Description
            </div>{" "}
            {descriptionBoolean ?  <img src={TickCircle} alt="" /> : ''}
            </div>
            {isActive === "description" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div>
            {" "}
            <img src={Menu} alt="" />
          </div>
          <Button
            onClick={() => {
              setIsactive("location");
              dispatch(setRightRow("location"));
             
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
             <div className="flex flex-row gap-[8px]  ">
            <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
            Location
            </div>{" "}
            {locationBoolean ?  <img src={TickCircle} alt="" /> : ''}
            </div>
            
            {isActive === "location" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div>
            {" "}
            <img src={Menu} alt="" />
          </div>
          <Button
            onClick={() => {
              setIsactive("benefits");
              dispatch(setRightRow("benefits"));
        
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
             <div className="flex flex-row gap-[8px]  ">
            <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
            Benefits
            </div>{" "}
            {benefitBoolean ?  <img src={TickCircle} alt="" /> : ''}
            </div>
            {isActive === "benefits" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div>
            {" "}
            <img src={Menu} alt="" />
          </div>
          <Button
            onClick={() => {
              setIsactive("introVideo");
              dispatch(setRightRow("introVideo"));
              
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
              <div className="flex flex-row gap-[8px]  ">
            <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
            Intro Videos
            </div>{" "}
            {introVideosBoolean ?  <img src={TickCircle} alt="" /> : ''}
            </div>
            {isActive === "introVideo" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div>
            {" "}
            <img src={Menu} alt="" />
          </div>
          <Button
            onClick={() => {
              setIsactive("mentorDetails");
              dispatch(setRightRow("mentorDetails"));
              
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
             <div className="flex flex-row gap-[8px]  ">
            <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
           Mentor Details
            </div>{" "}
            {mentorDetailsBoolean ?  <img src={TickCircle} alt="" /> : ''}
            </div>
            {isActive === "mentorDetails" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div>
            {" "}
            <img src={Menu} alt="" />
          </div>
          <Button
            onClick={() => {
              setIsactive("recommendedRoles");
              dispatch(setRightRow("recommendedRoles"));
             
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
              <div className="flex flex-row gap-[8px]  ">
            <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
            Recommended Roles
            </div>{" "}
            {recommendedRolesBoolean ?  <img src={TickCircle} alt="" /> : ''}
            </div>
            {isActive === "recommendedRoles" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div>
            {" "}
            <img src={Menu} alt="" />
          </div>
          <button
            onClick={() => {
              setIsactive("webLinks");
              dispatch(setRightRow("webLinks"));
              
            }}
            className="flex items-center justify-between text-center p-[20px] w-[604px] h-[64px] bg-white border py-[10px] rounded-2xl border-[#E0E0E0] focus:border-[#793EF5] focus:shadow-xl"
          >
              <div className="flex flex-row gap-[8px]  ">
            <div className="capitalize font-[SpaceGrotesk] text-[#333333] text-[18px] leading-6 tracking-wide   ">
            Web Links and Resources
            </div>{" "}
            {webLinksBoolean ?  <img src={TickCircle} alt="" /> : ''}
            </div>
            {isActive === "webLinks" ? (
              <img src={Arrow} alt="" />
            ) : (
              <img src={Arrow2} alt="" />
            )}
          </button>
        </div>
        <button className=" border-dashed border-2 ml-10 border-[#793EF5] py-[16px] px-[24px] gap-[4px] items-center justify-center flex rounded-2xl w-[606px] h-[56px]">
          <img src={Square} alt="" />{" "}
          <span className="capitalize font-[SpaceGrotesk] text-[#793EF5] text-[16px] leading-6 tracking-wide">
            add more
          </span>
        </button>
      </div>
    </div>
  );
}

export default Left;

const Button = styled.button`
  border: {}
  }
`;

// #793EF5
// #E0E0E0
