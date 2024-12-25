"use client";
import useWindowDimensions from "@/lib/hooks/useWindowDimension";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const { width } = useWindowDimensions();

  useEffect(() => {
    const transitionEl = document.querySelectorAll(".load-strip");
    transitionEl.forEach((el) => {
      el.classList.remove("scale-y-100");
      el.classList.add("scale-y-0");
    });
  }, [path, width]);

  const stripsIndex = [0, 1, 2, 3, 4, 5]
  return (
    <>
      {stripsIndex.map(num =>
        <TransitionStrip dis={100 / 6 * num} delay={100 * (num + 1)} key={num} />
      )}
      {children}
    </>
  );
};
type transitionStripProps = {
  dis: number;
  delay: number;
};
const TransitionStrip = ({ dis, delay }: transitionStripProps) => {
  const { width } = useWindowDimensions();

  const style =
    width && width > 768
      ? { left: `${dis}vw`, top: '0vh', transitionDelay: `${delay}ms` }
      : { top: `${dis}vh`, left: '0vw', transitionDelay: `${delay}ms` };

  return (
    <div
      className={`load-strip dark:bg-gray-800 fixed z-[999] h-[16.68vh] w-screen origin-bottom 
        md:h-screen md:w-[16.68vw] ${!width && 'opacity-0'}
        delay-[${delay}ms] scale-y-100 bg-gray-300 transition-transform duration-300`}
      style={style}
    ></div>
  )
};
export default Template;
