import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const data = [
  {
    code: "DES002",
    name: "harrygraphics.in",
    link: "https://harrygraphics.in/",
    img: "harry-graphics.png",
    tags: ["Next.js", "Supabase", "Cloudflare r2", "ShadCN", "TailwindCss"],
    description: `Professional portfolio website showcasing innovative printing and manufacturing solutions, products, and services tailored for industry-leading businesses.`
  },
  {
    code: "DES001",
    name: "mahatejasinnovations.com",
    link: "https://mahatejasinnovations.com",
    img: "mahatejas.png",
    tags: ["MongoDB", "Express", "React.js", "Redux", "Vercel", "TailwindCss"],
    description: `E-commerce platform offering advanced propulsion system solutions, streamlining product selection, customization, and purchase for industrial clients worldwide.`
  },
  {
    code: "DES000",
    name: "Dev Portfolio",
    link: "https://vikram-builds.vercel.app",
    img: "folio.png",
    tags: ["React.js", "Redux", "Vercel", "TailwindCss"],
    description: `My Developer Portfolio showcasing my skills, projects, and contact information.`
  },
  // {
  //   code: "DES001",
  //   name: "Next Project",
  //   link: "https://mahatejasinnovations.com",
  //   img: "mahatejas.png",
  //   tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
  //   description: `my description`
  // },
  // {
  //   code: "DES001",
  //   name: "Next Project",
  //   link: "https://mahatejasinnovations.com",
  //   img: "mahatejas.png",
  //   tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
  //   description: `my description`
  // },
  // {
  //   code: "DES001",
  //   name: "Next Project",
  //   link: "https://mahatejasinnovations.com",
  //   img: "mahatejas.png",
  //   tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
  //   description: `my description`
  // },
  // {
  //   code: "DES001",
  //   name: "Next Project",
  //   link: "https://mahatejasinnovations.com",
  //   img: "mahatejas.png",
  //   tags: ["Tag1", "Tag2", "Tag3", "Tag4"],
  //   description: `my description`
  // },
];
const Projects = () => {
  const howMany = 5;
  const [visibleCount, setVisibleCount] = useState(howMany);
  return (
    <section className="min-h-screen px-5 pt-10" id="projectsSection">
      {/* Heading */}
      <h1 className="scroll-m-20 border-b-2 border-b-gray-900 pb-2 text-4xl font-extrabold uppercase tracking-tight lg:text-5xl dark:border-b-gray-200">
        Projects
      </h1>

      {/* List */}
      {data.slice(0, visibleCount).map(project => (
        <ProjectCard key={project.code} {...project} />
      ))}

      {/* View More Button */}
      {visibleCount < data.length && (
        <button
          onClick={() => {
            visibleCount + howMany > data.length
              ? setVisibleCount(data.length)
              : setVisibleCount(visibleCount + howMany);
          }}
          className="cursor-hover relative left-1/2 top-10 -translate-x-1/2 rounded-full border-2 border-gray-900 px-5 py-2 text-lg font-semibold uppercase transition-colors hover:bg-gray-900 hover:text-white dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
        >
          View More
        </button>
      )}
    </section>
  );
};

interface ProjectCardProps {
  code: string;
  name: string;
  img: string;
  link: string;
  tags: string[];
  description: string;
}

const ProjectCard = ({
  code,
  name,
  img,
  tags,
  description,
  link
}: ProjectCardProps) => {
  const refCard = useRef<HTMLDivElement>(null);
  const refCursor = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    if (refCursor.current) {
      refCursor.current.style.top = `${e.clientY}px`;
      refCursor.current.style.left = `${e.clientX}px`;
    }
  };

  const onMouseEnter = () => {
    if (refCursor.current) {
      refCursor.current.style.transform = "scale(1) translate(-50%,-50%)";
    }
  };

  const onMouseLeave = () => {
    if (refCursor.current) {
      refCursor.current.style.transform = "scale(0) translate(-50%,-50%)";
    }
  };

  useEffect(() => {
    if (refCard.current) {
      refCard.current.addEventListener("mousemove", onMouseMove);
      refCard.current.addEventListener("mouseenter", onMouseEnter);
      refCard.current.addEventListener("mouseleave", onMouseLeave);
    }
  }, []);

  return (
    <Link href={link} target="_blank">
      <div
        ref={refCard}
        className="cursor-hide group relative w-full justify-between overflow-hidden border-b border-b-gray-900 py-5 md:flex md:h-32 md:p-0 md:pb-5 dark:border-b-gray-200"
      >
        {/* tag cursor */}
        <div
          ref={refCursor}
          className="pointer-events-none fixed z-20 hidden h-28 w-28 scale-0 items-center justify-center rounded-full bg-white transition duration-500 md:flex dark:text-gray-900"
        >
          #{code}
        </div>
        {/* desktop hover bg */}
        <div className="absolute h-full w-full origin-top scale-y-0 bg-gray-900 transition duration-500 group-hover:scale-y-100 dark:bg-gray-200"></div>
        {/* left side */}
        <div className="relative z-50 flex-col justify-end md:flex md:h-full md:px-5">
          <Link
            href={link}
            target="_blank"
            className="scroll-m-20 text-lg font-semibold tracking-tight transition-colors group-hover:text-white md:text-3xl group-hover:dark:text-gray-900"
          >
            {name}
            <ArrowUpRight className="ml-1 inline h-6 w-6 md:h-10 md:w-10" />
          </Link>
          <Image
            src={`/img/projects/${img}`}
            className="mb-3 mt-2 aspect-video w-full rounded-lg object-cover group-hover:block md:fixed md:bottom-5 md:right-5 md:mt-0 md:hidden md:w-[30rem] border border-gray-900 dark:border-gray-200"
            alt={name}
            height={400}
            width={400}
          />
        </div>
        {/* right side */}
        <div className="relative z-10 flex h-full flex-col items-end justify-between md:mt-5 md:px-5">
          <div className="flex gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="rounded-xl border bg-green-950 px-2 py-1 text-white transition-colors group-hover:bg-gray-200 group-hover:text-black dark:bg-gray-200 dark:text-black group-hover:dark:bg-green-950 group-hover:dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="hidden pb-4 text-right leading-5 transition-colors group-hover:text-white md:block md:max-w-[50vw] group-hover:dark:text-gray-900">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Projects;
