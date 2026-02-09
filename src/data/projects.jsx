import recipeApp from "../images/recipeApp.png";
import shopx from "../images/shopx.png";
import photoTune from "../images/PhotoTune_site.png"
export const projects = [
  {
    title: "ShopX E-Commerce",
    desc: "React + Redux based e-commerce store with authentication, admin panel, infinite scroll, and full cart functionality.",
    tech: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "JSON Server",
      "Render",
      "Vercel",
    ],
    live: "https://shopx-raju365.vercel.app",
    github: "https://github.com/raju365/ReactPractices/tree/main/project2",
    image: shopx,
  },

  {
    title: "Recipe App",
    desc: "Modern recipe app with search & category filters",
    tech: ["React", "API"],
    live: "https://recipeapp-raju365.vercel.app/",
    github: "https://github.com/raju365/ReactPractices/tree/main/project1",
    image: recipeApp,
  },
  {
  title: "PhotoTune – Image Editing App",
  desc: "Web-based image editor with real-time filters, tools, and 4K export support",
  tech: ["HTML5 Canvas", "CSS3", "JavaScript"],
  live: "https://phototune-raju365.vercel.app/",
  github: "https://github.com/raju365/photoTune-imageEditor",
  image: photoTune,
}

];
