import React from 'react';

const internships = [
  {
    name: 'Nexus Synthaura',
    year: '2023',
    role: 'Frontend Developer Intern',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    description:
      'Built a modular model showcase system with dynamic search and filters, editable sidebars, responsive card-based layout, and smooth UI animations for AI model display.'
  },
  {
    name: 'Testrig Catalyst',
    year: '2023',
    role: 'QA Automation Intern',
    technologies: ['Selenium', 'Python', 'Postman', 'NextJS', 'Supabase', 'Huggingface'],
    description:
      'Developed automated test cases for web applications, implemented API testing workflows, and helped improve test coverage for faster regression testing.'
  },
  {
    name: 'Riskframe.ai',
    year: '2024',
    role: 'AI Research Intern',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'NextJS', 'Supabase'],
    description:
      'Worked on predictive modeling for cyber threat detection, developed a Gradio UI for an ML model predicting heart disease, and contributed to data preprocessing and visualization.'
  },
  {
    name: 'Saiwin Lights',
    year: '2024',
    role: 'Creative Frontend Intern',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Designed an interactive product section with animated spotlight controls, premium dark theme, and dynamic lighting effects to highlight smart lighting features.'
  },
  {
    name: 'Raju Educational Academy UK',
    year: '2022',
    role: 'Full Stack Developer Intern',
    technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'Digital Ocean'],
    description:
      'Developed a 3 user based interactive website along with building portals for users and helping the team build a complete end-to-end e-education system.'
  }
];

const Internship = () => {
  return (
    <div className="bg-black py-16 text-white">
      <h2 className="text-center text-4xl font-bold mb-8">Internship</h2>
      <div className="flex flex-wrap justify-center">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 m-4 rounded-lg max-w-sm shadow-lg transition-transform hover:scale-105 duration-300"
          >
            <h3 className="text-xl font-bold">{internship.name}</h3>
            <p className="text-sm text-gray-600">{internship.year}</p>
            <p className="text-lg font-medium mt-1">{internship.role}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {internship.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-black text-white rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm">{internship.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
