import { FiArrowDownCircle } from "react-icons/fi";
import Background from "/images/background-1.png";
import arrow from "/images/icons/Arrow-down.png";

export const CommonQuestions = () => {
  return (
    <div className="">
      <div id="blog-session" className="bg-[#120D17] px-4 py-16 md:p-20 relative md:block sm:hidden xs:hidden">
        <img
          src={Background}
          className="absolute opacity-10 right-0"
        />
        <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8">
          <div className="h-[1.5px] w-[32px] bg-white"></div>
          <label className="text-sm text-white leading-tight uppercase opacity-60">
            esclareça suas dúvidas
          </label>
          <div className="flex flex-row justify-between items-center">
            <h2 className="md:text-4xl  text-[28px] font-bold text-white leading-tight">
              Perguntas Frequentes
            </h2>
            <label className="text-sm text-white text-end ">
              <span className="opacity-60">O FAQ não te ajudou? Envie um e-mail <br /> para contato</span> <b className="underline text-white">nortech@gmail.com</b>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-6 py-8">
            <Card
              title="O que posso fazer com os tokens NTH?"
            />
            <Card
              title="Como a integração com a blockchain torna a plataforma segura?"
            />
            <Card
              title="Quem pode usar a plataforma Nortech?"
            />
            <Card
              title="O que é o Marketplace Hub?"
            />
            <Card
              title="Como funciona o staking na Nortech?"
            />
            <Card
              title="Como faço para me tornar um Builder na Nortech?"
            />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:block md:hidden lg:hidden xl:hidden w-full items-center bg-[#120D17] relative">
        <div className="max-w-[375px] p-8 ">
          <div className="w-full flex flex-col py-8 gap-6 ">
            <div className="w-full items-center flex flex-col gap-2">
              <p className="opacity-60 text-white font-medium">
                ESCLAREÇA SUAS DUVIDAS
              </p>
              <p className="text-white font-semibold text-3xl font-sans">
                Perguntas Frequentes
              </p>
            </div>
            <div className="w-full text-center">
              <p className="text-white opacity-60 text-center font-main text-[19.22px] leading-8"> FAQ não te ajudou? <br />Envie um e-mail para contato </p>
              <a href="" className="text-white text-center text-[19.22px] leading-8 underline font-semibold">nortech@gmail.com</a>
            </div>
          </div>
          <div className="py-8 w-full flex flex-col gap-6">
            <CardM
              title="O que posso fazer com os tokens NTH?"
            />
            <CardM
              title="Como a integração com a blockchain torna a plataforma segura?"
            />
            <CardM
              title="Quem pode usar a plataforma Nortech?"
            />
            <CardM
              title="O que é o Marketplace Hub?"
            />
            <CardM
              title="Como funciona o staking na Nortech?"
            />
            <CardM
              title="Como faço para me tornar um Builder na Nortech?"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};


type TCardProps = {
  title: string
}

const Card = ({ title }: TCardProps) => {
  return (
    <div className="bg-[#F1F7F9] bg-opacity-5 p-8 rounded-lg flex justify-between items-center">
      <label className="text-white">{title}</label>
      <FiArrowDownCircle className="text-white text-2xl" />
    </div>
  )
}

type TCardMProps = {
  title: string
}

const CardM = ({ title }: TCardMProps) => {
  return (
    <div className="bg-[#F1F7F9] bg-opacity-5 p-8 rounded-lg flex gap-6 items-center">
      <label className="text-white opacity-80 font-medium text-[17.3px] leading-[28.8px] tracking-[-0.09px]">{title}</label>
      <img src={arrow}  className="size-6"/>
    </div>
  )
}