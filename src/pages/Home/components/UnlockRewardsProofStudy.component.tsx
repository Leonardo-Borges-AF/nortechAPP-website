import { useInView } from "react-intersection-observer";
import Background from "/images/background-1.png";
import BenefitsIcon from '/images/icons/Benefits.svg';
import CertificateIcon from '/images/icons/certificate-light.svg';
import DatabaseIcon from '/images/icons/database-light.svg';
import NortechIcon from '/images/icons/nortech-light.svg';
import StudyIcon from '/images/icons/study-light.svg';
import StudyListIcon from '/images/icons/study-list-light.svg';
import UserIcon from '/images/icons/user-light.svg';

export const UnlockRewardsProofStudy = () => {
    const elementsToActivate = [
        'column00', 'line0', 'column0', 'card1',
        'line1', 'column1', 'card2',
        'line2', 'column2', 'card3', 'line3', 'column3', 'card4',
        'line4', 'column4',
        'card5'
    ];


    const activateElements = (elements) => {
        elements.forEach((elementId, index) => {
            setTimeout(() => {
                document.getElementById(elementId)?.classList.add('background__top-bottom-active', 'border__top-bottom-active');
            }, index * 100);
        });
    };

    const handleActive = () => {
        activateElements(elementsToActivate);
    };


    const { ref } = useInView({
        onChange(inView) {
            if (inView) {
                handleActive();
            }
        },
    });

    return (
        <div id="blog-session" className="bg-[#120d17] text-black px-4 py-16 md:p-20 relative">
            <img
                src={Background}
                className="absolute w-[200%] h-[200%] right-0 -top-52 opacity-10"
            />
            <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8 justify-center items-center">
                <div className='flex items-center gap-2'>
                    <img src={BenefitsIcon} className='w-7 h-7' />
                    <label className="text-lg text-[#AE6BFF] leading-tight uppercase opacity-60">
                        Study habits
                    </label>
                </div>
                <h2 className="md:text-4xl  text-[28px] font-bold text-white leading-tight">
                    Unlock Rewards with Proof of Study
                </h2>
                <h5 className="text-[18px] leading-tight text-white opacity-70">
                    Earn NTH tokens as you learn, completing courses and achieving educational milestones on NortechApp.
                </h5>
                <div className="flex flex-col gap-4 relative h-[965px] w-full">
                    <div className="relative h-[47px]">
                        <div>
                            <img src={UserIcon} width={40} className="absolute left-1/2 transform -translate-x-1/2" />
                            <p className="text-[#AE6BFF] absolute left-[calc(50%+45px)] transform -translate-x-1/2 top-2">You</p>
                        </div>
                    </div>
                    <div className="relative h-[120px]">
                        <div id={'column00'} className="background__top-bottom h-[80px] w-[1px] right-[190px] absolute bottom-[64px] left-1/2 transform -translate-x-1/2"></div>
                        <div id={"line0"} className="background__top-bottom h-[1px] w-[calc((100%-380px)/2)] left-[190px] absolute top-[55px]"></div>
                        <div id={"column0"} className="background__top-bottom h-[80px] w-[1px] left-[190px] absolute top-[56px]"></div>
                    </div>
                    <div className="relative h-[120px]">
                        <div className="absolute left-0">
                            <Card id={'card1'} title="Start a free course" description="Start your learning with a free course offered by the Nortech platform." icon={<img src={StudyIcon} />} />
                        </div>
                        <div id={'line1'} className="background__top-bottom h-[1px] w-[calc(100%-570px)] left-[380px] absolute top-[55px]"></div>
                        <div id={'column1'} className="background__top-bottom h-[80px] w-[1px] right-[190px] absolute top-[56px]"></div>
                    </div>
                    <div className="relative h-[120px]">
                        <div className="absolute right-0">
                            <Card id={'card2'} title="Get a certificate of completion" description="Get an official certificate upon successful completion of each course." icon={<img src={NortechIcon} />} />
                        </div>
                        <div id={'line2'} className="background__top-bottom h-[1px] w-[calc(100%-570px)] right-[380px] absolute top-[55px]"></div>
                        <div id={'column2'} className="background__top-bottom h-[80px] w-[1px] left-[190px] absolute top-[56px]"></div>
                    </div>
                    <div className="relative h-[120px]">
                        <div className="absolute left-0">
                            <Card id={'card3'} title="Earn NTH Tokens" description="Earn NTH Tokens for completing free courses, rewarding your progress." icon={<img src={CertificateIcon} />} />
                        </div>
                        <div id={'line3'} className="background__top-bottom h-[1px] w-[calc(100%-570px)] left-[380px] absolute top-[55px]"></div>
                        <div id={'column3'} className="background__top-bottom h-[80px] w-[1px] right-[190px] absolute top-[56px]"></div>
                    </div>
                    <div className="relative h-[120px]">
                        <div className="absolute right-0">
                            <Card id={'card4'} title="Get into a consistent study habit" description="Develop a habit of regular and continuous study." icon={<img src={StudyListIcon} />} />
                        </div>
                        <div id={'line4'} className="background__top-bottom h-[1px] w-[calc(100%-570px)] right-[380px] absolute top-[55px]"></div>
                        <div id={'column4'} className="background__top-bottom h-[80px] w-[1px] left-[190px] absolute top-[56px]"></div>
                    </div>
                    <div ref={ref} className="relative h-[120px]">
                        <div className="absolute lef-0">
                            <Card id={'card5'} title="Learn to invest" description="Use your NTH Tokens to explore investments and expand your financial knowledge." icon={<img src={DatabaseIcon} />} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


type TCard = {
    id: string
    title: string
    description: string
    icon: JSX.Element
}
const Card = ({ id, title, description, icon }: TCard) => {
    return (
        <div id={id} className="border__top-bottom flex flex-row items-center p-6 gap-4 rounded-xl bg-white bg-opacity-[2%] max-w-[380px]">
            {icon}
            <div className="flex flex-col">
                <p className="font-bold text-white text-lg">{title}</p>
                <p className="text-white text-base opacity-70">{description}</p>
            </div>
        </div>
    )
}