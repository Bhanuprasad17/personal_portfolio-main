import { gmail } from "../assets";
import { location } from "../assets";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-80 bg-black pt-10flex flex-col items-center">
      <div className="w-10/12 mx-auto text-center">
        <div className="flex justify-start">
          <SocialMediaIcons />
        </div>
        <div className="text-start">
          <p className="font-righteous font-semibold text-3xl text-purple">
            BHANUPRASAD SURAM
          </p>
          <div className="font-righteous text-xl text-white flex align-middle gap-5 mt-3 mb-2">
            <img src={gmail} alt="" className="w-8 bg-white" />:{" "}
            <span>bhanuprasadsuram0018@gmail.com</span>
          </div>
          <div className="font-righteous text-xl text-white flex align-middle gap-5 mt-3 mb-2">
            <img src={location} alt="" className="w-8 bg-white" />:{" "}
            <span>Kamareddy, Telangana</span>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
