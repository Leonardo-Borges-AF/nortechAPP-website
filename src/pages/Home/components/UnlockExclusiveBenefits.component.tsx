import { IoMdCheckboxOutline } from "react-icons/io";
import { CardFloating } from "~/components/CardFloating.componen";
import BenefitsIcon from '/images/icons/Benefits.svg';
import CertificateIcon from '/images/icons/certificate.svg';
import { default as Check, default as CheckIcon } from '/images/icons/Check.svg';
import CryptoCircleIcon from '/images/icons/crypto-circle.svg';
import NortechIcon from '/images/icons/Nortech.svg';
import Nnortech from '/images/N.png';

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
                    <div className='flex flex-col gap-4 max-w-[400px] pb-8'>
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
                        <div className='flex flex-col bg-white p-6 rounded-2xl h-[318px] absolute -top-[110px] -right-[80px] gap-4 border-[10px] border-opacity-15 border-gray-400'
                            style={{
                                width: 'calc(100% + 80px)',
                            }}>
                            <div className='flex gap-2'>
                                <img src={Check} />
                                <h6 className='text-[#6001D1]'>Registered on the waiting list</h6>
                            </div>
                            <p className='text-[#505358] text-xs font-semibold'>Email received</p>
                            <CardFloating
                                text="+200 NTH Tokens"
                                position={{
                                    left: 'calc(50% - 60px)',
                                    top: 'calc(50% - 90px)',
                                }}
                                icon={NortechIcon}
                            />
                            <CardFloating
                                text="Congratulations on signing up"
                                position={{
                                    left: 'calc(50% - 300px)',
                                    top: 'calc(50% + 20px)',
                                }}
                                icon={CryptoCircleIcon}
                            />
                            <CardFloating
                                text="Certificate received"
                                position={{
                                    left: 'calc(50% + 125px)',
                                    top: 'calc(50% + 10px)',
                                }}
                                icon={CertificateIcon}
                            />
                            <div className='bg-[#F2E8FF] w-full h-[196px] rounded-lg'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full gap-6'>
                    <div className='flex flex-col items-start gap-8 justify-start w-full bg-[#FBFAFC] p-6 rounded-xl overflow-hidden min-h-[400px] relative'>
                        <div className='flex items-center gap-2'>
                            <img src={NortechIcon} />
                            <h6 className='font-bold'>Early Access</h6>
                        </div>
                        <p className='opacity-60 text-[#33363C]'>
                            Have early access to new courses and <br /> platform features.
                        </p>
                        <div className="flex items-center justify-center h-full w-full absolute left-0 bottom-0 overflow-hidden">
                            <div className="flex items-center justify-center bg-[#6001D1] rounded-full w-12 h-12 absolute top-[58%]">
                                <img src={Nnortech} />
                            </div>
                            <div className="relative top-[14%] h-full max-h-[230px] w-full overflow-hidden">
                                <div className="rounded-full border border-black opacity-5 border-solid w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                <div className="rounded-full border border-black opacity-5 border-solid w-[140px] h-[140px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                <div className="rounded-full border border-black opacity-5 border-solid w-[200px] h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                <div className="rounded-full border border-black opacity-5 border-solid w-[260px] h-[260px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                <div className="rounded-full border border-black opacity-5 border-solid w-[320px] h-[320px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                <div className="rounded-full border border-black opacity-5 border-solid w-[380px] h-[380px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                            </div>
                            <CardFloating
                                text="Participation in Feedback and Development"
                                position={{
                                    left: '15%',
                                    top: '40%',
                                }}
                                icon={CheckIcon}
                            />
                            <CardFloating
                                text="Bonus on NTH Tokens"
                                position={{
                                    right: '0',
                                    top: '57%',
                                }}
                                icon={NortechIcon}
                            />
                            <CardFloating
                                text="Achievements and Special Rewards"
                                position={{
                                    left: '20%',
                                    bottom: '15%',
                                }}
                                icon={BenefitsIcon}
                            />
                            <CardFloating
                                text="First to Test New Features"
                                position={{
                                    left: '0',
                                    top: '57%',
                                }}
                                icon={CryptoCircleIcon}
                            />
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


