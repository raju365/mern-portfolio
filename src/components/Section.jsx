import { motion } from "motion/react";

const Section = ({ children, className = "", tone = "default", id }) => {
  const tones = {
    default: "bg-[#0b0b0f]",
    soft: "bg-[#0f0f1a]",
    dark: "bg-black",
  };

  return (
    <motion.section
      id={id} 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`flex
        min-h-auto sm:min-h-screen
        items-start sm:items-center pt-6 pb-6  ${tones[tone]} ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
