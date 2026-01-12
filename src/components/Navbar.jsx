import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // 🔥 ACTIVE LINK ON SCROLL
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      {/* DESKTOP FLOATING NAV */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className="flex items-center gap-8 px-8 py-3 rounded-full
          backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
        >
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className={`relative text-sm transition
                ${
                  active === l.id
                    ? "text-white after:w-full"
                    : "text-white/70 hover:text-white"
                }
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-purple-400
                after:w-0 after:transition-all`}
            >
              {l.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="ml-4 px-4 py-2 text-sm rounded-full
              bg-purple-600 hover:bg-purple-700 transition"
          >
            Resume
          </a>
        </div>
      </motion.nav>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="p-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20"
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE SLIDE UP MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl"
          >
            <div className="absolute top-6 right-6">
              <FiX className="text-2xl" onClick={() => setOpen(false)} />
            </div>

            <div className="h-full flex flex-col justify-center items-center gap-8 text-xl">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`transition ${
                    active === l.id
                      ? "text-purple-400"
                      : "hover:text-purple-400"
                  }`}
                >
                  {l.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                download
                className="mt-4 px-6 py-3 rounded-full bg-purple-600"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
