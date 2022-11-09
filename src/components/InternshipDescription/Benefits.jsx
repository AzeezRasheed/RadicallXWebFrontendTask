import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBenefitBoolean } from "../../redux/reducer";

function Benefits() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  if (value) {
    dispatch(setBenefitBoolean(true));
  } else dispatch(setBenefitBoolean(false));

  return (
    <div className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[287px]  bg-white rounded-2xl ">
      <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
        Benefits
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

export default Benefits;
