import { useEffect, useRef } from "react";
import useWindowDimensions from "@/hooks/useWindowDimension";

const Landing = () => {
  const { width, height } = useWindowDimensions();
  const shape = useRef<HTMLDivElement>(null);

  const moveShape = (e: MouseEvent) => {
    if (width&&shape.current) {
      shape.current.style.top =
        width / 2 -e.clientY*0.05+20+"px";
      shape.current.style.left = width / 2 - e.clientX * 0.05 + "px";
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveShape);
    return () => {
      document.removeEventListener("mouseleave", moveShape);
    };
  }, []);

  return (
    <div
      id="atTop"
      className="relative flex h-screen w-screen items-center justify-center"
    >
      <div className="mx-auto px-5 text-[13vw]  font-medium uppercase leading-[1.1]  md:w-[76vw] md:text-[9vw]">
        <span className="cursor-hover relative left-1/2 inline-block -translate-x-1/2">
          -&gt;Hi, I am
        </span>
        <div className="flex items-center justify-between">
          <span className="dark:text-gray-400 hidden text-sm normal-case leading-tight text-gray-700 md:block">
            Experienced React web developer proficient in DevOps
            <br /> methodologies, adept at designing and deploying scalable
            <br /> applications, ensuring seamless integration and optimal{" "}
            <br />
            performance.
          </span>
          <span className="cursor-hover">Vikram</span>
        </div>
        <span className="cursor-hover inline-block">Parashar{"<-"} </span>
      </div>
      <div
        className="dark:bg-white absolute left-1/2 top-1/2 hidden h-[650px] w-8 -translate-x-1/2 -translate-y-1/2 rotate-[30deg] bg-gray-200 mix-blend-difference md:block"
        ref={shape}
      ></div>
    </div>
  );
};
export default Landing;
