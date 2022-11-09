import React, { useState } from "react";
import Close from "../assets/close.png";
import { useDispatch } from "react-redux";
import { setResourcesBoolean } from "../redux/reducer";
import { useRef } from "react";
import { useEffect } from "react";

function Resources({CuratedVideo,EventsVideo}) {
  const dispatch = useDispatch();

  const drop1 = useRef(null);
  const drop2 = useRef(null);

  const [bool, setBool] = useState(false);

  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");

  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const [forCuratedResourcesFiles, setForCuratedResourcesFiles] = useState([]);
  const [forEventsVideoFiles, setForEventsVideoFiles] = useState([]);

  CuratedVideo(forCuratedResourcesFiles);
  EventsVideo(forEventsVideoFiles);
  if ( value2 || value3 || description1 || description2 ) {
    dispatch(setResourcesBoolean(true));
  } else dispatch(setResourcesBoolean(false));

  const onUpload1 = (files) => {
    setValue2(files[0].name);
    setForCuratedResourcesFiles(files);
    setBool(true);
  };
  
  const onUpload2 = (files) => {
    setValue3(files[0].name);
    setForEventsVideoFiles(files);
    setBool(true);
  };

  
  // for First Video
  const handleDragOver1= (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop1 = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    const { files } = e.dataTransfer;
  
    if (files && files.length) {
      onUpload1(files);
    }
  };
  useEffect(() => {
    drop1.current.addEventListener("dragover", handleDragOver1);
    drop1.current.addEventListener("drop", handleDrop1);
    return () => {
      drop1.current.removeEventListener("dragover", handleDragOver1);
      drop1.current.removeEventListener("drop", handleDrop1);
    };
  }, []);
  
  
  // for Second Video
  const handleDragOver2= (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop2 = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    const { files } = e.dataTransfer;
  
    if (files && files.length) {
      onUpload2(files);
    }
  };

  useEffect(() => {
    drop2.current.addEventListener("dragover", handleDragOver2);
    drop2.current.addEventListener("drop", handleDrop2);
    return () => {
      drop2.current.removeEventListener("dragover", handleDragOver2);
      drop2.current.removeEventListener("drop", handleDrop2);
    };
  }, []);
  
 

  return (
    <div className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] mb-10  bg-white rounded-2xl ">
      {/* curated resources */}
     <div className="flex flex-col items-start  gap-[24px]  bg-white rounded-2xl">
     <div ref={drop1} className=" flex flex-col gap-[24px]">
     <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
       curated resources
      </h1>

     
        <textArea
        placeholder="Description"
        value={description1}
        onChange={(e) => {
          setDescription1(e.target.value);
        }}
        className="w-[600px] flex flex-col py-[10px] px-[16px] gap-[8px] h-[48px] bg-[#F1F4F8] border border-solid border-[#CECECE] rounded-2xl  "
      />

 
      <label class="flex justify-center w-[600px] h-[68px] py-[24px] px-[20px] transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex items-center space-x-2">
          <span class="font-medium text-gray-600">
            Drag n drop to upload your video
          </span>
          <img src={Document} alt="" />
        </span>
      </label>
     </div>
   
    {/* curated resources button */}
    {value2 && (
      <div className="flex gap-[24px] flex-row py-[10px] px-[16px]   border border-solid border-[#793EF5] rounded-2xl bg-[#EDEAFF]">
        <p className="  font-semibold text-[15px] leading-[22px] text-[#793EF5]">
          {value2}
        </p>
        <button
          className="w-[22px] h-[22px] opacity-50"
          onClick={() => {
            setValue2("");
            setForCuratedResourcesFiles([]);
            setBool(false);
          }}
        >
          {" "}
          <img src={Close} alt=""></img>{" "}
        </button>
      </div>
    )}
     </div>


           {/* events resources */}
     <div className="flex flex-col items-start  gap-[24px] mb-10 bg-white rounded-2xl">
     <div ref={drop2} className=" flex flex-col gap-[24px]">
     <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
       events resources
      </h1>

     
        <textArea
        placeholder="Description"
        value={description2}
        onChange={(e) => {
          setDescription2(e.target.value);
        }}
        className="w-[600px] flex flex-col py-[10px] px-[16px] gap-[8px] h-[48px] bg-[#F1F4F8] border border-solid border-[#CECECE] rounded-2xl  "
      />

 
      <label class="flex justify-center w-[600px] h-[68px] py-[24px] px-[20px] transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span class="flex items-center space-x-2">
          <span class="font-medium text-gray-600">
            Drag n drop to upload your video
          </span>
          <img src={Document} alt="" />
        </span>
      </label>
     </div>
   
    {/* curated resources button */}
    {value3 && (
      <div className="flex gap-[24px] flex-row py-[10px] px-[16px]   border border-solid border-[#793EF5] rounded-2xl bg-[#EDEAFF]">
        <p className="  font-semibold text-[15px] leading-[22px] text-[#793EF5]">
          {value3}
        </p>
        <button
          className="w-[22px] h-[22px] opacity-50"
          onClick={() => {
            setValue3("");
            setForEventsVideoFiles([]);
            setBool(false);
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

export default Resources;
