"use client";
import useWindowDimensions from "@/hooks/useWindowDimension";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const transitionEl = document.querySelectorAll(".load-strip");
    transitionEl.forEach((el) => {
      el.classList.remove("scale-y-100");
      el.classList.add("scale-y-0");
    });
  }, [path]);

  return (
    <>
      <TransitionStrip dis={0} delay={0} />
      <TransitionStrip dis={16.67} delay={100} />
      <TransitionStrip dis={33.33} delay={200} />
      <TransitionStrip dis={50} delay={300} />
      <TransitionStrip dis={66.67} delay={400} />
      <TransitionStrip dis={83.33} delay={500} />
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
      ? { left: `${dis}vw`, transitionDelay: `${delay}ms` }
      : { top: `${dis}vh`, transitionDelay: `${delay}ms` };
  return (
    <div
      className={`load-strip dark:bg-gray-800 fixed z-[999] h-[16.68vh] w-screen origin-bottom md:bottom-0 md:h-screen md:w-[16.68vw] delay-[${delay}ms] scale-y-100 bg-gray-300 transition duration-300`}
      style={style}
    ></div>
  );
};
export default Template;
