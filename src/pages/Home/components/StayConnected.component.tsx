import DiscordIcon from '/images/icons/Discord.svg';
import GroupIcon from '/images/icons/Group.svg';
import XIcon from '/images/icons/X.svg';

export const StayConnected = () => {
    return (
        <div className="">
            <div id="blog-session" className="bg-[#f9f9f3] text-black px-4 py-16 md:p-20 relative md:block sm:hidden xs:hidden">
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

            {/* mobile */}
            <div className='sm:block md:hidden lg:hidden xl:hidden w-full bg-[#f9f9f3] items-center relative justify-center flex flex-col border-t border-opacity-20 border-black'>
                <div className='max-w-[375px] flex flex-col gap-8 p-8 mx-auto'>
                    <div className='flex flex-col gap-4 w-full '>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='flex gap-3  items-center'>
                                <img src={GroupIcon} className='size-6'/>
                                <h4 className='text-[#6001D1] text-lg '>
                                    Community
                                </h4>
                            </div>
                            <h4 className='text-[#0B0D12] text-3xl leading-9 font-semibold font-sans'>
                                Stay Connected
                            </h4>
                            
                        </div>
                        <p className='text-[#505358] text-lg text-center'>
                            Earn NTH tokens as you learn, completing courses and achieving educational milestones on NortechApp.
                        </p>

                    </div>
                    <div className=' flex flex-col gap-8 w-full '>
                        <div className='w-full rounded-xl p-6 gap-6 bg-white flex flex-col justify-center items-center '>
                            <div className='w-full h-[235px] flex justify-center'>
                                <img src={DiscordIcon} className='w-[186.28px] h-[211.12px]' />
                            </div>
                            <div className='w-full flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label className='opacity-80 font-semibold font-sans text-3xl leading-[38px] text-[#0F131A] text-center'>Join Our <span className='text-[#6001D1]'>Discord</span> Community</label>
                                </div>
                                <p className='opacity-60 text-lg text-center text-black'>
                                    Engage with fellow learners, get real-time support, and access exclusive content on our vibrant Discord server.
                                </p>
                            </div>

                        </div>
                        <div className='w-full rounded-xl p-6 gap-6 bg-white flex flex-col'>
                            <div className='w-full flex justify-center'>
                                <img src={XIcon} className='w-[198.36px] h-[267px]' />
                            </div>
                            <div className='w-full flex flex-col gap-4'>
                                <label className='font-bold text-3xl font-sans'>Follow Us on <span className='text-[#6001D1]'>X</span></label>
                                <p className='opacity-60 text-center text-lg text-black'>Stay updated with the latest news, insights, and opportunities by following us on X.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}
