import solar from "/images/icons/solar-system.png";
import more from "/images/icons/more.png";
import carrinho from "/images/icons/Basket.png";
import pacote from "/images/icons/package.png";
import arrow from "/images/icons/Arrow.png";
import video from "/images/icons/video.png";
import chip from "/images/icons/ai-artificial-intelligence-chip.png";

export const TheNortechEcosystem = () => {
    return(
        <div className="px-28 py-[82px] flex flex-col gap-12 bg-white ">

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

                        <div className="w-full">
                            <div className=" px-6 pt-6 rounded-2xl border-x-2 border-t-2 border-solid border-[#dfdde1e0] w-[266px] flex flex-col gap-4">
                                <div className="w-full justify-between flex items-center">
                                    <p className="text-[#6001D1] text-sm font-semibold leading-5">
                                        All Course
                                    </p>
                                    <img src={more} alt="" className="size-6"/>
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

                        <div className="w-full h-[286px] ">
                            <div className="relative ">

                                <div className="p-6 rounded-2xl flex flex-col gap-4 items-center">
                                    <div className="flex gap-1 w-full">
                                        <img src={arrow} alt="" className="size-6"/>
                                        <h5 className="text-[#6001D1] font-semibold text-sm ">
                                            IA Learning
                                        </h5>
                                    </div>
                                    <div className="w-full border border-[#F1F1F1]"/>
                                    <div className="flex">
                                        <div className="relative">
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
                                        <div className="w-full border border-[#F1F1F1] rounded-full relative h-[26px]">
                                            <p className="font-semibold absolute text-xs text-[#505358] py-1 left-1/2 ">
                                                43%
                                            </p>
                                            <div className="w-[12px] h-[30px] bg-[#6001D1] absolute left"/>
                                        </div>  
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

                        <div className="w-full">
                            <div className=" px-6 pt-6 rounded-2xl border-x-2 border-t-2 border-solid border-[#dfdde1e0] w-[266px] flex flex-col gap-4">
                                <div className="w-full justify-between flex items-center">
                                    <p className="text-[#6001D1] text-sm font-semibold leading-5">
                                        All Course
                                    </p>
                                    <img src={more} alt="" className="size-6"/>
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

