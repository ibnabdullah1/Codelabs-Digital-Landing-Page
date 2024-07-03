import Appointment from "../../Components/Appointment";
import Reviews from "../../Components/Clients/Clients";
import ComprehensiveCare from "../../Components/ComprehensiveCare";
import FAQs from "../../Components/FAQs";
import Service from "../../Components/Service";
import Solutions from "../../Components/Solutions";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <ComprehensiveCare />
      <Solutions />
      <Service />
      <Reviews />
      <FAQs />
      <Appointment />
    </div>
  );
};

export default Home;
