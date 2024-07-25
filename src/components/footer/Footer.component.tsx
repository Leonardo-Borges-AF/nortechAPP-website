import LogoNortechApp from "/images/logo-nortechapp(footer).png";
import { PiLinkedinLogoThin } from "react-icons/pi";


export const Footer = () => {
  return (
   <div className="px-28 py-20 flex gap-[10px] border-t border-t-white border-opacity-15 bg-white z-0">
    <div className="flex flex-col gap-[148px]">

      <div className="flex gap-28">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <img src={LogoNortechApp} alt="logo" className="w-[169px] h-10 z-10 "/>
            <p className="text-[#212529]">
              Your best crypto partner.
            </p>
          </div>

          <div className="flex gap-6">
            <PiLinkedinLogoThin className="size-[35px] "/>
            <PiLinkedinLogoThin className="size-[35px] "/>
            <PiLinkedinLogoThin className="size-[35px] "/>
            <PiLinkedinLogoThin className="size-[35px] "/>
          </div>

        </div>

        <div className="flex gap-[52px]">

          <div className="flex flex-col gap-6">
            <p className="font-bold text-lg text-[#495057]">Solutions</p>
            <a href="" className="text-[#212529]">OmniHub</a>
            <a href="" className="text-[#212529]">Nortech Token</a>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-bold text-lg text-[#495057]">Resource</p>
            <a href="" className="text-[#212529]">Whitepaper Nortech</a>
            <a href="" className="text-[#212529]">Whitepaper NTH</a>
            <a href="" className="text-[#212529]">Pitch Deck</a>
            <a href="" className="text-[#212529]">Packs</a>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-bold text-lg text-[#495057]">General</p>
            <a href="" className="text-[#212529]">Community</a>
            <a href="" className="text-[#212529]">Ecosystem Jobs</a>
            <a href="" className="text-[#212529]">Pricing</a>
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-bold text-lg text-[#495057]">General</p>
            <a href="" className="text-[#212529]">Subscribe to get update and notify our exchange and products</a>

            <div className="flex gap-[13px] ">
              <input
                className="border border-[#DEE2E6] text-[#495057] placeholder-[#495057] text-sm flex gap-[10px] rounded-lg px-4 py-2"
                type="text" 
                placeholder="Enter your email address"
              />
              <button className="px-4 py-3 rounded-lg bg-[#055EFA] text-white">
                Enviar
              </button>
            </div>

          </div>

        </div>
      </div>

      <div className="flex py-8 border-t border-t-[#DEE2E6] justify-between ">
        <p className="font-main text-[#212529]">
          © 2024 Nortech Api Solutions | All rights reserved
        </p>

        <div className="flex gap-5 ">
          <a href="" className="text-[#212529]">Term of Service</a>
          <div className="h-6 border border-[#DEE2E6]"/>
          <a href="" className="text-[#212529]">Privacy Policy</a>
        </div>
      </div>

    </div>
   </div>
  ); 
};
