import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { setLocationBoolean } from "../../redux/reducer";
import countries from "i18n-iso-countries";
import enLocate from "i18n-iso-countries/langs/en.json";
import itLocate from "i18n-iso-countries/langs/it.json";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel"
import LocationPng from "../../assets/location.png"
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

countries.registerLocale(enLocate);
countries.registerLocale(itLocate);

function Location() {
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState("");
  const selectedCountryHandler = (value) => {
    setSelectedCountry(value);
  };
  if (selectedCountry) {
    dispatch(setLocationBoolean(true));
  } else dispatch(setLocationBoolean(false));

  return (
    <div className="flex flex-col items-start p-[24px] gap-[24px] w-[638px] h-[138px]  bg-white rounded-2xl ">
      <h1 className="capitalize text-[24px] font-semibold leading-6 text-[#333333] tracking-wide">
        Location
      </h1>
   
      <div className="relative">
      <FormControl >
    { !selectedCountry && <InputLabel className="ml-7">Select Location</InputLabel>}
        <Select 
         style={{borderRadius: "16px"}}
          value={selectedCountry}
          onChange={(e) => {
            selectedCountryHandler(e.target.value);
          }}
          className="w-[600px] flex flex-row py-[10px] px-[16px] gap-[8px] h-[48px] bg-[#F1F4F8] border border-solid border-[#CECECE] "
        >
          {!!countryArr?.length &&
            countryArr.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      
      { !selectedCountry && <img src={LocationPng} className="absolute top-4 left-[16px]" />}
      </div>
    </div>
  );
}

export default Location;
