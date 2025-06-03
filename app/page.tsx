// app/page.tsx

import Navbar from './organisms/Navbar';
import AboutMe from './organisms/AboutMe';
import Internship from './organisms/Internship';
import Skills from './organisms/Skills';
import Projects from './organisms/Projects';
import contactMe from './organisms/ContactMe';

const Home = () => {
  return (
    <main className="bg-black text-white scroll-smooth">
      <Navbar />
      <div className="pt-32">
        <section id="about">
          <AboutMe />
        </section>
        <section id="contact">
          {contactMe()}
        </section>
        

        <section id="projects">
          <Projects />
        </section>
        <section id="internship">
          <Internship />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div>
    </main>
  );
};

export default Home;
