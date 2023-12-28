import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import Link from "next/link";

export default function MyWork() {
  useEffect(() => {
    const allProjectContainers =
      document.querySelectorAll(".project-container");
    const projectCursor = document.querySelector("#project-cursor");
    allProjectContainers.forEach((container) => {
      container.addEventListener("mouseenter", () => {
        projectCursor.classList.remove("scale-0");
        projectCursor.classList.add("scale-100");
      });
      container.addEventListener("mousemove", () => {
        projectCursor.style.top = `${event.clientY}px`;
        projectCursor.style.left = `${event.clientX}px`;
      });
      container.addEventListener("mouseleave", () => {
        projectCursor.classList.remove("scale-100");
        projectCursor.classList.add("scale-0");
      });
    });

    return () => {
      allProjectContainers.forEach((container) => {
        container.removeEventListener("mouseenter", () => {});
        container.removeEventListener("mousemove", () => {});
        container.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      {/* Project Hover Cursor */}
      <div
        id="project-cursor"
        className="w-20 h-20 scale-0 transition-transform duration-300 flex justify-center z-50 items-center bg-red-600 rounded-full fixed"
      >
        <CallMadeOutlinedIcon className="text-white scale-150" />
      </div>

      {/* Rest */}
      <div
        id="portfolio"
        className="h-sceen container mx-auto px-5 flex flex-col md:flex-row md:items-center"
      >
        {/* Mobile */}
        <div className="mb-2 mt-12 md:hidden">
          <div className="flex justify-center text-4xl font-black uppercase lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mr-3"
            >
              My
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Work
            </motion.span>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden h-[70vh] md:block md:w-1/3">
          <div className="text-5xl font-black uppercase lg:text-6xl">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              My
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Work
            </motion.div>
          </div>
          <p className="absolute -z-10 -translate-x-[15rem] translate-y-[10rem] rotate-90 text-[130px] font-black text-red-100 ">
            PORTFOLIO
          </p>
        </div>
        <div className="md:w-2/3 md:mt-20 mb-5 mt-10 flex flex-col md:items-end md:pt-10">
          <Project
            name={"Parashar-Dev"}
            link={"https://parashar-dev.netlify.app/"}
            githublink={"https://github.com/vikram-parashar/dev-portfolio"}
            description={"NextJS developer portfolio"}
            tags={["Framer Motion","NextJs", "ReactJs", "TailwindCSS"]}
            image={"/loading.gif"}
          />
        </div>
      </div>
      <div className="md:flex justify-evenly items-center px-5 md:mt-16">
        <div className="md:w-[50%] mb-10">
          <Project
            name={"Project Name"}
            link={"https://parashar-dev.netlify.app/"}
            githublink={"https://github.com/vikram-parashar/dev-portfolio"}
            description={"Project Description"}
            tags={["React", "NextJS", "TailwindCSS"]}
            image={"/loading.gif"}
          />
        </div>
        <div className="md:w-[30%]">
          <Project
            name={"Project Name"}
            link={"https://parashar-dev.netlify.app/"}
            githublink={"https://github.com/vikram-parashar/dev-portfolio"}
            description={"Project Description"}
            tags={["React", "NextJS", "TailwindCSS"]}
            image={"/loading.gif"}
          />
        </div>
      </div>
      <div className="md:flex justify-evenly px-5 md:mt-16">
        <div className="md:w-[60%] mb-10">
          <Project
            name={"Project Name"}
            link={"https://parashar-dev.netlify.app/"}
            githublink={"https://github.com/vikram-parashar/dev-portfolio"}
            description={"Project Description"}
            tags={["React", "NextJS", "TailwindCSS"]}
            image={"/loading.gif"}
          />
        </div>
        <div className="md:w-[30%] relative md:-top-16">
          <Project
            name={"Project Name"}
            link={"https://parashar-dev.netlify.app/"}
            githublink={"https://github.com/vikram-parashar/dev-portfolio"}
            description={"Project Description"}
            tags={["React", "NextJS", "TailwindCSS"]}
            image={"/loading.gif"}
          />
        </div>
      </div>
    </>
  );
}
const Project = ({ name,link,githublink, description, tags, image }) => {
  return (
    <>
      <div className="w-full transition-all border-2 overflow-hidden hover:rounded-3xl relative">
        <Link className="project-container" href={link}>
          <Image
            src={image}
            className="w-full hover:scale-110 transition-all duration-500"
            width={100}
            height={100}
            alt={name}
          />
        </Link>
      </div>
      <div className="flex flex-wrap py-3">
        {tags.map((tag, index) => (
          <Tag name={tag} key={index} />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold md:text-5xl pb-2">{name}</h1>
        <Link href={githublink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
          </svg>
        </Link>
      </div>
      <span className="text-lg md:text-xl mb-5">{description}</span>
    </>
  );
};
const Tag = ({ name }) => {
  return (
    <div className="text-slate-600 py-1 mb-2 mr-2 px-5 border border-slate-600 rounded-full">
      {name}
    </div>
  );
};

const block = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};
const items = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
