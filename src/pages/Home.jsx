import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Skills from "../sections/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
