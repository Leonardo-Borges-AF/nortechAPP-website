import { useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { InView } from "react-intersection-observer";

import image1 from "/images/image-carosel-1.png";
import image2 from "/images/image-carosel-2.png";
import image3 from "/images/image-carosel-3.png";
import image4 from "/images/image-carosel-4.png";
import image5 from "/images/image-carosel-5.png";
import image6 from "/images/image-carosel-6.png";
import image7 from "/images/image-carosel-7.png";
import image8 from "/images/image-carosel-8.png";
import image9 from "/images/image-carosel-9.png";

const cards = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

export const Community = () => {
  const containerScrolling = useRef<HTMLDivElement>(null);
  const loopArray = [...cards, ...cards];

  const animation = (inView: boolean, entry: IntersectionObserverEntry) => {
    if (inView && entry.boundingClientRect.y > 0) {
      entry.target.classList.add("card-animation");
    }
    if (!inView && entry.boundingClientRect.y > 0) {
      entry.target.classList.remove("card-animation");
    }
  };

  // make a infinit loop when scrolling
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLoopArray((prev) => {
  //       const last = prev.pop();
  //       prev.unshift(last!);
  //       return [...prev];
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div id="comm" className="overflow-x-hidden">
      <div className="bg-background-primary px-4 py-16 pb-0 md:p-20 md:pb-0 w-full">
        <div className="relative z-20 flex flex-col gap-8 max-w-[1184px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            <div className="gap-4 grid">
              <h3 className="text-sm text-white font-main w-fit">
                Join our community
              </h3>
              <h2 className="md:text-4xl  text-4xl font-bold font-main max-w-[460px] text-white leading-tight">
                United in Crafting the Web3 Future
              </h2>
              <div className="grid gap-8">
                <div className="justify-between items-center flex">
                  <p className="text-colorText text-base w-fit">
                    At Nortech, we believe in the collective effort to shape the
                    digital future. Our community is a gathering of visionaries,
                    innovators, and creators where collaboration turns ideas
                    into reality.
                  </p>
                </div>
                <a
                  href="https://discord.gg/U8Pg8EKS6B"
                  target="_blank"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 duration-300 transition-all text-center px-6 py-3 text-white text-sm rounded w-fit ease-out"
                >
                  Join our community
                </a>
              </div>
            </div>
            <InView
              onChange={animation}
              as="div"
              className="flex flex-col m-auto gap-8"
            >
              <ItemList text="Engage with our decentralized autonomous organization and have your say in the decisions that sculpt our ecosystem." />
              <ItemList text="Whether you're a developer, educator, or crypto enthusiast, there’s a place for you at Nortech. Collaborate, create, and innovate with us." />
              <ItemList text="Dive into a world brimming with possibilities, accessing tools, knowledge, and a global network of Web3 professionals." />
            </InView>
          </div>
        </div>
      </div>
      <div
        ref={containerScrolling}
        className="py-8 pb-0 md:py-24 md:pb-0 z-20 relative flex flex-row gap-8 overflow-x-auto overflow-y-hidden"
        style={{
          width: "max-content",
          overflowX: "auto",
          animation: "carousel-animation 1000s linear infinite",
        }}
      >
        {loopArray.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export const ItemList = ({ text }: { text: string }) => {
  const iconBackgroundColor = "#0E2A16";

  return (
    <div className="flex items-center justify-start card-animation-hidden">
      <div
        className="text-colorText text-base bg-success-background rounded-full p-2 mx-4"
        style={{
          backgroundColor: iconBackgroundColor,
        }}
      >
        <FaCheck className="text-success" />
      </div>
      <p className="text-colorText text-base">{text}</p>
    </div>
  );
};

type TCardProps = {
  image: string;
};

const Card = ({ image }: TCardProps) => {
  return (
    <div
      className="rounded-md w-[384px] max-w-[384px] h-[457px] relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage:
            "linear-gradient(183deg, rgba(10, 10, 17, 0.00) -30.12%, #0A0A11 95.11%), url(<path-to-image>)",
        }}
      ></div>
    </div>
  );
};
