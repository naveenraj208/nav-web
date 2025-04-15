'use client'
import React from 'react';

const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#563D7C' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Java', icon: 'fab fa-java', color: '#007396' },
    { name: 'ReactJS', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Next.js', icon: 'fab fa-node', color: '#000000' },
    { name: 'C', icon: 'fas fa-code', color: '#A8B9CC' },
    { name: 'C++', icon: 'fas fa-code', color: '#00599C' },
    { name: 'TypeScript', icon: 'fab fa-js', color: '#3178C6' },
    { name: 'Verilog', icon: 'fas fa-microchip', color: '#76D7C4' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
    { name: 'Supabase', icon: 'fas fa-database', color: '#3ECF8E' },
    { name: 'SQL', icon: 'fas fa-database', color: '#4479A1' }
];

const Skills = () => {
    return (
        <div className="skillsContainer">
            <div className="skillsText">Skills</div>
            <div className="skillsSlider">
                <div className="skillsGrid">
                    {skills.concat(skills).map((skill, index) => (
                        <div key={index} className="skillCard">
                            <i className={`skillIcon ${skill.icon}`} style={{ color: skill.color }}></i>
                            <p className="skillName">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

                .skillsContainer {
                    background: linear-gradient(to right, #000000, #6a11cb);
                    padding: 4rem 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    position: relative;
                }

                .skillsText {
                    color: white;
                    font-size: 2rem;
                    font-weight: bold;
                    transform: rotate(-90deg);
                    width: auto;
                    margin-right: 2rem;
                }

                .skillsSlider {
                    width: 100%;
                    display: flex;
                    overflow: hidden;
                }

                .skillsGrid {
                    display: flex;
                    gap: 2rem;
                    animation: move 60s linear infinite;
                }

                @keyframes move {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .skillCard {
                    background: white;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: transform 0.3s ease;
                    width: 8rem;
                    height: 8rem;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .skillCard:hover {
                    transform: scale(1.1);
                }

                .skillIcon {
                    font-size: 3rem;
                    transition: transform 0.3s ease;
                }

                .skillCard:hover .skillIcon {
                    transform: rotate(360deg);
                }

                .skillName {
                    color: black;
                    font-size: 1rem;
                    margin-top: 0.5rem;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Skills;
