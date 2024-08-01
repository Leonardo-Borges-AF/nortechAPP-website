import GridImage from "/images/grid-image.png";
import EmailIcon from "/images/icons/Mail.svg";


export const JoinWaitlist02 = () => {
  return(
    <div className="relative px-28 bg-[#6001D1] py-[82px]">
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
    
  );
  
}

