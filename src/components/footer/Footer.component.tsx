import { CiInstagram } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogoThin } from "react-icons/pi";
import LogoNortechApp from "/images/logo-nortechapp(footer).png";






export const Footer = () => {
  return (
    <div className="">
      <div className="px-28 py-20 flex gap-[10px] border-t border-t-white border-opacity-15 bg-white z-50 md:block sm:hidden xs:hidden">
        <div className="flex flex-col gap-[148px] max-w-[1440px] mx-auto">
          <div className="flex gap-28">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <img src={LogoNortechApp} alt="logo" className="w-[169px] h-10 z-10 " />
                <p className="text-[#212529]">
                  Your best crypto partner.
                </p>
              </div>

              <div className="flex gap-6">
                <a href="https://www.linkedin.com/company/nortechapp" target="_blank" rel="noopener noreferrer"><PiLinkedinLogoThin className="size-[35px] hover:text-[#6001D1]" /></a>
                <a href="https://www.instagram.com/nortechapp" target="_blank" rel="noopener noreferrer"><CiInstagram className="size-[35px] hover:text-[#6001D1]" /></a>
                <a href="https://x.com/NortechApp" target="_blank" rel="noopener noreferrer"><FaXTwitter className="size-[35px] opacity-70 hover:text-[#6001D1]"  /></a>
                <a href="https://discord.gg/Uxb3qkhd" target="_blank" rel="noopener noreferrer"><FaDiscord className="size-[35px] opacity-70 hover:text-[#6001D1]" /></a>
                
              </div>

            </div>

            
          </div>

          <div className="flex py-8 border-t border-t-[#DEE2E6] justify-between ">
            <p className="font-main text-[#212529]">
              © 2024 Nortech Api Solutions | All rights reserved
            </p>

            <div className="flex gap-5 ">
              <a href="" className="text-[#212529]">Term of Service</a>
              <div className="h-6 border border-[#DEE2E6]" />
              <a href="" className="text-[#212529]">Privacy Policy</a>
            </div>
          </div>

        </div>
      </div>

      {/* mobile */}
      <div className="sm:block md:hidden lg:hidden xl:hidden w-full bg-white items-center">
        <div className="flex flex-col gap-6 p-4 md:p-8 max-w-[350px] mx-auto">
          <div className="flex flex-col gap-6 ">
            <img src={LogoNortechApp} alt="logo" className="w-[169px] h-10 z-10 " />
            <p className="text-[#212529] ">
              Your best crypto partner.
            </p>
            <div className="flex gap-6 ">
                <a href="https://www.linkedin.com/company/nortechapp" target="_blank" rel="noopener noreferrer"><PiLinkedinLogoThin className="size-[35px] hover:text-[#6001D1]" /></a>
                <a href="https://www.instagram.com/nortechapp" target="_blank" rel="noopener noreferrer"><CiInstagram className="size-[35px] hover:text-[#6001D1]" /></a>
                <a href="https://x.com/NortechApp" target="_blank" rel="noopener noreferrer"><FaXTwitter className="size-[35px] opacity-70 hover:text-[#6001D1]"  /></a>
                <a href="https://discord.gg/Uxb3qkhd" target="_blank" rel="noopener noreferrer"><FaDiscord className="size-[35px] opacity-70 hover:text-[#6001D1]" /></a>
            </div>
          </div>
          <div className="w-full border-t py-8 flex flex-col gap-6 border-[#DEE2E6]">
            <p className="text-[#212529] font-main leading-6">
              © 2024 Nortech Api Solutions | All rights reserved
            </p>
          </div>
          <div className="flex gap-5 ">
            <a href="" className="text-[#212529] font-main">
              Term of Service
            </a>
            <div className="h-6 border border-[#DEE2E6] " />
            <a href="" className="text-[#212529] font-main">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </div>

  );
};
