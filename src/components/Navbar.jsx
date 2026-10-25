import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import resume from "../images/Raju's_Resume.pdf";

const links = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Education", href: "#education", id: "education" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Logo = ({ className = "" }) => (
  <a
    href="#hero"
    className={`font-display text-xl font-medium tracking-tight ${className}`}
  >
    Raju<span className="text-brand">.</span>dev
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Active link on scroll
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
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      {/* DESKTOP HEADER: logo | floating pill | resume */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden md:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Logo className="pointer-events-auto" />

          <nav
            className="pointer-events-auto flex items-center gap-1 rounded-xl
                       border border-white/10 bg-black/60 p-1.5 backdrop-blur-xl"
          >
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className={`rounded-lg px-4 py-1.5 text-sm transition ${
                  active === l.id
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {l.name}
              </a>
            ))}
          </nav>

          <a
            href={resume}
            download
            className="pointer-events-auto flex items-center gap-2 rounded-full border
                       border-brand/60 bg-brand/10 px-5 py-2 text-sm transition
                       hover:bg-brand/20"
          >
            <FiDownload size={14} /> Resume
          </a>
        </div>
      </motion.header>

      {/* MOBILE: logo + menu button */}
      <div className="fixed left-5 top-5 z-50 md:hidden">
        <Logo />
      </div>
      <div className="fixed right-4 top-4 z-50 md:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="rounded-full border border-white/15 bg-black/60 p-3 backdrop-blur-lg"
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE SLIDE-UP MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-6 top-6"
            >
              <FiX className="text-2xl" />
            </button>

            <div className="flex h-full flex-col items-center justify-center gap-8 font-display text-2xl">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`transition ${
                    active === l.id ? "text-brand" : "hover:text-brand"
                  }`}
                >
                  {l.name}
                </a>
              ))}

              <a
                href={resume}
                download
                className="mt-4 rounded-lg bg-linear-to-b from-brand to-brand-dark px-6 py-3 text-lg"
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