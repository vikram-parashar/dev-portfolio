import Image from "next/image";
import { useEffect, useState } from "react";

const skills = [
 { img:'python.png', class:'w-44 top-[55px] left-1/2 -translate-x-1/2'},
 { img:'javascript.png', class:'w-16 top-[130px] right-[20px]'},
 { img:'typescript.png', class:'w-16 top-[130px] left-[20px]'},
 { img:'bash.png', class:'w-36 top-[130px] left-1/2 -translate-x-1/2'},
 { img:'php.png', class:'w-40 top-[165px] left-1/2 -translate-x-1/2'},
 { img:'react.png', class:'w-40 top-[320px] left-5'},
 { img:'nextjs.png', class:'w-32 top-[325px] right-5'},
 { img:'tailwind.png', class:'w-52 top-[465px] left-1/2 -translate-x-1/2'},
 { img:'nodejs.png', class:'w-40 top-[395px] left-7'},
 { img:'express.png', class:'w-40 top-[400px] right-2'},
 ]

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);
  const distances = [];
  for (let i = 1; i < 40; i++) {
    distances.push(i * 40);
  }
  return (
    <div className="h-screen w-screen my-10 relative">
      <svg height={windowHeight} width={windowWidth} xmlns="http://www.w3.org/2000/svg" className="stroke-black absolute">
        {distances.map((distance, index) => (
          <line key={index} x1={distance} y1="0" x2={distance} y2={windowHeight} strokeWidth="1" />
        ))}
      </svg>
      <svg height={windowHeight} width={windowWidth} xmlns="http://www.w3.org/2000/svg" className="stroke-black absolute">
        {distances.map((distance, index) => (
          <line key={index} x1={0} y1={distance} x2={windowWidth} y2={distance} strokeWidth="1" />
        ))}
      </svg>
      {/* Transparency */}
      <div className="absolute w-screen h-[20vh] bg-gradient-to-b from-gray-200 to-transparent"></div>
      <div className="absolute w-screen h-[20vh] bg-gradient-to-t from-gray-200 to-transparent bottom-0"></div>
      {skills.map((skill, index) => (
        <Image
          key={index}
          src={`/img/skills/${skill.img}`}
          alt="skill"
          className={`absolute ${skill.class}`}
          width={100}
          height={100}
        />
      ))}

    </div>
  );
}
export default Skills;
