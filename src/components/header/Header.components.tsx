import LogoNortechApp from "/images/logo-nortechapp.png";
import emails from "/images/icons/emails.png";
import { LuMenu } from "react-icons/lu";

export const Header = () => {
  
  return(
    <div className="px-28 py-[18px] flex justify-between bg-white bg-opacity-[0.04] border-b border-b-white border-opacity-[0.08]">
      <div className="w-[650px] flex gap-6 items-center">
        <img src={LogoNortechApp} alt="logo NortechAPP" className="h-9 w-40"/>
        <div className="flex border w-[22px] bg-white opacity-20 rotate-90 h-[1px]"/>
        <div className="flex gap-2">
          <h3 className=" text-white text-base">
            More
          </h3>
          <h3 className=" text-white opacity-40 text-base">
            than a Study platform
          </h3>
        </div>
        
      </div>

      <div className="flex gap-6 items-center">
        <button className="flex gap-[10px] py-[15px] bg-[#9841FF] text-white border-4 rounded-lg border-solid border-[#9841FF] border-opacity-25 " 
        style={{ boxShadow: "0px 8px 24px 0px #AE6BFF40" }}>
          <img src={emails} className="size-6"/>
          Join the whitelist
        </button>
        <LuMenu className="text-white size-6"/>
      </div>
    </div>
  );
};
