import React from "react";
import BasicSettings from "../BasicSettings"
import HeroImage from "../HeroImage"

import { useSelector } from "react-redux";


function Right() {
  const rightRow = useSelector((state) => state.reducer.rightRow);
  const ForRightRow = () => {
    if (rightRow === "basicSettings") {
      return (
        <BasicSettings/>
      );
    } else if (rightRow === "heroImage") {
      return <HeroImage />;
    } else return <></>;
  };

  return (
    <div className="absolute left-[660px] top-[212px]">{ForRightRow()}</div>
  );
}

export default Right;
