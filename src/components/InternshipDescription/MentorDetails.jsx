import React, { useState } from "react";
import Profile from "../../assets/profile.png";
import Sms from "../../assets/sms.png";
import Link from "../../assets/link.png";
import Image1 from "../../assets/Frame.png";

import { useDispatch } from "react-redux";
import { setMentorDetailsBoolean } from "../../redux/reducer";
import { useRef } from "react";
import { useEffect } from "react";

function MentorDetails() {
const [value, setValue] = useState([])
console.log(value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const dispatch = useDispatch();

  const arr = [];
  const drop = useRef(null);

  useEffect(() => {
    drop.current.addEventListener("dragover", handleOndragOver);
    drop.current.addEventListener("drop", handleOndrop);
    return () => {
      drop.current.removeEventListener("dragover", handleOndragOver);
      drop.current.removeEventListener("drop", handleOndrop);
    };
  }, []);


  const handleOndragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOndrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let imageFile = e.dataTransfer.files[0];
    handleFile(imageFile);
  };

  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setValue(file)
  };

  if (name && email && linkedinUrl) {
    arr.push({
        name: name,
        email: email,
        linkedinUrl: linkedinUrl,
        image: image,
        previewUrl: previewUrl,
      });
    dispatch(setMentorDetailsBoolean(true));
  } else dispatch(setMentorDetailsBoolean(false));

  console.log(arr);
  return (
    <div ref={drop} className="flex relative flex-col items-start p-[24px] gap-[24px] w-[638px] h-[314px]  bg-white rounded-2xl ">
      <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
        Mentor Details
      </h1>

      <div className="w-[80px] h-[80px] bg-[#E2E6EB] rounded-[20px] relative" >
        <div >
          {previewUrl && (
            <img
              src={previewUrl}
              className="w-[80px] h-[80px] bg-[#E2E6EB] rounded-[20px]"
              alt="image"
            />
          )}
        </div>
      </div>

      <img
        src={Image1}
        className=" absolute w-[28px] h-[28px] top-[125px] left-[82px] "
        alt="image"
      />

      <div className="flex flex-row items-start p-0 gap-[18px]  h-[48px] ">
        <div className=" relative flex flex-row items-start pt-[12px] pb-[12px] pr-[12px] pl-[16px] w-[285px] h-[48px] bg-white border border-solid border-[#CECECE] rounded-xl  ">
          <img src={Profile} alt="image" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="flex flex-row w-[280px] px-[25px] py-[9px] left-5 absolute top-[1px] bg-transparent focus:outline-none rounded-xl"
          />
        </div>

        <div className=" relative flex flex-row items-start pt-[12px] pb-[12px] pr-[12px] pl-[16px] w-[285px] h-[48px] bg-white border border-solid border-[#CECECE] rounded-xl  ">
          <img src={Sms} alt="image" />
          <input
            type="text"
            placeholder="Email Adress"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="flex flex-row  w-[276px] px-[25px] py-[9px] left-6 absolute top-[1px] bg-transparent focus:outline-none rounded-xl"
          />
        </div>
      </div>
      <div className=" relative flex flex-row items-start pt-[12px] pb-[12px] pr-[12px] pl-[16px] w-[590px] h-[48px] bg-white border border-solid border-[#CECECE] rounded-xl  ">
        <img src={Link} alt="image" />
        <input
          type="text"
          placeholder="Linkedin URL (optional)"
          value={linkedinUrl}
          onChange={(e) => {
            setLinkedinUrl(e.target.value);
          }}
          className="flex flex-row  w-[580px] px-[25px] py-[9px] left-6 absolute top-[1px] bg-transparent focus:outline-none rounded-xl"
        />
      </div>
    </div>
  );
}

export default MentorDetails;
