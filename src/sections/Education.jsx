import Section from "../components/Section";
import { motion } from "motion/react";

const timeline = [
  {
    year: "2019 — 2022",
    title: "Bachelor of Computer Applications (BCA)",
    place: "Droan college, Kumaun University",
    desc: "Built a strong foundation in computer science and programming concepts.",
  },
  {
    year: "2023 — 6 Months",
    title: "Frontend Developer Intern",
    place: "Cetpa Infotech, Noida",
    desc: "Worked on real-world frontend projects using HTML, CSS, JavaScript, and React.",
  },
  {
    year: "2024 — 3 Months",
    title: "Frontend Developer Intern",
    place: "Zanthium Technosoft, Rudrapur",
    desc: "Focused on modern React workflows, component-based architecture, and UI performance.",
  },
  {
    year: "2025",
    title: "PGDCA",
    place: "Droan college, Kumaun University",
    desc: "Strengthened practical knowledge in software development and applications.",
  },
  {
    year: "2025",
    title: "Full Stack MERN Development",
    place: "Sheryians Coding School, Bhopal",
    desc: "Hands-on training in MongoDB, Express.js React, and Node.js with real-world projects.",
  },
];

const Education = () => {
  return (
    <Section id="education">
      <div className="w-full px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="mb-20">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Education & Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              My learning journey
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-16 border-l border-white/10 pl-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <span className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-purple-500" />

                <p className="text-sm text-purple-400 mb-2">{item.year}</p>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.place}</p>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
