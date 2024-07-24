//typescript-disabled
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { get as _get } from "lodash";
import { Yup } from "~/utils/formValidators/yupSetLocale";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import BackgroundEarth from "/videos/background-earth.mp4";
import { useEffect, useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { postSubscriptions } from "~/apis/beehiiv";

type TForm = {
  email: string;
};

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

export const Newsletter = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const { register, handleSubmit, reset, formState } = useForm<TForm>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: postSubscriptions,
    onSuccess: () => {
      toast.success("Subscribed successfully!", {
        position: "top-right",
      });
      reset();
    },
    onError: (error) => {
      reset();
      console.log(error);
    },
  });

  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      // @ts-expect-error - TS doesn't know about children property
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                // @ts-expect-error - TS doesn't know about children property
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  async function woosalSubmit(data: TForm) {
    mutate({
      body: {
        email: data.email,
      },
    });
  }

  return (
    <div className="bg-background-primary relative flex flex-col ">
      {shouldUseImage ? (
        <img src={BackgroundEarth} alt="Muted Video" />
      ) : (
        <video
          loop
          muted
          autoPlay
          playsInline
          className="absolute h-full w-full object-cover bg-black z-20 pointer-events-none"
        >
          <source src={BackgroundEarth} type="video/mp4" />
        </video>
      )}

      <div
        className="absolute h-full w-full z-20"
        style={{ backgroundColor: "rgba(10, 10, 17, 0.8)" }}
      />
      <div className="relative z-30 max-w-[1184px] mx-auto w-full px-4 py-[100px] md:p-20">
        <div className="p-4 md:p-[100px] text-center text-white gap-4 md:gap-8 flex flex-col rounded-xl">
          <div className="hidden md:flex relative m-auto gap-2 border-[1px] px-3 py-3 rounded-xl border-outlined bg-secondary items-center ">
            <span>Stay Informed with Nortech</span>
          </div>
          <h3 className="text-sm mx-auto md:hidden text-white uppercase py-1 px-4 bg-secondary rounded-full w-fit h-fit">
            FIQUE ATUALIZADO
          </h3>
          <h3 className="font-bold md:text-3xl text-[28px] leading-tight">
            Subscribe to Our Newsletter
          </h3>
          <p className="font-main text-colorText lg:text-lg text-base">
            Keep abreast of the latest Web3 innovations, news, and events with
            Nortech's <br className="lg:inline hidden" /> newsletter. Gain
            direct access to exclusive insights, success stories, and valuable{" "}
            <br className="lg:inline hidden" /> resources to navigate the
            unlimited potential of blockchain technology
          </p>

          <form
            onSubmit={handleSubmit(woosalSubmit)}
            className="flex md:m-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full relative mx-auto">
              <input
                className="p-3 rounded border border-solid text-sm w-full min-w-[250px]"
                type="text"
                id="email"
                placeholder="Enter your email address"
                style={{
                  backgroundColor: "#1F2029",
                  borderColor: "#34384C",
                  color: "#777EA2",
                }}
                {...register("email")}
              ></input>
              {formState.errors.email && (
                <p className="text-red-500 text-sm mt-2 absolute bottom-[-25px]">
                  {_get(formState.errors, "email.message")}
                </p>
              )}
              <button
                className="col-span-5 md:col-span-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-center hover:from-purple-700 hover:to-indigo-700 p-3 text-white text-sm rounded flex items-center w-full text-nowrap"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="mx-auto flex gap-4">
                    <TailSpin
                      visible={true}
                      height="20"
                      width="20"
                      color="#fff"
                      radius="1"
                    />
                    Stay Informed with Nortech
                  </span>
                ) : (
                  <span className="mx-auto">Stay Informed with Nortech</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
