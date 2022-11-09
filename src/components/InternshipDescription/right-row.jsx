import React from 'react'
import Category from './Category'
import Description from './Description'
import Location from './Location'
import Benefits from './Benefits'

import { useSelector } from "react-redux";
import IntroVideo from './IntroVideo'
import MentorDetails from './MentorDetails'
import RecommendedRoles from './RecommendedRoles'
import WebLinksAndResources from './WebLinksAndResources'


function Right() {
  const rightRow = useSelector((state) => state.reducer.rightRow);

  const forIntroVideoFiles = (files) => {
 
  };

const ForRightRow = () => {
  if(rightRow === "category"){
    return  <Category/>;
  }else if(rightRow === "description"){
    return <Description/>
  }else if(rightRow === "location"){
  return <Location/>
  }else if(rightRow === "introVideo"){
    return <IntroVideo   forIntroVideo={forIntroVideoFiles}/>
  }else if(rightRow === "mentorDetails"){
    return <MentorDetails/>
  }else if(rightRow === "benefits"){
    return <Benefits/>
}else if(rightRow === "recommendedRoles"){
  return <RecommendedRoles/>
}else if(rightRow === "webLinks"){
  return <WebLinksAndResources/>}
  else return <></>;
}




  return (
   <div className='absolute left-[660px] top-[212px]'>
   {ForRightRow()} 
   </div>
  )
}

export default Right
