import Section from "../components/Section";
import SectionTag from "../components/SectionTag";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";

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
      <div className="w-full overflow-hidden py-16">
        <div className="mb-10 text-center">
          <SectionTag>Tech Stack</SectionTag>
        </div>

        <div className="relative">
          {/* w-max + per-item margin so the -50% loop is seamless */}
          <div className="flex w-max animate-marquee">
            {skills.concat(skills).map((skill, i) => (
              <div
                key={i}
                className="mr-20 flex items-center gap-4 font-display text-3xl
                           text-white/70 transition-colors hover:text-white md:text-4xl"
              >
                <span className="text-brand">{skill.icon}</span>
                <span className="whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Edge fades */}
          <div
            className="pointer-events-none absolute inset-0
                       bg-[linear-gradient(to_right,#000_0%,transparent_12%,transparent_88%,#000_100%)]"
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
