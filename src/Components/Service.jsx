import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import image2 from "../assets/images/Rectangle 27-1.png";
import image1 from "../assets/images/Rectangle 27-2.png";
import image3 from "../assets/images/Rectangle 27.png";
import ServiceCom from "./ServiceCom";

const Service = () => {
  return (
    <div className="py-10 bg-[#fffff5] p-6 rounded-3xl mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <button className="border-[2px] border-[#020043] py-1 lg:py-2 px-4 lg:px-8 rounded-full text-xl bg-gray-100 text-[#020043aa]">
            Service
          </button>
          <h2 className="text-2xl md:text-4xl font-bold leading-[1.3] text-[#020043]">
            Empowering Health, Enriching Lives
          </h2>
          <p className="text-[#020043] pb-3">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className="bg-[#ffcc00] px-3 py-2 rounded-xl text-[#020043] font-semibold flex items-center">
            Appointment
            <MdOutlineArrowOutward className="pl-1 text-xl" />
          </button>
        </div>
        <ServiceCom
          image={image1}
          title="Advanced Technology"
          details="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
        />
      </div>

      <div className="lg:flex justify-between mt-16 gap-6">
        <ServiceCom
          image={image2}
          title="Online Doctor Meet"
          details="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
        />
        <ServiceCom
          image={image3}
          title="Consultancy your health"
          details="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
        />
      </div>
    </div>
  );
};

export default Service;
