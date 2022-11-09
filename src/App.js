import React from "react";
import Arrow from "../src/assets/arrow-left.png";
import Arrow2 from "../src/assets/arrow/arrow-right.png";
import Left from "./components/left-row";
import Right from "./components/right-row";
import ArrowRight from "../src/assets/arrow-right.png";
import Tick from "../src/assets/aright/tick-circle.png";
import UntickCircle from "./assets/untick-circle(1).png";
import { useSelector } from "react-redux";
import InternshipGuide from "./page/InternshipGuide";
import Surveys from "./page/Surveys";

import {Routes,Route} from "react-router-dom"
import Settings from "./page/Settings";
import HomePage from "./components/HomePage/HomePage";
import InternshipDescription from "./components/InternshipDescription/InternshipDescription";

function App() {
  const overviewBoolean = useSelector((state) => state.reducer.overviewBoolean);
  const scheduleBoolean = useSelector((state) => state.reducer.scheduleBoolean);
  const resourcesBoolean = useSelector(
    (state) => state.reducer.resourcesBoolean
  );

  const survey1Boolean = useSelector((state) => state.reducer.survey1Boolean);
  const survey2Boolean = useSelector((state) => state.reducer.survey2Boolean);
  const basicSettingsBoolean = useSelector(
    (state) => state.reducer.basicSettingsBoolean
  );
  const heroImageBoolean = useSelector(
    (state) => state.reducer.heroImageBoolean
  );

  return (
    <section className=" relative items-center mx-auto container flex">
     <Routes>
     <Route path="/" element={ <HomePage/>}/>
     <Route path="/internshipdescription" element={ <InternshipDescription/>}/>
      <Route path="/internshipguide" element={ <InternshipGuide/>}/>
      <Route path="/surveys" element={ <Surveys/>}/>
      <Route path="/settings" element={ <Settings/>}/>
     </Routes>
    </section>
  );
}

export default App;
