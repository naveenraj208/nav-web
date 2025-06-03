import { FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaGlobe } from 'react-icons/fa';
import { FaResearchgate } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <section className="bg-black text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">@connect</h2>
      <div className="flex justify-center gap-8 text-3xl">
        <a href="https://www.instagram.com/naaveennn/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/naveen-raj-b-u-139b44214/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/naveenraj208" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-300 transition duration-300" />
        </a>
        <a href="https://ieeexplore.ieee.org/author/393060877500669" target="_blank" rel="noopener noreferrer">
          <FaGlobe className="hover:text-indigo-500 transition duration-300" />
        </a>
        <a href="https://www.researchgate.net/scientific-contributions/BU-Naveen-Raj-2307612248" target="_blank" rel="noopener noreferrer">
        <FaResearchgate className="hover:text-indigo-500 transition duration-300" />
        </a>
      </div>
    </section>
  );
}