import { FiArrowDownCircle } from "react-icons/fi";
import Background from "/images/background-1.png";

export const CommonQuestions = () => {
  return (
    <div id="blog-session" className="bg-[#120D17] px-4 py-16 md:p-20 relative">
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