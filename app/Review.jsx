import { motion } from "framer-motion";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
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
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const reviews = [
  {
    id: 1,
    img: "https://i.imgur.com/CnVpUnK.png",
    desc: "Absolutely incredible experience! The service was outstanding, and the atmosphere was cozy. I highly recommend this place for a delightful evening out with friends or family.",
  },
  {
    id: 2,
    img: "https://i.imgur.com/CnVpUnK.png",
    desc: "Disappointing service. The food was mediocre at best. The ambiance was nice, but overall, I expected more for the price. Won't be returning anytime soon",
  },
  {
    id: 3,
    img: "https://i.imgur.com/CnVpUnK.png",
    desc: "Fantastic! The staff was friendly, and the food was top-notch. A hidden gem in the city. The menu offers a variety of delicious options. Highly recommended!",
  },
  {
    id: 4,
    img: "https://i.imgur.com/CnVpUnK.png",
    desc: "Average experience. The menu lacked variety, and the service was slow. The ambiance was pleasant, but the overall value for money was not impressive. Room for improvement.",
  },
  {
    id: 5,
    img: "https://i.imgur.com/CnVpUnK.png",
    desc: "A hidden paradise! The atmosphere is enchanting, and the food is a culinary delight. Each dish is a masterpiece. A must-visit for anyone seeking a unique dining experience.",
  },
];

export default function Review() {
  const [currReview, setCurrReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function nextReview() {
    setCurrReview((prev) => (prev + 1) % reviews.length);
    setIsAnimating(true);
  }
  function prevReview() {
    setCurrReview((prev) => (prev - 1) % reviews.length);
    setIsAnimating(true);
  }
  return (
    <div
      id="review"
      className="container mx-auto flex h-screen flex-col justify-evenly px-5 md:flex-row-reverse md:items-center"
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
            What
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mr-2"
          >
            Client
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Say
          </motion.span>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden h-[70vh] w-[20%] md:block">
        <div className="text-6xl font-black uppercase">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            What
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Client
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Say
          </motion.div>
        </div>
        <p className="relative left-0 -z-10 hidden -translate-y-[5rem] translate-x-[0rem] rotate-90 text-[130px] font-black text-red-100 md:block ">
          REVIEW
        </p>
      </div>

      <div className="md:w-[80%]">
        {/* CARDS Desktop */}
        <motion.div
          variants={block}
          initial="hidden"
          whileInView="visible"
          className="mt-24 hidden grid-cols-3 gap-x-8 px-20 py-12 md:grid"
        >
          <Card
            data={
              reviews[currReview == 0 ? reviews.length - 1 : currReview - 1]
            }
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
          />
          <Card
            setIsAnimating={setIsAnimating}
            data={reviews[currReview]}
            isAnimating={isAnimating}
            active
          />
          <Card
            data={
              reviews[currReview == reviews.length - 1 ? 0 : currReview + 1]
            }
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
          />
        </motion.div>
        {/* CARDS mobile */}
        <motion.div
          variants={block}
          initial="hidden"
          whileInView="visible"
          className="md:hidden"
        >
          <Card
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            data={reviews[currReview]}
            active
          />
        </motion.div>
        {/* Change arrows */}
        <div className="flex justify-center">
          <button
            onClick={prevReview}
            className="mr-2 mt-5 flex items-center px-0 text-left text-xl font-bold"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="relative left-5 h-6 w-24 -scale-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 17.25 8.25 L 21 12 m 0 0 l -3.75 3.75 M 21 12 H -50"
              />
            </svg>
            <div className="aspect-square w-12 rounded-full bg-red-600"></div>
          </button>
          <button
            onClick={nextReview}
            className="ml-2 mt-5 flex items-center px-0 text-left text-xl font-bold"
          >
            <div className="aspect-square w-12 rounded-full bg-red-600"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="relative -left-5 h-6 w-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 17.25 8.25 L 21 12 m 0 0 l -3.75 3.75 M 21 12 H -50"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
function Card({ data, active, isAnimating, setIsAnimating }) {
  return (
    <div className={classNames(!active && "scale-90 opacity-50", "px-2")}>
      <motion.div
        variants={items}
        className="flex aspect-square w-full scale-50 flex-col items-center rounded-3xl bg-white p-5 drop-shadow-lg md:scale-100"
      >
        <svg fill="#000000" className="mb-10 h-10 w-10" viewBox="0 0 32 32">
          <path d="M6.67,26.06c.09,0,8.77-.14,8.77-11.89A7.22,7.22,0,1,0,5.67,20.9v4.16A1,1,0,0,0,6.67,26.06ZM3,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.88,9.31-5.77,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,3,14.17Z"></path>
          <path d="M22.22,26.06c.09,0,8.78-.14,8.78-11.89a7.22,7.22,0,1,0-9.78,6.73v4.16A1,1,0,0,0,22.22,26.06ZM18.56,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.89,9.31-5.78,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,18.56,14.17Z"></path>
        </svg>
        <p className="text-center text-xl font-semibold">{data.desc}</p>
      </motion.div>
      {active ? (
        <motion.img
          initial={{ y: 0 }}
          animate={{
            y: isAnimating ? [20, 0] : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          onAnimationComplete={() => setIsAnimating(false)}
          src={data.img}
          className="mx-auto mt-5 h-20 object-fill"
        />
      ) : (
        <img src={data.img} className="mx-auto mt-5 h-20 object-fill" />
      )}
    </div>
  );
}
