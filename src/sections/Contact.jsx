import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Section from "../components/Section";
import SectionTag from "../components/SectionTag";
import Magnetic from "../components/Magnetic";

const EMAIL = "rajubarman2nd@gmail.com";

const Contact = () => {
  return (
    <Section
      id="contact"
      tone="dark"
      className="relative min-h-screen items-center"
    >
      {/* soft orange glow */}
      <div
        className="pointer-events-none absolute inset-0
                   bg-[radial-gradient(50%_50%_at_50%_100%,rgba(217,79,43,0.18),transparent_70%)]"
      />

      <div className="relative w-full px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          {/* LEFT – STATEMENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <SectionTag>Contact</SectionTag>
            <h2 className="mt-6 text-[14vw] font-medium leading-none md:text-8xl">
              Let’s
              <br />
              <span className="text-brand">Talk</span>
            </h2>

            <p className="mt-10 max-w-md text-lg text-white/60">
              Have an idea, project, or just want to say hi? I’m always open to
              discussing new opportunities and collaborations.
            </p>
          </motion.div>

          {/* RIGHT – ACTION */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-10"
          >
            <div className="group">
              <p className="mb-2 text-sm text-white/50">Drop me an email</p>
              <a
                href={`mailto:${EMAIL}`}
                className="relative inline-block break-all text-xl font-medium md:text-3xl
                           after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0
                           after:bg-brand after:transition-all group-hover:after:w-full"
              >
                {EMAIL}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 rounded-lg bg-linear-to-b from-brand to-brand-dark
                             px-10 py-5 text-lg font-semibold shadow-[0_8px_30px_rgba(217,79,43,0.35)]
                             transition hover:brightness-110"
                >
                  Start a Project
                  <span className="text-xl">↗</span>
                </a>
              </Magnetic>

              <a
                href="https://github.com/Raju365"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/15 p-4 text-xl transition hover:border-brand hover:text-brand"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/raju-barman365"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/15 p-4 text-xl transition hover:border-brand hover:text-brand"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
