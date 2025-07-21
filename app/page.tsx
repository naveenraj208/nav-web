// app/page.tsx

import Navbar from './organisms/Navbar';
import AboutMe from './organisms/AboutMe';
import Internship from './organisms/Internship';
import Skills from './organisms/Skills';
import Projects from './organisms/Projects';
import contactMe from './organisms/ContactMe';
import Footer from './organisms/Footer';
import InvolvementSection from './organisms/InvolvementSection';
import DevelopedWebsites from './organisms/web';
import ResumeSection from './organisms/resume';
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
        <section id="resume">
          <ResumeSection />
        </section>
        
      
        <section id="web">
          <DevelopedWebsites />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="internship">
          <Internship />
        </section>
        <section id="involvement">
          <InvolvementSection />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
