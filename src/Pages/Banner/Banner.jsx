import banner from "../../assets/images/Rectangle 5.png";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(30deg, rgba(0, 0, 0,0.1) 10%, rgba(0, 0, 0,0.2) 100%), url("${banner}")`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" justify-center items-center px-5 py-7 h-[500px] rounded-md lg:rounded-[60px]"
    />
  );
};

export default Banner;
