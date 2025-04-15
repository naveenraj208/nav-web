import React from 'react';

const internships = [
  {
    name: 'Company A',
    year: '2023',
    role: 'Frontend Developer',
    technologies: ['React', 'Tailwind CSS'],
    description: 'Developed a responsive web application...'
    // You can add more internships
  }
];

const Internship = () => {
  return (
    <div className="bg-black py-16 text-white">
      <h2 className="text-center text-4xl font-bold mb-8">Internship</h2>
      <div className="flex flex-wrap justify-center">
        {internships.map((internship, index) => (
          <div key={index} className="bg-white text-black p-4 m-4 rounded-lg max-w-sm">
            <h3 className="text-xl font-bold">{internship.name}</h3>
            <p className="text-sm">{internship.year}</p>
            <p className="text-lg">{internship.role}</p>
            <div className="flex space-x-2 mt-2">
              {internship.technologies.map((tech, idx) => (
                <span key={idx} className="bg-black text-white rounded-full px-2 py-1 text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4">{internship.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
