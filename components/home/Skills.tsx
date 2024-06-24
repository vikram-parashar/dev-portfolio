import Image from "next/image";
import useWindowDimensions from "@/lib/hooks/useWindowDimension";

const skillsWrapper = [
  {
    category: "langs",
    skills: ["css.webp", "html.webp", "javascript.webp", "typescript.webp"],
  },
  {
    category: "web",
    skills: ["nextjs.webp", "react.webp", "tailwindcss.webp"],
  },
  { category: "devops", skills: ["aws.png"] },
  { category: "dbs", skills: ["postgresql.png"] },
  {
    category: "tools",
    skills: ["arch.webp", "github.png", "git.png", "neovim.png"],
  },
];

const Skills = () => {
  const { width, height } = useWindowDimensions();

  const rows: number[] = [];
  const cols: number[] = [];
  const rowsCount = width < 768 ? 42 : 19;
  const colsCount = width < 768 ? 9 : 30;
  const dis = width < 768 ? width / 9 : width / 30;

  for (let i = 0; i < rowsCount; i++) {
    rows.push(i * dis);
  }
  for (let i = 0; i < colsCount; i++) {
    cols.push(i * dis);
  }

  return (
    <div className="relative my-10 h-[210vh] md:h-[100vh]">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 md:m-0 place-items-center">
        {skillsWrapper.map((collection, index) => (
          <div
            key={index}
            className="h-[300px] w-[300px] md:h-[380px] md:w-[380px] relative grid place-items-center"
          >
            <h1 className="text-2xl font-bold text-center">
              {collection.category}
            </h1>
            {collection.skills.map((skill, index) => {
              const angle =
                ((2 * Math.PI) / collection.skills.length) * index + 1;
              const radius = 100;
              return (
                <div
                  key={index}
                  className="flex justify-center absolute"
                  style={{
                    top:
                      width > 768
                        ? `${190 + radius * Math.cos(angle)}px`
                        : `${150 + radius * Math.cos(angle)}px`,
                    left:
                      width > 768
                        ? `${190 + radius * Math.sin(angle)}px`
                        : `${150 + radius * Math.sin(angle)}px`,
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <Image
                    src={`/img/skills/${skill}`}
                    width={50}
                    height={50}
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
