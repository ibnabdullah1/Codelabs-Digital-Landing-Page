import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ServiceCom = ({ image, title, details }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(30deg, rgba(0, 0, 0,0.2) 10%, rgba(0, 0, 0,0.4) 100%), url("${image}")`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" rounded-[30px] relative lg:mb-0 mb-10  bg-white h-[370px]"
    >
      <div className="absolute lg:relative bg-[#1a175dc4] rounded-b-[30px] lg:rounded-[30px] py-5 px-5 text-white space-y-4 lg:left-7 bottom-0 lg:bottom-[-180px] lg:w-[70%]">
        <h3 className="text-xl md:text-3xl">{title}</h3>
        <p className="text-[#b6b5c6] w-[80%]">{details}</p>
        <button className="bg-[#ffcc00] p-3 absolute right-6 bottom-6 rounded-full text-[#ffffff] font-semibold flex items-center">
          <MdOutlineArrowOutward className="pl-1 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCom;
