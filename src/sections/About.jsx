import { motion } from "motion/react";
import Section from "../components/Section";
import SectionTag from "../components/SectionTag";
import { projects } from "../data/projects";

const card = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

const About = () => {
  return (
    <Section
      id="about"
      tone="light"
      className="mt-10 rounded-t-[2rem] md:min-h-screen"
    >
      <div className="w-full px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <SectionTag light>About Me</SectionTag>
            <h2 className="mt-6 text-4xl font-medium md:text-6xl">
              The developer behind <span className="text-brand">the code</span>
            </h2>
          </div>

          {/* BENTO GRID */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Big statement */}
            <motion.div
              {...card(0)}
              className="flex min-h-[280px] flex-col justify-end rounded-3xl bg-brand p-8 text-white md:col-span-2 md:p-10"
            >
              <h3 className="text-4xl font-medium leading-tight md:text-6xl">
                I don’t just build apps, I build experiences.
              </h3>
            </motion.div>

            {/* Stat: projects */}
            <motion.div
              {...card(0.1)}
              className="flex min-h-[220px] flex-col justify-between rounded-3xl bg-black p-8 text-white"
            >
              <p className="font-display text-6xl font-medium text-brand">
                {String(projects.length).padStart(2, "0")}
              </p>
              <div>
                <p className="text-lg font-medium">Projects shipped</p>
                <p className="mt-1 text-sm text-white/60">
                  Full-stack apps, live on the web.
                </p>
              </div>
            </motion.div>

            {/* Stat: internships */}
            <motion.div
              {...card(0.15)}
              className="flex min-h-[220px] flex-col justify-between rounded-3xl border border-black/10 bg-white p-8"
            >
              <p className="font-display text-6xl font-medium text-brand">9</p>
              <div>
                <p className="text-lg font-medium">Months of internships</p>
                <p className="mt-1 text-sm text-black/60">
                  Frontend roles at Cetpa Infotech and Zanthium Technosoft.
                </p>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              {...card(0.2)}
              className="space-y-5 rounded-3xl border border-black/10 bg-white p-8 text-lg text-black/65 md:col-span-2 md:p-10"
            >
              <p>
                I’m a <span className="font-medium text-black">MERN Stack Developer</span>{" "}
                who enjoys solving real-world problems through clean code and
                thoughtful UI.
              </p>
              <p>
                My focus is on building scalable backend systems, seamless
                frontend interactions, and delivering products that feel fast,
                modern, and intuitive.
              </p>
              <p>
                When I’m not coding, I explore design trends, animations, and
                ways to make the web feel more human.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;