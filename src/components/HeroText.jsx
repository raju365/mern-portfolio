import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const word = {
  hidden: { y: 120, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const HeroText = ({ text, highlight }) => {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-[12vw] leading-none font-bold flex flex-wrap gap-x-4"
    >
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={w === highlight ? "text-purple-400" : ""}
        >
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default HeroText;
