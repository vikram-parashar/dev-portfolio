import { useEffect, useRef } from "react";

const Landing = () => {
  const shape = useRef<HTMLDivElement>(null);

  const moveShape = (e: MouseEvent) => {
    if (shape.current) {
      shape.current.style.top =
        screen.height / 2 - e.clientY * 0.05 + 20 + "px";
      shape.current.style.left = screen.width / 2 - e.clientX * 0.05 + "px";
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveShape);
    return () => {
      document.removeEventListener("mouseleave", moveShape);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen justify-center relative items-center">
      <div className="px-5 md:w-[76vw] mx-auto  uppercase text-[13vw] md:text-[9vw]  leading-[1.1] font-medium">
        <span className="inline-block cursor-hover relative left-1/2 -translate-x-1/2">
          -&gt;Hi, I am
        </span>
        <div className="flex justify-between items-center">
          <span className="text-sm leading-tight normal-case text-gray-700">
            Experienced React web developer proficient in DevOps
            <br /> methodologies, adept at designing and deploying scalable
            <br /> applications, ensuring seamless integration and optimal{" "}
            <br />
            performance.
          </span>
          <span className="cursor-hover">Vikram</span>
        </div>
        <span className="inline-block cursor-hover">Parashar{"<-"} </span>
      </div>
      <div
        className="absolute hidden md:block w-8 h-[650px] rotate-[30deg] left-1/2 top-1/2 bg-gray-200 mix-blend-difference -translate-y-1/2 -translate-x-1/2"
        ref={shape}
      ></div>
    </div>
  );
};
export default Landing;
