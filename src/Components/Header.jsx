import React from "react";
import Logo from "../Assets/Images/Logo.png";
import HeroImage from "../Assets/Images/HeroImg.png";
import HeroShape from "../Assets/Images/Vector_pic.png";

const Header = () => {
  return (
    <div className=" flex mx-auto  justify-between items-stretch relative md:flex-row flex-col-reverse lg:min-h-screen max-w-[1920px]">
        <img src={Logo} alt="Logo" className="top-1 left-24  mt-4 absolute lg:flex hidden" />
      <div className="hero-text flex flex-col md:text-left md:w-3/5 items-center text-center  self-center md:items-start gap-y-10 relative px-6 md:pl-24 pt-16">
        <h1 className="text-7xl font-bold font-Source Sans Pro text-[#0E2368] md:w-[60%] leading-[120%]">
          Discover the <span className="text-[#E23744]">Best</span> Food and Drinks
        </h1>
        <p className="md:w-2/5">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button className="px-8 py-3 bg-primary text-white rounded-full text-xl font-bold w-56 h-18">
          Explore Now!
        </button>
      </div>
      <div className="relative flex-1 md:w-4/12">
        <img src={HeroImage} alt="HeroImage" className="w-full" />
        <div className="absolute top-0 right-0 -left-6">
          <div className="relative">
            <img src={HeroShape} alt="HeroShape" />
            <button className="bg-primary text-white font-bold py-2 px-4 rounded-full border-2 border-white absolute top-0 right-0 mt-4 mr-4 z-10">
            Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
