import React from "react";
import Coin from "../assets/images/coin.png";
import contract from "../assets/images/contract.png";
import chart from "../assets/images/pie-chart.png";
import star from "../assets/images/star.png";
import videoChat from "../assets/images/video-chat.png";
const ComprehensiveCare = () => {
  return (
    <div className=" relative py-14">
      <h2 className="text-2xl md:text-4xl lg:absolute left-0 right-0 mx-auto font-bold lg:w-[500px] text-center text-[#020043] leading-[1.3]">
        Comprehensive Care for Every Patient{" "}
      </h2>
      <div className="lg:flex grid md:grid-cols-2 grid-cols-1 justify-between items-end gap-4 text-[#020043] py-10">
        <div className="lg:h-[310px] h-[170px]  rounded-3xl border flex-1 p-3 flex lg:flex-col justify-between bg-white">
          <div className=" p-2">
            <h2 className="text-2xl md:text-4xl font-bold">90%</h2>
            <p className="text-[18px]">
              Patient satisfaction rate, reflecting our commitment.
            </p>
          </div>
          <img className="h-[100px] w-auto mx-auto mb-2" src={chart} alt="" />
        </div>
        <div className="lg:h-[230px] h-[170px] rounded-3xl border flex-1 p-3  bg-[#fffff5] relative">
          <div className=" p-2">
            <h2 className="text-2xl md:text-4xl font-bold">50+</h2>
            <p className="text-[18px]">Board-certified doctors</p>
          </div>
          <img
            className="w-24 absolute right-4 bottom-7"
            src={contract}
            alt=""
          />
        </div>
        <div className="lg:h-[165px] h-[170px] rounded-3xl border flex-1 p-3 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-4xl font-bold">4.8</h2>
              <img className="h-[50px] w-auto" src={star} alt="" />
            </div>
            <p className="text-[18px]">Over 20,000 Patient</p>
          </div>

          <div className="flex mr-2">
            <img
              className=" rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
            <img
              className=" rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/31.jpg"
              alt=""
            />
            <img
              className=" rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt=""
            />
            <img
              className=" rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="lg:h-[230px] h-[170px]  rounded-3xl border flex-1 p-3  bg-[#fffff5] relative">
          <div className=" p-2">
            <h2 className="text-2xl md:text-4xl font-bold">50+</h2>
            <p className="text-[18px]">Board-certified doctors</p>
          </div>
          <img className="w-28 absolute right-4 bottom-5" src={Coin} alt="" />
        </div>
        <div className="lg:h-[310px] h-[170px] rounded-3xl border flex-1 p-3 flex lg:flex-col justify-between bg-white">
          <div className=" p-2">
            <h2 className="text-2xl md:text-4xl font-bold">50+</h2>
            <p className="text-[18px]">Free lesion video for patient</p>
          </div>
          <img
            className="h-[100px] w-auto mx-auto mb-2"
            src={videoChat}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCare;
