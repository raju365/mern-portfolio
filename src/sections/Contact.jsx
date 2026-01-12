import { motion } from "motion/react";
import Section from "../components/Section";
import Magnetic from "../components/Magnetic";

const Contact = () => {
  return (
    <Section id="contact" tone="dark" className=" min-h-screen items-center">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT – STATEMENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[10vw] md:text-7xl font-bold leading-none">
              Let’s
              <br />
              <span className="text-purple-400">Talk</span>
            </h2>

            <p className="mt-10 text-gray-400 max-w-md text-lg">
              Have an idea, project, or just want to say hi? I’m always open to
              discussing new opportunities and collaborations.
            </p>
          </motion.div>

          {/* RIGHT – ACTION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-10"
          >
            {/* Email row */}
            <div className="group">
              <p className="text-sm text-gray-500 mb-2">Drop me an email</p>
              <a
                href="mailto:your@email.com"
                className="text-2xl md:text-3xl font-medium inline-block
                           relative after:absolute after:left-0 after:-bottom-2
                           after:w-0 after:h-[2px] after:bg-purple-400
                           group-hover:after:w-full after:transition-all"
              >
                rajubarman2nd@email.com
              </a>
            </div>

            {/* CTA */}
            <Magnetic>
              <a
                href="mailto:rajubarman2nd@email.com"
                className="inline-flex items-center gap-4
                           px-10 py-5 rounded-full bg-purple-600
                           hover:bg-purple-700 transition text-lg font-medium"
              >
                Start a Project
                <span className="text-xl">↗</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
