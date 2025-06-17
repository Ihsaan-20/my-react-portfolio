import React from 'react';
// Import necessary icons from react-icons
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaPhp,
    FaLaravel,
    FaJava,
    FaBootstrap,
    FaGitAlt,
    FaGithub,
} from 'react-icons/fa';
import {
    SiSpring, // For Spring Boot
    SiMysql,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiExpress, // For Express.js, though less common as a standalone icon
} from 'react-icons/si';


const About = () => {
    return (
        <section id="about" className="py-16 px-4 md:px-10 bg-[#f6f9fd] text-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-black">About Me</h2>
                <p className="text-lg md:text-xl text-center leading-relaxed mb-6">
                    With over 2 years of experience in full-stack development, I specialize in creating high-performance, scalable, and user-friendly web applications. My expertise is primarily in PHP, building robust back-end systems, alongside modern front-end frameworks like React, and managing various database systems.
                </p>
                <p className="text-lg md:text-xl text-center leading-relaxed">
                    I am passionate about continuous learning and always eager to adopt new technologies to deliver innovative solutions. I thrive in collaborative environments and am committed to writing clean, maintainable, and efficient code that brings ideas to life and solves real-world problems.
                </p>

                {/* Optional: Add a section for key skills/tech stack */}
                <div className="mt-12 text-center">
                    <h3 className="text-3xl font-bold mb-6 text-portfolio-orange">My Core Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl">
                        {/* Front-end */}
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-blue-500 hover:text-blue-500 hover:bg-blue-100">
                            <FaReact className="text-blue-500" /> ReactJS
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-purple-600 hover:text-purple-600 hover:bg-purple-100">
                            <FaBootstrap className="text-purple-600" /> Bootstrap
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-teal-500 hover:text-teal-500 hover:bg-teal-100">
                            <SiTailwindcss className="text-teal-500" /> Tailwind CSS
                        </span>

                        {/* Back-end */}
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-green-600 hover:text-green-600 hover:bg-green-100">
                            <FaNodeJs className="text-green-600" /> Node.js
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-gray-700 hover:text-gray-700 hover:bg-gray-100">
                            <SiExpress className="text-gray-700" /> Express.js
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-purple-700 hover:text-purple-700 hover:bg-purple-100">
                            <FaPhp className="text-purple-700" /> PHP
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-red-500 hover:text-red-500 hover:bg-red-100">
                            <FaLaravel className="text-red-500" /> Laravel
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-red-700 hover:text-red-700 hover:bg-red-100">
                            <FaJava className="text-red-700" /> Java
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-green-700 hover:text-green-700 hover:bg-green-100">
                            <SiSpring className="text-green-700" /> Spring Boot
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100">
                            <FaPython className="text-blue-700" /> Python
                        </span>

                        {/* Databases */}
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-blue-800 hover:text-blue-800 hover:bg-blue-100">
                            <SiMysql className="text-blue-800" /> MySQL
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-green-500 hover:text-green-500 hover:bg-green-100">
                            <SiMongodb className="text-green-500" /> MongoDB
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100">
                            <SiPostgresql className="text-blue-700" /> PostgreSQL
                        </span>

                        {/* Version Control */}
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-orange-600 hover:text-orange-600 hover:bg-orange-100">
                            <FaGitAlt className="text-orange-600" /> Git
                        </span>
                        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2
                                        border-2 border-transparent transition-all duration-300 transform hover:scale-105
                                        hover:border-gray-900 hover:text-gray-900 hover:bg-gray-100">
                            <FaGithub className="text-gray-900" /> GitHub
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;