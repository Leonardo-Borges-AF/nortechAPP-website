import { useState } from 'react';
import { FiArrowDownCircle } from "react-icons/fi";
import Background from "/images/background-1.png";

export const CommonQuestions = () => {
  return (
    <div id="questions" className="">
      <div className="bg-[#120D17] px-4 py-16 md:p-20 relative md:block sm:hidden xs:hidden">
        <img
          src={Background}
          className="absolute opacity-10 right-0"
        />
        <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8">
          <div className="h-[1.5px] w-[32px] bg-white"></div>
          <label className="text-sm text-white leading-tight uppercase opacity-60">
            CLEAR YOUR DOUBTS
          </label>
          <div className="flex flex-row justify-between items-center">
            <h2 className="md:text-4xl  text-[28px] font-bold text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <label className="text-sm text-white text-end ">
              <span className="opacity-60">The FAQ didn't help? Send an email to <br /> </span> <a href="mailto:support@nortech.app"><b className="underline text-white">support@nortech.app</b></a>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-6 py-8">
            <Card
              title="What is Nortech App? "
              content="Nortech App is a decentralized educational platform where you can buy, sell, and trade educational content. Users can earn rewards, receive verifiable NFT certificates, access courses, and benefit from additional features designed to enhance the learning experience."
            />
            <Card
              title="How do I earn rewards on Nortech App?"
              content="Through the “Proof of Study” mechanism, you will be rewarded with NTH tokens for completion of courses. Upon completion, you also receive an NFT certificate that is secure and verifiable."
            />
            <Card
              title="What are NTH tokens and how are they used? "
              content="NTH tokens are the currency of the Nortech App. Think of them as digital points or credits that you can use for everything on the platform. You can buy tokens within the platform or earn them by completing courses. You can then use these tokens to access more courses, vote on important decisions for the platform, stake for benefits, all while ensuring efficient and secure platform transactions."
            />
            <Card
              title="Who can participate in the Nortech App?"
              content="Anyone interested in learning, teaching, or earning rewards through educational activities can use the Nortech App."
            />
            <Card
              title="How does integration with the blockchain make the platform secure?"
              content="The integration makes the platform secure by ensuring that all transactions and data, including your course certificates, are stored on the blockchain, making them safe, easy to verify and impossible to fake."
            />
            <Card
              title="How do I become a content creator (Builder) on Nortech App?"
              content="Create an account, sign up as a Builder, and start sharing your content. The more NTH tokens you stake, the more benefits you unlock, reflecting your commitment to the platform. You can receive payments for your courses in NTH tokens or cash"
            />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:block md:hidden lg:hidden xl:hidden w-full bg-[#120D17] items-center relative justify-center flex flex-col">
        <div className="max-w-[375px] p-8 mx-auto">
          <div className="w-full flex flex-col py-8 gap-6">
            <div className="w-full items-center flex flex-col gap-2">
              <p className="opacity-60 text-white font-medium">
                CLEAR YOUR DOUBTS
              </p>
              <p className="text-white font-semibold text-3xl font-sans text-center">
                Frequently Asked Questions
              </p>
            </div>
            <div className="w-full text-center">
              <p className="text-white opacity-60 font-main text-[19.22px] leading-8">
                The FAQ didn't help? <br />Send an email to
              </p>
              <a href="mailto:support@nortech.app" className="text-white text-[19.22px] leading-8 underline font-semibold">
                support@nortech.app
              </a>
            </div>
          </div>
          <div className="py-8 w-full flex flex-col gap-6">
            <Card
              title="What is Nortech App? "
              content="Nortech App is a decentralized educational platform where you can buy, sell, and trade educational content. Users can earn rewards, receive verifiable NFT certificates, access courses, and benefit from additional features designed to enhance the learning experience."
            />
            <Card
              title="How do I earn rewards on Nortech App?"
              content="Through the “Proof of Study” mechanism, you will be rewarded with NTH tokens for completion of courses. Upon completion, you also receive an NFT certificate that is secure and verifiable."
            />
            <Card
              title="What are NTH tokens and how are they used? "
              content="NTH tokens are the currency of the Nortech App. Think of them as digital points or credits that you can use for everything on the platform. You can buy tokens within the platform or earn them by completing courses. You can then use these tokens to access more courses, vote on important decisions for the platform, stake for benefits, all while ensuring efficient and secure platform transactions."
            />
            <Card
              title="Who can participate in the Nortech App?"
              content="Anyone interested in learning, teaching, or earning rewards through educational activities can use the Nortech App."
            />
            <Card
              title="How does integration with the blockchain make the platform secure?"
              content="The integration makes the platform secure by ensuring that all transactions and data, including your course certificates, are stored on the blockchain, making them safe, easy to verify and impossible to fake."
            />
            <Card
              title="How do I become a content creator (Builder) on Nortech App?"
              content="Create an account, sign up as a Builder, and start sharing your content. The more NTH tokens you stake, the more benefits you unlock, reflecting your commitment to the platform. You can receive payments for your courses in NTH tokens or cash"
            />
          </div>
        </div>
      </div>
    </div>

  );
};


type TCardProps = {
  title: string;
  content: string; // Adicionando uma nova propriedade para o conteúdo
}

const Card = ({ title, content }: TCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#F1F7F9] bg-opacity-5 p-8 rounded-lg h-fit">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleContent}>
        <label className="text-white">{title}</label>
        <div className='size-5'>
          <FiArrowDownCircle className={`text-white text-2xl transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      <div
        className={` text-gray-400 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ transitionDuration: '500ms' }}
      >
        {isOpen && (
          <div className="py-4">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};