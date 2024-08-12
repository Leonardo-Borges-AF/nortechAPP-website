import GridImage from "/images/grid-image.png";
import EmailIcon from "/images/icons/Mail.svg";

export const JoinWaitlist = () => {
  return (
    <div className="">
      <div id="blog-session" className="bg-[#6001D1] px-4 py-16 md:p-20 relative ">
        <div
          className="absolute w-full h-full right-0 top-0 opacity-60"
          style={{
            backgroundImage: `url(${GridImage})`,
          }}
        />
        <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8 text-center">
          <h2 className="md:text-4xl text-[28px] font-bold text-white leading-tight">
            Be the First to Experience Nortech
          </h2>
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
};
