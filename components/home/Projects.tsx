import Image from "next/image";
import { useEffect,useRef } from "react";

const imgDir = "/img/projects/";
const data = [
  {
    code: "DES001",
    name: "Project 1",
    img: "sample.jpg",
    tags: ["React", "Tailwind", "Firebase"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    code: "DES002",
    name: "Project 1",
    img: "sample2.jpg",
    tags: ["React", "Tailwind", "Firebase"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
]
const Projects = () => {
  return (
    <div className="px-5 min-h-screen">
      <h1 className="scroll-m-20 border-b-2 border-b-black pb-2 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl">
        Projects
      </h1>
      {data.map((project) => (
        <ProjectCard
          key={project.code}
          {...project} />
      ))}
    </div>
  );
}

const ProjectCard = ({ code, name, img, tags, description }) => {
  const refCard = useRef<HTMLDivElement>(null);
  const refCursor = useRef<HTMLDivElement>(null);

  const onMouseMove = (e:MouseEvent) => {
    if (refCursor.current) {
      refCursor.current.style.top = `${e.clientY}px`;
      refCursor.current.style.left = `${e.clientX}px`;
    }
  }

  const onMouseEnter = () => {
    if (refCursor.current) {
      refCursor.current.style.transform = "scale(1) translate(-50%,-50%)";
    }
  }

  const onMouseLeave = () => {
    if (refCursor.current) {
      refCursor.current.style.transform = "scale(0) translate(-50%,-50%)";
    }
  }

  useEffect(() => {
    if (refCard.current) {
      refCard.current.addEventListener("mousemove", onMouseMove);
      refCard.current.addEventListener("mouseenter", onMouseEnter);
      refCard.current.addEventListener("mouseleave", onMouseLeave);
    }
  }, [])

  return (
    <div ref={refCard} className="cursor-hide group overflow-hidden relative w-full justify-between border-b border-b-black md:flex md:h-32 py-5 md:p-0 md:pb-5">
      {/* tag cursor */}
      <div ref={refCursor} className="fixed pointer-events-none scale-0 md:flex justify-center items-center w-28 h-28 hidden bg-white rounded-full transition z-20">
        #{code}
      </div>
      {/* desktop hover bg */}
      <div className="absolute h-full w-full origin-top scale-y-0 bg-black transition duration-500 group-hover:scale-y-100"> </div>
      {/* left side */}
      <div className="relative z-50 flex-col justify-end md:flex md:h-full md:px-5">
        <small className="text-sm font-black uppercase leading-none md:hidden">{code}</small>
        <h3 className="mb-1 scroll-m-20 text-2xl font-semibold uppercase tracking-tight transition-colors  group-hover:text-white md:text-3xl">
          {name}
        </h3>
        <Image
          src={`/img/projects/${img}`}
          className="mb-3 aspect-video w-full rounded-lg object-cover md:hidden group-hover:block md:fixed md:bottom-5 md:right-5 md:w-[30rem]"
          alt={name}
          height={400}
          width={400}
        />
      </div>
      {/* right side */}
      <div className="relative z-10 flex h-full flex-col items-end justify-between md:mt-5 md:px-5">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black px-5 py-2 transition-colors group-hover:border-white group-hover:text-white">
              {tag}
            </span>
          ))}
        </div>
        <p className="hidden pb-4 leading-7 transition-colors group-hover:text-white md:block [&:not(:first-child)]:mt-6">
          {description}
        </p>
      </div>
    </div>
  );
}
export default Projects;
