import React from "react";
import Overview from "./Overview";
import Schedule from "./Schedule";
import BasicSettings from "./BasicSettings";
import Resources from "./Resources";

import { useSelector } from "react-redux";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import HeroImage from "./HeroImage";

function Right() {
  const rightRow = useSelector((state) => state.reducer.rightRow);

  const forIntroVideoFiles = (files) => {};
  const CuratedVideo = (files) => {};
  const EventsVideo = (files) => {};
  const BriefVideo = (files) => {};
  const RequirementsVideo = (files) => {};
  const MilestonesVideo = (files) => {};
  const DurationVideo = (files) => {};
  const TimelineVideo = (files) => {};
  const DeliverablesVideo = (files) => {};
  const ForRightRow = () => {
    if (rightRow === "overview") {
      return (
        <Overview
          BriefVideo={BriefVideo}
          RequirementsVideo={RequirementsVideo}
          MilestonesVideo={MilestonesVideo}
        />
      );
    } else if (rightRow === "schedule") {
      return (
        <Schedule
          DurationVideo={DurationVideo}
          TimelineVideo={TimelineVideo}
          DeliverablesVideo={DeliverablesVideo}
        />
      );
    } else if (rightRow === "resources") {
      return (
        <Resources CuratedVideo={CuratedVideo} EventsVideo={EventsVideo} />
      );
    } else if (rightRow === "survey1") {
      return <Survey1 forIntroVideo={forIntroVideoFiles} />;
    } else if (rightRow === "survey2") {
      return <Survey2 />;
    } else if (rightRow === "basicSettings") {
      return <BasicSettings />;
    } else if (rightRow === "heroImage") {
      return <HeroImage />;
    } else return <></>;
  };

  return (
    <div className="absolute left-[660px] top-[212px]">{ForRightRow()}</div>
  );
}

export default Right;
