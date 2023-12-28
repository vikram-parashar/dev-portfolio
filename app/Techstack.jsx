import { motion } from "framer-motion";
import Image from "next/image";

export default function Techstack() {
  return (
    <div
      id="techstack"
      className="container mx-auto flex h-screen flex-col justify-evenly mt-40 pt-32 px-5 md:flex-row-reverse md:items-center"
    >
      {/* Mobile */}
      <div className="mb-10 md:hidden">
        <div className="flex justify-center text-4xl font-black uppercase lg:text-6xl">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mr-2"
          >
            My
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mr-2"
          >
            Tech
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Stack
          </motion.span>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden h-[70vh] w-[20%] md:block">
        <div className="text-6xl flex flex-col items-center font-black uppercase">
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
            Tech
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Stack
          </motion.div>
        </div>
        <p className="relative left-0 -z-10 hidden -translate-y-[0rem] translate-x-[0rem] rotate-90 text-[130px] font-black text-red-100 md:block ">
          SKILLS
        </p>
      </div>
      <div className="w-full md:w-[80%]">
        <div className="flex stackgroup justify-center md:w-2/3 mx-auto flex-wrap">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex relative flex-col items-center mr-5 mb-5 justify-center"
            >
              <Image
                src={`/tech/${tech}.webp`}
                className="w-20 stackitem transition-all peer object-cover h-20 md:w-24 md:h-24"
                width={100}
                height={100}
                alt={tech}
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="absolute -bottom-10 z-20 uppercase hidden peer-hover:block font-bold"
              >
                {tech}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const techs = [
  "css",
  "html",
  "javascript",
  "nextjs",
  "react",
  "tailwindcss",
  "typescript",
  "git",
  "github",
  "c",
  "cpp",
];
