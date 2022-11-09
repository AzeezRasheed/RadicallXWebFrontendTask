import React, {useState} from 'react'
import Square from "../../assets/webLinks/add-square.png";
import Link from "../../assets/webLinks/link.png";
import { useDispatch } from "react-redux";
import { setWebLinksBoolean } from "../../redux/reducer";


function WebLinksAndResources() {
 
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("");
  
    if (selectedCategory) {
      dispatch(setWebLinksBoolean(true));
    } else dispatch(setWebLinksBoolean(false));
  
  
    return (
      <div className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[200px]  bg-white rounded-2xl ">
        <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
            Web Links and Resources
        </h1>
  
     <div className='w-[600px] relative flex flex-col py-[10px] px-[16px] gap-[8px] h-[48px] bg-[#F1F4F8] border border-solid border-[#CECECE] rounded-2xl  '>
     <input
        placeholder="Add URL"
        value={selectedCategory}
        onChange={(e) => {
            setSelectedCategory(e.target.value);
        }}
        className="w-[570px] absolute right-[1px] top-[2px] flex flex-col py-[10px] px-[16px] h-[37px] bg-transparent rounded-2xl focus:outline-none "
      />
     <img src={Link} alt="" className='absolute top-3'/>
  </div>

  <button className='flex flex-row text-[#793EF5] justify-center items-center py-[8px] px-[16px] gap-[6px] w-[121px] h-[38px] bg-white border border-dashed border-[#793EF5] rounded-2xl'>
<img src={Square} alt="" /> <p className='text-[15px] font-medium leading-[22px] font-sans '>Add URL</p>
  </button>
     
      </div>
    );
}

export default WebLinksAndResources
