import Section from "../components/Section";
import SectionTag from "../components/SectionTag";
import { motion } from "motion/react";

const timeline = [
  {
    year: "2026",
    title: "Full Stack MERN Development",
    place: "Sheryians Coding School, Bhopal",
    desc: "Hands-on training in MongoDB, Express.js React, and Node.js with real-world projects.",
  },
  {
    year: "2024-2025",
    title: "PGDCA",
    place: "Droan college, Kumaun University",
    desc: "Strengthened practical knowledge in software development and applications.",
  },
  {
    year: "2024 — 3 Months",
    title: "Frontend Developer Intern",
    place: "Zanthium Technosoft, Rudrapur",
    desc: "Focused on modern React workflows, component-based architecture, and UI performance.",
  },
  {
    year: "2023 — 6 Months",
    title: "Frontend Developer Intern",
    place: "Cetpa Infotech, Noida",
    desc: "Worked on real-world frontend projects using HTML, CSS, JavaScript, and React.",
  },
  {
    year: "2019 — 2022",
    title: "Bachelor of Computer Applications (BCA)",
    place: "Droan college, Kumaun University",
    desc: "Built a strong foundation in computer science and programming concepts.",
  },
];

const Education = () => {
  return (
    <Section id="education">
      <div className="w-full px-6 py-24">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="mb-16">
            <SectionTag>Education & Experience</SectionTag>
            <h2 className="mt-6 text-4xl font-medium md:text-6xl">
              My learning <span className="text-brand">journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-8 border-l border-white/10 pl-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <span className="absolute -left-10.25 top-7 h-3 w-3 rounded-full bg-brand shadow-[0_0_12px_rgba(217,79,43,0.8)]" />

                <div className="rounded-2xl border border-white/10 bg-ink p-6 transition hover:border-brand/40">
                  <p className="text-sm font-medium text-brand">{item.year}</p>
                  <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/50">{item.place}</p>
                  <p className="mt-3 leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;