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
      (document.getElementById('session-2')?.style as any).backgroundColor = '#F1F1F1';
    } else if (selected === 2) {
      (document.getElementById('session-2')?.style as any).backgroundColor = '#090A0B';
    } else {
      (document.getElementById('session-2')?.style as any).backgroundColor = '#6338F4';
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
    <div id="session-2" className='bg-[#FFFFFF] relative overflow-hidden'>
      <div className="pt-20 md:pb-32 flex gap-3 transition-all duration-300 relative max-w-[1184px] mx-auto flex-col md:flex-row">
        <div id="background-image" className="absolute top-[200px] left-[-800px] w-full h-full bg-cover bg-center transition-all duration-700 selectDisable" style={{ transform: `rotate(${rotation}deg)` }}>
          <img id="background-image" src={Background} className='absolute opacity-15 top-[-900px] left-[-200px] rotate-10 w-[3322px] h-[3147px] selectDisable -z-50' />
        </div>
        <div className="flex flex-col relative z-10 px-8 md:px-0">
          <div className="flex flex-col gap-6 py-8 w-full md:w-[594px]">
            <div className="flex flex-col gap-2 ">
              <div className="flex gap-1 items-center">
                <img src={solar} alt="" className="size-6" />
                <h4 className={`font-normal text-lg leading-7 ${aboutStyle}`}>
                  ABOUT NORTECH
                </h4>
              </div>
              <p className={`font-sans font-semibold leading-[44px] md:text-4xl text-3xl ${titleStyle}`}>
                Experience a New Way <br />to Learn and Grow

              </p>
            </div>
            <p className={`font-main font-normal md:text-[19.22px] text-base leading-8 ${descriptionStyle} tracking-[-0.1]`}>
              Nortech is more than an education platform; it’s a gamified learning experience designed to fuel your
              growth. Explore a vast library of high-quality courses and connect with a thriving network of professionals,
              all within the Nortech App
            </p>
            <p className={`font-main font-normal md:text-[19.22px] text-bas leading-8 ${descriptionStyle} tracking-[-0.1]`}>
              With every step you take, you’ll earn NTH tokens, which unlock exclusive resources and opportunities
              to actively shape the future of education.
            </p>
          </div>

          <div className="flex flex-col py-8 pr-8 gap-[54px] ">
            <div className="flex flex-col gap-[27.5px] ">
              <div className="flex flex-col gap-8 ">
                <div className="flex gap-4 hover:cursor-pointer" onClick={handleEstudante}>
                  <h3 className={`font-main font-medium leading-10 md:text-[32px] text-2xl ${optionStyle1}`}>
                    01
                  </h3>
                  <h3 className={`font-main font-medium leading-10 md:text-[31.38px] text-2xl ${optionStyle1}`}>
                    Students
                  </h3>
                </div>
                {selected === 1 && <ProgresiveBar onComplete={() => handleComplete(2)} selected={selected} />}

              </div>
              <div className="flex gap-4 hover:cursor-pointer" onClick={handleProfessor}>
                <h3 className={`font-main font-medium leading-10 md:text-[32px] text-2xl ${optionStyle2}`}>
                  02
                </h3>
                <h3 className={`font-main font-medium leading-10 md:text-[31.38px] text-2xl ${optionStyle2}`}>
                  Educators
                </h3>
              </div>
              {selected === 2 && <ProgresiveBar onComplete={() => handleComplete(3)} selected={selected} />}

              <div className="flex gap-4 hover:cursor-pointer" onClick={handleAfiliado}>
                <h3 className={`font-main font-medium leading-10 md:text-[32px] text-2xl ${optionStyle3}`}>
                  03
                </h3>
                <h3 className={`font-main font-medium leading-10 md:text-[31.38px] text-2xl ${optionStyle3}`}>
                  Affiliates
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
                className="relative md:absolute w-full"
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
                className="relative md:absolute w-full"
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
                className="relative md:absolute w-full"
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
  return <div className="flex flex-col gap-6 relative h-[750px] w-full md:w-[720px] m-auto px-4 md:px-0">
    <Card
      icon={solar}
      title="Earn Rewards While Learning"
      description="Win NTH tokens as you complete courses, turning your educational achievements into tangible rewards."
      className="bg-white md:top-[0%] md:left-[40%] z-30"
    />
    <Card
      icon={solar}
      title="Access Diverse Learning Resources"
      description="Take advantage of a vast library of courses, e-books, and interactive tools tailored to enhance your learning experience."
      className="bg-white md:top-[27%] md:left-[17%] z-20"
    />
    <Card
      icon={solar}
      title="Achieve Your Educational Goals"
      description="Stay motivated to complete courses and reach your objectives with structured learning paths and proof-of-study incentives."
      className="bg-white md:top-[57%] md:left-[35%] z-30"
    />
    <div className="w-[500px] h-[500px] border border-[#6001D1] border-opacity-30 border-dashed opacity-50 bg-[#E1DCFD] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    <div className="w-[659px] h-[659px] border border-[#6001D1] border-opacity-30 border-dotted rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0"
      style={{
        background: 'linear-gradient(180deg, rgba(99, 56, 244, 0.1) 0%, rgba(99, 56, 244, 0) 100%)'
      }} />
  </div>
}

const Component2 = () => {
  return <div className="flex flex-col gap-6 relative h-[750px] w-full md:w-[720px] m-auto px-4 md:px-0">
    <Card
      icon={solar}
      title="Monetize Your Expertise"
      titleClassName="text-white"
      description="Create and sell courses on Nortech, earning NTH tokens or cash for every student that enrols and completes your courses."
      descriptionClassName="text-white opacity-60"
      className="md:top-[0%] md:left-[40%] z-30 bg-[#141414] bg-opacity-70 border-[#FFFFFF] border-opacity-5"
    />
    <Card
      icon={solar}
      title="Build Your Professional Network"
      titleClassName="text-white"
      description="Connect with students and other educators, expanding your influence and fostering collaborative opportunities."
      descriptionClassName="text-white opacity-60"
      className="md:top-[25%] md:left-[17%] z-20 bg-[#141414] bg-opacity-70 border-[#FFFFFF] border-opacity-5"
    />
    <Card
      icon={solar}
      title="Engage Students with Gamified Learning"
      titleClassName="text-white"
      description="Use Nortech’s gamified platform to make learning interactive and rewarding while improving student retention and success."
      descriptionClassName="text-white opacity-60"
      className="md:top-[57%] md:left-[35%] z-30 bg-[#141414] bg-opacity-70 border-[#FFFFFF] border-opacity-5"
    />
    <div className="w-[500px] h-[500px] border border-[#6001D1] border-opacity-30 border-dashed opacity-50 bg-[#161327] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    <div className="w-[659px] h-[659px] border border-[#6001D1] border-opacity-30 border-dotted rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0"
      style={{
        background: 'linear-gradient(180deg, rgba(99, 56, 244, 0.1) 0%, rgba(99, 56, 244, 0) 100%)'
      }} />
  </div>
}

const Component3 = () => {
  return <div className="flex flex-col gap-6 relative h-[750px] w-full md:w-[720px] m-auto px-4 md:px-0">
    <Card
      icon={solar}
      title="Earn Commissions by Promoting Courses"
      description="Leverage your audience to drive traffic to Nortech courses, earning a commission on every qualifying purchase."
      className="bg-white md:top-[0%] md:left-[40%] z-30 bg-opacity-80"
    />
    <Card
      icon={solar}
      title="Expand Your Reach"
      description="Partner with course creators to promote valuable educational content, increasing your influence and impact in the educational community."
      className="bg-white md:top-[27%] md:left-[17%] z-20 bg-opacity-80"
    />
    <Card
      icon={solar}
      title="Easy-to-Use Tools for Monetization"
      description="Use Nortech’s user-friendly affiliate tools to create referral links and efficiently monetize your traffic."
      className="bg-white md:top-[57%] md:left-[35%] z-30 bg-opacity-80"
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
    <div className={`flex flex-col border border-[#F1F1F1] border-solid p-[34.6px] gap-4 rounded-md w-[300px] h-fit absolute bg-opacity-50 backdrop-blur-md ${className} relative md:absolute w-full md:w-[300px]`}>
      <img src={icon} alt="icon" className="w-6 h-6" />
      <div className="flex flex-col gap-2">
        <h6 className={`text-[#212529] text-xl font-semibold leading-5 ${titleClassName}`}>{title}</h6>
        <p className={`text-[#495057] text-sm leading-6 ${descriptionClassName}`}>{description}</p>
      </div>
    </div>
  </>
}