import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import LogoCryptoSync from "/images/logo-cryptosync.png";
import { Badge } from "~/components/Badge";
import LogoNortechApp from "/images/logo-nortechapp.png";
import { getNortechPosts } from "~/apis/beehiiv";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { TPost } from "~/types/beehiiv";

export const Session1 = () => {
  const progressBar = useRef<HTMLDivElement>(null);
  const [showPost, setShowPost] = useState<TPost | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const { data } = useQuery({
    queryKey: ["getNortechPosts"],
    queryFn: () => getNortechPosts(),
    staleTime: 1000 * 60 * 60,
  });

  const restartAnimation = () => {
    setAnimationKey(animationKey + 1);
  };

  const nextPost = () => {
    if (showPost && data) {
      const nextIndex =
        data?.data.findIndex((post) => post.id === showPost.id) + 1;
      setShowPost(data?.data[nextIndex] || data?.data[0]);
      restartAnimation();
    }
  };

  const backPost = () => {
    if (showPost && data) {
      const prevIndex =
        data?.data.findIndex((post) => post.id === showPost.id) - 1;
      setShowPost(data?.data[prevIndex] || data?.data[data.data.length - 1]);
      restartAnimation();
    }
  };

  useEffect(() => {
    setShowPost(data?.data[0] || null);
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (showPost && data) {
        const nextIndex =
          data?.data.findIndex((post) => post.id === showPost.id) + 1;
        setShowPost(data?.data[nextIndex] || data?.data[0]);
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [showPost, data]);

  return (
    <div className="md:p-16 md:pt-32 md:pb-20 md:px-16 py-16 px-4 relative">
      <div
        className="absolute left-0 z-[-10] top-0"
        style={{
          height: "calc(100% * 2)",
          width: "100%",
          opacity: 0.9,
          backdropFilter: "blur(0px)",
          backgroundImage:
            "url(data:image/png;base64,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)",
          background:
            "radial-gradient(circle, rgba(1,6,55,0.72) 20%, rgba(45,55,103,0) 90%)",
        }}
      ></div>
      <div className="relative z-20 max-w-[1184px] m-auto">
        <div className="grid grid-cols-1  items-center gap-6 pb-14">
          <h2
            className="text-3xl md:text-5xl font-main font-bold text-white text-center"
            style={{
              lineHeight: "1.1",
            }}
          >
            Empowering Innovation, One
            <br className="hidden lg:inline" />
            Block at a Time
          </h2>
          <p className="font-main text-base md:text-lg text-colorText text-center w-full max-w-[750px] justify-self-center">
            Nortech stands as the architect bridging the traditional and the
            libertarian worlds, presenting an ecosystem tailored to the pressing
            needs of the market in the era of Web3.
          </p>
        </div>

        <div className="grid gap-8 h-full">
          <div
            className="w-full max-w-[1183px] h-full md:h-[344px] border rounded-2xl p-8 flex flex-col relative bg-[#0D0E1C]"
            style={{
              borderColor: "#2A2B37",
              backgroundImage: `url(${showPost?.thumbnail_url})`,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-6 mt-auto z-10">
              <h2 className="md:col-span-6 text-xl md:text-2xl text-white font-bold mb-6">
                {showPost?.title}
              </h2>
              <p className="md:col-span-5 text-colorText text-base w-full md:w-[525px] mb-6 md:mb-0">
                {/* Leia sobre as últimas tendências, descobertas educacionais e
                histórias de sucesso da comunidade Nortech. */}
                {showPost?.subtitle}
              </p>
              <a
                href={showPost?.web_url}
                target="_blank"
                className="text-center col-span-1 rounded text-[#E7E7EF] bg-white bg-opacity-10 hover:text-white hover:bg-opacity-20 py-2 mt-auto duration-300"
              >
                Read full article
              </a>
            </div>

            <div className="flex justify-between items-center mt-8 z-10">
              <button className="bg-white bg-opacity-10 hover:bg-opacity-20 duration-300">
                <RiArrowLeftLine size={24} color={"#fff"} onClick={backPost} />
              </button>
              <div className="h-2 w-full mx-4 rounded-full relative">
                <div className="h-2 w-full rounded-full bg-white opacity-20 absolute"></div>
                {showPost && (
                  <div
                    key={animationKey}
                    ref={progressBar}
                    className="h-2 rounded-full bg-white absolute"
                    style={{
                      animation: "progress-bar 20s linear infinite",
                    }}
                  ></div>
                )}
              </div>
              <button className="bg-white bg-opacity-10 hover:bg-opacity-20 duration-300">
                <RiArrowRightLine size={24} color={"#fff"} onClick={nextPost} />
              </button>
            </div>
            <div className="from-black to-transparent bg-gradient-to-t opacity-70 h-full w-full absolute left-0 top-0 rounded-2xl"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-4">
            <div
              className="flex flex-col gap-6 w-full rounded-xl border-[1px] sm:h-40 lg:h-full overflow-hidden shadow-lg text-white p-6 py-8 relative bg-[#0D0E1C] bg-opacity-50 hover:bg-white hover:bg-opacity-15 hover:transition-all select-none"
              style={{
                borderColor: "#2A2B37",
              }}
            >
              <div className="flex items-center gap-4">
                <img src={LogoNortechApp} alt={"Nortech Labs"} className="w-[134px] h-[32px]" />
                <Badge text="Coming Soon" />
              </div>
              <p className="text-textMiniCard text-base">
                Decentralized Educational Hub Empowers Learning with WEB 3.0
                Incentives and Innovation
              </p>
            </div>

            <div
              className="flex flex-col gap-6 w-full rounded-xl border-[1px] sm:h-40 lg:h-full overflow-hidden shadow-lg text-white p-6 py-8 relative bg-[#0D0E1C] bg-opacity-50 hover:bg-white hover:bg-opacity-15 hover:transition-all select-none"
              style={{ borderColor: "#2A2B37" }}
            >
              <div className="flex items-center">
                <img src={LogoCryptoSync} alt={"CryptoSync AI"} className="w-[134px] h-[32px]" />
                <Badge text="Coming Soon" />
              </div>

              <p className="text-textMiniCard text-base">
                Cryptocurrency non-custodial fund management service offering
                automated copytrading driven by artificial intelligence
              </p>
            </div>

            <div
              className="flex flex-col gap-6 w-full rounded-xl border-[1px] sm:h-40 lg:h-full overflow-hidden shadow-lg text-white p-6 py-8 relative bg-[#0D0E1C] bg-opacity-50 hover:bg-white hover:bg-opacity-15 hover:transition-all select-none"
              style={{ borderColor: "#2A2B37" }}
            >
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold">SwapAroo</h3>
                <Badge text="Coming Soon" />
              </div>
              <p className="text-textMiniCard text-base">
                Australian & LATAM OTC, enabling swaps and bridges from AUD and
                BRL to Cryptos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
