'use client';

import { Download } from 'lucide-react';

export default function ResumeSection() {
  return (
    <div className="bg-white dark:bg-black py-20 px-4 md:px-20" id="resume">
      

      <div className="flex justify-center">
        <div className="relative bg-gradient-to-br from-pink-500 to-blue-500 p-[2px] rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg w-[320px]">
          <div className="bg-black rounded-2xl p-6 flex flex-col items-center text-white">
            <h3 className="text-xl font-bold mb-2">Download My Resume</h3>
            <p className="text-sm text-gray-300 mb-4 text-center">
              Updated with all my skills, experience, and projects.
            </p>
            <a
              href="/Naveen_Resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
