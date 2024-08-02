import solar from "/images/icons/solar-system.png";
import more from "/images/icons/more.png";
import cent from "/images/icons/cent.png";
import carrinho from "/images/icons/Basket.png";
import pacote from "/images/icons/package.png";
import arrow from "/images/icons/Arrow.png";
import shield from "/images/icons/shield.png";
import video from "/images/icons/video.png";
import web from "/images/icons/web.png";
import chip from "/images/icons/ai-artificial-intelligence-chip.png";
import LogoNortechApp from "/images/logo-nortechapp(footer).png";
import { LuMenu } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
// import grade from "/images/littleGrade.png";



export const TheNortechEcosystem = () => {
    return(
        <div className="px-28 py-[82px] flex flex-col gap-12 bg-white items-center ">
            <div className="flex flex-col gap-12 justify-center items-center max-w-[1184px]">
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex gap-2 items-center">
                        <img src={solar} alt="" className="size-6"/>
                        <h4 className="font-normal text-lg leading-7 text-[#6001D1]">
                            Earn NTH for Learning
                        </h4>
                    </div>
                    <p className="font-sans font-semibold text-4xl leading-[44px] text-[#0B0D12]">
                        The Nortech Ecosysten
                    </p>
                </div>

                <div className="flex flex-col gap-8 ">

                    <div className="flex gap-8 ">

                        {/* card 1 */}
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-gradient-to-b from-[rgba(251,250,252,0)] to-[#FBFAFC] w-[384px]">

                            <div className="w-full relative h-[286px] overflow-hidden">
                                <div className=" px-6 pt-6 rounded-2xl border-x-[10px] border-t-[10px] border-solid border-[#F6F5F7] w-[250px] h-fit flex flex-col absolute gap-4 top-[27px] left-[67px]">
                                    <div className="w-full justify-between flex items-center">
                                        <p className="text-[#6001D1] text-sm font-semibold leading-5">
                                            All Course
                                        </p>
                                        <img src={more} alt="" className="size-6"/>
                                    </div>
                                    <div className="w-full border border-[#F1F1F1]"/>

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
                                            <img src={carrinho} alt="" className="size-[18px]"/>
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
                                            <img src={carrinho} alt="" className="size-[18px]"/>
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
                                            <img src={carrinho} alt="" className="size-[18px]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <img src={pacote} alt="" className="size-6"/>
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
                                            <img src={arrow} alt="" className="size-6"/>
                                            <h5 className="text-[#6001D1] font-semibold text-sm ">
                                                IA Learning
                                            </h5>
                                        </div>
                                        <div className="w-full border border-[#F1F1F1]"/>
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
                                                <div className="w-[12px] h-[30px] bg-[#6001D1] absolute left"/>
                                            </div>  
                                        </div>
                                    </div>

                            </div>
                            <div className="flex gap-2">
                                <img src={chip} alt="" className="size-6"/>
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
                                        <img src={LogoNortechApp} alt="" className="w-[66px] h-[15px]"/>
                                        <LuMenu className="text-black size-[18px]"/>
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
                                                <div className="bg-[#6001D1] h-[5px] w-[9px] top-[67px] left-[31px] absolute"/>
                                                <div className="bg-[#6001D1] h-[9px] w-[9px] top-[63px] left-[49px] absolute"/>
                                                <div className="bg-[#6001D1] h-[5px] w-[9px] top-[67px] left-[67px] absolute"/>
                                                <div className="bg-[#6001D1] h-[16px] w-[9px] top-[56px] left-[85px] absolute"/>
                                                <div className="bg-[#6001D1] h-[5px] w-[9px] top-[67px] left-[103px] absolute"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* desktop */}
                                <div className="w-[275px] h-[286px] absolute top-[27px] bg-white  left-[43px] rounded-2xl p-2 gap-4 border-[10px] border-[#F6F5F7] z-10">
                                    <div className="w-full flex h-[47px]">
                                        <div className="relative rounded-lg bg-[#F9F5FD] h-[47px] w-full">
                                            <img src={LogoNortechApp} alt="" className="w-[68px] h-[16px] absolute top-[15px] left-[16px]"/>
                                            <div className="w-[36px] h-[16px] bg-[#AE6BFF] rounded-full absolute top-[15px] right-[94px]"/>
                                            <div className="w-[36px] h-[16px] bg-[#AE6BFF] rounded-full absolute top-[15px] right-[55px]"/>
                                            <div className="w-[36px] h-[16px] bg-[#AE6BFF] rounded-full absolute top-[15px] right-[16px]"/>
                                        </div>
                                    </div>
                                    <p className="text-black">
                                        test
                                    </p>
                                    <div className="flex w-full h-100px ">
                                        <div className="relative rounded-lg border border-[#F5F6F6] bg-[#FDFDFD] w-full h-[100px]">
                                            <div className="bg-[#6001D1] w-[9px] h-[15px] top-[56px] right-[20px] absolute"/>
                                            <div className="bg-[#6001D1] w-[9px] h-[12px] top-[59px] right-[38px] absolute"/>
                                            <div className="bg-[#6001D1] w-[9px] h-[13px] top-[58px] right-[56px] absolute"/>
                                            <div className="bg-[#6001D1] w-[9px] h-[7px] top-[64px] right-[74px] absolute"/>
                                            <div className="bg-[#6001D1] w-[9px] h-[17px] top-[54px] right-[92px] absolute"/>
                                            <div className="bg-[#6001D1] w-[9px] h-[9px] top-[62px] right-[110px] absolute"/>
                                            <div className="bg-[#6001D1] w-[9px] h-[12px] top-[59px] right-[138px] absolute"/>
                                            <div className="bg-[#6001D1] w-[9px] h-[5px] top-[66px] right-[156px] absolute"/>
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
                                            <div className="absolute bg-[#AE6BFF] rounded-lg w-[200px] h-[50px] right-0 top-[50px]"/>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>  
                            <div className="flex gap-2">
                                <img src={web} alt="" className="size-6"/>
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
                            <div className="flex w-full h-[236px]">
                                <div className="relative w-full h-[236px] overflow-hidden">
                                    <div className="absolute w-[534px] h-[419px] top-[22px] left-[10px] rounded-3xl bg-[#F6F5F7]"/>
                                    <div className="absolute w-[502px] h-[312px] top-[38px] left-[26px] rounded-2xl p-6 gap-4 bg-white">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex w-full gap-1">
                                                <img src={arrow} alt="" className="size-6"/>
                                                <h5 className="text-[#6001D1] font-semibold text-sm ">
                                                    Course X
                                                </h5>
                                            </div>
                                            <div className="w-full border border-[#F1F1F1]"/>
                                            <div className="flex flex-col rounded-lg gap-[10px] border bg[#FDFDFD] bprder-[#F5F6F6] p-2">
                                                <p className="text-xs leading-[18px] font-semibold text-[#505358]">
                                                    Progress course
                                                </p>
                                                <div className="w-full border border-[#F1F1F1] rounded-full relative h-[26px] overflow-hidden">
                                                    
                                                    <div className="w-[12px] h-[30px] bg-[#6001D1] absolute left"/>
                                                </div> 
                                            </div>  
                                            <div className="bg-[#F2E8FF] w-[454px] h-[100px] rounded-lg "/>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                            <div className="flex gap-2 w-full ">
                                <img src={cent} alt="" className="size-6 text-[#6001D1]"/>
                                <h5 className=" text-[#0B0D12] font-bold leading-[20px]">
                                    Proof Of Study
                                </h5>
                            </div>
                            <p className="w-[328px] opacity-60 text-[#33363C]">
                                O aplicativo Nortech é uma plataforma onde você pode comprar e vender cursos, utilizando o Token NTH.
                            </p>
                        </div>
                        <div className="w-[592px] h-[412px] rounded-xl p-6 flex flex-col gap-4 bg-white"
                        style={{
                            backgroundImage: `url(${"grade"})`,
                          }}
                        >
                            <div className="flex w-full h-[236px]">
                                <div className="relative w-full h-[236px] overflow-hidden">
                                      
                                </div>
                            </div>
                            <div className="flex gap-2 w-full ">
                                <img src={shield} alt="" className="size-6 text-[#6001D1]"/>
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
                <BsArrowRight className="size-5 text-white"/>
              </div>
            </div>
        </div>
    )
}
type TCourse ={
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
            <img src={video} alt="" className="size-[18px]"/>
        </div>
        <div className="flex flex-col items-center">
            <h6 className="text-xs leading-[18px] font-semibold text-[#505358]">{text1}</h6>
            <h6 className="text-[8px] leading-[18px] font-medium text-[#939598]">{text2}</h6>
        </div>
      </div>
    );
  } ;

