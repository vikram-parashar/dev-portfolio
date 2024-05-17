import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Image from "next/image";

const data = {
  name: "Vikram Parashar",
  job: "Web Developer",
  address: "IIITM Campus, Gwalior, MP",
  email: "work.mojorvicky@email.com",
  phone: "+91 8882447382",
  achievements: [
    {
      heading: "Achievement 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      heading: "Achievement 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ],
  skills: [
    {
      heading: "Languages",
      list: [
        "javascript",
        "typescript",
        // "golang",
        // "Bash",
        "HTML/CSS",
      ],
    },
    {
      heading: "Web Develpment",
      list: [
        "React",
        "Next",
        "TailwindCSS",
        // "NodeJs",
        // "Express",
        // "
      ],
    },
    {
      heading: "Database Systems",
      list: [
        // "MySQL",
        // "MongoDB",
        // "PostgreSQL"
        // "Redis"
        // "Neo4j"
      ],
    },
    {
      heading: "DevOps/ Cloud",
      list: [
        // "AWS",
        // "Firebase",
        // "Docker",
      ],
    },
    { heading: "Tools", list: ["Git", "Linux (I use Arch btw)", "Neovim"] },
  ],
  education: {
    course: "Integrated B.Tech in IT+MBA",
    institute: "IIIT Gwalior, India",
    duration: "Nov 2022 - July 2027",
  },
  projects: [
    {
      name: "Project Name",
      link: "parashar-dev.netlify.app/",
      description: "Nextjs app",
      keyPoints: [
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      ],
    },
    {
      name: "Project Name",
      link: "parashar-dev.netlify.app/",
      description: "Nextjs app",
      keyPoints: [
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      ],
    },
    {
      name: "Project Name",
      link: "parashar-dev.netlify.app/",
      description: "Nextjs app",
      keyPoints: [
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      ],
    },
  ],
};

const Page = () => {
  return (
    <div className="w-screen min-h-screen flex bg-slate-100 justify-center">
      <div className="max-w-[794px] bg-white w-full portrait:hidden">
        <header className="bg-[#eceeeb] px-10 h-64 items-center flex justify-between">
          <div>
            <h1 className="uppercase font-bold tracking-wider text-4xl">
              {data.name}
            </h1>
            <p className="uppercase tracking-[0.2em]">{data.job}</p>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center">
              <span className="mr-2 text-sm">{data.address}</span>
              <div className="p-0 border border-black scale-90 rounded-full">
                <LocationOnIcon className="p-[2px]" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{data.phone}</span>
              <div className="p-0 border border-black scale-90 rounded-full">
                <PhoneIcon className="p-[2px]" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm">{data.email}</span>
              <div className="p-0 border border-black scale-90 rounded-full">
                <EmailIcon className="p-[3px]" />
              </div>
            </div>
          </div>
        </header>
        <div className="flex justify-between relative -top-10 px-10">
          <div className="w-[40%] border border-[#c5c5c5]">
            <div className="bg-[#565656] uppercase scale-105 font-bold py-2 px-6 tracking-widest text-white">
              {" "}
              Achievements
            </div>
            <div className="p-6">
              {data.achievements.map((achievement) => (
                <div key={achievement.heading} className="mb-2">
                  <h1 className="uppercase font-bold tracking-wider text-md">
                    {achievement.heading}
                  </h1>
                  <p className="leading-tight text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-[#565656] scale-105 uppercase font-bold py-2 px-6 tracking-widest text-white">
              {" "}
              Skills
            </div>
            <div className="p-6">
              {data.skills.map((skill) => (
                <div
                  key={skill.heading}
                  className="mb-2 border-b-2 border-dashed"
                >
                  <h1 className="uppercase font-bold tracking-wider text-md">
                    {skill.heading}
                  </h1>
                  <div className="flex flex-wrap">
                    {skill.list.map((item) => (
                      <div
                        key={item}
                        className="border-[#c5c5c5] border px-2 py-1 mr-2 mb-2 rounded-md text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#565656] uppercase scale-105 font-bold py-2 px-6 tracking-widest text-white">
              Education
            </div>
            <div className="p-6">
              <h1 className="font-bold tracking-wider text-md">
                {data.education.course}
              </h1>
              <p className="leading-tight text-sm font-bold">
                {data.education.institute}
              </p>
              <div className="flex items-center">
                <CalendarMonthIcon className="w-4 mr-2 text-[#575757]" />
                <span className="text-sm">{data.education.duration}</span>
              </div>
            </div>
          </div>
          <div className="w-[54%]">
            <div className="border-[#565656] border-b w-full uppercase font-bold py-[7px] tracking-widest">
              Experience
            </div>
            <div className="border-[#565656] mt-5 border-b w-full uppercase font-bold py-[7px] tracking-widest">
              Projects
            </div>
            <div>
              {data.projects.map((project, index) => (
                <div key={index} className="border-b-2 border-dashed pb-2">
                  <div className="flex items-center mt-2 space-x-2">
                    <h1 className="text-xl">{project.name}</h1>
                    <AddLinkIcon />
                    <span>{project.link}</span>
                  </div>
                  <span className="mb-5">{project.description}</span>
                  {project.keyPoints.map((keyPoint) => (
                    <div key={keyPoint} className="flex mb-2">
                      <div className="w-2 h-1 mt-2 bg-[#565656] rounded-full mr-2"></div>
                      <span className="text-sm">{keyPoint}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden portrait:flex bg-[#1a1a1a] justify-between items-center">
        <Image
          src="/rotatePhone.jpg"
          width={794}
          height={1123}
          alt="rotate phone"
        />
      </div>
    </div>
  );
};

export default Page;
