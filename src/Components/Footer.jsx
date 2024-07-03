import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../assets/images/logo light.png";

const Footer = () => {
  return (
    <footer className="text-[#c3c2de] px-10 md:px-20 py-20 bg-[#110f3f] ">
      <div className="container mx-auto ">
        <img src={logo} alt="Logo" className="mb-7" />
        <div className="lg:flex justify-between  md:grid grid-cols-1 md:grid-cols-2">
          <div className="mb-8 md:mb-0">
            <p className="mb-4">
              123 Main Street Anytown, USA
              <br />
              Postal Code: 12345
            </p>
            <p>
              <a
                href="mailto:support@oyolloo.com"
                className="hover:text-yellow-400 mb-4 font-normal"
              >
                Support: support@oyolloo.com
              </a>
            </p>
            <p className="hover:text-yellow-400 mb-4 font-normal">
              (Available: 10:00am to 07:00pm)
            </p>
          </div>
          <div className="mb-8 md:mb-5">
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-400 mb-4 font-normal">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-400 mb-4 font-normal">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-400 mb-4 font-normal">
                  Success Page
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-400 mb-4 font-normal">
                  Terms And Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-400 mb-4 font-normal">
                  Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-400 mb-4 font-normal">
                  Scheduling
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-400 mb-4 font-normal">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-yellow-400 mb-4 font-normal">
                  Patient Portal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg  mb-2">Follow Us</h3>

            <div className="flex gap-6 items-center mb-6">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </div>

            <p>@Docplus 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
