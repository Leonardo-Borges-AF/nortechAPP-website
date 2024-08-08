import GridImage from "/images/grid-image.png";
import EmailIcon from "/images/icons/Mail.svg";


export const JoinWaitlist02 = () => {
  return(
    <div className="">
      <div className="relative px-28 bg-[#6001D1] py-[82px] md:block sm:hidden xs:hidden">
        <div
          className="absolute w-full h-full right-0 top-0 opacity-60"
          style={{
            backgroundImage: `url(${GridImage})`,
          }}
        />
        <div className="flex flex-row items-center justify-between gap-6 max-w-[1184px] mx-auto">
          <div className="flex flex-col gap-3">
            <h3 className="font-sans font-semibold text-4xl leading-[44px] text-white">
              Join the Waitlist
            </h3>
            <p className="text-lg leading-7w-[486px] text-white opacity-70">
            Be the first to access the innovative NortechApp.<br/> Sign up now and secure exclusive benefits and rewards!
            </p>
          </div>
          <button
              className="w-fit text-[#1f1e22] border-4 border-white border-opacity-20 border-solid bg-transparent relative p-0 rounded-xl"
              style={{
                boxShadow: "0px 8px 24px 0px #AE6BFF40"
              }}>
              <div className="flex items-center gap-2 bg-white w-full h-full py-4 px-6 rounded-lg">
                <img src={EmailIcon} />
                Join the Waitlist
              </div>
            </button>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:block md:hidden lg:hidden xl:hidden w-full bg-[#6001D1] items-center relative justify-center flex flex-col">
        <div
            className="absolute w-full h-full right-0 top-0 opacity-60"
            style={{
              backgroundImage: `url(${GridImage})`,
            }}
          />
          <div className="flex flex-col p-8 gap-6 max-w-[375px] mx-auto items-center">
            <div className="flex flex-col gap-3  items-center">
              <h3 className="font-sans font-semibold text-3xl leading-[44px] text-white text-center">
                Join the Waitlist
              </h3>
              <p className="text-lg leading-7 text-center text-white opacity-70 font-semibold">
                Be the first to access the innovative <br /> NortechApp. Sign up now and <br /> secure exclusive benefits and <br /> rewards!
              </p>
            </div>
            <button
              className="w-fit mx-auto text-[#6001D1] border-4 border-white border-opacity-20 border-solid bg-transparent relative p-0 rounded-xl"
              style={{
                boxShadow: "0px 8px 24px 0px #AE6BFF40"
              }}>
              <div className="flex items-center gap-2 bg-white w-full h-full py-4 px-6 rounded-lg">
                <img src={EmailIcon} />
                Join the Waitlist
              </div>
            </button>
          </div>
      </div>
    </div>
    
    
  );
  
}

