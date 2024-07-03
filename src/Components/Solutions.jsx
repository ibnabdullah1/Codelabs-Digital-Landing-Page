import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import image from "../assets/images/Rectangle 24.png";
const Solutions = () => {
  return (
    <div className="pt-10 pb-20 lg:flex ">
      <div className="space-y-4 lg:flex-1">
        <button className="border-[2px] border-[#020043] py-1 lg:py-2 px-4  rounded-full d:text-xl bg-[#fffff5a3] text-[#020043]">
          Who we are
        </button>
        <h2 className="text-2xl md:text-4xl font-bold lg:w-[500px] leading-[1.3] text-[#020043]">
          We Help To Get Solutions
        </h2>
        <p className=" text-[#020043] lg:w-[80%] pb-3">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="bg-[#ffcc00] px-3 py-2  rounded-xl text-[#020043] font-semibold flex items-center">
          Learn more
          <MdOutlineArrowOutward className="pl-1 text-xl " />
        </button>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(30deg , rgba(0, 0, 0,0.2) 10%, rgba(0, 0, 0,0.4) 100%), url("${image}")`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative lg:flex-1 lg:mt-0 mt-6 h-[400px] lh:h-auto rounded-[30px] "
      >
        <div className="absolute lg:bg-[#1a175d] w-full bg-[#1a175db7] rounded-b-[30px] lg:rounded-[30px] py-10 px-8 text-white space-y-4 bottom-0 lg:-bottom-12 lg:w-[450px] lg:-left-[100px]">
          <h3 className="text-3xl">Our mission is simple</h3>
          <p className="text-[#b6b5c6] ">
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
