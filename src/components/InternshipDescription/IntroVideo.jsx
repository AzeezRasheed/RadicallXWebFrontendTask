import React, { useState } from "react";
import Document from "../../assets/document-upload.png";
import Close from "../../assets/close.png";
import { useDispatch, useSelector } from "react-redux";
import { setIntroVideosBoolean } from "../../redux/reducer";
import { useRef } from "react";
import { useEffect } from "react";

function IntroVideo({ forIntroVideo }) {
  const introVideosBoolean = useSelector(
    (state) => state.reducer.introVideosBoolean
  );
  const drop = useRef(null);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [forIntroVideoFiles, setForIntroVideoFiles] = useState([]);
  const [bool, setBool] = useState(false);
  forIntroVideo(forIntroVideoFiles);

  const onUpload = (files) => {
    setValue(files[0].name);
    setForIntroVideoFiles(files);
    setBool(true);
  };

  useEffect(() => {
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);
    return () => {
      drop.current.removeEventListener("dragover", handleDragOver);
      drop.current.removeEventListener("drop", handleDrop);
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && files.length) {
      onUpload(files);
    }
  };

  useEffect(() => {
    if (bool) {
      dispatch(setIntroVideosBoolean(true));
    } else dispatch(setIntroVideosBoolean(false));
  }, [bool]);
 

  return (
    <div ref={drop} className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[222px]  bg-white rounded-2xl ">
      <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
        Intro Video
      </h1>

      <div  className="FilesDragAndDrop">
        <label class="flex justify-center w-[600px] h-[68px] py-[24px] px-[20px] transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span class="flex items-center space-x-2">
            <span class="font-medium text-gray-600">
              Drag n drop to upload your video
            </span>
            <img src={Document} alt="" />
          </span>
        </label>
      </div>
      {/* Category button */}
      {value && (
        <div className="flex gap-[24px] flex-row justify-center py-[10px] px-[16px]  h-[40px] border border-solid border-[#793EF5] rounded-2xl bg-[#EDEAFF]">
          <p className=" h-[22px] font-semibold text-[15px] leading-[22px] text-[#793EF5]">
            {value}
          </p>

          <button
            className="w-[22px] h-[22px] opacity-50"
            onClick={() => {
              setValue("");
              setForIntroVideoFiles([]);
              setBool(false);
            }}
          >
            {" "}
            <img src={Close} alt=""></img>{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default IntroVideo;
