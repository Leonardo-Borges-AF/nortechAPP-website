import { useEffect, useState } from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { formatTimestamp } from "~/utils/helpers";
import { getNortechPosts } from "~/apis/beehiiv";
import { TPost } from "~/types/beehiiv";

export const Blog = () => {
  const widthScreen = window.innerWidth;

  const { data } = useQuery({
    queryKey: ["getNortechPosts"],
    queryFn: () => getNortechPosts(),
  });

  return (
    <div id="blog-session" className="bg-background-primary px-4 py-16 md:p-20">
      <div className="relative z-20 max-w-[1184px] mx-auto flex flex-col gap-8">
        <h2 className="md:text-4xl  text-[28px] font-bold text-white leading-tight">
          News and Insights
        </h2>
        <Swiper
          slidesPerView={widthScreen > 1024 ? 3 : widthScreen > 768 ? 2 : 1}
          spaceBetween={30}
          modules={[Navigation]}
        >
          <div className="absolute top-0 w-full justify-between items-center flex z-50">
            <p className="text-colorText text-base md:w-[550px]">
              Read about the latest trends, educational discoveries and success
              stories from the Nortech community.
            </p>
            <div className="hidden md:flex gap-2 ">
              <ButtonsSlide />
            </div>
          </div>

          {data?.data.map((card, index) => (
            <SwiperSlide key={index} className="mt-20">
              <Card data={card} />
            </SwiperSlide>
          ))}
          <div className="flex md:hidden gap-2 mt-8">
            <ButtonsSlide />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

type TCardProps = {
  data: TPost;
};

const Card = ({ data }: TCardProps) => {
  return (
    <a
      href={data?.web_url}
      target="_blank"
      className="group rounded-md bg-secondary p-6 border-[1px] gap-4 flex flex-col z-20 h-[350px] hover:bg-[#131317] duration-300"
      style={{
        borderColor: "#222222",
      }}
    >
      <img
        src={data.thumbnail_url}
        alt={data.title}
        className="rounded-lg w-full h-[200px] object-cover border-[1px] group-hover:brightness-75 duration-300"
        style={{
          borderColor: "#222222",
        }}
      />
      <h3 className="text-xl font-bold text-white pr-2">{data.title}</h3>
      <span className="text-xs text-success bg-success-background px-2 py-1 uppercase rounded-xl border-success-outlined border w-fit mt-auto">
        {formatTimestamp(data.publish_date)}
      </span>
    </a>
  );
};

const ButtonsSlide = () => {
  const swiper = useSwiper();
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const goToPreviousCard = () => {
    console.log(swiper);
    swiper.slidePrev();
  };

  const goToNextCard = () => {
    console.log(swiper);
    swiper.slideNext();
  };

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setHasPrevious(swiper?.activeIndex > 0 ? true : false);
        swiper.isEnd ? setHasNext(false) : setHasNext(true);
      });
    }
  }, [swiper]);

  return (
    <>
      <button
        onClick={goToPreviousCard}
        style={{
          backgroundColor: hasPrevious ? "#313137" : "#1d1d22",
        }}
      >
        <RiArrowLeftLine size={24} color={hasPrevious ? "#fff" : "#808083"} />
      </button>
      <button
        onClick={goToNextCard}
        style={{
          backgroundColor: hasNext ? "#313137" : "#1d1d22",
        }}
      >
        <RiArrowRightLine size={24} color={hasNext ? "#fff" : "#808083"} />
      </button>
    </>
  );
};
