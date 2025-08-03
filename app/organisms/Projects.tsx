"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Drone-Swaan Optimization",
    time: "2024",
    description: "Developed drone path optimization algorithms to reduce delivery time and energy consumption.",
    technologies: ["Python", "OpenCV", "DSA"]
  },
  {
    name: "Malayalam Character Recognition",
    time: "2024",
    description: "Created a machine learning model for accurate recognition of Malayalam characters.",
    technologies: ["Python", "CNN", "TensorFlow"]
  },
  {
    name: "Malicious Software Predictor (macOS)",
    time: "2024",
    description: "Built an AI model that detects potentially malicious software patterns on macOS.",
    technologies: ["Python", "Scikit-learn", "macOS"]
  },
  
  
    {
      "name": "AI SCRUM",
      "time": "2024",
      "description": "Built an AI-powered SCRUM assistant integrating JIRA, Google Meet, and Slack to automate task management and Agile workflows via natural language commands.",
      "technologies": ["Python", "Gradio", "OpenAI API", "Slack API", "Google Calendar API", "JIRA API", "NextJS"]
    },
    {
      "name": "Privacy-Preserving Distributed Malware Detection with Federated Learning and ZKP",
      "time": "2024",
      "description": "Designed a malware detection system using federated learning and zero-knowledge proofs, with blockchain-based tamper-proof threat logging and lineage tracking.",
      "technologies": ["Python", "Cryptography", "Wireshark", "Federated Learning", "Blockchain"]
    },
    {
      "name": "Asteroid Detection and Classification",
      "time": "2023",
      "description": "Detected and classified asteroids from astronomical images using 14 ML/DL models, with a comparative study on performance metrics like accuracy and recall.",
      "technologies": ["Python", "TensorFlow", "OpenCV", "Scikit-learn"]
    }
  
  
,      
  
  
  {
    name: "Advanced Hospital Management System",
    time: "2023",
    description: "Designed a complete hospital management system using advanced data structures.",
    technologies: ["C++", "DSA"]
  },
  {
    name: "TODO List Application",
    time: "2023",
    description: "Built a Java Swing application for task management with reminders and notifications.",
    technologies: ["Java", "Swing"]
  },
  {
    name: "MY C SHELL",
    time: "2023",
    description: "Implemented a custom Linux shell in C supporting built-in commands and piping.",
    technologies: ["C"]
  },
  {
    name: "Cipher Hunt UID Website",
    time: "2022",
    description: "Developed an interactive puzzle-solving website for a UID-based cipher hunt challenge.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Hospital Management System (PHP)",
    time: "2022",
    description: "Created a role-based hospital management system with patient and doctor portals.",
    technologies: ["PHP", "MySQL"]
  },
  {
    name: "Smart NLP Tokenizer",
    time: "2022",
    description: "Developed a natural language tokenizer optimized for code-mixed Indian languages.",
    technologies: ["Python", "NLP"]
  },
  {
    name: "3-Way Intersection Traffic System",
    time: "2021",
    description: "Built an embedded system using Arduino to manage traffic at a 3-way intersection.",
    technologies: ["Arduino", "C++"]
  },
  {
    name: "Karnataka Tourism Review Analysis",
    time: "2021",
    description: "Performed sentiment analysis on tourism reviews using NLP and visualized insights.",
    technologies: ["Python", "Pandas", "Matplotlib"]
  }
].sort((a, b) => b.time.localeCompare(a.time));

const ProjectsTimeline = () => {
  return (
    <div className="bg-black py-20 px-4 md:px-20 relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
      Projects Timeline
     </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.time}</p>
            <p className="text-base mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTimeline;
