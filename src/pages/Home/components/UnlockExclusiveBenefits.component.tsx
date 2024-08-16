import { IoMdCheckboxOutline } from "react-icons/io";
import { CardFloating } from "~/components/CardFloating.componen";
import BenefitsIcon from '/images/icons/Benefits.svg';
import CertificateIcon from '/images/icons/certificate.svg';
import { default as Check, default as CheckIcon } from '/images/icons/Check.svg';
import cointGrowth from '/images/icons/coint-growth.png';
import CryptoCircleIcon from '/images/icons/crypto-circle.svg';
import documet from '/images/icons/documet.png';
import list from '/images/icons/list.png';
import NortechIcon from '/images/icons/Nortech.svg';
import shield from '/images/icons/shield.png';
import Nnortech from '/images/N.png';


export const UnlockExclusiveBenefits = () => {

    return (
        <div id="benefits" className="">
            <div className="bg-[#ffff] text-black px-4 py-16 md:p-20 relative md:block sm:hidden xs:hidden">
                <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8 justify-center items-center">
                    <div className='flex items-center gap-2'>
                        <img src={BenefitsIcon} className='w-7 h-7' />
                        <label className="text-lg text-[#6001D1] leading-tight uppercase opacity-60">
                            NORTECH APP BENEFITS
                        </label>
                    </div>
                    <h2 className="md:text-4xl  text-[28px] font-bold  leading-tight">
                        Gain Access to Exclusive Perks
                    </h2>
                    <div className='flex items-center gap-8 justify-start relative w-full bg-[#FBFAFC] p-6 rounded-xl overflow-hidden'>
                        <div className='flex flex-col gap-4 max-w-[400px] pb-8'>
                            <div className='flex items-center gap-2'>
                                <img src={NortechIcon} />
                                <h6 className='font-bold'>Earn Extra NTH Tokens</h6>
                            </div>
                            <p className='opacity-60 text-[#33363C]'>
                                Sign up for the waitlist and earn bonus NTH tokens, giving you early access to premium features, exclusive courses, and governance participation. Join now to secure your spot and enhance your learning experience with these added perks.
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
                                <h6 className='font-bold'>Unlock Early Access Privileges</h6>
                            </div>
                            <p className='opacity-60 text-[#33363C]'>
                                Gain exclusive early access to the latest courses and cutting-edge platform features before everyone else. Stay ahead with innovative updates, explore new educational opportunities first, and maximize your learning potential from the very start.
                            </p>
                            <div className="flex items-center justify-center h-full w-full absolute left-0 bottom-0 overflow-hidden">
                                <div className="flex items-center justify-center bg-[#6001D1] rounded-full w-12 h-12 absolute top-[58%]">
                                    <img src={Nnortech} />
                                </div>
                                <div className="relative top-[14%] h-full max-h-[230px] w-full overflow-hidden">
                                    <div className="rounded-full border border-black opacity-5 border-solid w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-center" />
                                    <div className="rounded-full border border-black opacity-5 border-solid w-[140px] h-[140px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-center" />
                                    <div className="rounded-full border border-black opacity-5 border-solid w-[200px] h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-center" />
                                    <div className="rounded-full border border-black opacity-5 border-solid w-[260px] h-[260px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-center" />
                                    <div className="rounded-full border border-black opacity-5 border-solid w-[320px] h-[320px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-center" />
                                    <div className="rounded-full border border-black opacity-5 border-solid w-[380px] h-[380px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-center" />
                                </div>
                                <CardFloating
                                    text="Participation in Feedback and Development"
                                    position={{
                                        left: '15%',
                                        top: '45%',
                                    }}
                                    icon={CheckIcon}
                                />
                                <CardFloating
                                    text="Bonus on NTH Tokens"
                                    position={{
                                        right: '0',
                                        top: '62%',
                                    }}
                                    icon={NortechIcon}
                                />
                                <CardFloating
                                    text="Achievements and Special Rewards"
                                    position={{
                                        left: '20%',
                                        bottom: '10%',
                                    }}
                                    icon={BenefitsIcon}
                                />
                                <CardFloating
                                    text="First to Test New Features"
                                    position={{
                                        left: '0',
                                        top: '62%',
                                    }}
                                    icon={CryptoCircleIcon}
                                />
                            </div>

                        </div>
                        <div className='flex gap-8 justify-start relative w-full bg-[#FBFAFC] p-6 rounded-xl overflow-hidden min-h-[400px] items-start'>
                            <div className='flex flex-col gap-4 w-full'>
                                <div className='flex items-center gap-2'>
                                    <img src={NortechIcon} />
                                    <h6 className='font-bold'>Boost Your Tokens with Challenges</h6>
                                </div>
                                <p className='opacity-60 text-[#33363C]'>
                                    Take on exciting quests and challenges designed to help you earn even more NTH tokens. By participating, you’ll not only sharpen your skills but also unlock additional rewards, adding a fun and engaging way to boost your token balance.
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
            {/* mobile */}
            <div className="sm:block md:hidden lg:hidden xl:hidden w-full bg-white items-center relative flex flex-col h-fit">
                <div className="flex flex-col max-w-[375px] mx-auto py-[82px] px-8 gap-8 h-fit">
                    <div className="flex flex-col gap-2 items-center w-full">
                        <div className="flex gap-1 items-center">
                            <img src={BenefitsIcon} className='w-7 h-7' />
                            <label className="text-lg text-[#6001D1] leading-tight uppercase opacity-60">
                                NORTECH APP BENEFITS
                            </label>
                        </div>
                        <p className="text-[#0B0D12] font-semibold text-3xl font-sans text-center">
                            Gain Access to Exclusive Perks
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 pt-6 px-6 rounded-xl bg-[#FBFAFC] overflow-hidden">
                        <div className="flex flex-col gap-4">
                            <div className="flex  gap-2">
                                <img src={NortechIcon} />
                                <p className="text-[#0B0D12] font-bold">
                                    Earn Extra NTH Tokens
                                </p>

                            </div>
                            <p className="opacity-60 text-[#33363C] ">
                                Sign up for the waitlist and earn bonus NTH tokens, giving you early access to premium features, exclusive courses, and governance participation. Join now to secure your spot and enhance your learning experience with these added perks.
                            </p>
                        </div>
                        <div className="w-[1192px] h-[284px] relative">
                            <div className="absolute flex flex-col w-[378px] h-[318px] top-[13px] left-[16px] rounded-2xl p-6 gap-4 bg-white border-[9px] border-[#F6F5F7]">
                                <div className="flex gap-1 items-center ">
                                    <img src={Check} className="size-6" />
                                    <p className="text-[#6001D1] font-semibold text-sm">
                                        Registered on the waiting list
                                    </p>
                                </div>
                                <p className="text-[#505358] text-xs font-semibold">
                                    Email received
                                </p>
                                <div className="w-[330px] h-[196px] rounded-lg bg-[#F2E8FF]" />
                                <div className="absolute rounded-full top-[105px] left-[15px] py-2 px-3 flex gap-1 bg-white drop-shadow-lg">
                                    <img src={NortechIcon} />
                                    <p className="text-[#3A3D43] text-sm">
                                        +200 NTH Tokens
                                    </p>
                                </div>
                                <div className="absolute rounded-full top-[155px] left-[90px] py-2 px-3 flex gap-1 bg-white drop-shadow-lg">
                                    <img src={CertificateIcon} />
                                    <p className="text-[#3A3D43] text-sm">
                                        Certificate received
                                    </p>
                                </div>
                                <div className="absolute rounded-full top-[205px] left-[15px] py-2 px-3 flex gap-1 bg-white drop-shadow-lg">
                                    <img src={CryptoCircleIcon} />
                                    <p className="text-[#3A3D43] text-sm">
                                        Congratulations on signing up
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-8 ">
                        <div className="flex flex-col  gap-4 p-6 rounded-xl bg-[#FBFAFC] md:w-[592px] h-[412px] ">
                            <div className="flex gap-2">
                                <img src={NortechIcon} className="size-6" />
                                <p className="text-[#0B0D12] font-bold">
                                    Unlock Early Access Privileges
                                </p>
                            </div>
                            <p className="text-[#33363C] opacity-60">
                                Have early access to new courses and <br /> platform features.
                            </p>
                            <div className="w-[544px] h-[260px] relative ">
                                {/* relative ta aquiiiiiiiiiiiii */}
                                <div className="bg-[#6001D1] rounded-full p-4 absolute top-[112.82px] left-[104.6px] drop-shadow h-fit w-fit z-10">
                                    <img src={Nnortech} className="size-18px" />
                                </div>
                                <div className="floating absolute bg-white rounded-full top-[18px] left-[-29px] flex gap-1 py-2 px-3 drop-shadow-lg items-center">
                                    <img src={list} className="size-5" />
                                    <p className="text-[#3A3D43] text-xs">
                                        Participation in Feedback and Development
                                    </p>
                                </div>
                                <div className="floating absolute bg-white rounded-full top-[77px] left-[-3px] flex gap-1 py-2 px-3 drop-shadow-lg items-center z-0">
                                    <img src={CryptoCircleIcon} className="size-5" />
                                    <p className="text-[#3A3D43] text-xs">
                                        First to Test New Features
                                    </p>
                                </div>
                                <div className="floating absolute bg-white rounded-full top-[161px] left-[77px] flex gap-1 py-2 px-3 drop-shadow-lg items-center z-0">
                                    <img src={NortechIcon} className="size-5" />
                                    <p className="text-[#3A3D43] text-xs">
                                        Bonus on NTH Tokens
                                    </p>
                                </div>
                                <div className="floating absolute bg-white rounded-full top-[221px] left-[-17px] flex gap-1 py-2 px-3 drop-shadow-lg items-center z-0">
                                    <img src={cointGrowth} className="size-5" />
                                    <p className="text-[#3A3D43] text-xs">
                                        Achievements and Special Rewards
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[592px] h-[520px] rounded-xl flex flex-col p-6 gap-4 bg-[#FBFAFC] overflow-hidden">
                            <div className="flex gap-2 ">
                                <img src={shield} className="size-6" />
                                <p className="text-[#0B0D12] font-bold ">
                                    Boost Your Tokens with Challenges
                                </p>
                            </div>
                            <p className="text-[#33363C]">
                                Take on exciting quests and challenges designed to help you earn even more NTH tokens. By participating, you’ll not only sharpen your skills but also unlock additional rewards, adding a fun and engaging way to boost your token balance.
                            </p>
                            {/* relative aqasfgdis */}
                            <div className="relative w-[544px] h-[260px] overflow-hidden">
                                <div className="w-[512px] h-[312px] absolute top-4 left-4 rounded-2xl p-6 gap-4 flex flex-col bg-white border-[16px] border-[#F6F5F7]">
                                    <div className="flex gap-1 items-center">
                                        <img src={documet} className="size-6" />
                                        <p className="text-[#6001D1] font-semibold text-sm ">
                                            Quests
                                        </p>
                                    </div>
                                    <div className="w-full border border-[#F1F1F1] " />
                                    <div className="flex gap-2 items-center">
                                        <IoMdCheckboxOutline className="text-xl opacity-70" />
                                        <div className="bg-[#F2E8FF] w-full h-[24px] rounded-lg" />
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <IoMdCheckboxOutline className="text-xl opacity-70" />
                                        <div className="bg-[#F2E8FF] w-full h-[24px] rounded-lg" />
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <IoMdCheckboxOutline className="text-xl opacity-70" />
                                        <div className="bg-[#F2E8FF] w-full h-[24px] rounded-lg" />
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <IoMdCheckboxOutline className="text-xl opacity-70" />
                                        <div className="bg-[#F2E8FF] w-full h-[24px] rounded-lg" />
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


