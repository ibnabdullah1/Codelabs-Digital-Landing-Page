import { MdOutlineArrowOutward } from "react-icons/md";
import image from "../assets/images/Rectangle 32.png";
import logo from "../assets/images/logo light.png";
const Appointment = () => {
  return (
    <div className=" py-20 ">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2, 0, 67, 0.9) 20%, rgba(2, 0, 67, 0.2) 100%), url("${image}")`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" py-14 md:py-24 relative rounded-3xl px-5 md:px-10 space-y-4"
      >
        <img className="absolute w-[100px] right-10 top-10" src={logo} alt="" />

        <h2 className="text-2xl md:text-4xl font-bold w-[500px] leading-[1.3] text-[rgb(255,255,255)]">
          Get Your <br />
          First Appointment <br />
          at 50% off!
        </h2>
        <div className="flex gap-3 items-center">
          <button className="bg-[#ffcc00] px-3 py-2  rounded-lg text-[#020043] font-semibold flex items-center">
            Appointment
            <MdOutlineArrowOutward className="pl-1 text-xl " />
          </button>
          <button className="border border-[#ffffff] px-3 py-2  rounded-lg text-[#ffffff] font-semibold flex items-center">
            Appointment
            <MdOutlineArrowOutward className="pl-1 text-xl " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
