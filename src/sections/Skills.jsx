import Section from "../components/Section";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiJsonwebtokens } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "REST APIs", icon: <FaDatabase /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="w-full  overflow-hidden py-12">

        {/* TOP STRIP */}
        <div className="relative">
          <div className="flex gap-20 text-4xl opacity-70 animate-marquee">
            {skills.concat(skills).map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-4
                           hover:opacity-100 transition-opacity"
              >
                <span className="text-purple-400 text-3xl">
                  {skill.icon}
                </span>
                <span className="whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* GRADIENT MASK (edges fade) */}
          <div className="pointer-events-none absolute inset-0
                          bg-gradient-to-r
                          from-[#0b0b0f] via-transparent to-[#0b0b0f]" />
        </div>

      </div>
    </Section>
  );
};

export default Skills;
