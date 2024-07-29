
import solar from "/images/icons/solar-system.png";
import about from "/images/ABOUT-NORTECH.png";

export const Session2 = () => {
  return(
    <div className="bg-white pt-20 pl-[64px] pb-32 flex gap-3">
      
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 py-8 w-[594px]">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-1 items-center">
              <img src={solar} alt="" className="size-6"/>
              <h4 className="font-normal text-lg leading-7 text-[#6001D1]">
                ABOUT NORTECH
              </h4>
            </div>
            <p className="font-sans font-semibold leading-[44px] text-[#0B0D12] text-4xl ">
              See how Nortech can <br /> benefit you
            </p>
          </div>
          <p className="font-main font-normal text-[19.22px] leading-8 text-[#505358] tracking-[-0.1]">
            Nortech is more than an educational platform; it s a gamified 
            learning experience that encourages your growth. Explore a vast
            library of high-quality courses and connect with a network of 
            professionals through the Nortech App. 
          </p>
          <p className="font-main font-normal text-[19.22px] leading-8 text-[#505358] tracking-[-0.1]">
            Every step you take is rewarded with NTH tokens, which you can 
            use to access exclusive resources and participate in the 
            evolution. 
          </p>
        </div>

        <div className="flex flex-col py-8 pr-8 gap-[54px] ">
          <div className="flex flex-col gap-[27.5px] ">
            <div className="flex flex-col gap-8 ">
              <div className="flex gap-4">
                <h3 className="font-main font-medium leading-10 text-[32px] text-[#212529] ">
                  01
                </h3>
                <h3 className="font-main font-medium leading-10 text-[31.38px] text-[#212529] ">
                  Estudante
                </h3>
              </div>
              <div className="flex">
                <div className="bg-[#6338F4] w-[254px] h-[2px] "/> 
                <div className="bg-[#DEE2E6] w-[340px] h-[2px] "/>
              </div>
            </div>
            <div className="flex gap-4">
              <h3 className="font-main font-medium leading-10 text-[32px] text-[#212529] text-opacity-30">
                02
              </h3>
              <h3 className="font-main font-medium leading-10 text-[31.38px] text-[#212529] text-opacity-30">
                Professor
              </h3>
            </div>
            <div className="flex gap-4">
              <h3 className="font-main font-medium leading-10 text-[32px] text-[#212529] text-opacity-30">
                03
              </h3>
              <h3 className="font-main font-medium leading-10 text-[31.38px] text-[#212529] text-opacity-30">
                Afiliado
              </h3>
            </div>
          </div>
        </div>
      </div>
      <img src={about} alt="" className="w-[727px] h-766.37px"/>
    </div>
  );
};
