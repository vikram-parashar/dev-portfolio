import useWindowDimensions from "@/lib/hooks/useWindowDimension";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    text: "Home",
    link: "/#atTop",
  },
  {
    text: "Resume",
    link: "/resume.pdf",
  },
  {
    text: "Projects",
    link: "#projectsSection",
  },
  {
    text: "Skills",
    link: "#skillsSection",
  },
  {
    text: "Contact",
    link: "#contactSection",
  },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  useEffect(() => {
    const closeMenu = () => { setMenuOpen(false); }
    const el = document.getElementById("link-menu");
    el && el.addEventListener("click", closeMenu);
    return () => {
      el && el.removeEventListener("click", closeMenu);
    };
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
        className={`fixed top-0 h-[75vh] w-screen origin-top bg-gray-300 transition delay-200 duration-500 ease-out md:hidden ${menuOpen ? "translate-y-0 " : "-translate-y-[75vh]"} dark:bg-gray-800 z-[99] text-white pt-20`}
      >
        <ul className="h-full flex flex-col justify-around" id="link-menu">
          {links.map((link, index) => (
            <li key={index} className="py-4 text-center text-gray-800 text-2xl tracking-widest dark:text-gray-200 uppercase cursor-hover">
              <Link href={link.link}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`md:hidden dark:bg-gray-800 fixed z-[100] h-2 w-screen bg-gray-300 transition delay-100 duration-500 ease-in-out ${menuOpen ? "translate-y-[76vh] " : "-translate-y-4 "}`}
      ></div>
      <div
        className={`dark:bg-gray-800 md:hidden fixed z-[100] h-2 w-screen bg-gray-300 transition duration-500 ease-in-out ${menuOpen ? "translate-y-[78vh]" : "-translate-y-4"}`}
      ></div>

      <header className="fixed top-0 z-[99] flex w-screen justify-between px-5 py-4 backdrop-blur-sm">
        <Image
          src={darkMode ? "/signatureWhite.png" : "/signatureBlack.png"}
          alt="signature"
          className="h-full cursor-hover"
          width={150}
          height={200}
        />
        <div className="cursor-hover flex gap-5 items-center mt-1">
          <button onClick={changeTheme}>
            {darkMode ? <Moon /> : <Sun />}
          </button>
          <button onClick={() => setMenuOpen(prev => !prev)} className="md:hidden">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"></path></svg>
          </button>
          <ul className="h-full justify-around gap-5 hidden md:flex" >
            {links.map((link, index) => (
              <li key={index} >
                <Link href={link.link} target={link.text === "Resume" ? '_blank' : '_self'}>{link.text}</Link>
              </li>
            ))}
          </ul>
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
  const { width } = useWindowDimensions();
  const style =
    width && width > 768
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
