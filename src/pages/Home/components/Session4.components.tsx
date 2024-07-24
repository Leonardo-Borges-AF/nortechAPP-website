import { useNavigate } from "react-router-dom";
import ProjectsImage from "/images/Projects.png";
import SolutionsImage from "/images/Solutions.png";
import { GoArrowUpRight } from "react-icons/go";

// import ImagemSolutions from "/images/imagem(solutions).png";
// import ImagemCryptosinc from "/images/imagem(cryptosinc).png";
// import { InView } from "react-intersection-observer";

//   const animation = (inView: boolean, entry: IntersectionObserverEntry) => {
//     if (inView && entry.boundingClientRect.y > 0) {
//       entry.target.classList.add("card-animation");
//     }
//     if (!inView && entry.boundingClientRect.y > 0) {
//       entry.target.classList.remove("card-animation");
//     }
//   };

export const Session4 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center md:gap-16 gap-8 md:px-[140px] px-4 py-16 md:py-24 z-20 relative "
      style={{ background: "#0D0D16" }}
    >
      <div className="flex flex-col md:gap-8 gap-4 max-w-[740px] items-center">
        <h3 className="text-white font-main font-bold text-4xl text-center">
          Expanding Horizons with Pioneering Web3 Solutions
        </h3>
        <p className="text-colorText font-main text-base text-center">
          Discover a realm of possibilities with Nortech's complete solutions,
          where we guide you from conception to culmination in the Web3 space.
          Unlock full-spectrum support for your Web3 initiatives with Nortech.
          From meticulous auditing to constructive development and innovative
          fundraising solutions, we invest in your vision to build the future.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-4 max-w-[1184px]">
        <div className="flex flex-col md:gap-4 gap-2 p-10 py-10 w-full rounded-md hover:ease-in-out  hover:duration-700 group-hover:ease-in-out bg-[#151519] group group-hover:transition-all hover:transition-all hover:bg-[#2B0047] hover:shadow-custom2">
          <div className="flex flex-col md:gap-[38px] gap-[18px] relative">
            <div className="absolute right-0 top-0  flex justify-between items-center bg-white bg-opacity-10 rounded-full size-10 opacity-0 group-hover:opacity-100 hover:transition-all group-hover:duration-700">
              <GoArrowUpRight
                className="relative left-1 top-[0.75px] size"
                color={"#fff"}
                size={30}
              />
            </div>

            <img
              src={ProjectsImage}
              className="max-w-[165px] bg-transparent"
            ></img>
            <h4 className="font-main font-bold text-xl text-white">
              Projects Support
            </h4>
          </div>

          <div className="flex flex-col md:gap-8 gap-4">
            <p className="text-colorText font-main ml-[-20px] text-base px-5 max-h-[444px]">
              We elevate your blockchain project's potential with specialized
              services, from tokenomics creation to whitepaper development.
            </p>
            <button
              className="py-3 px-6 text-white text-sm bg-transparent rounded w-fit group-hover:duration-700 group-hover:transition-all group-hover:bg-white group-hover:text-purple-500 group-hover:shadow-custom"
              style={{ border: "2px solid #4D4D50" }}
              onClick={() => {
                navigate("/contact");
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
        <div className="flex flex-col md:gap-4 gap-2 p-10 py-10 w-full rounded-md bg-[#151519] group group-hover:transition-all hover:transition-all hover:duration-700 hover:bg-[#2B0047] hover:shadow-custom2">
          <div className="flex flex-col md:gap-[38px] gap-[18px] relative">
            <div className="absolute right-0 top-0  flex justify-between items-center bg-white bg-opacity-10 rounded-full size-10 opacity-0 group-hover:opacity-100 hover:transition-all group-hover:duration-700">
              <GoArrowUpRight
                className="relative left-1 top-[0.75px]"
                color={"#fff"}
                size={30}
              />
            </div>

            <img
              src={SolutionsImage}
              className="max-w-[145px] bg-transparent"
            ></img>
            <h4 className="font-main font-bold text-xl text-white m-[1px]">
              Labs
            </h4>
          </div>

          <div className="flex flex-col md:gap-8 gap-4">
            <p className="text-colorText font-main ml-[-20px] text-base px-5 min-h-[72px]">
              We support innovative blockchain ideas, nurturing visionary
              startups towards digital forefronts.
            </p>
            <button
              className="py-3 px-6 text-white text-sm bg-transparent rounded w-fit  group-hover:duration-700 group-hover:transition-all group-hover:bg-white group-hover:text-purple-500 group-hover:shadow-custom"
              style={{ border: "2px solid #4D4D50" }}
              onClick={() => {
                navigate("/contact");
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="relative z-20 max-w-[1184px] mx-auto">
        <div className="grid grid-cols-1 gap-8 pb-16">
          <div>
            <h3 className="md:text-4xl  text-[28px] font-main font-bold text-white text-center leading-tight">
              Expanding Horizons with Pioneering{" "}
              <br className="hidden md:inline" /> Web3 Solutions
              {/*Futuro <br className="md:hidden xs:inline" />
            </h3>
          </div>
          <div>
            <p className="font-main text-base text-colorText text-center">
              Discover a realm of possibilities with Nortech's complete
              solutions, where we guide you from{" "}
              <br className="hidden md:inline" />
              conception to culmination in the Web3 space
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 md:px-16 gap-10">
          <img
            className="rounded-2xl md:order-1"
            src={ImagemSolutions}
            style={{ boxShadow: "0px 4px 32px rgba(16, 20, 25, 0.08)" }}
          ></img>

          <InView
            onChange={animation}
            as="div"
            className="grid grid-cols-1 md:gap-6 md:order-2 md:my-[150px] gap-3"
          >
            <div className="card-animation-hidden">
              <div className="grid md:gap-4 gap-3">
                <h3 className="text-sm text-white w-fit h-fit">
                  COMPREHENSIVE SOLUTIONS FOR YOUR WEB3 PROJECT
                </h3>

                <h4 className="text-white font-main font-bold text-3xl">
                  Solutions
                </h4>
              </div>

              <div className="grid gap-8">
                <p className="font-main text-base text-colorText">
                  Unlock full-spectrum support for your Web3 initiatives with
                  Nortech. From meticulous auditing to constructive development
                  and innovative fundraising solutions, we invest in your vision
                  to build the future.
                </p>

                <button
                  className="text-white bg-primary font-main text-sm rounded w-52 h-10"
                  style={{
                    boxShadow: "0px 8px 32px 0px #055EFA52",
                  }}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </InView>

          <img
            className="rounded-2xl md:order-4 w-full h-full"
            src={ImagemCryptosinc}
          />
          <InView
            onChange={animation}
            as="div"
            className="grid grid-cols-1  md:my-[50px] md:order-3 md:gap-6 gap-3"
          >
            <div className="card-animation-hidden">
              <div className="grid md:gap-4 gap-3">
                <h3 className="text-sm text-white w-fit h-fit">
                  Get in Touchade
                </h3>

                <h4 className="text-white font-main font-bold text-3xl">
                  CryptoSync AI
                </h4>
              </div>

              <div className="grid gap-8">
                <p className="font-main text-base text-colorText">
                  Na Nortech, não apenas acompanhamos o futuro; nós o criamos.
                  Nossa abordagem única para a tecnologia Web3 e a inovação
                  blockchain nos coloca à frente, definindo o padrão para o que
                  vem a seguir. Descubra o que nos torna diferentes:
                </p>

                <button
                  className=" text-white font-main bg-primary text-sm rounded w-52 h-10"
                  style={{
                    boxShadow: "0px 8px 32px 0px #055EFA52",
                  }}
                >
                  Junte-se à Comunidade
                </button>
              </div>
            </div>
          </InView>
        </div>
      </div> */
}
