import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div
      id="home"
      className="container mx-auto flex h-screen flex-col-reverse justify-evenly md:flex-row md:items-center"
    >
      {/* Text */}
      <div className="mt-5 md:w-[60%]">
        <motion.div initial="hidden" whileInView="visible" variants={block}>
          <motion.p variants={items} className="text-center md:text-left">
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={items}
            className="text-center text-4xl font-black uppercase md:text-left md:text-7xl"
          >
            Vikram Parashar
          </motion.h1>
          <motion.h2
            variants={items}
            className="text-bold text-center text-2xl md:text-left lg:text-4xl"
          >
            I build things for the web.
          </motion.h2>
          <motion.a
            variants={items}
            href="#portfolio"
            className="mx-auto my-6 flex items-center pl-10 text-left text-xl font-bold md:mx-0 md:mt-10"
          >
            <div className="aspect-square w-12 rounded-full bg-[#f00] md:scale-125"></div>
            <span className="relative -left-6">VIEW PROJECTS</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="relative -left-3 h-6 w-20 transition-transform hover:translate-x-[12.5%] hover:scale-x-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 17.25 8.25 L 21 12 m 0 0 l -3.75 3.75 M 21 12 H -50"
              />
            </svg>
          </motion.a>
        </motion.div>
        {/* Contact and social */}
        <div className="container relative mt-5 grid w-full grid-cols-2 px-5 md:absolute md:bottom-0 md:mt-10 md:flex md:px-0">
          <motion.div
            className="mb-5 md:mr-16"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h3 className="border-l-2 border-black py-3 pl-5 font-bold uppercase">
              Contact Me
            </h3>
            <a
              className="block pl-5 text-sm md:text-lg"
              href="tel:+918882447382"
            >
              +91 8882447382
            </a>
            <a
              className="block pl-5 text-sm md:text-lg"
              href="mailto:work.majorvicky@gmail.com"
            >
              work.majorvicky
              <br className="md:hidden" />
              @gmail.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h3 className="border-l-2 border-black py-3 pl-5 font-bold uppercase">
              Follow Me
            </h3>
            <a
              className="block pl-5 text-sm md:text-lg"
              href="https://www.linkedin.com/in/vikram-parashar-9b6b6424a/"
            >
              linkedin.com
              <span className="hidden md:inline">in/vikram-parashar</span>
            </a>
            <a
              className="block pl-5 text-sm md:text-lg"
              href="https://github.com/vikram-parashar/"
            >
              github.com
              <span className="hidden md:inline">/vikram-parashar</span>
            </a>
          </motion.div>
          {/* Scroll down */}
          <div className="absolute -bottom-5 right-12 origin-bottom-right rotate-90">
            <p className="relative top-2">Scroll down</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 01 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="relative h-6 w-32"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 17.25 8.25 L 21 12 m 0 0 l -3.75 3.75 M 21 12 H -131"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Circles */}
      <div className="relative mx-16 mt-20 aspect-square md:m-0 md:w-[35%]">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-0 aspect-square w-1/2 rounded-full  bg-[#f00]"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileTap={{ scale: 1.1 }}
          className="absolute bottom-0 right-0 aspect-square w-[85%] -scale-x-100 overflow-hidden rounded-full bg-black md:bottom-[20%] lg:bottom-0"
        >
          <img src="/mypic1.jpeg" className="-scale-x-100" />
        </motion.div>
      </div>
    </div>
  );
}

const block = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};
const items = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

