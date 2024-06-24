import Image from "next/image";
import useWindowDimensions from "@/lib/hooks/useWindowDimension";

const langs = [
  "css.webp",
  "html.webp",
  "javascript.webp",
  "typescript.webp",
  "TITLE",
  "",
  "", // "bash.webp",
  "",
  "", // "python.png",
];
const web = [
  "",
  "nextjs.webp",
  "react.webp",
  "tailwindcss.webp",
  "TITLE",
  "", // "redux.png",
  "", // "nodejs.webp",
  "", // "express.webp",
  "",
];
const devops = [
  "", // "docker.webp",
  "", // "kubernetes.png",
  "", // "aws.png",
  "",
  "TITLE",
  "", // "azure.png",
  "", // "gcp.webp",
  "", // "ansible.png",
  "", // "jenkins.png",
];
const dbs = [
  "", // "mysql.png",
  "",
  "", // "mongodb.png",
  "",
  "TITLE",
  "",
  "", // "postgresql.png",
  "",
  "", // "redis.png",
];
const tools = [
  "arch.webp",
  "",
  "github.png",
  "",
  "TITLE",
  "",
  "git.png",
  "",
  "neovim.png",
];

const Skills = () => {
  const { width, height } = useWindowDimensions();

  const rows:number[] = [];
  const cols:number[] = [];
  const rowsCount = width < 768 ? 42 : 19;
  const colsCount = width < 768 ? 9 : 30;
  const dis = width<768?width/9 : width/30;

    for (let i = 0; i < rowsCount; i++) {
      rows.push(i * dis);
    }
    for (let i = 0; i < colsCount; i++) {
      cols.push(i * dis);
    }

  return (
    <div className="relative my-10 h-[210vh] md:h-[100vh]">
      <svg
        height={width<768?2.1*height:height}
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
            y2={width<768?2.1*height:height}
            strokeWidth="1"
          />
        ))}
      </svg>
      <svg
        height={width<768?2.1*height:height}
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
      <div className="absolute z-10 grid w-screen md:top-20 md:grid-cols-3 md:gap-x-40 md:gap-y-20">
        {/* Languages */}
        <div className="mt-20 inline-grid grid-cols-3 place-content-center place-items-center gap-5 min-h-[254px]">
          {langs.map((skill, index) => {
            if (skill === "TITLE")
              return (
                <span key={index}>
                  <span className="pl-3 text-3xl font-black uppercase">
                    Lang
                  </span>
                  <br />
                  <span className="text-3xl font-black uppercase">Uages</span>
                </span>
              );
            else if (skill === "") return <div key={index} className=""></div>;
            else {
              return (
                <Image
                  key={index}
                  src={`/img/skills/${skill}`}
                  className="w-16"
                  width={50}
                  height={50}
                  alt={skill}
                />
              );
            }
          })}
        </div>
        <div className="hidden place-items-center md:grid">
          <span className="pl-3 text-3xl font-black uppercase">My skills</span>
        </div>
        {/* Web */}
        <div className="mt-16 grid  grid-cols-3 place-content-center place-items-center gap-5 min-h-[254px]">
          {web.map((skill, index) => {
            if (skill === "TITLE")
              return (
                <span key={index}>
                  <span className="pl-3 text-3xl font-black uppercase">
                    web
                  </span>
                </span>
              );
            else if (skill === "") return <div key={index} className=""></div>;
            else {
              return (
                <Image
                  key={index}
                  src={`/img/skills/${skill}`}
                  className="w-16"
                  width={50}
                  height={50}
                  alt={skill}
                />
              );
            }
          })}
        </div>
        {/* DevOps */}
        <div className="mt-16 grid  grid-cols-3 place-content-center place-items-center gap-5 min-h-[254px]">
          {devops.map((skill, index) => {
            if (skill === "TITLE")
              return (
                <span key={index}>
                  <span className="pl-3 text-3xl font-black uppercase">
                    Dev
                  </span>
                  <br />
                  <span className="pl-3 text-3xl font-black uppercase">
                    Ops
                  </span>
                </span>
              );
            else if (skill === "") return <div key={index} className=""></div>;
            else {
              return (
                <Image
                  key={index}
                  src={`/img/skills/${skill}`}
                  className="w-16"
                  width={50}
                  height={50}
                  alt={skill}
                />
              );
            }
          })}
        </div>
        {/* DB */}
        <div className="mt-16 grid  grid-cols-3 place-content-center place-items-center gap-5 min-h-[254px]">
          {dbs.map((skill, index) => {
            if (skill === "TITLE")
              return (
                <span key={index}>
                  <span className="pl-3 text-3xl font-black uppercase">DB</span>
                </span>
              );
            else if (skill === "") return <div key={index} className=""></div>;
            else {
              return (
                <Image
                  key={index}
                  src={`/img/skills/${skill}`}
                  className="w-16"
                  width={50}
                  height={50}
                  alt={skill}
                />
              );
            }
          })}
        </div>
        {/* Tools */}
        <div className="mt-16 grid  grid-cols-3 place-content-center place-items-center gap-5 min-h-[254px]">
          {tools.map((skill, index) => {
            if (skill === "TITLE")
              return (
                <span key={index}>
                  <span className="pl-3 text-3xl font-black uppercase">my</span>
                  <br />
                  <span className="pl-3 text-3xl font-black uppercase">
                    KIT
                  </span>
                </span>
              );
            else if (skill === "") return <div key={index} className=""></div>;
            else {
              return (
                <Image
                  key={index}
                  src={`/img/skills/${skill}`}
                  className="w-16"
                  width={50}
                  height={50}
                  alt={skill}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default Skills;
