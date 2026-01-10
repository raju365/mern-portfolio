import { motion } from "motion/react";

const CaseStudy = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl"
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-xl"
      >
        ✕
      </button>

      <div className="h-full overflow-y-auto px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-12">

          <h2 className="text-5xl font-bold">{project.title}</h2>

          <p className="text-gray-400 text-lg">
            {project.desc}
          </p>

          <div className="text-sm text-purple-400">
            {project.tech.join(" • ")}
          </div>

          {/* IMAGE */}
          <div className="h-[400px] rounded-xl bg-white/10 flex items-center justify-center">
            Project Preview
          </div>

          {/* LINKS */}
          <div className="flex gap-8">
            <a
              href={project.live}
              target="_blank"
              className="underline"
            >
              Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              className="underline"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
