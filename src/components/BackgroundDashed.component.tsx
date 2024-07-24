import { useEffect, useRef } from "react";

export const BackgroundDashed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstLightRef = useRef<HTMLDivElement>(null);
  const secondLightRef = useRef<HTMLDivElement>(null);
  const thirdLightRef = useRef<HTMLDivElement>(null);
  const fourthLightRef = useRef<HTMLDivElement>(null);
  const fifthLightRef = useRef<HTMLDivElement>(null);
  const classesLight = "h-[50px] z-10 top-[-50px]";

  const dashedSpacing = "18px";
  const dashedWidth = "1px";
  const dashedHeight = "10px";

  useEffect(() => {
    const lights = [
      firstLightRef.current,
      secondLightRef.current,
      thirdLightRef.current,
      fourthLightRef.current,
      fifthLightRef.current,
    ];

    const animateLight = (light: HTMLDivElement | null) => {
      const randomTime = Math.floor(Math.random() * (50000 - 30000 + 1)) + 0;
      setTimeout(() => {
        if (light) {
          light.style.top = "100%";
          light.style.transition = "top 10s";
          setTimeout(() => {
            light.style.transition = "none";
            light.style.top = "-50px";
            animateLight(light);
          }, 10000);
        }
      }, randomTime);
    };

    lights.forEach((light) => {
      animateLight(light);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute w-full h-full max-w-[1215px] z-10 grid grid-cols-4"
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <div
        className={`h-full opacity-60 z-10 mr-auto relative`}
        style={{
          width: dashedWidth,
          background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
        }}
      >
        <div
          ref={firstLightRef}
          className={`${classesLight} mr-auto absolute right-0`}
          style={{
            ...styles.light,
          }}
        ></div>
      </div>
      <div
        className={`h-full opacity-60 z-10 mr-auto relative`}
        style={{
          width: dashedWidth,
          background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
        }}
      >
        <div
          ref={secondLightRef}
          className={`${classesLight} mr-auto absolute right-0`}
          style={{
            ...styles.light,
          }}
        ></div>
      </div>
      <div
        className={`h-full opacity-60 z-10 mr-auto`}
        style={{
          width: dashedWidth,
          left: "50%",
          transform: "translateX(-50%)",
          background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
        }}
      >
        <div
          ref={thirdLightRef}
          className={`${classesLight} mr-auto absolute left-0`}
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            ...styles.light,
          }}
        ></div>
      </div>
      <div className="flex">
        <div
          className={`h-full opacity-60 z-10 mr-auto relative`}
          style={{
            width: dashedWidth,
            background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
          }}
        >
          <div
            ref={fourthLightRef}
            className={`${classesLight} mr-auto absolute left-0`}
            style={styles.light}
          ></div>
        </div>
        <div
          className={`h-full opacity-60 z-10 relative`}
          style={{
            width: dashedWidth,
            background: `repeating-linear-gradient(to bottom, var(--color-border-dashed) 0, var(--color-border-dashed) ${dashedHeight}, transparent ${dashedHeight}, transparent ${dashedSpacing})`,
          }}
        >
          <div
            ref={fifthLightRef}
            className={`${classesLight} mr-auto absolute left-0`}
            style={styles.light}
          ></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  light: {
    transitionTimingFunction: "ease-in",
    backgroundColor: "rgba(255,255,255,0.8)",
    boxShadow:
      "0 0 5px 1px #055efa, 0 0 10px 2px #055efa, 0 0 15px 3px #055efa, 0 0 50px 10px #055efa",
    opacity: 0.3,
  },
};
