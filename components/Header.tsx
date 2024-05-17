import useWindowDimensions from "@/hooks/useWindowDimension";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Resume",
    link: "/resume",
  },
  {
    text: "Projects",
    link: "/projects",
  },
];

const Header = () => {
  const path = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const changeTheme = () => {
    const transitionEl = document.querySelectorAll(".change-color");
    transitionEl.forEach((el) => {
      el.classList.add("scale-y-100");
    });
    setTimeout(() => {
      transitionEl.forEach((el) => {
        el.classList.remove("scale-y-100");
      });
      setDarkMode((prev) => !prev);
    }, 900);
  };

  return (
    <>
      <div
        className={`fixed top-0 h-[75vh] w-screen origin-top bg-gray-300 transition delay-200 duration-500 ease-out md:right-0 md:h-screen md:w-[75vw] md:origin-right ${menuOpen ? "scale-y-100 md:scale-x-100" : "scale-y-0 md:scale-x-0 md:scale-y-100"} dark:bg-gray-800 z-[99] text-white pt-20`}
      >
        <ul>
          {links.map((link, index) => (
            <li key={index} className="py-4 text-center text-gray-900 text-2xl">
              <Link href={link.link}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`dark:bg-gray-800 fixed z-[100] h-2 w-screen bg-gray-300 transition delay-100 duration-500 ease-in-out md:h-screen md:w-2 ${menuOpen ? "translate-y-[76vh] md:translate-x-[24vw] md:translate-y-0" : "-translate-y-4 md:translate-x-[100vw]"}`}
      ></div>
      <div
        className={`dark:bg-gray-800 fixed z-[100] h-2 w-screen bg-gray-300 transition duration-500 ease-in-out md:h-screen md:w-2 ${menuOpen ? "translate-y-[78vh] md:translate-x-[23vw] md:translate-y-0" : "-translate-y-4 md:translate-x-[100vw]"}`}
      ></div>
      <header className="fixed top-0 z-[99] flex w-screen justify-between px-5 py-4 backdrop-blur-sm">
        <Image
          src={darkMode ? "/signatureWhite.png" : "/signatureBlack.png"}
          alt="signature"
          className="h-full"
          width={150}
          height={200}
        />
        <div>
          <button onClick={changeTheme} className="relative top-[0.4rem] mr-4">
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>
          <button onClick={() => setMenuOpen((prev) => !prev)} className="">
            Menu
          </button>
        </div>
      </header>
      {/* Transition Wall */}
      <>
        <TransitionStrip dis={0} delay={0} />
        <TransitionStrip dis={16.67} delay={100} />
        <TransitionStrip dis={33.33} delay={200} />
        <TransitionStrip dis={50} delay={300} />
        <TransitionStrip dis={66.67} delay={400} />
        <TransitionStrip dis={83.33} delay={500} />
      </>
    </>
  );
};

type transitionStripProps = {
  dis: number;
  delay: number;
};
const TransitionStrip = ({ dis, delay }: transitionStripProps) => {
  const {width}=useWindowDimensions();
  const style =
    width&&width> 768
      ? { left: `${dis}vw`, transitionDelay: `${delay}ms` }
      : { top: `${dis}vh`, transitionDelay: `${delay}ms` };
  return (
    <div
      className={`change-color dark:bg-gray-800 fixed z-[999] h-[16.68vh] w-screen origin-bottom md:bottom-0 md:h-screen md:w-[16.68vw] scale-y-0 bg-gray-300 transition duration-300`}
      style={style}
    ></div>
  );
};
export default Header;
