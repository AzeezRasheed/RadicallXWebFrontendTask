import React from "react";
import Survey1 from "../Survey1"
import Survey2 from "../Survey2"

import { useSelector } from "react-redux";


function Right() {
  const rightRow = useSelector((state) => state.reducer.rightRow);
  const ForRightRow = () => {
    if (rightRow === "survey1") {
      return (
        <Survey1/>
      );
    } else if (rightRow === "survey2") {
      return <Survey2 />;
    } else return <></>;
  };

  return (
    <div className="absolute left-[660px] top-[212px]">{ForRightRow()}</div>
  );
}

export default Right;
