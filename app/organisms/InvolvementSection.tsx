"use client";

import React from "react";

const involvementData = [
  {
    title: "Microsoft Learn Student Ambassador (Beta)",
    org: "Microsoft",
    year: "2023 – Present",
    description:
      "Promoting tech culture and empowering students through Microsoft-led initiatives, mentorship, and community support.",
  },
  {
    title: "President, Microsoft Ignite Student Club",
    org: "Your University",
    year: "2022 – 2023",
    description:
      "Led a student club focused on technical skill-building, organizing hands-on workshops, guest lectures, and innovation challenges.",
  },
  {
    title: "Project Manager – University Chapter",
    org: "National Space Society",
    year: "2022 – 2023",
    description:
      "Managed space-themed student projects, collaborated on STEM outreach, and represented the university at national conferences.",
  },
];

const InvolvementSection = () => {
  return (
    <section id="involvement" className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
          Leadership & Involvement
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {involvementData.map((item, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 p-6 rounded-xl hover:shadow-lg hover:bg-zinc-800 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-400 italic">{item.org} | {item.year}</p>
            <p className="text-sm text-gray-300 mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvolvementSection;
