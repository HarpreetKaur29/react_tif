import React from "react";
import Logo from "../Assets/Images/Logo.png";
import insta from "../Assets/Images/insta.png";
import twit from "../Assets/Images/twit.png";
import face from "../Assets/Images/face.png";

const Footer = () => {
  return (
    <div className="  py-20 bg-[#F8F8F8]">
        <div className="container mx-auto flex md:flex-row flex-col md:px-0 px-6 md:gap-y-0 gap-y-12 items-strecth justify-between">
      <div className="self-center">
        <img src={Logo} alt="Logo" className="w-36" />
      </div>
      <div className="self-start flex flex-col gap-y-7 md:w-1/4">
        <h3 className="text-xl font-bold">Contact Us</h3>
        <p className="text-[#646874]">
        Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
        </p>
        <p className="text-[#646874]">example2020@gmail.com</p>
        <p className="text-[#646874]">(904) 443-0343</p>
      </div>
      <div>
        <ul className="flex flex-col gap-y-7">
          <li>
            <h3 className="text-xl font-bold">More</h3>
          </li>
          <li className="text-[#646874]">About Us</li>
          <li className="text-[#646874]">Products</li>
          <li className="text-[#646874]">Career</li>
          <li className="text-[#646874]">Contact Us</li>
        </ul>
      </div>
      <div className="flex flex-col justify-between">
        <div>
        <h3 className="text-xl font-bold mb-3">Social Link</h3>
        <div className="flex items-center justify-start md:mb-0 mb-12">
          <img src={insta} alt="insta" />
          <img src={twit} alt="twit" className="mx-8" />
          <img src={face} alt="face" />
        </div>
        </div>
        <div className="text-[#828B9C]">
        &copy;2022 Food Truck Example
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
