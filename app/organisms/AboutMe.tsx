'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div
      className="relative text-center py-32 px-4 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('/images/dark-black-background-design-with-stripes_1017-38064.avif')",
      }}
    >
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .text-gradient {
          background: linear-gradient(to right, #ff7eb3, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Image Wrapper */}
      <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-white overflow-hidden mt-4">
        <Image
          src="/images/naveen photo.png"
          alt="My Photo"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-full"
        />
        <div className="absolute inset-0 w-full h-full border-4 border-transparent border-t-black animate-spin-slow rounded-full"></div>
      </div>

      {/* Name */}
      <h1 className="text-white font-bold text-4xl mt-6">I am B.U. Naveen Raj</h1>

      {/* Typing Effect */}
      <div className="mt-4 text-2xl">
        <TypingAnimation />
      </div>
    </div>
  );
};

const TypingAnimation = () => {
  const texts = [
    'Developer',
    'Programmer',
    'Web Developer',
    'Student @ Amrita Vishwa Vidyapeetham',
    'Microsoft Student Ambassador',
    'Google DSC Technical Member',
    'National Space Society Finalist',
    'National Space Society Advisor',
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === texts.length) return;

    if (!reverse && subIndex === texts[index].length) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <p className="text-gradient font-semibold">
      {texts[index].substring(0, subIndex)}
      <span>{blink ? '|' : ' '}</span>
    </p>
  );
};

export default AboutMe;
