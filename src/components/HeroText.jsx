import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const word = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroText = ({ text, highlight }) => {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-4 gap-y-1
                 text-center font-display text-[2.6rem] font-medium leading-[1.1]
                 sm:text-6xl lg:text-7xl"
    >
      {text.split(" ").map((w, i) =>
        w === highlight ? (
          <motion.span
            key={i}
            variants={word}
            className="handle-box px-3 text-white/90"
          >
            {w}
            <i />
          </motion.span>
        ) : (
          <motion.span key={i} variants={word}>
            {w}
          </motion.span>
        )
      )}
    </motion.h1>
  );
};

export default HeroText;