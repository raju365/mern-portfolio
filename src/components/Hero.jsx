import { motion } from "motion/react";
import Section from "../components/Section";
import HeroText from "../components/HeroText";

const Hero = () => {
  return (
    <Section id="hero" className="items-start sm:items-end pt-28 sm:pt-45 pb-16 sm:pb-24 relative overflow-hidden">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto relative">

          {/* BACKGROUND NAME WATERMARK */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ duration: 2 }}
            className="absolute -top-20 -left-10 text-[38vw] sm:text-[22vw] font-bold
                       pointer-events-none select-none leading-none"
          >
            RAJU
          </motion.div>

          {/* NAME + STATUS PILL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-10 inline-flex items-center gap-3
                       px-5 py-2 rounded-full
                       backdrop-blur-md bg-white/5
                       border border-white/10"
          >
            {/* status dot */}
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            <span className="text-sm text-gray-300">
              Raju — MERN Stack Developer
            </span>
          </motion.div>

          {/* MAIN HERO TEXT */}
          <HeroText
            text="MERN Stack Developer"
            highlight="Developer"
          />

          {/* SUB TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 max-w-xl text-gray-400 text-lg"
          >
            I build scalable full-stack products with strong backend
            logic and refined, motion-driven UI experiences.
          </motion.p>

        </div>
      </div>
    </Section>
  );
};

export default Hero;
