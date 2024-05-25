import sendMail from "@/lib/fun/sendMail";
import { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState({ state: "process", message: "" });



  return (
    <div
      id="contact"
      className="container mx-auto flex h-screen flex-col justify-center px-5 md:flex-row md:items-center"
    >
      {/* Mobile */}
      <div className="mb-2 mt-12 md:hidden">
        <div className="flex justify-center text-4xl font-black uppercase lg:text-6xl">
          <span className="mr-2">Let&apos;s</span>
          <span className="mr-2">Talk</span>
        </div>
      </div>
      {/* Desktop */}
      <div className="relative hidden h-[70vh] md:block md:w-1/3">
        <p className="dark:text-gray-800 absolute -translate-x-[15rem] translate-y-[15rem] rotate-90 text-[130px] font-black text-gray-300">
          CONTACT
        </p>
        <div className="absolute text-5xl font-black uppercase lg:text-6xl">
          Let&apos;s<br/> Talk
        </div>
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
        <form
          className="mt-5"
          // onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row md:space-x-5">
            <input
              type="text"
              placeholder="Your Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="dark:bg-gray-900 dark:border-gray-200 mt-5 w-full border-b border-black bg-gray-200 p-0 text-xl"
            />
            <input
              type="text"
              placeholder="Your Email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="dark:bg-gray-900 dark:border-gray-200 mt-10 w-full border-b border-black bg-gray-200 pb-0 text-xl md:pb-3"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            className="dark:border-gray-200 dark:bg-gray-900 mt-10 w-full border-b border-black bg-gray-200 pb-1 text-xl"
          />
            <button
              type="submit"
              className="mx-auto mt-5 flex items-center pl-10 text-left text-xl font-bold md:mx-0 md:mt-10"
            >
              <div className="dark:bg-gray-200 aspect-square w-12 rounded-full bg-black md:scale-125"></div>
              <span className="dark:text-gray-200 relative -left-6 z-10 text-gray-200 mix-blend-difference">Send Message</span>
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
            </button>
        </form>
      </div>
    </div>
  );
}
