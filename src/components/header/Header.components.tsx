import { useEffect, useRef, useState } from "react";
import {
  IoArrowForwardCircleSharp,
  IoCloseSharp,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import LogoCryptoSync from "/images/logo-cryptosync.png";
import LogoNortechLabs from "/images/logo-nortechlabs.png";
import { FaSquare } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Badge } from "../Badge";
// import BitcoinVideo from "/videos/bitcoin-video.mp4";
import "./header.css";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header
        ref={headerRef}
        className="bg-headerbg fixed w-full z-50 border-b-secondary border-b-[1px] h-[78px]"
        style={{
          transition: "top 0.3s",
          zIndex: 99,
        }}
      >
        <div className="flex items-center justify-between flex-row max-w-[1200px] mx-auto h-full px-4">
          <Link to="/" className="basis-35">
            <img
              src={LogoNortechLabs}
              alt="logotipo Nortech"
              className="hover:cursor-pointer w-[146px] h-[45px]"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            ></img>
          </Link>
          <div className="basis-81 lg:mr-auto lg:ml-12 ml-auto">
            <div className="block lg:hidden z-50 ml-auto">
              {showMenu ? (
                <IoCloseSharp
                  onClick={handleCloseMenu}
                  color="white"
                  size={35}
                  cursor={"pointer"}
                />
              ) : (
                <IoMenu
                  onClick={handleOpenMenu}
                  color="white"
                  size={35}
                  cursor={"pointer"}
                />
              )}
            </div>
            {/* header quando for desktop */}
            <div
              className={`hidden lg:flex right-0 
            relative bg-transparent w-auto top-auto h-auto p-0 gap-0
            `}
            >
              <Routes handleCloseMenu={handleCloseMenu} />
            </div>
          </div>

          <div className="hidden lg:flex basis-100 gap-2">
            <RightButtons />
          </div>
        </div>
      </header>
      {/* header mobile */}
      <div
        className={`${
          showMenu ? "top-0" : "top-[-120%]"
        }  lg:hidden fixed right-0 w-full bg-headerbg p-8 pt-4 pb-0  h-[100vh]  mt-[78px] ease-in z-50`}
        style={{
          transition: "top 0.7s",
        }}
      >
        <div className="h-[80%] grid">
          <Routes handleCloseMenu={handleCloseMenu} />
          <div className="h-8" />
          <RightButtons />
        </div>
      </div>
    </>
  );
};

type RoutesProps = {
  handleCloseMenu: () => void;
};

const Routes = ({ handleCloseMenu }: RoutesProps) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef(null);
  const solutionButtonRef = useRef<HTMLAnchorElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (
      !dropdownRef.current?.contains(event.target as Node) &&
      event.target !== solutionButtonRef.current
    ) {
      setOpenDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <a
        className={`lg:hidden bg-transparent border-none font-main text-sm items-center flex justify-center text-colorText px-2 mx-3 hover:text-white transition-all`}
        onClick={() => {
          navigate("/");
          handleCloseMenu();
        }}
      >
        Home
      </a>
      <a
        ref={solutionButtonRef}
        className={`bg-transparent border-none font-main text-sm items-center flex justify-center text-colorText px-2 mx-3 hover:text-white ${
          openDropdown && "text-white"
        } transition-all`}
        href="#solutions-session"
        onClick={() => {
          navigate("/");
          if (openDropdown) {
            setOpenDropdown(false);
            handleCloseMenu();
          } else {
            setOpenDropdown(true);
          }
        }}
      >
        Solutions
      </a>
      <a
        className={`bg-transparent border-none font-main text-sm items-center flex justify-center text-colorText px-2 mx-3 hover:text-white transition-all`}
        href="#community-session"
        onClick={() => {
          navigate("/");
          handleCloseMenu();
        }}
      >
        Community
      </a>
      <a
        className={`bg-transparent border-none font-main text-sm items-center flex justify-center text-colorText px-2 mx-3 hover:text-white transition-all`}
        href="#explore-session"
        onClick={() => {
          navigate("/");
          handleCloseMenu();
        }}
      >
        Explore
      </a>
      <a
        className={`bg-transparent border-none font-main text-sm items-center flex justify-center text-colorText px-2 mx-3 hover:text-white transition-all`}
        href="#blog-session"
        onClick={() => {
          navigate("/");
          handleCloseMenu();
        }}
      >
        Blog
      </a>
      <Link
        className={`bg-transparent border-none font-main text-sm items-center flex justify-center text-colorText px-2 mx-3 hover:text-white transition-all`}
        to="/contact"
      >
        Contact
      </Link>
      {/* modal solutions */}
      <div
        ref={dropdownRef}
        className={`fixed z-50 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 overflow-y-auto lg:overflow-hidden h-[calc(100%-180px)] mt-6 lg:mt-0 w-[90%] lg:h-auto top-1/2 lg:top-[77px] left-1/2 lg:left-auto p-6 px-8 lg:w-fit bg-background-primary shadow-md rounded-xl lg:flex transition-all duration-300 text-white gap-10 flex-col border-2 border-secondary ${
          openDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <IoClose
          size={24}
          color="#ffffff"
          className="absolute hover:cursor-pointer right-6 block md:hidden"
          onClick={() => {
            setOpenDropdown(false);
          }}
        />
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          <div className="flex flex-col gap-6 w-full md:overflow-y-auto">
            <h5 className="font-bold text-xs text-[#46454A]">SOLUTIONS</h5>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <label className="font-bold text-base">Projects Support</label>
                <FaArrowRight
                  className="-rotate-45 bg-outlined rounded-full p-[5px] transition-all hover:opacity-70 hover:cursor-pointer"
                  size={24}
                />
              </div>
              <p className="text-colorText">
                We elevate your blockchain project's potential.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <label className="font-bold text-base">Labs</label>
                <FaArrowRight
                  className="-rotate-45 bg-outlined rounded-full p-[5px] transition-all hover:opacity-70 hover:cursor-pointer"
                  size={24}
                />
              </div>
              <p className="text-colorText">
                We support innovative blockchain ideas.
              </p>
            </div>
            <h5 className="font-bold text-xs text-[#46454A] mt-12">PRODUCTS</h5>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                <label className="font-bold text-base">CryptoSync AI</label>
                <Badge text="Coming Soon" className="py-[4px]" />
              </div>
              <p className="text-colorText">
                Crypto non-custodial fund powered by AI.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                <label className="font-bold text-base">Nortech App</label>
                <Badge text="Coming Soon" className="py-[4px]" />
              </div>
              <p className="text-colorText">Decentralized Educational Hub.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                <label className="font-bold text-base">SwapAroo</label>
                <Badge text="Coming Soon" className="py-[4px]" />
              </div>
              <p className="text-colorText">Australian & LATAM OTC.</p>
            </div>
          </div>
          {/* <div className="w-full md:border-l border-outlined md:pl-8 gap-4 flex flex-col">
            <Badge text="NOTÍCIAS" className="ml-auto" />
            <label className="font-bold text-base">CryptoSync AI</label>
            <p className="text-colorText">
              Cryptocurrency fund management service offering automated
              copytrading driven by artificial intelligence
            </p>
            <button className="bg-transparent text-white border border-outlined border-solid rounded-md w-fit px-8 py-3 mt-4 hover:bg-opacity-10 hover:bg-outlined transition-all">
              Get in Touch
            </button>
            <video
              loop
              muted
              autoPlay
              playsInline
              className="pointer-events-none my-auto"
              style={{
                mixBlendMode: "screen",
              }}
            >
              <source src={BitcoinVideo} type="video/mp4" />
            </video>
          </div> */}
        </div>
      </div>
      <div
        className={`fixed bg-black w-full h-full top-0 left-0 z-30 bg-opacity-80 md:hidden  ${
          openDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};

const RightButtons = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef(null);

  const apps = [
    {
      name: "Nortech Labs",
      tag: "Coming Soon",
      image: LogoNortechLabs,
    },
    {
      name: "CryptoSync AI",
      tag: "Coming Soon",
      image: LogoCryptoSync,
    },
    {
      name: "SwapAroo",
      tag: "Coming Soon",
      image: undefined,
    },
  ];

  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 fancy bg-[#09090B] hover:bg-[#151519] h-[50px] w-full lg:w-[120px] rounded-full">
        <button
          className=" duration-300 hover:bg-gray-200 hover:bg-opacity-10 border border-outlined rounded-full border-opacity-20 border-solid text-white text-sm px-3 py-2 w-full items-center justify-center max-h-32"
          onClick={() => {
            setOpenDropdown(!openDropdown);
          }}
        >
          Discover
        </button>
      </div>
      {/* modal entrar */}
      <div
        ref={dropdownRef}
        className={`z-50 p-8 px-4 md:p-10 w-[90%] md:w-fit md:min-w-[678px] max-h-[calc(100%-180px)] md:h-fit overflow-y-auto bg-background-primary shadow-md mt-6 rounded-2xl md:rounded-3xl hidden lg:flex transition-all duration-300 text-white gap-10 flex-col border-2 border-secondary ${
          openDropdown ? "opacity-100 visible flex" : "opacity-0 invisible"
        }`}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
        }}
      >
        <div className="flex justify-between">
          <h2 className="font-bold text-xl">Enter Nortech Labs products</h2>
          <IoClose
            size={24}
            color="#ffffff"
            className="hover:cursor-pointer"
            onClick={() => {
              setOpenDropdown(false);
            }}
          />
        </div>
        <div className="flex flex-col gap-6">
          {apps.map((app, index) => (
            <div
              key={index}
              className="group p-6 gap-10 border flex rounded-lg justify-between bg-[#0D0E1C] hover:bg-[#001947] hover:shadow-[0_0_35.5px_0_#001A47B2] border-[#2A2B37] hover:border-transparent hover:cursor-pointer"
            >
              <div className="flex flex-col gap-3 select-none">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  {app.image ? (
                    <img src={app.image} alt={app.name} className="max-w-[126px] max-h-8" />
                  ) : (
                    <h5 className="font-bold text-xl">{app.name}</h5>
                  )}

                  <span className="text-xs bg-[#2B8A3E] text-[#2B8A3E] bg-opacity-20 px-3 py-2 rounded-full w-fit">
                    {app.tag}
                  </span>
                </div>
                {/* <span className="text-base" style={{ color: "#9195A6" }}>
                  Enter {app.name}
                </span> */}
              </div>
              <div className="relative opacity-30 group-hover:opacity-100 transition-all">
                <FaSquare
                  className="absolute right-2 top-2 z-0"
                  size={20}
                  color="#ffffff"
                />
                <IoArrowForwardCircleSharp
                  className="z-10 absolute right-0 -rotate-45 group-hover:text-[#233860] text-[#161627]"
                  size={35}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`fixed bg-black w-full h-full top-0 left-0 z-40 bg-opacity-80  ${
          openDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};
