import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      window && setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-[10] w-screen ${
          scrolled ? "shadow-md bg-white h-20" : ""
        }`}
      >
        {/* Desktop Menu */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.0 }}
          className="container mx-auto hidden w-full justify-between md:pt-5 lg:flex"
        >
          <Image
            src="/logo.png"
            className={`ml-5 -top-5 transition-transform duration-500 relative w-20 ${
              scrolled ? "scale-75" : ""
            }`}
            width={100}
            height={100}
            alt="logo"
          />
          <div className="flex group hover:text-slate-500">
            {navigation.map((item, index) => (
              <div
                key={index}
                className="hover:text-black hover:scale-110 transition-transform flex flex-col items-center"
              >
                <a
                  href={item.href}
                  className={classNames("px-3 pb-1 pt-2 text-xl uppercase")}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        animate={open ? "open" : "closed"}
        className="mx-auto flex w-full justify-between md:pt-5 lg:hidden"
      >
        <Image
          src="/logo.png"
          className={`fixed z-[101] left-3 top-3 h-16 w-16 transition-transform ${
            scrolled ? "scale-75" : ""
          }
          `}
          width={100}
          height={100}
          alt="logo"
        />
        <button
          className="fixed right-3 top-2 z-[101] p-3"
          style={styles.menu}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Main Menu"
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            {!open ? (
              <>
                <path
                  style={{ ...styles.line, ...styles.line1 }}
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path
                  style={{ ...styles.line, ...styles.line2 }}
                  d="M 20,50 H 80"
                />
                <path
                  style={{ ...styles.line, ...styles.line3 }}
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </>
            ) : (
              <>
                <path
                  style={{ ...styles.line, ...styles.line1, ...styles.active1 }}
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path
                  style={{ ...styles.line, ...styles.line2, ...styles.active2 }}
                  d="M 20,50 H 80"
                />
                <path
                  style={{ ...styles.line, ...styles.line3, ...styles.active3 }}
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </>
            )}
          </svg>
        </button>
        <motion.div
          initial={{
            clipPath: `circle(20px at ${typeof window!=="undefined"?window.innerWidth:0 - 60}px 50px)`,
          }}
          variants={sidebar}
          className="fixed top-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-[#f00]"
        >
          {navigation.map((item, index) => (
            <div key={index} className="mb-5 flex flex-col items-center">
              <Link
                href={item.href}
                onClick={() => setOpen((prev) => !prev)}
                className="px-3 pb-1 pt-2 text-4xl uppercase text-white"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
const styles = {
  menu: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
  },
  line: {
    fill: "none",
    transition:
      "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)",
    stroke: "#000",
    strokeWidth: "5.5",
    strokeLinecap: "round",
  },
  line1: {
    strokeDasharray: "60 207",
  },
  line2: {
    strokeDasharray: "60 60",
  },
  line3: {
    strokeDasharray: "60 207",
  },
  active1: {
    strokeDasharray: "90 207",
    strokeDashoffset: "-134",
    strokeWidth: 6,
  },
  active2: {
    strokeDasharray: "1 60",
    strokeDashoffset: "-30",
    strokeWidth: 6,
  },
  active3: {
    strokeDasharray: "90 207",
    strokeDashoffset: "-134",
    strokeWidth: 6,
  },
};

const navigation = [
  { name: "home", href: "#home" },
  { name: "skills", href: "#techstack" },
  { name: "portfolio", href: "#portfolio" },
  { name: "reviews", href: "#review" },
  { name: "contacts", href: "#contact" },
];

const sidebar = {
  open: (height = window.innerHeight) => ({
    clipPath: `circle(${height * 1.2}px at ${
      typeof window !== "undefined" ? window.innerWidth : 0 - 60
    }px 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(20px at ${
      typeof window !== "undefined" ? window.innerWidth : 0 - 40
    }px 40px)`,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
