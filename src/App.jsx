import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <section id="home">
              <HeroSection imageSrc={"/images/headshot-hero.jpg"} />
            </section>

            <section id="about">
              <About
                imageSrc={"/images/headshot-about.jpg"}
                resumeSrc={"/harsharaj_resume.pdf"}
              />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="skills">
              <Skills />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </>
        }
      />

      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
    </>
  );
}

export default App;
