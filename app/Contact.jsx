import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

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

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState({ state: "wait", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const userId = import.meta.env.VITE_USERID;

    setEmailSent({ state: "process", message: "..." });

    emailjs
      .send(
        serviceId,
        templateId,
        {
          user_name: data.name,
          user_email: data.email,
          user_message: data.message,
        },
        userId,
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setEmailSent({ state: "success", message: "Email sent successfully!" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setEmailSent({
          state: "error",
          message: "Error sending email! Try Again Later",
        });
      });
  };

  return (
    <div
      id="contact"
      className="container mx-auto flex h-screen flex-col justify-center px-5 md:flex-row md:items-center"
    >
      {/* Mobile */}
      <div className="mb-2 mt-12 md:hidden">
        <div className="flex justify-center text-4xl font-black uppercase lg:text-6xl">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mr-2"
          >
            Let&apos;s
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mr-2"
          >
            Talk
          </motion.span>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden h-[70vh] md:block md:w-1/3">
        <div className="text-5xl font-black uppercase lg:text-6xl">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Let&apos;s
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Talk
          </motion.div>
        </div>

        <p className="absolute -z-10 -translate-x-[13rem] translate-y-[10rem] rotate-90 text-[130px] font-black text-red-100 ">
          CONTACT
        </p>
      </div>

      {/* Circles */}
      <div className="w-full">
        <h1 className="text-3xl font-bold md:text-6xl">
          Have an awesome idea? Let&apos;s bring it to life.
        </h1>
        <p className="mt-0 text-xl md:mt-5 md:text-2xl">
          I am looking for freelance opportunities or internships in startups,
          agencies, and design studios.
        </p>
        <motion.form
          variants={block}
          initial="hidden"
          whileInView="visible"
          className="mt-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row md:space-x-5">
            <motion.input
              variants={items}
              type="text"
              placeholder="Your Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="mt-5 w-full border-b border-black bg-white p-0 text-xl"
            />
            <motion.input
              variants={items}
              type="text"
              placeholder="Your Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="mt-10 w-full border-b border-black bg-white pb-0 text-xl md:pb-3"
            />
          </div>
          <motion.textarea
            variants={items}
            placeholder="Your Message"
            rows={5}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className="mt-10 w-full border-b border-black bg-white pb-1 text-xl"
          />
          {emailSent.state === "wait" ? (
            <motion.button
              variants={items}
              type="submit"
              className="mx-auto mt-5 flex items-center pl-10 text-left text-xl font-bold md:mx-0 md:mt-10"
            >
              <div className="aspect-square w-12 rounded-full bg-[#f00] md:scale-125"></div>
              <span className="relative -left-6">Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
            </motion.button>
          ) : emailSent.state === "process" ? (
            <div className="flex justify-center">
              <img
                src="/mailAnime.gif"
                alt="mail"
                className="mt-10 ml-5 w-12 h-12"
              />
            </div>
          ) : (
            <p className="border-b-4 py-2 border-[#f00] text-center mt-10 text-xl">
              {emailSent.message}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}
