import GridImage from "/images/grid-image.png";
import EmailIcon from "/images/icons/Mail.svg";
import emails from "/images/icons/emails.png";

import "./JoinTheWaitList.css";

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
          <a href="https://tally.so/r/3NLVMO" target="_blank" rel="noopener noreferrer" className="mx-auto">
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
      
    </div>
    
  );
};
