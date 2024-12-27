import { useEffect, useRef } from "react";
import useWindowDimensions from "@/lib/hooks/useWindowDimension";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Landing = () => {
  const { width, height } = useWindowDimensions();
  const shape = useRef<HTMLDivElement>(null);

  const moveShape = (e: MouseEvent) => {
    if (width && shape.current) {
      shape.current.style.top = height / 2 - e.clientY * 0.05 + 20 + "px";
      shape.current.style.left = width / 2 - e.clientX * 0.05 + "px";
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveShape);
    return () => {
      document.removeEventListener("mouseleave", moveShape);
    };
  });

  return (
    <div
      id="atTop"
      className="relative flex flex-col gap-10 pt-20 md:pt-0 h-[70vh] md:h-screen w-screen items-center justify-center"
    >
      <div className="mx-auto px-5 text-[13vw]  font-medium uppercase leading-[1.1]  md:w-[76vw] md:text-[9vw]">
        <span className="cursor-hover relative left-1/2 inline-block -translate-x-1/2">
          -&gt;Hi, I am
        </span>
        <div className="flex items-center justify-between">
          <span className="dark:text-gray-400 hidden text-sm normal-case leading-tight text-gray-700 md:block">
            I&apos;m a 3rd year student at IIIT Gwalior, pursuing a dual degree in IT and MBA.
            <br />I am a passionate software developer with expertise in Golang, Next.js, React.js
            <br />and other frontend technologies. I am passionate about building efficient,
            <br />scalable web applications and delivering high-quality user experiences.
            <br /> I have strong problem-solving and collaborative skills.
          </span>
          <span className="cursor-hover">Vikram</span>
        </div>
        <span className="cursor-hover inline-block">Parashar{"<-"} </span>
      </div>
      <span className="dark:text-gray-400 text-sm normal-case leading-tight text-gray-700 md:hidden px-5 text-center">
        I&apos;m a 3rd year student at IIIT Gwalior, pursuing a dual degree in IT and MBA.
        I am a passionate software developer with expertise in Golang, Next.js, React.js
        and other frontend technologies. I am passionate about building efficient,
        scalable web applications and delivering high-quality user experiences.
        I have strong problem-solving and collaborative skills.
      </span>
      <div
        className="dark:bg-white absolute left-1/2 top-1/2 hidden h-[650px] w-8 -translate-x-1/2 -translate-y-1/2 rotate-[30deg] bg-gray-200 mix-blend-difference md:block"
        ref={shape}
      ></div>
      <div className="flex gap-4 items-center cursor-hover">
        <Link href="/resume.pdf" target="_blank" download
          className="cursor-pointer text-white bg-black px-5 py-2 rounded-lg">Resume</Link>
        <Link href="https://github.com/vikram-parashar/" target="_blank">
          <Github />
        </Link>
        <Link href="https://www.linkedin.com/in/vikram-parashar-942b54330/" target="_blank">
          <Linkedin />
        </Link>
        <Link href="mailto:vikramparashar24@gmail.com" target="_blank">
          <Mail />
        </Link>
      </div>
    </div>
  );
};
export default Landing;
