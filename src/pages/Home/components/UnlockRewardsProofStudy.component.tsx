import { useInView } from "react-intersection-observer";
import Background from "/images/background-1.png";
import BenefitsIcon from '/images/icons/Benefits.svg';
import CertificateIcon from '/images/icons/certificate-light.svg';
import DatabaseIcon from '/images/icons/database-light.svg';
import NortechIcon from '/images/icons/nortech-light.svg';
import solar from "/images/icons/solar-system01.png";
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
        <div id="habits" className="">
            <div className="bg-[#120d17] text-black px-4 py-16 md:p-20 relative md:block sm:hidden xs:hidden">
                <img
                    src={Background}
                    className="absolute w-[200%] h-[200%] right-0 -top-52 opacity-10 -z-50"
                />
                <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8 justify-center items-center">
                    <div className='flex items-center gap-2'>
                        <img src={BenefitsIcon} className='w-7 h-7' />
                        <label className="text-lg text-[#AE6BFF] leading-tight uppercase opacity-60">
                            Study habits
                        </label>
                    </div>
                    <h2 className="md:text-4xl  text-[28px] font-bold text-white leading-tight">
                        Turn Study Time into Valuable Rewards with Proof of Study
                    </h2>
                    <h5 className="text-[18px] leading-tight text-white opacity-70">
                        Get rewarded with NTH tokens for completing courses and advancing your education on the Nortech App.
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
                                <Card id={'card1'} title="Start a free course" description="Kickstart your learning journey with a free course available on the Nortech platform." icon={<img src={StudyIcon} />} />
                            </div>
                            <div id={'line1'} className="background__top-bottom h-[1px] w-[calc(100%-570px)] left-[380px] absolute top-[55px]"></div>
                            <div id={'column1'} className="background__top-bottom h-[80px] w-[1px] right-[190px] absolute top-[56px]"></div>
                        </div>
                        <div className="relative h-[120px]">
                            <div className="absolute right-0">
                                <Card id={'card2'} title="Earn NTH Tokens" description="Unlock rewards by earning NTH Tokens as you complete free courses and advance your skills." icon={<img src={NortechIcon} />} />
                            </div>
                            <div id={'line2'} className="background__top-bottom h-[1px] w-[calc(100%-570px)] right-[380px] absolute top-[55px]"></div>
                            <div id={'column2'} className="background__top-bottom h-[80px] w-[1px] left-[190px] absolute top-[56px]"></div>
                        </div>
                        <div ref={ref} className="relative h-[120px]">
                            <div className="absolute left-0">
                                <Card id={'card3'} title="Receive a Certificate of Completion" description="Obtain an official certificate to showcase your achievements upon successfully finishing each course." icon={<img src={CertificateIcon} />} />
                            </div>
                            <div id={'line3'} className="background__top-bottom h-[1px] w-[calc(100%-570px)] left-[380px] absolute top-[55px]"></div>
                            <div id={'column3'} className="background__top-bottom h-[80px] w-[1px] right-[190px] absolute top-[56px]"></div>
                        </div>
                        <div className="relative h-[120px]">
                            <div className="absolute right-0">
                                <Card id={'card4'} title="Build a Consistent Study Habit" description="Cultivate a regular and continuous study routine to ensure steady progress in your learning journey." icon={<img src={StudyListIcon} />} />
                            </div>
                            <div id={'line4'} className="background__top-bottom h-[1px] w-[calc(100%-570px)] right-[380px] absolute top-[55px]"></div>
                            <div id={'column4'} className="background__top-bottom h-[80px] w-[1px] left-[190px] absolute top-[56px]"></div>
                        </div>
                        <div className="relative h-[120px]">
                            <div className="absolute lef-0">
                                <Card id={'card5'} title="Expand Your Financial Knowledge" description="Leverage your NTH Tokens to explore investment opportunities and deepen your understanding of finance." icon={<img src={DatabaseIcon} />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="md:hidden lg:hidden sm:block w-full items-center bg-[#120D17] relative">
                <div className="flex flex-col py-[82px] px-8 gap-8 mx-auto max-w-[375px]">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex gap-1 items-center">
                            <img src={solar} className='size-6 mr-4' />
                            <label className="text-lg text-[#AE6BFF] leading-tight  ">
                                Study habits
                            </label>
                        </div>
                        <h3 className="text-center text-3xl font-semibold font-sans text-white">
                            Turn Study Time into Valuable Rewards with Proof of Study
                        </h3>
                        <p className="text-white opacity-70 text-lg text-center">
                            Get rewarded with NTH tokens for completing courses and advancing your education on the Nortech App.
                        </p>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center">
                        <div className="flex gap-2 items-center">
                            <img src={UserIcon} className="size-[42px]" />
                            <p className="text-[#AE6BFF] text-lg">
                                You
                            </p>
                        </div>
                        <div className="h-[68px] border border-white opacity-20" />
                        <div className="w-full rounded-xl flex flex-col border p-6 gap-4 border-white border-opacity-20 bg-white bg-opacity-[0.02]">
                            <img src={StudyIcon} className="size-8" />
                            <div className="flex flex-col gap-1">
                                <p className="text-white text-lg font-semibold">
                                    Start a free course
                                </p>
                                <p className="opacity-70 text-white">
                                    Start your learning with a free <br /> course offered by the Nortech platform.
                                </p>
                            </div>

                        </div>

                        <div className="h-[68px] border border-white opacity-20" />

                        <div className="w-full rounded-xl flex flex-col border p-6 gap-4 border-white border-opacity-20 bg-white bg-opacity-[0.02]">
                            <img src={CertificateIcon} className="size-8" />
                            <div className="flex flex-col gap-1">
                                <p className="text-white text-lg font-semibold">
                                    Receive a Certificate of Completion
                                </p>
                                <p className="opacity-70 text-white">
                                    Obtain an official certificate to showcase your achievements upon successfully finishing each course
                                </p>
                            </div>

                        </div>
                        <div className="h-[68px] border border-white opacity-20" />

                        <div className="w-full rounded-xl flex flex-col border p-6 gap-4 border-white border-opacity-20 bg-white bg-opacity-[0.02]">
                            <img src={NortechIcon} className="size-8" />
                            <div className="flex flex-col gap-1">
                                <p className="text-white text-lg font-semibold">
                                    Earn NTH Tokens
                                </p>
                                <p className="opacity-70 text-white">
                                    Unlock rewards by earning NTH Tokens as you complete free courses and advance your skills.
                                </p>
                            </div>

                        </div>
                        <div className="h-[68px] border border-white opacity-20" />

                        <div className="w-full rounded-xl flex flex-col border p-6 gap-4 border-white border-opacity-20 bg-white bg-opacity-[0.02]">
                            <img src={StudyListIcon} className="size-8" />
                            <div className="flex flex-col gap-1">
                                <p className="text-white text-lg font-semibold">
                                    Build a Consistent Study Habit
                                </p>
                                <p className="opacity-70 text-white">
                                    Cultivate a regular and continuous study routine to ensure steady progress in your learning journey.
                                </p>
                            </div>

                        </div>
                        <div className="h-[68px] border border-white opacity-20" />

                        <div className="w-full rounded-xl flex flex-col border p-6 gap-4 border-white border-opacity-20 bg-white bg-opacity-[0.02]">
                            <img src={DatabaseIcon} className="size-8"/>
                            <div className="flex flex-col gap-1">
                                <p className="text-white text-lg font-semibold">
                                    Expand Your Financial Knowledge
                                </p>
                                <p className="opacity-70 text-white">
                                    Leverage your NTH Tokens to explore investment opportunities and deepen your understanding of finance.
                                </p>
                            </div>

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