import DiscordIcon from '/images/icons/Discord.svg';
import GroupIcon from '/images/icons/Group.svg';
import XIcon from '/images/icons/X.svg';

export const StayConnected = () => {
    return (
        <div id="blog-session" className="bg-[#f9f9f3] text-black px-4 py-16 md:p-20 relative">
            <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8 justify-center items-center">
                <div className='flex items-center gap-2'>
                    <img src={GroupIcon} className='w-7 h-7' />
                    <label className="text-lg text-[#6001D1] leading-tight uppercase opacity-60">
                        Community
                    </label>
                </div>
                <h2 className="md:text-4xl  text-[28px] font-bold  leading-tight">
                    Stay Connected
                </h2>

                <span className="text-[#505358] leading-7 text-lg font-normal">Earn NTH tokens as you learn, completing courses and achieving educational milestones on NortechApp.</span>

                <div className='flex gap-4 w-full'>
                    <div className='flex flex-col p-6 rounded-xl w-full min-w-[270px] bg-white'>
                        <img src={DiscordIcon} className='m-auto h-full w-[325px]' />
                        <div className='flex flex-col gap-4 mt-auto'>
                            <label className='font-bold text-3xl'>Join Our <span className='text-[#6001D1]'>Discord</span> Community</label>
                            <p className='opacity-60'>Engage with fellow learners, get real-time support, and access exclusive content on our vibrant Discord server.</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-6 rounded-xl w-full  min-w-[270px] bg-white'>
                        <img src={XIcon} className='mx-auto py-28' />
                        <div className='flex flex-col gap-4 mt-auto'>
                            <label className='font-bold text-3xl'>Follow Us on <span className='text-[#6001D1]'>X</span></label>
                            <p className='opacity-60'>Stay updated with the latest news, insights, and opportunities by following us on X.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}