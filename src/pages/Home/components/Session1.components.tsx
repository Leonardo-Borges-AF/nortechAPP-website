
import emails from "/images/icons/emails.png";
import coin from "/images/icons/coin.png";
import hero from "/images/heroImage.png";
import { FaArrowRightLong } from "react-icons/fa6";


import "./Session1.css";



export const Session1 = () => {
  return(
    <div className="bg-[#120D17] pt-[200px] pb-[230px] pl-28 flex gap-8">
      <div className="place-content-center flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="bg-[#686870] w-[329px] h-8"/>
          <h2 className="text-white font-black text-5xl leading-[60px] font-sans">
            Revolutionize Your <br /> Experience with the <br /> Nortech App
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-lg leading-7 text-white text-opacity-70">
              Complete courses and reach your educational <br /> goals to earn NTH tokens as rewards.
            </p>
            <div className="flex gap-4 ">
              <button
              className="hidden md:flex gap-[10px] py-4 bg-[#9841FF]  border-4 rounded-lg border-solid border-[#9841FF] border-opacity-25 group hover:border-white animate-button " 
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
      <img src={hero} alt="" className="w-[792px] h-[588px] absolute right-[0.001px] top-[300px] z-10"/>
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
    className="h-[42px] py-2 px-[14px] rounded-full bg-white bg-opacity-5 backdrop-blur-md  border border-white border-opacity-15 flex gap-2 items-center z-20"
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