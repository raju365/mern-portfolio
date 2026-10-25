import { motion } from "motion/react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Section from "./Section";
import HeroText from "./HeroText";
import Magnetic from "./Magnetic";
import resume from "../images/Raju's_Resume.pdf";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <Section
      id="hero"
      className="hero-bg relative min-h-screen justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full px-6 pb-16 pt-28 text-center">
        <motion.p
          {...fade(0)}
          className="text-sm uppercase tracking-[0.2em] text-brand md:text-base"
        >
          Raju Barman · MERN Stack Developer
        </motion.p>

        <div className="mt-6">
          <HeroText
            text="Building Fast, Scalable Web Apps People Love"
            highlight="Scalable"
          />
        </div>

        <motion.p
          {...fade(0.9)}
          className="mx-auto mt-8 max-w-xl text-lg font-light text-white/70 md:text-xl"
        >
          I build scalable full-stack products with strong backend logic and
          refined, motion-driven UI experiences.
        </motion.p>

        <motion.div
          {...fade(1.05)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="font-medium text-brand">Open to work</span>
          <span className="text-white/70">
            React · Node.js · MongoDB · Express
          </span>
        </motion.div>

        <motion.div
          {...fade(1.2)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-linear-to-b from-brand to-brand-dark
                         px-8 py-3.5 font-semibold shadow-[0_8px_30px_rgba(217,79,43,0.35)]
                         transition hover:brightness-110"
            >
              View My Work <FiArrowRight />
            </a>
          </Magnetic>

          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/15
                       px-8 py-3.5 font-medium text-white/80 transition
                       hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            Resume <FiDownload />
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;