import Image from "next/image";
import useWindowDimensions from "@/lib/hooks/useWindowDimension";
import { useEffect, useState } from "react";

const skillsWrapper = [
  {
    category: "langs",
    skills: ["css.webp", "html.webp", "javascript.webp", "typescript.webp", "golang.png", "bash.png"],
  },
  {
    category: "web",
    skills: ["nextjs.webp", "react.webp", "tailwindcss.webp", "express.webp", "redux.png"],
  },
  { category: "dbs", skills: ["postgresql.png", "mysql.png", "mongodb.png", "prisma.png"] },
  {
    category: "tools",
    skills: ["arch.webp", "github.png", "git.png", "neovim.png"],
  },
];

const Skills = () => {
  const { width, height } = useWindowDimensions();
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => prev + 0.01);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const rows: number[] = [];
  const cols: number[] = [];
  const rowsCount = width < 768 ? 42 : 21;
  const colsCount = width < 768 ? 9 : 30;
  const dis = width < 768 ? width / 9 : width / 30;

  for (let i = 0; i < rowsCount; i++) {
    rows.push(i * dis);
  }
  for (let i = 0; i < colsCount; i++) {
    cols.push(i * dis);
  }

  return (
    <div id="skillsSection" className="relative md:h-[100vh] overflow-hidden flex flex-row justify-center">
      <svg
        height={width < 768 ? 2.1 * height : height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        className="dark:stroke-gray-400 absolute stroke-gray-400"
      >
        {cols.map((distance, index) => (
          <line
            key={index}
            x1={distance}
            y1="0"
            x2={distance}
            y2={width < 768 ? 2.1 * height : height}
            strokeWidth="1"
          />
        ))}
      </svg>
      <svg
        height={width < 768 ? 2.1 * height : height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        className="dark:stroke-gray-400 absolute stroke-gray-400"
      >
        {rows.map((distance, index) => (
          <line
            key={index}
            x1={0}
            y1={distance}
            x2={width}
            y2={distance}
            strokeWidth="1"
          />
        ))}
      </svg>
      {/* Transparency */}
      <div className="dark:from-gray-900  absolute h-[20vh] w-screen bg-gradient-to-b from-gray-200 to-transparent"></div>
      <div className="dark:from-gray-900  absolute bottom-0 h-[20vh] w-screen bg-gradient-to-t from-gray-200 to-transparent"></div>
      {/* Skills render */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:m-0 place-items-center w-full">
        {skillsWrapper.map((collection, index1) => (
          <div
            key={index1}
            className="h-[300px] w-[300px] md:h-[380px] md:w-[380px] relative grid place-items-center"
          >
            <h1 className="text-2xl font-bold text-center">
              {collection.category}
            </h1>
            {collection.skills.map((skill, index2) => {
              const angle =
                ((2 * Math.PI) / collection.skills.length) * index2 + 1;
              const radius = width < 768 ? 100 : 140;
              return (
                <div
                  key={index2}
                  className="flex justify-center absolute"
                  style={{
                    top:
                      width > 768
                        ? `${190 + radius * Math.cos(angle + (index1 % 2 == 0 ? rotate : -rotate))}px`
                        : `${150 + radius * Math.cos(angle + (index1 % 2 == 0 ? rotate : -rotate))}px`,
                    left:
                      width > 768
                        ? `${190 + radius * Math.sin(angle + (index1 % 2 == 0 ? rotate : -rotate))}px`
                        : `${150 + radius * Math.sin(angle + (index1 % 2 == 0 ? rotate : -rotate))}px`,
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <Image
                    src={`/img/skills/${skill}`}
                    className="w-12 h-12 md:w-16 md:h-16"
                    width={60}
                    height={60}
                    alt={skill}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
