import { motion } from "motion/react";

const Section = ({ children, className = "", tone = "default", id }) => {
  const tones = {
    default: "bg-black",
    soft: "bg-ink",
    dark: "bg-black",
    light: "bg-brand-soft text-black",
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`flex
        items-center pt-6 pb-6  ${tones[tone]} ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;