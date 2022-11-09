import React, {useState} from "react";
import Close from "../../assets/close.png";
import { useDispatch, useSelector } from "react-redux";
import { setDescriptionBoolean } from "../../redux/reducer";

function Description() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  if (value) {
    dispatch(setDescriptionBoolean(true));
  } else dispatch(setDescriptionBoolean(false));

  return (
    <div className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[287px]  bg-white rounded-2xl ">
      <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
        Description
      </h1>
      <textArea
        placeholder="Description"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="w-[600px] flex flex-col py-[10px] px-[16px] gap-[8px] h-[197px] bg-[#F1F4F8] border border-solid border-[#CECECE] rounded-2xl  "
      />
    </div>
  );
}

export default Description;
