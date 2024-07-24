import Logo from "/images/logo-nortechlabs.png";

import { BiLogoLinkedin, BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div
      className="md:pt-[80px] md:px-[91px] border-t-2 border-t-onPrimary relative z-20 pt-16 pb-6 px-5 mt-auto"
      style={{
        backgroundColor: "#0a0a0b",
      }}
    >
      <div className="flex flex-col md:gap-[148px] gap-14 text-base max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:gap-0 gap-12">
          <div className="flex gap-8 md:gap-10 flex-col">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="basis-35">
                <img
                  src={Logo}
                  alt="logotipo Nortech"
                  className="m-auto md:m-0 w-[235px]"
                ></img>
              </div>
            </div>

            <div className="flex m-auto md:m-0 gap-8 ">
              <a
                className="hover:cursor-pointer"
                href="https://www.linkedin.com/company/nortechofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoLinkedin
                  size={24}
                  className="hover:text-white text-colorText transition-all"
                />
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://x.com/NortechOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter
                  size={24}
                  className="hover:text-white text-colorText transition-all"
                />
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://www.instagram.com/nortech_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoInstagramAlt
                  size={24}
                  className="hover:text-white text-colorText transition-all"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row text-center md:text-start gap-8 md:gap-24">
            <div className="flex flex-col text-colorText gap-6">
              <h6 className="text-white text-lg font-bold">Products</h6>
              <a className="text-base hover:text-white hover:cursor-pointer transition-all">
                Nortech App
              </a>
              <a className="text-base hover:text-white hover:cursor-pointer transition-all">
                CryptoSync AI
              </a>
              <a className="text-base hover:text-white hover:cursor-pointer transition-all">
                SwapAroo
              </a>
            </div>
            <div className="flex flex-col text-colorText gap-6">
              <h6 className="text-white text-lg font-bold">General</h6>
              <a className="text-base hover:text-white hover:cursor-pointer transition-all">
                Community
              </a>
              <a className="text-base hover:text-white hover:cursor-pointer transition-all">
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-t-secondary py-8 text-colorText text-base gap-4 ">
          <span className=" hidden md:flex">
            © 2024 Nortech Labs | All rights reserved
          </span>
          <span className="m-auto text-base md:hidden">
            © 2024 Nortech | All rights reserved
          </span>
          {/* <div className="flex justify-center items-center md:justify-end">
            <a className="decoration-inherit pr-5 hover:text-white hover:cursor-pointer">
              Term of Service
            </a>
            <a className="border-l-2 border-l-secondary pl-5 hover:text-white hover:cursor-pointer">
              Privacy Policy
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
