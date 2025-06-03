import { FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaResearchgate } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-gray-400">
            B.U. Naveen Raj is a passionate developer specializing in AI, web development, and software engineering. Dedicated to building impactful solutions and continuously learning.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
            <li><a href="#internships" className="text-gray-400 hover:text-white transition">Internships</a></li>
            <li><a href="#skills" className="text-gray-400 hover:text-white transition">Skills</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/your_profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition text-2xl">
              <FaFacebook />
            </a>
            <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.researchgate.net/profile/your_profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition text-2xl">
              <FaResearchgate />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} B.U. Naveen Raj. All rights reserved.
      </div>
    </footer>
  );
}
