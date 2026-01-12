import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0b0b0f] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        {/* MAIN TEXT */}
        <motion.h1
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-4xl md:text-5xl font-semibold tracking-[0.25em]"
        >
          RAJU-DEV
        </motion.h1>

        {/* SUBTLE LINE */}
        <motion.div
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-[1px] w-24 bg-white/40"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
