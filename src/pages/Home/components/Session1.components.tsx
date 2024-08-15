
import { ReactNode } from 'react';
import { FaArrowRightLong, FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import "./Session1.css";
import arrow from "/images/arrow right.png";
import Background from "/images/background-1.png";
import add from "/images/icons/add.png";
import coin from "/images/icons/coin.png";
import emails from "/images/icons/emails.png";
import house from "/images/icons/house.png";
import searchInterface from "/images/icons/searchInterface.png";
import settings from "/images/icons/Settings.png";
import star from "/images/icons/star.png";
import stars from "/images/icons/Stars.png";
import imageInterface from "/images/imageInterface.png";
import login from "/images/login.png";
import NTH from "/images/Logo_NTH_Token.png";
import logoInterface from "/images/logoInterface.png";
import nortechBadge from "/images/nortech-badge.png";
import pay from "/images/pay to learn.png";



export const Session1 = () => {
  return (
    <div id="session-1" className="" >
      <div className="bg-[#120D17] relative h-[924px] w-full overflow-hidden z-10 md:block sm:hidden xs:hidden">
        <img src={Background} className="absolute opacity-10 w-[2471px] h-[1340px] top-[-500px] rotate-45" />
        <div className="relative pb-[82px] flex w-full mx-auto max-w-[1440px]">
          <div className=" h-[720px] flex gap-8 items-center">
            <div className="pl-28 flex flex-col gap-6 w-[578px]">
              <div className="flex gap-3 items-center">
                <img src={pay} alt="" className="w-[123px] h-[32px]" />
                <img src={arrow} alt="" className="w-12 h-3" />
                <p className="text-2xl text-[#AE6BFF] font-sans font-normal leading-8">
                  Learn to Earn
                </p>
              </div>
              <h2 className="text-white font-black text-5xl leading-[60px] font-sans z-10">
                Embrace the Next Generation of Learning with Nortech
              </h2>
              <p className="text-lg leading-7 text-white opacity-65">
                Complete courses, achieve your learning goals, and <br />get rewarded with NTH tokens.
              </p>
              <div className="flex gap-4 ">
                <a href="https://tally.so/r/3NLVMO" target="_blank" rel="noopener noreferrer">
                  <button
                    className="hidden md:flex gap-[10px] py-4 bg-[#9841FF] border-0 rounded-lg group animate-button"
                    style={{ boxShadow: "0px 8px 24px 0px #AE6BFF40" }}>
                    <img src={emails} className="size-6 group-hover:filter group-hover:brightness-0 " />
                    <p className="text-white group-hover:text-black z-10">
                      Join the Waitlist
                    </p>
                  </button>
                </a>
                <a href="https://nortech.gitbook.io/nortech-whitepaper" target="_blank" rel="noopener noreferrer">
                  <button className="border border-white px-6 py-4 flex gap-4 items-center bg-white bg-opacity-[0.04] rounded-lg button">
                    <p className="text-[#C594FF]">
                      Read our Whitepaper
                    </p>
                    <FaArrowRightLong className="text-[#C594FF] size-4 icon1" />
                    <FaArrowRightLong className="text-[#C594FF] size-4 icon2" />
                  </button>
                </a>

              </div>
            </div>

            <div className="w-[1218px] h-[720px] relative">
              <div className="w-[693px] h-[283px] absolute top-[195px] left-[175px]">
                <Div
                  text1="Earn Rewards for Learning"
                  text2=""
                  position={{
                    left: "0px",
                    top: "0px",
                  }}
                  icon={<img src={NTH} className="size-6" />}
                />

                <Div
                  text1="Higher Course Completion Rates"
                  text2=""
                  position={{
                    left: "13px",
                    top: "212px",
                  }}
                  icon={<FaArrowTrendUp className="text-[#7e62d3] text-2xl" />}
                />
                <Div
                  text1="Increased Student Retention"
                  text2=""
                  position={{
                    left: "321px",
                    top: "76px",
                  }}
                  icon={<PiStudentFill className="text-[#7e62d3] text-2xl" />}
                />
                <Div
                  text1="Low Fees for Content Creators"
                  text2=""
                  position={{
                    left: "380px",
                    top: "241px",
                  }}
                  icon={<FaArrowTrendDown className="text-[#7e62d3] text-2xl" />}
                />
              </div>
              <div className="absolute w-[709px] h-[377px] top-[171px] left-[297px]">
                <img src={star} alt="" className="absolute size-[9.38px] top-[-175px] left-[58px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[493px] left-[123px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[150px] left-[-67px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[-287px] left-[245px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[-145px] left-[378px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[-58px] left-[273px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[-175px] left-[58px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[493px] left-[123px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[-123px] left-[508px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[168px] left-[-193px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[508px] left-[-93px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[338px] left-[-143px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[608px] left-[-233px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[598px] left-[-603px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[518px] left-[-443px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[448px] left-[-283px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[-82px] left-[-383px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[-58px] left-[-223px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[23px] left-[-237px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[25.4px] left-[-291px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[-138px] left-[-85px] z-10" />
                <img src={star} alt="" className="absolute size-[9.39px] top-[493px] left-[123px] z-10" />

                <img src={stars} alt="" className="absolute size-6 top-[442px] left-[354px] z-10" />
                <img src={stars} alt="" className="absolute size-[18px] top-[565px] left-[484px] z-10 opacity-60" />
                <img src={stars} alt="" className="absolute size-[16px] top-[442px] left-[30px] z-10 opacity-60" />
                <img src={stars} alt="" className="absolute size-[18px] top-[-28px] left-[-110px] z-10 opacity-100" />



                <div className="opacity-10 size-[739px] absolute top-[-170px] left-[-46px] border-[1.39] border-[#AE6BFF] bg-[#AE6BFF] border-solid border bg-opacity-30 rounded-full z-0 animate-pulse" />
                <div className="opacity-10 size-[903px] absolute top-[-258px] left-[-128px] border-[1.39] border-[#AE6BFF] bg-[#AE6BFF] border-solid border bg-opacity-30 rounded-full z-0 animate-pulse" />
                <div className="opacity-10 size-[1148px] absolute top-[-380px] left-[-250px] border-[1.39] border-[#AE6BFF] bg-[#AE6BFF] border-solid border bg-opacity-30 rounded-full z-0 animate-pulse" />
                <div className="opacity-5 size-[1357px] absolute top-[-485px] left-[-355px] border-[1.39] border-[#AE6BFF] bg-[#AE6BFF] border-solid border bg-opacity-30 rounded-full z-0 animate-pulse" />


                <div className="h-[588.32px] w-[791.5px] absolute top-[-100px] left-[-93px] rounded-2xl border border-[#FFFFFF1F] bg-[#19191E]">
                  <div className="border-b border-[#FFFFFF0F] flex gap-[27.84px] py-[20.88px] px-[13.92px] items-center">
                    <div className="w-[105.59px] flex p-[7.3px] items-center justify-center">
                      <img src={logoInterface} alt="" className="w-[91px] h-[24.3px]" />
                    </div>
                    <div className="rounded-lg w-[385.24px] py-[8.7px] px-[13.92px] border border-[#FFFFFF0F] justify-between flex items-center">
                      <h6 className="font-normal text-xs text-white">
                        Search here
                      </h6>
                      <img src={searchInterface} alt="" className="size-[18px]" />
                    </div>
                    <div className="flex rounded-lg px-[14px] py-[7px] gap-[7px] bg-white bg-opacity-5 items-center">
                      <img src={add} alt="" className="size-[18.62px] " />
                      <h6 className="font-medium text-[10.39px] leading-[12.2px]  text-white ">
                        Create account
                      </h6>
                    </div>
                  </div>
                  <div className="h-[507.94px] w-full flex">
                    <div className="w-[147.04px] flex flex-col h-[341.06px] p-[13.92px] gap-[13.92px] border-r border-white border-opacity-5">
                      <div className="rounded-lg p-[7px] gap-[7px] flex bg-[#AE6BFF] bg-opacity-[0.08] w-full">
                        <img src={house} className="size-[18px]" />
                        <h6 className="text-[#AE6BFF] text-xs items-center">
                          Marketplace
                        </h6>
                      </div>
                      <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg" />
                      <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg" />
                      <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg" />
                      <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg" />
                      <div className="h-[22.62px] w-full py-[5.22px] px-[10.44px] gap-[7px] opacity-50 bg-white bg-opacity-5 rounded-lg" />
                    </div>
                    <div className="p-[20.88px] flex flex-col gap-[20.86px] w-[644px]">
                      <div className="flex gap-[6.96px]">
                        <img src={settings} className="size-[20.88px]" />
                        <h6 className="text-xs leading-[17.4px] text-white opacity-80">
                          My ubterests
                        </h6>
                      </div>
                      <div className="flex gap-[27.84px] w-full">
                        <img src={imageInterface} alt="" className="w-[375px] h-[438px]" />
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
                            Learn how blockchain is transforming industries, explore the mechanics of cryptocurrencies, and discover the impact of smart contracts. Ideal for professionals looking to deepen their knowledge and leverage blockchain for future opportunities.
                          </p>
                          <div className="flex rounded-lg px-[14px] py-[7px] gap-[7px] bg-[#9841FF] items-center">
                            <img src={add} alt="" className="size-[18.62px] " />
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
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 bg-white bg-opacity-10 rounded-full w-[120px] h-[120px] p-2">
          <img src={nortechBadge} className="rotate" />
        </div>
      </div>

      {/* MOBILE */}
      <div className="sm:block md:hidden lg:hidden xl:hidden flex flex-col w-full bg-[#120D17] mt-24">
        <div className="flex flex-col max-w-[375px] mx-auto gap-8 overflow-hidden">
          <div className="flex flex-col px-8 gap-6 w-full items-center">
            <div className="flex gap-3 items-center">
              <img src={pay} alt="" className="w-[123px] h-[32px]" />
              <img src={arrow} alt="" className="w-12 h-3" />
              <p className="text-lg text-[#AE6BFF] font-sans font-normal leading-7">
                Learn to Earn
              </p>
            </div>
            <h3 className="font-bold text-[30px] leading-[38px] text-center text-white font-sans">
              Revolutionize Your Experience with the Nortech App
            </h3>
            <p className="text-white opacity-70 text-center">
              Complete courses and reach your educational goals to earn NTH tokens as rewards.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <a href="https://tally.so/r/3NLVMO" target="_blank" rel="noopener noreferrer">
                <button
                  className="hidden md:flex gap-[10px] py-4 bg-[#9841FF] border-0 rounded-lg group animate-button"
                  style={{ boxShadow: "0px 8px 24px 0px #AE6BFF40" }}>
                  <img src={emails} className="size-6 group-hover:filter group-hover:brightness-0 " />
                  <p className="text-white group-hover:text-black z-10">
                    Join the whitelist
                  </p>
                </button>
              </a>
              <button className="border rounded-lg bg-white bg-opacity-5 py-4 px-6 border-white border-opacity-15 items-center justify-center flex gap-2">
                <p className="text-[#C594FF] font-semibold">
                  Read the waithpaper
                </p>
                <FaArrowRightLong className="text-[#C594FF] size-4 " />
              </button>
            </div>
          </div>
          <div className="w-full h-[305.79px] flex">
            <div className=" w-[517.29px] h-[305.79px] relative">
              <div className="items-center absolute flex top-[226.79px] left-[210.14px] rounded-[59.64px] border-[0.66px] px-[9.28px] py-[5.3px] gap-[5.3px] bg-white bg-opacity-5 border-white border-opacity-10 z-20">
                <img src={coin} className="size-[10.6px]" />
                <p className="text-[9.28px] leading-[13.25px] text-white ">
                  + 5%
                </p>
                <p className="text-[9.28px] leading-[13.25px] text-white ">
                  More experiments
                </p>
              </div>
              <div className="items-center absolute flex top-[183.79px] left-[20.14px] rounded-[59.64px] border-[0.66px] px-[9.28px] py-[5.3px] gap-[5.3px] bg-white bg-opacity-5 border-white border-opacity-10 z-20">
                <img src={coin} className="size-[10.6px]" />
                <p className="text-[9.28px] leading-[13.25px] text-white ">
                  + 25%
                </p>
                <p className="text-[9.28px] leading-[13.25px] text-white ">
                  Free developer time per month
                </p>
              </div>
              <div className="items-center absolute flex top-[140.79px] left-[175.14px] rounded-[59.64px] border-[0.66px] px-[9.28px] py-[5.3px] gap-[5.3px] bg-white bg-opacity-5 border-white border-opacity-10 z-20">
                <img src={coin} className="size-[10.6px]" />
                <p className="text-[9.28px] leading-[13.25px] text-white ">
                  + 39%
                </p>
                <p className="text-[9.28px] leading-[13.25px] text-white ">
                  Average conversion rate uplift
                </p>
              </div>
              <div className="items-center absolute flex top-[97.79px] left-[20.14px] rounded-[59.64px] border-[0.66px] px-[9.28px] py-[5.3px] gap-[5.3px] bg-white bg-opacity-5 border-white border-opacity-10 z-20">
                <img src={coin} className="size-[10.6px]" />
                <p className="text-[9.28px] leading-[13.25px] text-white ">
                  + 60%
                </p>
                <p className="text-[9.28px] leading-[13.25px] text-white ">
                  Average ARPU increase
                </p>
              </div>
              <div className="absolute top-[72.73px] left-[53.14px] w-[301.12px] h-[160.11px] z-10 ">
                <div className="h-[249.86px] absolute top-[-44px] left-[-34px] border border-[white] border-opacity-[0.12] bg-[#19191E] flex flex-col rounded-[7.59px]  ">
                  <div className="w-[336.15px] flex border-b-[0.37px] gap-[11.82px] px-[5.91px] py-[8.87px] border-white border-opacity-5 items-center">
                    <img src={logoInterface} className="w-[44.84px] h-fit" />
                    <div className="h-[16.37px] flex w-[163.81px] rounded-[3.4px] border-[0.37px] justify-between items-center py-[3.7px] px-[5.91px] border-white border-opacity-5 ">
                      <p className="text-[5.17px] leading-[7.39px] text-white opacity-80">
                        Search here
                      </p>
                      <img src={searchInterface} className="size-[7.65px]" />
                    </div>

                    <div className="flex gap-[5.91px] items-center">
                      <div className="flex gap-[2.96px] py-[2.96px] px-[5.91px] h-fit rounded-[3.4px] bg-white bg-opacity-5 items-center">
                        <img src={add} className="size-[7.91px]" />
                        <p className="font-medium text-[4.41px] leading-[5.18px] text-white">
                          Creat account
                        </p>
                      </div>
                      <div className="h-fit rounded-[3.4px] border-[0.37px] py-[2.96px] px-[5.91px] flex items-center gap-[2.96px] border-[#AE6BFF] border-opacity-40">
                        <img src={login} className="size-[7.65px]" />
                        <p className="text-[#AE6BFF] text-[4.41px] leading-[5.18px] font-medium">
                          Login
                        </p>
                      </div>
                    </div>

                  </div>
                  <div className="h-[215.73px] flex">
                    <div className="w-[62.45px] h-[144.85px] border-r-[0.37px] p-[5.91px] flex flex-col gap-[5.91px] border-white border-opacity-5">
                      <div className="rounded-[3.4px] w-full flex items-center p-[2.96px] gap-[2.96px] bg-[#AE6BFF] bg-opacity-[0.08]">
                        <img src={house} className="size-[7.61px]" />
                        <p className="text-[#AE6BFF] text-[5.17px] leading-[7.39px]">
                          Marketplace
                        </p>
                      </div>
                      <div className="bg-white bg-opacity-[0.06] rounded-[3.4px] opacity-50 w-full h-[9.61px]" />
                      <div className="bg-white bg-opacity-[0.06] rounded-[3.4px] opacity-50 w-full h-[9.61px]" />
                      <div className="bg-white bg-opacity-[0.06] rounded-[3.4px] opacity-50 w-full h-[9.61px]" />
                      <div className="bg-white bg-opacity-[0.06] rounded-[3.4px] opacity-50 w-full h-[9.61px]" />
                      <div className="bg-white bg-opacity-[0.06] rounded-[3.4px] opacity-50 w-full h-[9.61px]" />
                    </div>
                    <div className="flex flex-col gap-[2.96px] p-[8.87px] ">
                      <div className="flex items-center gap-[2.96px]">
                        <img src={settings} className="size-[8.87px]" />
                        <p className="text-white opacity-80 text-[5.17px] leading-[7.39px] ">
                          My ubterests
                        </p>
                      </div>
                      <div className="w-full flex gap-[11.82px]">
                        <img src={imageInterface} className="w-[159.26px]" />
                        <div className="flex flex-col gap-[5.91px] ">
                          <div className="flex flex-col gap-[2.96px]">
                            <p className="opacity-60 text-[5.17px] leading-[7.39px] text-white ">
                              Education content
                            </p>
                            <p className="text-[#DEE2E6] font-sans font-semibold text-[11.09px] leading-[14.04px]">
                              BlockChain <br /> Course
                            </p>
                          </div>
                          <p className="text-[#9B9B9B] text-[5.17px] leading-[7.39px] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum neque at ultrices placerat. Cras maximus ipsum ex, in pellentesque magna tincidunt in.
                          </p>
                          <div className="h-[16.52px] rounded-[3.4px] py-[2.96px] px-[5.91px] flex gap-[2.96px] bg-[#9841FF] items-center w-fit">
                            <img src={add} className="size-[7.91px]" />
                            <p className="text-white text-[4.41px] leading-[5.18px] font-medium">
                              Creat account
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute size-[487px] opacity-10 bg-[#AE6BFF] bg-opacity-30 border-[0.59px] border-[#AE6BFF] rounded-full top-[-85px] left-[-50px] z-0" />
              <div className="absolute size-[383px] opacity-10 bg-[#AE6BFF] bg-opacity-30 border-[0.59px] border-[#AE6BFF] rounded-full top-[-40px] left-[-0px] z-0" />
              <div className="absolute size-[313px] opacity-10 bg-[#AE6BFF] bg-opacity-30 border-[0.59px] border-[#AE6BFF] rounded-full top-[5px] left-[35px] z-0" />
              <div className="absolute size-[313px] opacity-10 bg-[#AE6BFF] bg-opacity-30 border-[0.59px] border-[#AE6BFF] rounded-full top-[5px] left-[35px] z-0" />
            </div>
          </div>
        </div>

      </div>
    </div>


  );

};


type TDiv = {
  text1: string;
  text2: string;
  position: {
    left: string;
    top: string;
  };
  icon: ReactNode; // Adicionando uma nova propriedade para o ícone
};

const Div = ({
  text1,
  text2,
  position,
  icon,
}: TDiv) => {
  return (
    <div
      className="floating h-[42px] py-2 px-[14px] rounded-full bg-white bg-opacity-5 backdrop-blur-md  border border-white border-opacity-15 flex gap-2 items-center z-20"
      style={{
        zIndex: 20,
        position: 'absolute',
        left: position.left,
        top: position.top,
      }}>
      {icon} {/* Renderizando o ícone passado como propriedade */}
      <p className="text-white leading-7 font-main text-base">{text1}</p>
      <p className="text-white leading-7 font-main text-base">{text2}</p>
    </div>
  );
};

