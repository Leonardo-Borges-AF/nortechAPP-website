
import emails from "/images/icons/emails.png";
import star from "/images/icons/star.png";
import stars from "/images/icons/Stars.png";
import add from "/images/icons/add.png";
import house from "/images/icons/house.png";
import settings from "/images/icons/Settings.png";
import searchInterface from "/images/icons/searchInterface.png";
import coin from "/images/icons/coin.png";
import arrow from "/images/arrow right.png";
import imageInterface from "/images/imageInterface.png";
import pay from "/images/pay to learn.png";
import logoInterface from "/images/logoInterface.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Background from "/images/background-1.png";
import "./Session1.css";
import { Header } from "~/components/header/Header.components";



export const Session1 = () => {
  return(
    <div className="bg-[#120D17] relative h-[924px] w-full overflow-hidden">
      <img src={Background} className="absolute opacity-10 w-[2471px] h-[2340px] top-[-500px] rotate-45"/>
      <Header />
      <div className="pb-[82px] pt-[20px] flex w-full mx-auto max-w-[1440px]">
        <div className=" h-[720px] flex gap-8 items-center">
          <div className="pl-28 flex flex-col gap-6 w-[578px]">
            <div className="flex gap-3 items-center">
                <img src={pay} alt="" className="w-[123px] h-[32px]"/>
                 <img src={arrow} alt="" className="w-12 h-3"/>
                 <p className="text-2xl text-[#AE6BFF] font-sans font-normal leading-8">
                   Learn to Earn
                 </p>
            </div>
            <h2 className="text-white font-black text-5xl leading-[60px] font-sans z-10">
                Revolutionize Your <br /> Experience with the <br /> Nortech App
            </h2>
            <p className="text-lg leading-7 text-white opacity-65">
               Complete courses and reach your educational <br /> goals to earn NTH tokens as rewards.
            </p>
            <div className="flex gap-4 ">
              <button
                className="hidden md:flex gap-[10px] py-4 bg-[#9841FF]  border-4 rounded-lg border-solid border-[#9841FF40] group  animate-button " 
                style={{ boxShadow: "0px 8px 24px 0px #AE6BFF40" }}>
                  <img src={emails} className="size-6 group-hover:filter group-hover:brightness-0 "/>
                  <p className="text-white group-hover:text-black z-10">
                    Join the whitelist
                  </p>
                </button>
                <button className="border border-white px-6 py-4 flex gap-4 items-center bg-white bg-opacity-[0.04] rounded-lg button">
                  <p className="text-[#C594FF]"> 
                    Read the waithpaper
                  </p>
                  <FaArrowRightLong className="text-[#C594FF] size-4 icon1"/>
                  <FaArrowRightLong className="text-[#C594FF] size-4 icon2"/>
                </button>
              </div>
          </div>
          <div className="w-[1218px] h-[720px] relative">
            <div className="w-[693px] h-[283px] absolute top-[195px] left-[175px]">
              <Div
                text1="+ 60%"
                text2="Average ARPU increase"
                position={{
                  left: "0px",
                  top: "0px",
                }}
              />
              <Div
                text1="+ 25%"
                text2="Free developer time per month"
                position={{
                  left: "13px",
                  top: "212px",
                }}
              />
              <Div
                text1="+ 39%"
                text2="Average conversion rate uplift"
                position={{
                  left: "321px",
                  top: "76px",
                }}
              />
              <Div
                text1="+5%"
                text2="More experiments"
                position={{
                  left: "435px",
                  top: "241px",
                }}
              />
            </div>
            <div className="absolute w-[709px] h-[377px] top-[171px] left-[297px]">
              <img src={star} alt="" className="absolute size-[9.38px] top-[-175px] left-[58px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[493px] left-[123px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[150px] left-[-67px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[-287px] left-[245px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[-145px] left-[378px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[-58px] left-[273px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[-175px] left-[58px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[493px] left-[123px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[-123px] left-[508px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[168px] left-[-193px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[508px] left-[-93px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[338px] left-[-143px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[608px] left-[-233px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[598px] left-[-603px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[518px] left-[-443px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[448px] left-[-283px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[-82px] left-[-383px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[-58px] left-[-223px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[23px] left-[-237px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[25.4px] left-[-291px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[-138px] left-[-85px] z-10"/>
              <img src={star} alt="" className="absolute size-[9.39px] top-[493px] left-[123px] z-10"/>

              <img src={stars} alt="" className="absolute size-6 top-[442px] left-[354px] z-10"/>
              <img src={stars} alt="" className="absolute size-[18px] top-[565px] left-[484px] z-10 opacity-60"/>
              <img src={stars} alt="" className="absolute size-[16px] top-[442px] left-[30px] z-10 opacity-60"/>
              <img src={stars} alt="" className="absolute size-[18px] top-[-28px] left-[-110px] z-10 opacity-100"/>


              
              <div className="opacity-10 size-[739px] absolute top-[-170px] left-[-46px] border-[1.39] border-[#AE6BFF] bg-[#AE6BFF] bg-opacity-30 rounded-full z-0"/>
              <div className="opacity-10 size-[903px] absolute top-[-258px] left-[-128px] border-[1.39] border-[#AE6BFF] bg-[#AE6BFF] bg-opacity-30 rounded-full z-0"/>
              <div className="opacity-10 size-[1148px] absolute top-[-380px] left-[-250px] border-[1.39] border-[#AE6BFF] bg-[#AE6BFF] bg-opacity-30 rounded-full z-0"/>
              <div className="opacity-5 size-[1357px] absolute top-[-485px] left-[-355px] border-[1.39] border-[#AE6BFF] bg-[#AE6BFF] bg-opacity-30 rounded-full z-0"/>


              <div className="h-[588.32px] w-[791.5px] absolute top-[-100px] left-[-93px] rounded-2xl border border-[#FFFFFF1F] bg-[#19191E]">
                <div className="border-b border-[#FFFFFF0F] flex gap-[27.84px] py-[20.88px] px-[13.92px] items-center">
                  <div className="w-[105.59px] flex p-[7.3px] items-center justify-center">
                    <img src={logoInterface} alt="" className="w-[91px] h-[24.3px]" />
                  </div>
                  <div className="rounded-lg w-[385.24px] py-[8.7px] px-[13.92px] border border-[#FFFFFF0F] justify-between flex items-center">
                    <h6 className="font-normal text-xs text-white">
                      Search here
                    </h6>
                    <img src={searchInterface} alt="" className="size-[18px]"/>
                  </div>
                  <div className="flex rounded-lg px-[14px] py-[7px] gap-[7px] bg-white bg-opacity-5 items-center">
                    <img src={add} alt="" className="size-[18.62px] "/>
                    <h6 className="font-medium text-[10.39px] leading-[12.2px]  text-white ">
                      Create account
                    </h6>
                  </div>
                </div>
                <div className="h-[507.94px] w-full flex">
                  <div className="w-[147.04px] flex flex-col h-[341.06px] p-[13.92px] gap-[13.92px] border-r border-white border-opacity-5">
                    <div className="rounded-lg p-[7px] gap-[7px] flex bg-[#AE6BFF] bg-opacity-[0.08] w-full">
                      <img src={house} className="size-[18px]"/>
                      <h6 className="text-[#AE6BFF] text-xs items-center">
                        Marketplace
                      </h6>
                    </div>
                    <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg"/>
                    <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg"/>
                    <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg"/>
                    <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg"/>
                    <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg"/>
                  </div>
                  <div className="p-[20.88px] flex flex-col gap-[20.86px] w-[644px]">
                    <div className="flex gap-[6.96px]">
                      <img src={settings}  className="size-[20.88px]"/>
                      <h6 className="text-xs leading-[17.4px] text-white opacity-80">
                        My ubterests
                      </h6>
                    </div>
                    <div className="flex gap-[27.84px] w-full">
                      <img src={imageInterface} alt="" className="w-[375px] h-[438px]"/>
                      <div className="flex flex-col gap-[13.92px] relative">
                        <div className="flex flex-col gap-[7px]">
                          <h6 className="text-xs text-white opacity-60">
                            Education content
                          </h6>
                          <h5 className="font-semibold text-[26px] leading-[33px] text-[#DEE2E6]">
                            BlockChain Course
                          </h5>
                        </div>
                        <p className="text-[#9B9B9B] text-xs ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum neque at ultrices placerat. Cras maximus ipsum ex, in pellentesque magna tincidunt in.
                        </p>
                        <div className="flex rounded-lg px-[14px] py-[7px] gap-[7px] bg-[#9841FF] items-center">
                          <img src={add} alt="" className="size-[18.62px] "/>
                          <h6 className="font-medium text-[10.39px] leading-[12.2px]  text-white ">
                            Create account
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-[#120D17] relative">
    //   <div className=" pt-[150px] pb-[200px] pl-28 flex justify-between max-w-[1440px] mx-auto">
    //     <div className="place-content-center flex flex-col gap-6">
    //       <div className="flex flex-col gap-6">
    //         <div className="flex gap-3 items-center ">
    //           <img src={pay} alt="" className="w-[123px] h-[32px]"/>
    //           <img src={arrow} alt="" className="w-12 h-3"/>
    //           <p className="text-2xl text-[#AE6BFF] font-sans font-normal leading-8">
    //             Learn to Earn
    //           </p>
    //         </div>
    //         <h2 className="text-white font-black text-5xl leading-[60px] font-sans">
    //           Revolutionize Your <br /> Experience with the <br /> Nortech App
    //         </h2>
    //         <div className="flex flex-col gap-4">
    //           <p className="text-lg leading-7 text-white text-opacity-70">
    //             Complete courses and reach your educational <br /> goals to earn NTH tokens as rewards.
    //           </p>
    //           <div className="flex gap-4 ">
    //             <button
    //             className="hidden md:flex gap-[10px] py-4 bg-[#9841FF]  border-4 rounded-lg border-solid border-[#9841FF40] group  animate-button " 
    //             style={{ boxShadow: "0px 8px 24px 0px #AE6BFF40" }}>
    //               <img src={emails} className="size-6 group-hover:filter group-hover:brightness-0 "/>
    //               <p className="text-white group-hover:text-black z-10">
    //                 Join the whitelist
    //               </p>
    //             </button>
    //             <button className="border border-white px-6 py-4 flex gap-4 items-center bg-white bg-opacity-[0.04] rounded-lg button">
    //               <p className="text-[#C594FF]"> 
    //                 Read the waithpaper
    //               </p>
    //               <FaArrowRightLong className="text-[#C594FF] size-4 icon1"/>
    //               <FaArrowRightLong className="text-[#C594FF] size-4 icon2"/>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <img src={hero} alt="" className="w-[750px] h-[588px] "/>
    //     <Div
    //       text1="+ 60%"
    //       text2="Average ARPU increase"
    //       position={{
    //         right: "540px",
    //         top: "428px",
    //       }}
    //     />
    //     <Div
    //       text1="+ 25%"
    //       text2="Free developer time per month"
    //       position={{
    //         right: "475px",
    //         top: "640px",
    //       }}
    //     />
    //     <Div
    //       text1="+ 39%"
    //       text2="Average conversion rate uplift"
    //       position={{
    //         right: "45px",
    //         top: "505px",
    //       }}
    //     />
    //     <Div
    //       text1="+ 5%"
    //       text2="More experiments"
    //       position={{
    //         right: "10px",
    //         top: "670px",
    //       }}
    //     />
    //     {/* <div className="w-[1357px]  h-[1357px] rounded-full opacity-5 top-[-250px] right-[-344px] bg-[#AE6BFF] bg-opacity-30 border-[1.39px] border-solid border-[#AE6BFF] absolute z-0"/> */}
    //   </div>
    // </div>
    
  );
  
};

type TDiv ={
  text1: string
  text2: string
  position: {
    left: string;
    top: string;
  };
};
const Div = ({
  text1,
  text2,
  position,
}: TDiv) => {
  return (
    <div 
    className="h-[42px] py-2 px-[14px] rounded-full bg-white bg-opacity-5 backdrop-blur-md  border border-white border-opacity-15 flex gap-2 items-center z-20"
    style={{
      zIndex: 20,
      position: 'absolute',
      left: position.left,
      top: position.top,
    }}>
      <img src={coin} alt="" className="size-6 text-[#AE6BFF] "/>
      <p className="text-white leading-7 font-main text-base">{text1}</p>
      <p className="text-white leading-7 font-main text-base">{text2}</p>
    </div>
  );
} ;