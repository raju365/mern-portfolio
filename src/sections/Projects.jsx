import { motion } from "motion/react";
import Section from "../components/Section";
import { projects } from "../data/projects";
import { useState } from "react";


const Projects = () => {
 

  return (
    <Section tone="default">
      <div className="w-full px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* SECTION INTRO */}
          <div className="mb-32">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Selected Work
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mt-4">
              Projects that
              <br />
              <span className="text-purple-400">define my craft</span>
            </h2>
          </div>

          {/* PROJECT LIST */}
          <div id="projects" className="space-y-40">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="grid md:grid-cols-2 gap-20 items-center cursor-pointer"
               
              >
                {/* VISUAL BLOCK */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className={`relative h-[320px] md:h-[420px] rounded-2xl
    border border-white/10 overflow-hidden
    ${i % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  {/* PROJECT IMAGE */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* NUMBER WATERMARK */}
                  <div
                    className="absolute inset-0 flex items-center justify-center
                  text-6xl font-bold text-white opacity-[0.08]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </motion.div>

                {/* CONTENT */}
                <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                  <h3 className="text-3xl md:text-4xl font-semibold">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 mt-6 leading-relaxed">{p.desc}</p>

                  <p className="mt-8 text-sm text-purple-400">
                    {p.tech.join(" • ")}
                  </p>

                  {/* LINKS */}
                  <div className="mt-10 flex gap-8 text-sm">
                    <a
                      href={p.live}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="relative group"
                    >
                      Live Preview
                      <span
                        className="block h-[1px] w-0 bg-purple-400
                        group-hover:w-full transition-all mt-1"
                      />
                    </a>

                    <a
                      href={p.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="relative group"
                    >
                      GitHub
                      <span
                        className="block h-[1px] w-0 bg-purple-400
                        group-hover:w-full transition-all mt-1"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      
    </Section>
  );
};

export default Projects;
