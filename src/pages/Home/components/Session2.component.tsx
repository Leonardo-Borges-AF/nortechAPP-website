/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import RocketIcon from "/images/icons/rocket-icon.png";
import AccessibilityIcon from "/images/icons/accessibility-icon.png";
import BlockIcon from "/images/icons/block-icon.png";
import CommunityIcon from "/images/icons/community-icon.png";
import ConversionIcon from "/images/icons/conversion-icon.png";
import CubeIcon from "/images/icons/cube-icon.png";
import GridIcon from "/images/icons/grid-icon.png";
import PaperIcon from "/images/icons/paper-icon.png";
import SearchIcon from "/images/icons/search-icon.png";
import ShieldIcon from "/images/icons/shield-icon.png";
import SustenIcon from "/images/icons/susten-icon.png";
import "./Session2.css";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { ScrollObserver, valueAtPercentage } from "aatjs";
import VectorPoints from "/images/vector-points.png";

export const Session2 = () => {
  const [lastCardHegiht, setLastCardHeight] = useState(0);
  const isMobile = window.innerWidth < 1024;
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      if (isMobile) {
        node.style.height = "fit-content";
        return;
      }
      setLastCardHeight(node.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const cardsContainer = document.querySelector(".scroll-cards");
    const cards = document.querySelectorAll(".scroll-cards__item");
    cardsContainer.style.setProperty("--cards-count", cards.length);
    cardsContainer.style.setProperty(
      "--card-height",
      `${cards[0].clientHeight}px`
    );
    Array.from(cards).forEach((card, index) => {
      const offsetTop = 20 + index * 0;
      card.style.paddingTop = `${offsetTop}px`;
      if (index === cards.length - 1) {
        return;
      }
      const toScale = 1 - (cards.length - 1 - index) * 0.03;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector(".card__inner");
      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight,
      }).onScroll(({ percentageY }) => {
        cardInner.style.transform = `scale(${valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        })})`;
      });
    });
  }, []);

  return (
    <div
      id="explore-session"
      className="relative bg-background-primary w-full p-4 md:p-16 flex justify-center items-center"
    >
      <div className="relative max-w-[1184px] w-full z-20 pb-40">
        <div className="scroll-cards">
          <div className="scroll-cards__item" data-index="0">
            <Card
              index={1}
              header="OUR MISSION"
              title="Nortech Labs' Mission in Blockchain Innovation"
              description="Nortech Labs is committed to driving technological innovation in a sustainable manner, providing advanced blockchain solutions that facilitate, educate, and connect. Our mission is to simplify the complexity of the digital universe for businesses and individuals, promoting accessibility and understanding of decentralized finance."
              style={{
                height: lastCardHegiht || "fit-content",
              }}
              badges={
                <div
                  className="flex flex-col gap-10 rounded-2xl object-fill p-4 lg:p-12 bg-cover"
                  style={{
                    backgroundImage: `url(${VectorPoints})`,
                    height: "100%",
                  }}
                >
                  <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 lg:pr-32 mx-auto items-center lg:items-start">
                    <Badge text="Technological Innovation." img={RocketIcon} />
                    <Badge text="Decentralized Finance." img={PaperIcon} />
                  </div>
                  <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 lg:pl-32 mx-auto  items-center lg:items-start">
                    <Badge text="Blockchain Solutions." img={ConversionIcon} />
                    <Badge
                      text="Accessible Digital Universe."
                      img={AccessibilityIcon}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="scroll-cards__item" data-index="1">
            <Card
              index={2}
              header="OUR VISION"
              title="Pioneering Decentralization: Redefining Global Standards in Blockchain Innovation"
              description="We aim to be globally recognized as leaders in blockchain innovation, setting new standards for the utilization of decentralized technologies, with the goal of creating a future where access to financial and educational services is democratic, secure, and without borders."
              style={{
                height: lastCardHegiht || "fit-content",
              }}
              badges={
                <div
                  className="flex flex-col gap-10 rounded-2xl object-fill p-4 lg:p-12 bg-cover"
                  style={{
                    backgroundImage: `url(${VectorPoints})`,
                    height: "100%",
                  }}
                >
                  <div className="flex flex-col lg:flex-row gap-12 lg:pr-32 mx-auto items-center lg:items-start">
                    <Badge
                      text="Leadership in Blockchain Innovation."
                      top={80}
                      left={69}
                      img={GridIcon}
                    />
                    <Badge
                      text={
                        <label className="lg:mr-2 flex">
                          Redefining the Use of Decentralized
                          <br /> Technologies.
                        </label>
                      }
                      top={80}
                      left={469}
                      img={CubeIcon}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row gap-12 kg:pl-32 mx-auto  items-center lg:items-start">
                    <Badge
                      text={
                        <label className="lg:mr-2 flex">
                          Envisioning democratic access
                          <br /> to services.
                        </label>
                      }
                      bottom={80}
                      left={269}
                      img={BlockIcon}
                    />

                    <Badge
                      text={
                        <label className="lg:mr-2 flex">
                          Promoting secure financial and
                          <br /> educational services.
                        </label>
                      }
                      bottom={80}
                      left={669}
                      img={ShieldIcon}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <div className="scroll-cards__item" data-index="2">
            <Card
              setRef={measuredRef}
              index={3}
              header="OUR VALUES"
              title="Leading the Crypto Revolution"
              description=""
              badges={
                <div
                  className="flex flex-col gap-10 rounded-2xl object-fill p-4 lg:p-12 bg-cover"
                  style={{
                    backgroundImage: `url(${VectorPoints})`,
                    height: "100%",
                  }}
                >
                  <div className="flex flex-col lg:flex-row gap-12 lg:pr-32 mx-auto items-center lg:items-start">
                    <Badge
                      text={
                        <label className="lg:mr-8 flex">
                          Innovation: To be at the forefront of blockchain
                          <br />
                          technology and crypto education.
                        </label>
                      }
                      top={40}
                      left={69}
                      img={RocketIcon}
                    />
                    <Badge
                      text={
                        <label className="lg:mr-8 flex">
                          Community: To build and nurture an
                          <br /> engaged and informed community.
                        </label>
                      }
                      top={40}
                      right={150}
                      img={CommunityIcon}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row gap-12 lg:pl-32 mx-auto items-center lg:items-start">
                    <Badge
                      text={
                        <label className="lg:mr-8 flex">
                          Accessibility: To democratize access to
                          <br /> cryptocurrency and financial education.
                        </label>
                      }
                      top={130}
                      left={170}
                      img={AccessibilityIcon}
                    />
                    <Badge
                      text={
                        <label className="lg:mr-8 flex">
                          Transparency: To maintain honesty
                          <br /> and clarity in all our operations.
                        </label>
                      }
                      top={130}
                      right={100}
                      img={SearchIcon}
                    />
                  </div>
                  <div className="lg:pr-96 mx-auto items-center lg:items-start">
                    <Badge
                      text={
                        <label className="lg:mr-8 flex">
                          Sustainability: To promote practices that ensure
                          <br /> the long-term viability of the crypto
                          ecosystem.
                        </label>
                      }
                      bottom={20}
                      left={669}
                      img={SustenIcon}
                    />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type TCardProps = {
  index: number;
  setRef?: React.MutableRefObject<HTMLDivElement>;
  style?: React.CSSProperties;
  header: string;
  title: string;
  description: string;
  badges: ReactNode;
};

const Card = ({
  index,
  setRef,
  style,
  header,
  description,
  badges,
}: TCardProps) => {
  return (
    <div
      ref={setRef}
      className={`card__inner relative rounded-3xl w-full overlay-card flex flex-col`}
      style={{
        backgroundColor: "#151519",
        borderColor: "RGBA(255, 255, 255, 0.2)",
        borderWidth: "1px",
        ...style,
      }}
    >
      <div className="py-4 px-6 md:px-12 md:py-6 flex justify-between items-center">
        <label className="text-base md:text-lg text-colorTextLight">
          {header}
        </label>
        <span className="text-white">0{index}</span>
      </div>
      <div className="flex flex-col px-6 py-4 md:px-12 md:py-8 gap-6 h-full">
        <p className="text-colorText text-sm md:text-base">{description}</p>
        <div
          className="rounded-2xl relative"
          style={{ backgroundColor: "#18181C" }}
        >
          {badges}
        </div>
      </div>
    </div>
  );
};

type TBadge = {
  img: string;
  text: string | ReactNode;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

const Badge = ({ text, top, bottom, left, right, img }: TBadge) => {
  return (
    <div
      className=" p-[6px] flex gap-[10px] items-center w-fit"
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        backgroundColor: "#251532",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "61px",
      }}
    >
      <div
        className="rounded-full h-[40px] w-[40px] flex"
        style={{
          background:
            "var(--Detalhe-2, linear-gradient(90deg, #AA2AFF 0%, #5F00E9 100%))",
          boxShadow: "0px 4px 32px 0px rgba(5, 94, 250, 0.25)",
        }}
      >
        <img src={img} className="m-auto" />
      </div>
      <label className="text-white mr-2">{text}</label>
    </div>
  );
};
