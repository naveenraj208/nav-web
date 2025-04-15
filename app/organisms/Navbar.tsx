'use client';

import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-1/2 transform -translate-x-1/2 p-4 rounded-full flex items-center justify-center w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 backdrop-blur-md z-50"
    >
      {/* Background GIF Layer */}
      <div className="absolute inset-0 rounded-full overflow-hidden z-0">
        <Image
          src="/images/original.gif"
          fill
          className="object-cover"
          alt="Background Animation"
          unoptimized
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-4">
        {[
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Internship', href: '#internship' },
          { label: 'Skills', href: '#skills' },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="bg-white text-black rounded-full px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium hover:bg-gray-200 transition"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
