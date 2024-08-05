/* eslint-disable @typescript-eslint/no-explicit-any */

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Background from "/images/background-1.png";
import solar from "/images/icons/solar-system.png";

export const Session2 = () => {
  const [selected, setSelected] = useState(1)
  const [rotation, setRotation] = useState(0);

  const handleEstudante = () => {
    setSelected(1)
  }

  const handleProfessor = () => {
    setSelected(2)
  }

  const handleAfiliado = () => {
    setSelected(3)
  }

  const handleComplete = (value: number) => {
    setSelected(value);
  };

  useEffect(() => {
    if (selected === 1) {
      (document.getElementById('session-about-nortech')?.style as any).backgroundColor = '#F1F1F1';
    } else if (selected === 2) {
      (document.getElementById('session-about-nortech')?.style as any).backgroundColor = '#090A0B';
    } else {
      (document.getElementById('session-about-nortech')?.style as any).backgroundColor = '#6338F4';
    }
    setRotation(prev => prev + 60);
  }, [selected])


  const descriptionStyle = selected === 1 ? 'text-[#505358]' : 'text-white opacity-60'
  const titleStyle = selected === 1 ? 'text-[#0B0D12]' : 'text-white'
  const optionStyle1 = selected === 1 ? 'text-[#212529]' : selected === 2 ? 'text-white opacity-30' : 'text-white opacity-30'
  const optionStyle2 = selected === 1 ? 'text-[#212529] opacity-30' : selected === 2 ? 'text-white' : 'text-white opacity-30'
  const optionStyle3 = selected === 1 ? 'text-[#212529] opacity-30' : selected === 2 ? 'text-white opacity-30' : 'text-white'
  const aboutStyle = selected === 1 ? 'text-[#6001D1]' : selected === 2 ? 'text-[#6001D1]' : 'text-[#fff]'

  return (
    <div id="session-about-nortech" className='bg-white relative overflow-hidden'>
      <div className="pt-20 pb-32 flex gap-3 transition-all duration-300 relative max-w-[1184px] mx-auto ">
        <div id="background-image" className="absolute top-[200px] left-[-800px] w-full h-full bg-cover bg-center transition-all duration-700 selectDisable" style={{ transform: `rotate(${rotation}deg)` }}>
          <img id="background-image" src={Background} className='absolute opacity-15 top-[-900px] left-[-200px] rotate-10 w-[3322px] h-[3147px] selectDisable -z-50' />
        </div>
        <div className="flex flex-col relative z-10">
          <div className="flex flex-col gap-6 py-8 w-[594px]">
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-1 items-center">
                <img src={solar} alt="" className="size-6" />
                <h4 className={`font-normal text-lg leading-7 ${aboutStyle}`}>
                  ABOUT NORTECH
                </h4>
              </div>
              <p className={`font-sans font-semibold leading-[44px] text-4xl ${titleStyle}`}>
                See how Nortech can <br /> benefit you
              </p>
            </div>
            <p className={`font-main font-normal text-[19.22px] leading-8 ${descriptionStyle} tracking-[-0.1]`}>
              Nortech is more than an educational platform; it s a gamified
              learning experience that encourages your growth. Explore a vast
              library of high-quality courses and connect with a network of
              professionals through the Nortech App.
            </p>
            <p className={`font-main font-normal text-[19.22px] leading-8 ${descriptionStyle} tracking-[-0.1]`}>
              Every step you take is rewarded with NTH tokens, which you can
              use to access exclusive resources and participate in the
              evolution.
            </p>
          </div>

          <div className="flex flex-col py-8 pr-8 gap-[54px] ">
            <div className="flex flex-col gap-[27.5px] ">
              <div className="flex flex-col gap-8 ">
                <div className="flex gap-4 hover:cursor-pointer" onClick={handleEstudante}>
                  <h3 className={`font-main font-medium leading-10 text-[32px] ${optionStyle1}`}>
                    01
                  </h3>
                  <h3 className={`font-main font-medium leading-10 text-[31.38px] ${optionStyle1}`}>
                    Estudante
                  </h3>
                </div>
                {selected === 1 && <ProgresiveBar onComplete={() => handleComplete(2)} selected={selected} />}

              </div>
              <div className="flex gap-4 hover:cursor-pointer" onClick={handleProfessor}>
                <h3 className={`font-main font-medium leading-10 text-[32px] ${optionStyle2}`}>
                  02
                </h3>
                <h3 className={`font-main font-medium leading-10 text-[31.38px] ${optionStyle2}`}>
                  Professor
                </h3>
              </div>
              {selected === 2 && <ProgresiveBar onComplete={() => handleComplete(3)} selected={selected} />}

              <div className="flex gap-4 hover:cursor-pointer" onClick={handleAfiliado}>
                <h3 className={`font-main font-medium leading-10 text-[32px] ${optionStyle3}`}>
                  03
                </h3>
                <h3 className={`font-main font-medium leading-10 text-[31.38px] ${optionStyle3}`}>
                  Afiliado
                </h3>
              </div>
              {selected === 3 && <ProgresiveBar onComplete={() => handleComplete(1)} selected={selected} />}
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-10 mt-8">
          <AnimatePresence mode="wait">
            {selected === 1 && (
              <motion.div
                key="component1"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <Component1 />
              </motion.div>
            )}
            {selected === 2 && (
              <motion.div
                key="component2"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <Component2 />
              </motion.div>
            )}
            {selected === 3 && (
              <motion.div
                key="component3"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <Component3 />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

type TProgresiveBar = {
  onComplete: () => void
  selected: number
}
const ProgresiveBar = ({ onComplete, selected }: TProgresiveBar) => {
  const [progress, setProgress] = useState(0);

  const progressStyle = selected === 1 ? 'bg-[#6338F4]' : selected === 2 ? 'bg-[#6338F4]' : 'bg-[#fff]'
  const containerStyle = selected === 1 ? 'bg-[#DEE2E6]' : selected === 2 ? 'bg-[#F2F2F3] bg-opacity-20' : 'bg-[#F2F2F3] bg-opacity-20'

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`relative w-full h-[2px] ${containerStyle}`}>
      <div
        className={`absolute top-0 left-0 h-full transition-all duration-100 ${progressStyle}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};


const Component1 = () => {
  return <div className="relative h-[750px] w-[720px] m-auto">
    <Card
      icon={solar}
      title="Earn NTH Tokens:"
      description="Receive tangible rewards for completing courses and participating in educational activities."
      className="bg-white top-[5%] left-[40%] z-30"
    />
    <Card
      icon={solar}
      title="Gamified Experience:"
      description="Enjoy an interactive and engaging approach that keeps you motivated and engaged."
      className="bg-white top-[30%] left-[17%] z-20"
    />
    <Card
      icon={solar}
      title="Access to Exclusive Resources:"
      description="Use NTH tokens to unlock premium materials and advanced courses."
      className="bg-white top-[55%] left-[35%] z-30"
    />
    <div className="w-[500px] h-[500px] border border-[#6001D1] border-opacity-30 border-dashed opacity-50 bg-[#E1DCFD] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    <div className="w-[659px] h-[659px] border border-[#6001D1] border-opacity-30 border-dotted rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0"
      style={{
        background: 'linear-gradient(180deg, rgba(99, 56, 244, 0.1) 0%, rgba(99, 56, 244, 0) 100%)'
      }} />
  </div>
}

const Component2 = () => {
  return <div className="relative h-[750px] w-[720px] m-auto">
    <Card
      icon={solar}
      title="Earn NTH Tokens:"
      titleClassName="text-white"
      description="Receive tangible rewards for completing courses and participating in educational activities."
      descriptionClassName="text-white opacity-60"
      className="top-[5%] left-[40%] z-30 bg-[#141414] bg-opacity-70 border-[#FFFFFF] border-opacity-5"
    />
    <Card
      icon={solar}
      title="Gamified Experience:"
      titleClassName="text-white"
      description="Enjoy an interactive and engaging approach that keeps you motivated and engaged."
      descriptionClassName="text-white opacity-60"
      className="top-[30%] left-[17%] z-20 bg-[#141414] bg-opacity-70 border-[#FFFFFF] border-opacity-5"
    />
    <Card
      icon={solar}
      title="Access to Exclusive Resources:"
      titleClassName="text-white"
      description="Use NTH tokens to unlock premium materials and advanced courses."
      descriptionClassName="text-white opacity-60"
      className="top-[55%] left-[35%] z-30 bg-[#141414] bg-opacity-70 border-[#FFFFFF] border-opacity-5"
    />
    <div className="w-[500px] h-[500px] border border-[#6001D1] border-opacity-30 border-dashed opacity-50 bg-[#161327] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    <div className="w-[659px] h-[659px] border border-[#6001D1] border-opacity-30 border-dotted rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0"
      style={{
        background: 'linear-gradient(180deg, rgba(99, 56, 244, 0.1) 0%, rgba(99, 56, 244, 0) 100%)'
      }} />
  </div>
}

const Component3 = () => {
  return <div className="relative h-[750px] w-[720px] m-auto">
    <Card
      icon={solar}
      title="Earn NTH Tokens:"
      description="Receive tangible rewards for completing courses and participating in educational activities."
      className="bg-white top-[5%] left-[40%] z-30 bg-opacity-80"
    />
    <Card
      icon={solar}
      title="Gamified Experience:"
      description="Enjoy an interactive and engaging approach that keeps you motivated and engaged."
      className="bg-white top-[30%] left-[17%] z-20 bg-opacity-80"
    />
    <Card
      icon={solar}
      title="Access to Exclusive Resources:"
      description="Use NTH tokens to unlock premium materials and advanced courses."
      className="bg-white top-[55%] left-[35%] z-30 bg-opacity-80"
    />
    <div className="w-[500px] h-[500px] border border-[#6001D1] border-opacity-30 border-dashed bg-[#E1DCFD] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-20" />
    <div className="w-[659px] h-[659px] border border-[#6001D1] border-opacity-30 border-dotted rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0 opacity-10"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 100%)'
      }} />
  </div>
}

type TCard = {
  title: string
  titleClassName?: string
  description: string
  descriptionClassName?: string
  icon: string
  className: string
}

const Card = ({ title, titleClassName, description, descriptionClassName, icon, className }: TCard) => {
  return <>
    <div className={`flex flex-col border border-[#F1F1F1] border-solid p-[34.6px] gap-4 rounded-md w-[300px] h-fit absolute bg-opacity-50 backdrop-blur-md ${className}`}>
      <img src={icon} alt="icon" className="w-6 h-6" />
      <div className="flex flex-col gap-2">
        <h6 className={`text-[#212529] text-sm font-semibold leading-5 ${titleClassName}`}>{title}</h6>
        <p className={`text-[#495057] text-sm leading-6 ${descriptionClassName}`}>{description}</p>
      </div>
    </div>
  </>
}