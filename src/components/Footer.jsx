import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black pt-16">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-6 md:flex-row">
        <div>
          <p className="font-display text-2xl font-medium">
            Raju<span className="text-brand">.</span>dev
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/50">
            MERN Stack Developer building fast, scalable and well-crafted web apps.
          </p>
          <div className="mt-6 flex gap-4 text-xl text-white/70">
            <a
              href="https://github.com/Raju365"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-brand"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/raju-barman365"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-brand"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-white/50">
            {links.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="transition hover:text-white">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      

      <p className="relative bg-black py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Raju.dev — MERN Stack Developer
      </p>
    </footer>
  );
};

export default Footer;