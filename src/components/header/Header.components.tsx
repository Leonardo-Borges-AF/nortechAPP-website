import LogoNortechApp from "/images/logo-nortechapp.png";
import emails from "/images/icons/emails.png";
import { LuMenu } from "react-icons/lu";

import "./header.css";

export const Header = () => {
  
  return(
    <div className="md:px-28 px-8 py-[18px]  flex justify-between bg-white bg-opacity-[0.04] border-b border-b-white border-opacity-[0.08]">
      <div className="w-[650px] flex gap-6 items-center">
        <img src={LogoNortechApp} alt="logo NortechAPP" className="h-9 w-40"/>
        <div className="hidden md:flex border w-[22px] bg-white opacity-20 rotate-90 h-[1px]"/>
        <div className="hidden md:flex gap-2">
          <h3 className=" text-white text-base">
            More
          </h3>
          <h3 className=" text-white opacity-40 text-base">
            than a Study platform
          </h3>
        </div>
        
      </div>

      <div className="flex gap-6 items-center">
        <button
        className="hidden md:flex gap-[10px] py-4 bg-[#9841FF]  border-4 rounded-lg border-solid border-[#9841FF] border-opacity-25 group hover:border-white animate-button " 
        style={{ boxShadow: "0px 8px 24px 0px #AE6BFF40" }}>
          <img src={emails} className="size-6 group-hover:filter group-hover:brightness-0 "/>
          <p className="text-white group-hover:text-black z-10">
            Join the whitelist
          </p>
          
        </button>
        <LuMenu className="text-white size-6"/>
      </div>
    </div>
  );
};
