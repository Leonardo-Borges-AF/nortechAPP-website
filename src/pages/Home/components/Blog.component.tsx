import solar from "/images/icons/solar-system.png";
import { FaArrowLeft } from "react-icons/fa6";

export const Blog = () => {

  return(
    <div className="bg-white relative w-full items-center justify-center flex">
      <div className="max-w-[1440px] py-[100px] px-8 gap-[20px] flex flex-col ">
        <div className="flex flex-col gap-[53px]">
          <div className="w-full">
            <div className="w-[32px] h-[1.5px] bg-[#07090C] "/>
          </div> 
          <div className="justify-between w-full flex">
            <div className="flex flex-col gap-8 w-full ">
              <div className="flex gap-2 rounded-[40px] items-center pl-2">
                <img src={solar} className="size-6" />
                <h5 className="text-[#6001D1] text-lg">
                  Esclareça suas dúvidas
                </h5>
              </div>
              <h4 className="font-semibold text-4xl leading-[44px] text-[#0B0D12] w-[672px]">
                Futuro da Educação e Tecnologia com o Blog da NortechApp
              </h4>
            </div>

            <p className="text-right items-end font-main text-lg leading-[32px] text-[#9195A6] w-[358px] tracking-[-0.1em] flex">
              Leia sobre as últimas tendências, descobertas educacionais e histórias  de sucesso da comunidade Nortech.
            </p>

            
          </div>
          <div className="flex gap-8">
            <Card
              text1="Descubra o Futuro da Educação e Tecnologia com o Blog da Nortech ..."
              text2="Fique por dentro das últimas tendências, insights e i..."
              text3="23 de feveiro de 2024"
            />
            
            <Card
              text1="Descubra o Futuro da Educação e Tecnologia com o Blog da Nortech ..."
              text2="Fique por dentro das últimas tendências, insights e i..."
              text3="23 de feveiro de 2024"
            />
            <Card
              text1="Descubra o Futuro da Educação e Tecnologia com o Blog da Nortech ..."
              text2="Fique por dentro das últimas tendências, insights e i..."
              text3="23 de feveiro de 2024"
            />
          </div>
          <div className="flex gap-3">
            <div className="bg-[#07090C] rounded-lg p-3 ">
              <FaArrowLeft className="text-white size-6"/>
            </div>
            <div className="rounded-lg p-3 ">
              <FaArrowLeft className="text-black size-6 rotate-180"/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )


};

type TCard={
  text1: string
  text2: string
  text3: string
}

const Card = ({
  text1,
  text2,
  text3
}: TCard) => {
  return(
      <div className="rounded-[4px] p-6 flex flex-col gap-8 w-[392.66px] bg-[#FDFDFD]">
        <div className="w[342px] h-[202px] rounded-[4px] bg-gray-400"/>
        <div className="pb-4 flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[10xp]">
            <h6 className="font-semibold text-xl text-[#07090C] ">
              {text1}
            </h6>
            <p className="opacity-60 text-[#FFFFFF] text-sm">
              {text2}
            </p>
          </div>
          <div className="rounded-lg py-[6px] px-2 border border-white bg-[#F1F1F1] w-fit">
            <p className="font-medium font-main text-xs text-[#07090C]">
              {text3}
            </p>
          </div>
        </div>
      </div>
  )
}
