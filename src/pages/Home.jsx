import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Skills from "../sections/Skills";
import Education from "../sections/Education";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
