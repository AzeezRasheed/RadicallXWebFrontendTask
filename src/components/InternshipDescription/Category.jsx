import React, { useState } from "react";
import Close from "../../assets/close.png";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryBoolean } from "../../redux/reducer";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Category() {
  const dispatch = useDispatch();
 
  const [selectedCategory, setSelectedCategory] = useState("");

  if (selectedCategory) {
    dispatch(setCategoryBoolean(true));
  } else dispatch(setCategoryBoolean(false));


  return (
    <div className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[200px]  bg-white rounded-2xl ">
      <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
        Category
      </h1>

      <form className="w-[600px] flex-col flex items-center p-0 h-[110px]">
        <div class="relative w-full">

          <FormControl>
            {!selectedCategory && (
              <InputLabel>Search Category</InputLabel>
            )}
            <Select
              style={{borderRadius: "16px"}}
              className="mainLoginInput absolute w-[600px] h-[48px] bg-[#F1F4F8] border border-solid border-[#CECECE] rounded-2xl py-[10px] px-[16px] items-center flex flex-row gap-[8px]"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
            >
              <MenuItem value={"Technology"}>Technology</MenuItem>
              <MenuItem value={"Development"}>Development</MenuItem>
            </Select>
          </FormControl>

          <button
            type="submit"
            class="absolute top-1 right-2 py-[10px] gap-[8px] text-[#8A8B8C] bg-[#F1F4F8] rounded-r-2xl focus:outline-none "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
      <div className="flex flex-row items-start p-0 gap-[10px] w-[600px] h-[46px] ">
        {/* Category button */}

        {selectedCategory && (
          <div className="flex gap-[6px] flex-row justify-center pt-[12px] pr-[12px] pb-[12px] pl-[16px] w-[152px] h-[46px] border border-solid border-[#793EF5] rounded-2xl bg-purple-200">
            <p className="w-[96px] h-[22px] font-semibold text-[15px] leading-[22px] text-[#793EF5]">
              {selectedCategory}
            </p>
            <button
              className="w-[22px] h-[22px] opacity-50"
              onClick={() => {
                setSelectedCategory("");
              }}
            >
              {" "}
              <img src={Close} alt=""></img>{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
