import Section from "../components/Section";
import SectionTag from "../components/SectionTag";
import { projects } from "../data/projects";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <Section id="projects" tone="default">
      <div className="w-full px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* SECTION INTRO */}
          <div className="mb-16 text-center">
            <SectionTag>Selected Work</SectionTag>
            <h2 className="mt-6 text-4xl font-medium leading-tight md:text-6xl">
              Projects that <span className="text-brand">define my craft</span>
            </h2>
          </div>

          {/* STACKING CARDS: each card sticks, the next one slides over it */}
          <div className="relative pb-10">
            {projects.map((p, i) => {
              const orange = i % 2 === 0;

              return (
                <div
                  key={p.title}
                  className="sticky mb-10"
                  style={{ top: 96 + i * 20 }}
                >
                  <article
                    className={`grid items-center gap-8 rounded-3xl p-6 shadow-[0_-24px_40px_rgba(0,0,0,0.6)]
                      md:min-h-[460px] md:grid-cols-2 md:gap-12 md:p-10
                      ${
                        orange
                          ? "bg-brand text-white"
                          : "border border-white/10 bg-ink text-white"
                      }`}
                  >
                    {/* CONTENT */}
                    <div className={orange ? "" : "md:order-2"}>
                      <p
                        className={`text-sm font-medium tracking-widest ${
                          orange ? "text-white/70" : "text-brand"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")} / PROJECT
                      </p>

                      <h3 className="mt-3 text-2xl font-medium leading-tight md:text-4xl">
                        {p.title}
                      </h3>

                      <p
                        className={`mt-5 leading-relaxed ${
                          orange ? "text-white/85" : "text-white/60"
                        }`}
                      >
                        {p.desc}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className={`rounded-full px-3 py-1 text-xs ${
                              orange
                                ? "bg-black/20 text-white"
                                : "border border-white/10 bg-white/5 text-white/70"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3 text-sm">
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-semibold transition hover:brightness-110 ${
                            orange
                              ? "bg-white text-black"
                              : "bg-linear-to-b from-brand to-brand-dark text-white"
                          }`}
                        >
                          Live Preview <FiArrowUpRight />
                        </a>

                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 transition ${
                            orange
                              ? "border-white/50 hover:bg-white/10"
                              : "border-white/15 hover:bg-white/5"
                          }`}
                        >
                          <FiGithub /> GitHub
                        </a>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div
                      className={`group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10
                        ${orange ? "" : "md:order-1"}`}
                    >
                      <img
                        src={p.image}
                        loading="lazy"
                        alt={p.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;