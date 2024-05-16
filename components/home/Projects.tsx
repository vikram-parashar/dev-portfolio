import Image from "next/image";
import { useEffect,useRef } from "react";
import Link from "next/link";

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
    <div className="min-h-screen px-5">
      <h1 className="dark:border-b-gray-200 scroll-m-20 border-b-2 border-b-gray-900 pb-2 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl">
        Projects
      </h1>
      {data.map((project) => (
        <ProjectCard
          key={project.code}
          {...project} />
      ))}
      <Link
        href="/projects"
        className="relative left-1/2 -translate-x-1/2 top-10 border-2 border-gray-900 dark:border-gray-200 px-5 py-2 rounded-full text-lg font-semibold uppercase transition-colors dark:text-gray-200 dark:hover:text-gray-900 dark:hover:bg-gray-200 hover:bg-gray-900 hover:text-white"
        >View More</Link>
    </div>
  );
}

interface ProjectCardProps {
  code: string,
  name: string,
  img: string,
  tags: string[],
  description: string
}

const ProjectCard = ({ code, name, img, tags, description }: ProjectCardProps) => {
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
    <div ref={refCard} className="cursor-hide dark:border-b-gray-200 group relative w-full justify-between overflow-hidden border-b border-b-gray-900 py-5 md:flex md:h-32 md:p-0 md:pb-5">
      {/* tag cursor */}
      <div ref={refCursor} className="pointer-events-none fixed z-20 hidden h-28 w-28 scale-0 items-center justify-center rounded-full bg-white transition md:flex">
        #{code}
      </div>
      {/* desktop hover bg */}
      <div className="dark:bg-gray-200 absolute h-full w-full origin-top scale-y-0 bg-gray-900 transition duration-500 group-hover:scale-y-100"> </div>
      {/* left side */}
      <div className="relative z-50 flex-col justify-end md:flex md:h-full md:px-5">
        <small className="text-sm font-black uppercase leading-none md:hidden">{code}</small>
        <h3 className="group-hover:dark:text-gray-900 mb-1 scroll-m-20 text-2xl font-semibold uppercase tracking-tight  transition-colors group-hover:text-white md:text-3xl">
          {name}
        </h3>
        <Image
          src={`/img/projects/${img}`}
          className="mb-3 aspect-video w-full rounded-lg object-cover group-hover:block md:fixed md:bottom-5 md:right-5 md:hidden md:w-[30rem]"
          alt={name}
          height={400}
          width={400}
        />
      </div>
      {/* right side */}
      <div className="relative z-10 flex h-full flex-col items-end justify-between md:mt-5 md:px-5">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="dark:border-gray-200 group-hover:dark:border-gray-900 group-hover:dark:text-gray-900 rounded-full border border-gray-900 px-5 py-2 transition-colors group-hover:border-gray-200 group-hover:text-white">
              {tag}
            </span>
          ))}
        </div>
        <p className="group-hover:dark:text-gray-900 hidden pb-4 leading-7 transition-colors group-hover:text-white md:block [&:not(:first-child)]:mt-6">
          {description}
        </p>
      </div>
    </div>
  );
}
export default Projects;
