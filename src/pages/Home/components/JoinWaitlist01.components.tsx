import EmailIcon from "/images/icons/Mail.svg";
import GridImage from "/images/grid-image.png";
import emails from "/images/icons/emails.png";


export const JoinWaitlist01 = () => {
  return(
    <div className="">
      <div className="relative px-28 bg-[#6001D1] py-[82px] md:block sm:hidden xs:hidden">
        <div
          className="absolute w-full h-full right-0 top-0 opacity-60"
          style={{
            backgroundImage: `url(${GridImage})`,
          }}
        />
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-3 items-center">
            <h3 className="font-sans font-semibold text-4xl leading-[44px] text-white text-center">
              Join the Waitlist
            </h3>
            <p className="text-lg leading-7 text-center w-[486px] text-white opacity-70">
              Be among the first to experience the groundbreaking Nortech App. Sign up now and unlock exclusive benefits and rewards!
            </p>
          </div>
          <a href="https://tally.so/r/3NLVMO" target="_blank" rel="noopener noreferrer">
            <button
              className="flex gap-[10px] py-4 bg-white border-[4px] border-[#6001D1] border-opacity-70 rounded-lg group hover-button"
              style={{ boxShadow: "0px 8px 24px 0px #AE6BFF" }}>
              <img src={EmailIcon} className="size-6 group-hover:hidden" />
              <img src={emails} className="size-6 hidden group-hover:block relative z-10" />
              <p className="text-[#6001D1] group-hover:text-white z-10">
                Join the whitelist
              </p>
            </button>
          </a>
          
        </div>
      </div>
      {/* mobile */}
      <div className="sm:block md:hidden lg:hidden xl:hidden w-full bg-[#6001D1] items-center justify-center relative">
        <div
            className="absolute w-full h-full  right-0 top-0 opacity-60"
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
                Be among the first to experience the groundbreaking Nortech App. Sign up now and unlock exclusive benefits and rewards!
              </p>
            </div>
            <a href="https://tally.so/r/3NLVMO" target="_blank" rel="noopener noreferrer">
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
            </a>
          </div>
      </div>
    </div>
    
    
  );
  
}

