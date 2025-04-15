// app/page.tsx

import Navbar from './organisms/Navbar';
import AboutMe from './organisms/AboutMe';
import Internship from './organisms/Internship';
import Skills from './organisms/Skills';

const Home = () => {
  return (
    <main className="bg-black text-white">
    
      <div className="pt-32">
        <AboutMe />

      </div>
    </main>
  );
};

export default Home;
