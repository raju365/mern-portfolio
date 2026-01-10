import { motion } from "motion/react";
import Section from "../components/Section";

const About = () => {
  return (
    <Section id="about" tone="soft">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT — BIG STATEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              I don’t just
              <br />
              build <span className="text-purple-400">apps</span>,
              <br />
              I build
              <br />
              <span className="text-purple-400">experiences</span>.
            </h2>
          </motion.div>

          {/* RIGHT — STORY */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-lg"
          >
            <p>
              I’m a <span className="text-white">MERN Stack Developer</span>
              &nbsp;who enjoys solving real-world problems through
              clean code and thoughtful UI.
            </p>

            <p>
              My focus is on building scalable backend systems,
              seamless frontend interactions, and delivering
              products that feel fast, modern, and intuitive.
            </p>

            <p>
              When I’m not coding, I explore design trends,
              animations, and ways to make the web feel
              more human.
            </p>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default About;
