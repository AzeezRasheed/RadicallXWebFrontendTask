import React, { useState } from "react";
import RadicalX from "../../assets/RadicalX.png";
import Dashboard from "../../assets/dashboard-3.png";
import Briefcase from "../../assets/briefcase.png";
import Settings from "../../assets/setting-2.png";
import {SlBookOpen} from 'react-icons/sl'
import './button.css'
import ModelStar from "../../assets/medal-star.png";

const Overview = () => {
  const [clicked, setClicked] = useState('');
 
  return (
    <div className=" relative ">
      <div className="absolute  top-[16px] rounded-2xl w-[229px] h-[950px] flex flex-col items-start justify-between bg-white px-[34px] py-[20px] ">
        <article className=" flex flex-col items-start gap-[25px]">
          <img src={RadicalX} className="mb-12" alt="" />
         <button className={`styleButton flex gap-2 ${clicked === 'dashboard' ? 'active' : ''} `} onClick={() => {setClicked('dashboard')}}>
               <img src={Dashboard} alt="" /> <span>Dashboard</span>
          </button>

          <button className={`styleButton flex gap-2 ${clicked === 'apprenterships'  ? 'active' : ''} `} onClick={() => {setClicked('apprenterships')}}>
          <img src={ModelStar} alt="" /> <span>Apprenterships</span>
          </button>

          <button className={`styleButton flex gap-2 items-center ${clicked === 'internships'  ? 'active' : ''} `} onClick={() => {setClicked('internships')}}>
           <SlBookOpen className="text-xl"/><span>Internships</span>
          </button>

          <button className={`styleButton flex gap-2 ${clicked === 'jobs'  ? 'active' : ''} `} onClick={() => {setClicked('jobs')}}>
          <img src={Briefcase} alt="" /> <span>Jobs</span>
          </button>

          <button className={`styleButton flex gap-2 ${clicked === 'settings'  ? 'active' : ''} `} onClick={() => {setClicked('settings')}}>
          <img src={Settings} alt="" /> <span>Settings</span>
          </button>

      
        </article>
        <footer className="flex gap-2 items-center ">
          <img
            className="rounded-xl h-10 w-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLg7YYue_VyRsQLCwmguYP8nSLBwe24G8WgqJr8i_YxHwyHXbn9wqkZXAwdAvSGF9kVMk&usqp=CAU"
            alt=""
          />
          <span>Abdulazeez Abdulrasheed</span>
        </footer>
      </div>
    </div>
  );
};

export default Overview;



