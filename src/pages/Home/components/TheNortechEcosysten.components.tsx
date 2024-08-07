import { BsArrowRight } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import chip from "/images/icons/ai-artificial-intelligence-chip.png";
import arrow from "/images/icons/Arrow.png";
import carrinho from "/images/icons/Basket.png";
import cent from "/images/icons/cent.png";
import more from "/images/icons/more.png";
import pacote from "/images/icons/package.png";
import shield from "/images/icons/shield.png";
import solar from "/images/icons/solar-system.png";
import video from "/images/icons/video.png";
import web from "/images/icons/web.png";
import LogoNortechApp from "/images/logo-nortechapp(footer).png";
// import grade from "/images/littleGrade.png";
import loading from "/images/icons/shield-loading.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CardFloating } from "~/components/CardFloating.componen";
import CertificateIcon from '/images/icons/certificate.svg';
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./TheNortech.css";
import NortechIcon from '/images/icons/Nortech.svg';
import hat from '/images/icons/graduate-hat-loading.png';


export const TheNortechEcosystem = () => {
    useLayoutEffect(() => { 
        
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".progress-43", {
        width: 110,
        duration: 3,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: ".trigger",
        },
        });
        gsap.to(".bar-10", {
            height: 40,
            top: 32,
            left: 31,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-11", {
            height: 22,
            duration: 1.5,
            top: 50,
            left: 48,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-12", {
            height: 33,
            duration: 1.5,
            top: 39,
            left: 67,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-13", {
            height: 48,
            duration: 1.5,
            top: 24,
            left: 85,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-14", {
            height: 11,
            duration: 1.5,
            top: 61,
            left: 103,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-16", {
            height: 35,
            duration: 1.5,
            top: 36,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-17", {
            height: 28,
            duration: 1.5,
            top: 43,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-18", {
            height: 31,
            duration: 1.5,
            top: 40,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-19", {
            height: 17,
            duration: 1.5,
            top: 54,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-20", {
            height: 40,
            duration: 1.5,
            top: 31,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".bar-21", {
            height: 22,
            duration: 1.5,
            top: 49,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".progress", {
            width: 443,
            duration: 4,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
        gsap.to(".progress-text", {
            opacity: 100,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".trigger",
            },
        });
      }, []);
      
    return (
        <div>
            <div className="px-28 py-[82px] flex flex-col gap-12 bg-white items-center md:block sm:hidden xs:hidden">
                <div className="flex flex-col gap-12 justify-center items-center max-w-[1184px]">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex gap-2 items-center">
                            <img src={solar} alt="" className="size-6" />
                            <h4 className="font-normal text-lg leading-7 text-[#6001D1]">
                                Earn NTH for Learning
                            </h4>
                        </div>
                        <p className="font-sans font-semibold text-4xl leading-[44px] text-[#0B0D12]">
                            The Nortech Ecosysten
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 ">

                        <div className="trigger">

                            {/* card 1 */}
                            <div className="flex flex-col gap-4 p-6 rounded-xl bg-gradient-to-b from-[rgba(251,250,252,0)] to-[#FBFAFC] w-[384px]">

                                <div className="w-full relative h-[286px] overflow-hidden">
                                    <div className=" px-6 pt-6 rounded-2xl border-x-[10px] border-t-[10px] border-solid border-[#F6F5F7] w-[250px] h-fit flex flex-col absolute gap-4 top-[27px] left-[67px]">
                                        <div className="w-full justify-between flex items-center">
                                            <p className="text-[#6001D1] text-sm font-semibold leading-5">
                                                All Course
                                            </p>
                                            <img src={more} alt="" className="size-6" />
                                        </div>
                                        <div className="w-full border border-[#F1F1F1]" />

                                        <div className="rounded-lg border justify-between p-2 bg-[#FDFDFD] border-[#F5F6F6] items-center flex">
                                            <div className="flex flex-col ">
                                                <p className="text-xs leading-[18px] font-semibold text-[#505358]">
                                                    Buy course
                                                </p>
                                                <p className="text-[8px] font-medium leading-[18px] text-[#939598]">
                                                    Buy this Python course
                                                </p>
                                            </div>
                                            <div className="flex items-center p-[6px] rounded-full bg-[#F2E8FF] bg-opacity-40">
                                                <img src={carrinho} alt="" className="size-[18px]" />
                                            </div>
                                        </div>
                                        <div className="rounded-lg border justify-between p-2 bg-[#6001D1] border-[#F5F6F6] items-center flex">
                                            <div className="flex flex-col ">
                                                <p className="text-xs leading-[18px] font-semibold text-white">
                                                    Buy course
                                                </p>
                                                <p className="text-[8px] font-medium leading-[18px] text-white">
                                                    Buy this Python course
                                                </p>
                                            </div>
                                            <div className="flex items-center p-[6px] rounded-full bg-[#F2E8FF] bg-opacity-40">
                                                <img src={carrinho} alt="" className="size-[18px]" />
                                            </div>

                                        </div>
                                        <div className="rounded-lg border justify-between p-2 bg-[#FDFDFD] border-[#F5F6F6] items-center flex">
                                            <div className="flex flex-col ">
                                                <p className="text-xs leading-[18px] font-semibold text-[#505358]">
                                                    Buy course
                                                </p>
                                                <p className="text-[8px] font-medium leading-[18px] text-[#939598]">
                                                    Buy this Python course
                                                </p>
                                            </div>
                                            <div className="flex items-center p-[6px] rounded-full bg-[#F2E8FF] bg-opacity-40">
                                                <img src={carrinho} alt="" className="size-[18px]" />
                                            </div>
                                        </div>
                                        <CardFloating
                                            text="Buy completed"
                                            position={{
                                                left: '0',
                                                top: '70%',
                                            }}
                                            icon={<IoIosCheckmarkCircleOutline fontSize={20} color="#14975A" />}
                                            iconPosition="right"
                                        />
                                        <CardFloating
                                            text="Sale completed"
                                            position={{
                                                left: '-40px',
                                                top: '30%',
                                            }}
                                            icon={<IoIosCheckmarkCircleOutline fontSize={20} color="#14975A" />}
                                            iconPosition="right"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <img src={pacote} alt="" className="size-6" />
                                    <h5 className="font-bold">
                                        Edu-Marketplace
                                    </h5>
                                </div>
                                <p className="text-[#33363C] leading-6 text-opacity-60 w-full">
                                    O aplicativo Nortech é uma plataforma onde você pode comprar e vender cursos, utilizando o Token NTH.
                                </p>
                            </div>

                            {/* card 2 */}
                            <div className="flex flex-col gap-4 p-6 rounded-xl bg-gradient-to-b from-[rgba(251,250,252,0)] to-[#FBFAFC] w-[384px]">

                                <div className="w-full relative h-[286px] overflow-hidden">

                                    <div className="p-6  rounded-2xl flex flex-col absolute top-[27px] gap-4 items-center border-x-[10px] border-t-[10px] border-[#F6F5F7] w-full">
                                        <div className="flex gap-1 w-full">
                                            <img src={arrow} alt="" className="size-6" />
                                            <h5 className="text-[#6001D1] font-semibold text-sm ">
                                                IA Learning
                                            </h5>
                                        </div>
                                        <div className="w-full border border-[#F1F1F1]" />
                                        <div className="flex">
                                            <div className="relative overflow-hidden">
                                                <div className="flex gap-4">
                                                    <Course
                                                        text1="Course 01"
                                                        text2="Course Python"
                                                    />
                                                    <Course
                                                        text1="Course 02"
                                                        text2="Course Java"
                                                    />
                                                    <Course
                                                        text1="Course 03"
                                                        text2="Course CSS"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-lg border p-2 gap-[10px] bg-[#FDFDFD] border-[#F5F6F6] flex flex-col w-full">
                                            <h5 className="font-semibold text-xs leading-[18px] text-[#505358] w-full">
                                                Progress
                                            </h5>
                                            <div className="w-full border border-[#F1F1F1] rounded-full relative h-[26px] overflow-hidden">
                                                <p className="font-semibold absolute text-xs text-[#505358] py-1 left-1/2 ">
                                                    43%
                                                </p>
                                                <div className="progress-43" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex gap-2">
                                    <img src={chip} alt="" className="size-6" />
                                    <h5 className="font-bold">
                                        AI-Driven Learning
                                    </h5>
                                </div>
                                <p className="text-[#33363C] leading-6 text-opacity-60 w-full">
                                    As aulas são melhoradas utilizando inteligência artificial para uma experiência de aprendizado mais personalizada.
                                </p>
                            </div>

                            {/* card 3 */}
                            <div className="flex flex-col gap-4 p-6 rounded-xl bg-gradient-to-b from-[rgba(251,250,252,0)] to-[#FBFAFC] w-[384px]">

                                <div className="w-full relative h-[286px] overflow-hidden">

                                    {/* mobile */}
                                    <div className="flex flex-col bg-white border-[5px] absolute border-[#F6F5F7] p-2 w-[150px] h-[284px] rounded-3xl top-[79px] left-[20px] gap-4 z-20">
                                        <div className="flex rounded-lg justify-between p-2 bg-[#F9F5FD]">
                                            <img src={LogoNortechApp} alt="" className="w-[66px] h-[15px]" />
                                            <LuMenu className="text-black size-[18px]" />
                                        </div>
                                        <div className="w-full flex flex-col    gap-[3px] ">
                                            <h5 className="font-semibold text-xs leading-[18px] text-[#505358]">
                                                Dashboard
                                            </h5>
                                            <div className="flex h-[100px] w-full">
                                                <div className="relative h-[100px] rounded-lg border border-[#F5F6F6]">
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[12px] left-[13px]">
                                                        04
                                                    </p>
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[32px] left-[13px]">
                                                        03
                                                    </p>
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[52px] left-[13px]">
                                                        02
                                                    </p>
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[72px] left-[13px]">
                                                        01
                                                    </p>
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[72px] left-[31px]">
                                                        10
                                                    </p>
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[72px] left-[49px]">
                                                        11
                                                    </p>
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[72px] left-[67px]">
                                                        12
                                                    </p>
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[72px] left-[85px]">
                                                        13
                                                    </p>
                                                    <p className="absolute text-[#505358] text-[8px] leading-[18px] top-[72px] left-[103px]">
                                                        14
                                                    </p>
                                                    <div className="bar-10" />
                                                    <div className="bar-11" />
                                                    <div className="bar-12" />
                                                    <div className="bar-13" />
                                                    <div className="bar-14" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* desktop */}
                                    <div className="w-[275px] h-[286px] absolute top-[27px] bg-white  left-[43px] rounded-2xl p-2 gap-4 border-[10px] border-[#F6F5F7] z-10">
                                        <div className="w-full flex h-[47px]">
                                            <div className="relative rounded-lg bg-[#F9F5FD] h-[47px] w-full">
                                                <img src={LogoNortechApp} alt="" className="w-[68px] h-[16px] absolute top-[15px] left-[16px]" />
                                                <div className="w-[36px] h-[16px] bg-[#AE6BFF] rounded-full absolute top-[15px] right-[94px]" />
                                                <div className="w-[36px] h-[16px] bg-[#AE6BFF] rounded-full absolute top-[15px] right-[55px]" />
                                                <div className="w-[36px] h-[16px] bg-[#AE6BFF] rounded-full absolute top-[15px] right-[16px]" />
                                            </div>
                                        </div>
                                        <p className="text-black">
                                            test
                                        </p>
                                        <div className="flex w-full h-100px ">
                                            <div className="relative rounded-lg border border-[#F5F6F6] bg-[#FDFDFD] w-full h-[100px]">
                                                <div className="bar-16" />
                                                <div className="bar-17" />
                                                <div className="bar-18" />
                                                <div className="bar-19" />
                                                <div className="bar-20" />
                                                <div className="bar-21" />
                                                <div className="bar-22" />
                                                <div className="bar-23" />
                                                
                                                <p className="absolute top-[71px] right-[20px] text-[#505358] text-[8px] leading-[18px] ">
                                                    21
                                                </p>
                                                <p className="absolute top-[71px] right-[38px] text-[#505358] text-[8px] leading-[18px] ">
                                                    20
                                                </p>
                                                <p className="absolute top-[71px] right-[56px] text-[#505358] text-[8px] leading-[18px] ">
                                                    19
                                                </p>
                                                <p className="absolute top-[71px] right-[74px] text-[#505358] text-[8px] leading-[18px] ">
                                                    18
                                                </p>
                                                <p className="absolute top-[71px] right-[92px] text-[#505358] text-[8px] leading-[18px] ">
                                                    17
                                                </p>
                                                <p className="absolute top-[71px] right-[110px] text-[#505358] text-[8px] leading-[18px] ">
                                                    16
                                                </p>
                                                <p className="absolute top-[71px] right-[138px] text-[#505358] text-[8px] leading-[18px] ">
                                                    15
                                                </p>
                                                <p className="absolute top-[71px] right-[156px] text-[#505358] text-[8px] leading-[18px] ">
                                                    14
                                                </p>
                                            </div>

                                        </div>
                                        <div className="w-full h-[50px] flex ">
                                            <div className="w-full h-[50px] relative">
                                                <div className="absolute bg-[#AE6BFF] rounded-lg w-[200px] h-[50px] right-0 top-[50px]" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="flex gap-2">
                                    <img src={web} alt="" className="size-6" />
                                    <h5 className="font-bold">
                                        User-Friendly Interface
                                    </h5>
                                </div>
                                <p className="text-[#33363C] leading-6 text-opacity-60 w-full">
                                    O aplicativo Nortech é uma plataforma onde você pode comprar e vender cursos, utilizando o Token NTH.
                                </p>
                            </div>

                        </div>
                        <div className="flex gap-8 items-center justify-center">
                            <div className="w-[592px] h-[412px] rounded-xl p-6 flex flex-col gap-4 bg-white"
                                style={{
                                    backgroundImage: `url(${"grade"})`,
                                }}
                            >
                                <div className="flex w-full h-[260px]">
                                    <div className="relative w-full h-[260px] overflow-hidden">
                                        <div className="absolute w-[534px] h-[419px] top-[22px] left-[10px] rounded-3xl bg-[#F6F5F7]" />
                                        <div className="absolute w-[502px] h-[312px] top-[38px] left-[26px] rounded-2xl p-6 gap-4 bg-white">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex w-full gap-1">
                                                    <img src={arrow} alt="" className="size-6" />
                                                    <h5 className="text-[#6001D1] font-semibold text-sm ">
                                                        Course X
                                                    </h5>
                                                </div>
                                                <CardFloating
                                                    text="+200 NTH Tokens"
                                                    position={{
                                                        left: '55%',
                                                        top: 'calc(50% - 90px)',
                                                    }}
                                                    icon={NortechIcon}
                                                />
                                                <CardFloating
                                                    text="Certificate received"
                                                    position={{
                                                        left: '10%',
                                                        top: '53%'
                                                    }}
                                                    icon={CertificateIcon}
                                                />
                                                <div className="w-full border border-[#F1F1F1]" />
                                                <div className="flex flex-col rounded-lg gap-[10px] border bg[#FDFDFD] bprder-[#F5F6F6] p-2">
                                                    <p className="text-xs leading-[18px] font-semibold text-[#505358]">
                                                        Progress course
                                                    </p>
                                                    <div className="w-full border border-[#F1F1F1] rounded-full relative h-[26px] overflow-hidden">
                                                        <div className="progress" />
                                                        <p className="progress-text">
                                                            100%
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="bg-[#F2E8FF] w-[454px] h-[100px] rounded-lg " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full ">
                                    <img src={cent} alt="" className="size-6 text-[#6001D1]" />
                                    <h5 className=" text-[#0B0D12] font-bold leading-[20px]">
                                        Proof Of Study
                                    </h5>
                                </div>
                                <p className="w-[328px] opacity-60 text-[#33363C]">
                                    O aplicativo Nortech é uma plataforma onde você pode comprar e vender cursos, utilizando o Token NTH.
                                </p>
                            </div>
                            <div className="w-[592px] h-[412px] rounded-xl p-6 flex flex-col gap-4 bg-[#FBFAFC]"
                                style={{
                                    backgroundImage: `url(${"grade"})`,
                                }}
                            >
                                <div className="flex w-full h-[236px]">
                                    <div className="relative w-full h-[236px] overflow-hidden">
                                        <div className="white-ball rounded-full bg-white size-[56px] top-[7px] left-[338px] absolute"/>
                                        <div className="white-ball rounded-full bg-white size-[56px] top-[141px] left-[128px] absolute"/>
                                        <div className="absolute top-[26px] left-[77px] p-4 white-ball rounded-full bg-[#6001D1]">
                                            <img src={loading} className="size-6" />
                                        </div>
                                        <div className="absolute top-[150px] left-[426px] p-4 white-ball rounded-full bg-[#6001D1]">
                                            <img src={hat} className="size-6" />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full ">
                                    <img src={shield} alt="" className="size-6 text-[#6001D1]" />
                                    <h5 className=" text-[#0B0D12] font-bold leading-[20px]">
                                        Web 3 Integration
                                    </h5>
                                </div>
                                <p className="w-[328px] opacity-60 text-[#33363C]">
                                    O aplicativo Nortech é uma plataforma onde você pode comprar e vender cursos, utilizando o Token NTH.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-2xl font-normal text-[#6001D1]">
                        Read the whitepaper
                    </p>
                    <div className="items-center rounded-full p-3 bg-[#6001D1]">
                        <BsArrowRight className="size-5 text-white" />
                    </div>
                </div>
            </div>

            {/* mobile/MOBILE */}

            <div className="flex flex-col w-full bg-white items-center sm:block md:hidden lg:hidden xl:hidden">
                <div className="flex flex-col max-w-[375px] items-center p-8 gap-12 ">
                    <div className="flex flex-col gap-[14px] items-center">
                        <div className="flex gap-1 items-center">
                            <div className="flex gap-[10px] p-2 rounded-full">
                                <img src={solar} className="size-6" />
                            </div>
                            <p className="text-lg text-[#6001D1] ">
                                Earn NTH for Learning
                            </p>
                        </div>
                        <h3 className="text-[#0B0D12] text-3xl font-semibold font-sans">
                            The Nortech Ecosysten
                        </h3>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-[#FBFAFC] h-[462px]">

                            {/* relative */}
                            <div className="flex h-[262px] w-full overflow-hidden">
                                <div className="relative h-[262px] w-[263px]">
                                    <div className="flex flex-col w-full absolute gap-4 p-6 rounded-2xl bg-white top-[4px] left-2 items-center">
                                        <div className="w-full flex justify-between items-center">
                                            <p className="text-[#6001D1] text-sm font-semibold ">
                                                All Course
                                            </p>
                                            <div className="size-6">
                                             <img src={more}/>
                                            </div>
                                        </div>
                                        <div className="w-full border border-[#F1F1F1] "/>
                                        <div className="border rounded-lg flex justify-between p-2 w-full border-[#F5F6F6] bg-[#FDFDFD] items-center ">
                                            <div className="flex flex-col">
                                                <p className="text-[#505358] text-xs font-semibold">
                                                    Buy course
                                                </p>
                                                <p className="text-[8px] font-medium leading-[18px] text-[#939598]">
                                                    Buy this Python course
                                                </p>
                                            </div>
                                            <div className="rounded-full bg-[#F2E8FF] bg-opacity-40 p-[6px] items-center ">
                                                <img src={carrinho} className="size-[18px]" />
                                            </div>
                                        </div>
                                        <div className="border rounded-lg flex justify-between p-2 w-full border-[#F5F6F6] bg-[#6001D1] items-center ">
                                            <div className="flex flex-col">
                                                <p className="text-white text-xs font-semibold">
                                                    Buy course
                                                </p>
                                                <p className="text-[8px] font-medium leading-[18px] text-white opacity-80">
                                                    Buy this Python course
                                                </p>
                                            </div>
                                            <div className="rounded-full bg-[#F2E8FF] bg-opacity-[0.12] p-[6px] items-center ">
                                                <img src={carrinho} className="size-[18px] filter invert brightness-0" />
                                            </div>
                                        </div>
                                        <div className="border rounded-lg flex justify-between p-2 w-full border-[#F5F6F6] bg-[#FDFDFD] items-center ">
                                            <div className="flex flex-col">
                                                <p className="text-[#505358] text-xs font-semibold">
                                                    Buy course
                                                </p>
                                                <p className="text-[8px] font-medium leading-[18px] text-[#939598]">
                                                    Buy this Java course
                                                </p>
                                            </div>
                                            <div className="rounded-full bg-[#F2E8FF] bg-opacity-40 p-[6px] items-center ">
                                                <img src={carrinho} className="size-[18px]" />
                                            </div>
                                        </div>
                                        <CardFloating
                                            text="Sale completed"
                                            position={{
                                                left: '88px',
                                                top: '65%',
                                            }}
                                            icon={<IoIosCheckmarkCircleOutline fontSize={18} color="#14975A" />}
                                            iconPosition="right"
                                            fontSize="font-light"
                                        />
                                        <CardFloating
                                            text="Buy completed"
                                            position={{
                                                left: '70px',
                                                top: '40%',
                                            }}
                                            icon={<IoIosCheckmarkCircleOutline fontSize={18} color="#14975A" />}
                                            iconPosition="right"
                                            fontSize="font-light"
                                        />
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
type TCourse = {
    text1: string
    text2: string
};
const Course = ({
    text1,
    text2,

}: TCourse) => {
    return (
        <div className="border flex flex-col border-[#F5F6F6] p-2 gap-[10px] rounded-lg items-center bg-[#FDFDFD] ">
            <div className="rounded-full p-[6px] bg-[#F2E8FF]">
                <img src={video} alt="" className="size-[18px]" />
            </div>
            <div className="flex flex-col items-center">
                <h6 className="text-xs leading-[18px] font-semibold text-[#505358]">{text1}</h6>
                <h6 className="text-[8px] leading-[18px] font-medium text-[#939598]">{text2}</h6>
            </div>
        </div>
    );
};

