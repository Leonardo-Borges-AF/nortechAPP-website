import { IoMdCheckboxOutline } from "react-icons/io";
import BenefitsIcon from '/images/icons/Benefits.svg';
import Check from '/images/icons/Check.svg';
import NortechIcon from '/images/icons/Nortech.svg';

export const UnlockExclusiveBenefits = () => {
    return (
        <div id="blog-session" className="bg-[#ffff] text-black px-4 py-16 md:p-20 relative">
            <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8 justify-center items-center">
                <div className='flex items-center gap-2'>
                    <img src={BenefitsIcon} className='w-7 h-7' />
                    <label className="text-lg text-[#6001D1] leading-tight uppercase opacity-60">
                        Benefits Nortech App
                    </label>
                </div>
                <h2 className="md:text-4xl  text-[28px] font-bold  leading-tight">
                    Unlock Exclusive Benefits
                </h2>
                <div className='flex items-center gap-8 justify-start relative w-full bg-[#FBFAFC] p-6 rounded-xl overflow-hidden'>
                    <div className='flex flex-col gap-4 max-w-[400px]'>
                        <div className='flex items-center gap-2'>
                            <img src={NortechIcon} />
                            <h6 className='font-bold'>Bonus on NTH Tokens</h6>
                        </div>
                        <p className='opacity-60 text-[#33363C]'>
                            When you sign up for the waitlist, you earn extra NTH tokens. This gives you a head start, letting you access premium features, enroll in exclusive courses, and participate in governance early. <br /><br />
                            By joining now, you not only secure your spot but also boost your learning experience with added benefits and early access to all our upcoming features.
                        </p>
                    </div>
                    <div className='w-full relative h-full'>
                        <div className='flex flex-col bg-white p-6 rounded-2xl h-[318px] absolute -top-[80px] -right-[80px] gap-4 border-[10px] border-opacity-15 border-gray-400'
                            style={{
                                width: 'calc(100% + 80px)',
                            }}>
                            <div className='flex gap-2'>
                                <img src={Check} />
                                <h6 className='text-[#6001D1]'>Registered on the waiting list</h6>
                            </div>
                            <p className='text-[#505358] text-xs font-semibold'>Email received</p>
                            <div className='bg-[#F2E8FF] w-full h-[196px] rounded-lg'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full gap-6'>
                    <div className='flex items-start gap-8 justify-start relative w-full bg-[#FBFAFC] p-6 rounded-xl overflow-hidden min-h-[400px] '>
                        <div className='flex flex-col gap-4 max-w-[400px]'>
                            <div className='flex items-center gap-2'>
                                <img src={NortechIcon} />
                                <h6 className='font-bold'>Early Access</h6>
                            </div>
                            <p className='opacity-60 text-[#33363C]'>
                                Have early access to new courses and <br /> platform features.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-8 justify-start relative w-full bg-[#FBFAFC] p-6 rounded-xl overflow-hidden min-h-[400px] items-start'>
                        <div className='flex flex-col gap-4 w-full'>
                            <div className='flex items-center gap-2'>
                                <img src={NortechIcon} />
                                <h6 className='font-bold'>Quests to Earn Tokens</h6>
                            </div>
                            <p className='opacity-60 text-[#33363C]'>
                                Participate in quests and challenges to earn <br /> even more NTH tokens.
                            </p>
                            <div className='w-full relative h-full'>
                                <div className='flex flex-col bg-white p-6 rounded-2xl h-fit absolute right-0 top-0 gap-4 border-[10px] border-opacity-15 border-gray-400 w-full'>
                                    <div className='flex gap-2'>
                                        <img src={Check} />
                                        <h6 className='text-[#6001D1]'>Quests</h6>
                                    </div>
                                    <div className='w-full h-[2px] bg-gray-100'></div>
                                    <div className='flex items-center justify-start gap-2'>
                                        <IoMdCheckboxOutline className="text-xl opacity-70" />
                                        <div className='bg-[#F2E8FF] w-full h-[20px] rounded-md'></div>
                                    </div>
                                    <div className='flex items-center justify-start gap-2'>
                                        <IoMdCheckboxOutline className="text-xl opacity-70" />
                                        <div className='bg-[#F2E8FF] w-full h-[20px] rounded-md'></div>
                                    </div>
                                    <div className='flex items-center justify-start gap-2'>
                                        <IoMdCheckboxOutline className="text-xl opacity-70" />
                                        <div className='bg-[#F2E8FF] w-full h-[20px] rounded-md'></div>
                                    </div>
                                    <div className='flex items-center justify-start gap-2'>
                                        <IoMdCheckboxOutline className="text-xl opacity-70" />
                                        <div className='bg-[#F2E8FF] w-full h-[20px] rounded-md'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
