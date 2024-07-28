
import emails from "/images/icons/emails.png";
import coin from "/images/icons/coin.png";
import hero from "/images/heroImage.png";
import arrow from "/images/arrow right.png";
import pay from "/images/pay to learn.png";

import { FaArrowRightLong } from "react-icons/fa6";

import "./Session1.css";



export const Session1 = () => {
  return(
    <div className="bg-[#120D17]">
      <div className=" pt-[150px] pb-[200px] pl-28 flex justify-between max-w-[1440px] mx-auto">
        <div className="place-content-center flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center ">
              <img src={pay} alt="" className="w-[123px] h-[32px]"/>
              <img src={arrow} alt="" className="w-12 h-3"/>
              <p className="text-2xl text-[#AE6BFF] font-sans font-normal leading-8">
                Learn to Earn
              </p>
            </div>
            <h2 className="text-white font-black text-5xl leading-[60px] font-sans">
              Revolutionize Your <br /> Experience with the <br /> Nortech App
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-lg leading-7 text-white text-opacity-70">
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
          </div>
        </div>
        <img src={hero} alt="" className="w-[750px] h-[588px] "/>
        <Div
          text1="+ 60%"
          text2="Average ARPU increase"
          position={{
            right: "540px",
            top: "428px",
          }}
        />
        <Div
          text1="+ 25%"
          text2="Free developer time per month"
          position={{
            right: "475px",
            top: "640px",
          }}
        />
        <Div
          text1="+ 39%"
          text2="Average conversion rate uplift"
          position={{
            right: "45px",
            top: "505px",
          }}
        />
        <Div
          text1="+ 5%"
          text2="More experiments"
          position={{
            right: "10px",
            top: "670px",
          }}
        />
        {/* <div className="w-[1357px]  h-[1357px] rounded-full opacity-5 top-[-250px] right-[-344px] bg-[#AE6BFF] bg-opacity-30 border-[1.39px] border-solid border-[#AE6BFF] absolute z-0"/> */}
      </div>
    </div>
    
  );
  
};

type TDiv ={
  text1: string
  text2: string
  position: {
    right: string;
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
    className="h-[42px] py-2 px-[14px] rounded-full bg-white bg-opacity-5 backdrop-blur-md  border border-white border-opacity-15 flex gap-2 items-center z-5"
    style={{
      position: 'absolute',
      right: position.right,
      top: position.top,
    }}>
      <img src={coin} alt="" className="size-6 text-[#AE6BFF] "/>
      <p className="text-white leading-7 font-main text-base">{text1}</p>
      <p className="text-white leading-7 font-main text-base">{text2}</p>
    </div>
  );
} ;