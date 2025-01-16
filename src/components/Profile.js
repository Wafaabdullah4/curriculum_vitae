import {
    FaPhone,
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import pp from "../assets/MINE.jpg";
import ContactItem from "./ContactItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { workExperience, education, languages, organizations, certifications } from '../constants'; 




const Profile = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div
            className={`min-h-screen flex items-center justify-center py-12 px-6 
            bg-gradient-to-bl from-purple-300 via-purple-400 to-purple-600 
            dark:bg-gradient-to-bl dark:from-gray-800 dark:via-purple-700 dark:to-gray-900`}
        >
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden dark:bg-gray-800 dark:text-white">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white text-center py-12 px-4 relative">
                    <div className="absolute w-36 h-36 bg-purple-700 rounded-full top-4 left-1/2 transform -translate-x-1/2 border-4 border-white overflow-hidden">
                        <img
                            src={pp}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-32" data-aos="zoom-in">
                        <h1 className="text-3xl font-extrabold tracking-wider">
                            Wafa Abdullah Nurbani Adam
                        </h1>
                        <p className="text-base opacity-90 mt-2">Full Stack Developer</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-10 bg-gray-50 dark:bg-gray-900">
                    {/* Dark/Light Mode Toggle */}
                    <div className="absolute top-6 right-6">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                        >
                            {darkMode ? "🌙" : "🌞"}
                        </button>
                    </div>

                    {/* Contact Section */}
                    <section className="mb-8">
                        <h2
                            className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-300 inline-block pb-2 dark:text-purple-300"
                            data-aos="fade-right"
                        >
                            Contact
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                            <ContactItem
                                icon={<FaPhone />}
                                text="+62 851-6184-5683"
                                link="https://wa.me/6285161845683"
                                delay={0}
                            />
                            <ContactItem
                                icon={<FaEnvelope />}
                                text="wafa.abdullahnurbani@gmail.com"
                                delay={100}
                            />
                            <ContactItem
                                icon={<FaLinkedin />}
                                text="Wafa Abdullah Nurbani Adam"
                                link="https://www.linkedin.com/in/wafa-abdullah-nurbani-adam/"
                                delay={200}
                            />
                            <ContactItem
                                icon={<FaGithub />}
                                text="github.com/Wafaabdullah4"
                                link="https://github.com/Wafaabdullah4"
                                delay={300}
                            />
                            <ContactItem
                                icon={<FaInstagram />}
                                text="instagram"
                                link="https://www.instagram.com/bany_dam/"
                                delay={400}
                            />
                        </div>
                    </section>

                    {/* About Me Section */}
                    <section className="mb-8">
                        <h2
                            className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-300 inline-block pb-2 dark:text-purple-300"
                            data-aos="fade-left"
                        >
                            About Me
                        </h2>
                        <p
                            className="text-gray-700 leading-relaxed dark:text-gray-300 mb-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Hello, I'm <span className="font-semibold text-purple-600 dark:text-purple-400">
                                Wafa Abdullah Nurbani Adam
                            </span>, a graduate of SMK Prakarya Internasional, where I was recognized as the best student in the Software Engineering department.
                        </p>
                        <p
                            className="text-gray-700 leading-relaxed dark:text-gray-300 mb-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            I have over 1 year of experience as a Full Stack Developer and have contributed to various impactful projects, including:
                        </p>
                        <ul
                            className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <li>OSIS Chair Election Website</li>
                            <li>Bank Sulselbar Application</li>
                            <li>Supply Chain Management System for Waroeng Steak</li>
                        </ul>
                        <p
                            className="text-gray-700 leading-relaxed dark:text-gray-300 mb-4"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            My expertise includes <strong>HTML5, CSS3, JavaScript, Laravel, CodeIgniter, PHP</strong> (OOP, MVC), <strong>React.js, Node.js, Express.js</strong>, and database systems such as <strong>MongoDB, PostgreSQL, and MySQL</strong>. I am also experienced in using Git, APIs, and other tools to create efficient and innovative solutions.
                        </p>
                        <div
                            className="border-l-4 border-purple-500 pl-4 text-gray-700 dark:text-gray-300"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <p>
                                One of my key achievements was improving the <strong>performance of a Supply Chain architecture by 90%</strong>, showcasing my ability to analyze business needs and translate them into solid technical solutions.
                            </p>
                        </div>
                    </section>


                    {/* Skills Section */}
                    <section>
                        <h2
                            className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-300 inline-block pb-2 dark:text-purple-300"
                            data-aos="fade-right"
                        >
                            Skills
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
                            <li
                                className="flex items-center"
                                data-aos="flip-right"
                                data-aos-delay="50"
                            >
                                <span className="text-purple-500 mr-2">✔</span> HTML & CSS
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="flip-left"
                                data-aos-delay="100"
                            >
                                <span className="text-purple-500 mr-2">✔</span> JavaScript
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="flip-up"
                                data-aos-delay="150"
                            >
                                <span className="text-purple-500 mr-2">✔</span> React.js
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="flip-down"
                                data-aos-delay="200"
                            >
                                <span className="text-purple-500 mr-2">✔</span> Node.js
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="zoom-in"
                                data-aos-delay="250"
                            >
                                <span className="text-purple-500 mr-2">✔</span> Express.js
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="zoom-out"
                                data-aos-delay="300"
                            >
                                <span className="text-purple-500 mr-2">✔</span> Laravel
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="fade-right"
                                data-aos-delay="350"
                            >
                                <span className="text-purple-500 mr-2">✔</span> CodeIgniter
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="fade-left"
                                data-aos-delay="400"
                            >
                                <span className="text-purple-500 mr-2">✔</span> PHP (OOP, MVC)
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="fade-up"
                                data-aos-delay="450"
                            >
                                <span className="text-purple-500 mr-2">✔</span> Git & Version Control
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="fade-down"
                                data-aos-delay="500"
                            >
                                <span className="text-purple-500 mr-2">✔</span> APIs Integration
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="zoom-in"
                                data-aos-delay="550"
                            >
                                <span className="text-purple-500 mr-2">✔</span> MongoDB
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="zoom-out"
                                data-aos-delay="600"
                            >
                                <span className="text-purple-500 mr-2">✔</span> PostgreSQL
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="fade-right"
                                data-aos-delay="650"
                            >
                                <span className="text-purple-500 mr-2">✔</span> MySQL
                            </li>
                            <li
                                className="flex items-center"
                                data-aos="fade-left"
                                data-aos-delay="700"
                            >
                                <span className="text-purple-500 mr-2">✔</span> Problem-Solving
                            </li>
                        </ul>
                    </section>

                    {/* Work Experience Section */}
                    <section className="mb-8 mt-4">
                        <h2
                            className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-300 inline-block pb-2 dark:text-purple-300"
                            data-aos="fade-right"
                        >
                            Work Experience
                        </h2>
                        <div className="space-y-6">
                            {workExperience.map((experience, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400">
                                        {experience.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {experience.company} • {experience.duration}
                                    </p>
                                    <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                                        {experience.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-8">
                        <h2
                            className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-300 inline-block pb-2 dark:text-purple-300"
                            data-aos="fade-left"
                        >
                            Education
                        </h2>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400">
                                        {edu.school}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {edu.major} • {edu.years}
                                    </p>
                                    <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                                        {edu.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Language Section */}
                    <section className="mb-8">
                        <h2
                            className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-300 inline-block pb-2 dark:text-purple-300"
                            data-aos="fade-right"
                        >
                            Languages
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                            {languages.map((language, index) => (
                                <li key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Organization Section */}
                    <section className="mb-8">
                        <h2
                            className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-300 inline-block pb-2 dark:text-purple-300"
                            data-aos="fade-left"
                        >
                            Organizations
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                            {organizations.map((organization, index) => (
                                <li key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                    {organization}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Certifications Section */}
                    <section className="mb-8">
                        <h2
                            className="text-2xl font-bold mb-6 text-purple-700 border-b-2 border-purple-300 inline-block pb-2 dark:text-purple-300"
                            data-aos="fade-right"
                        >
                            Certifications
                        </h2>
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                            {certifications.map((certification, index) => (
                                <li key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                    {certification}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <p className="text-center text-sm opacity-80">
                        &copy; {new Date().getFullYear()} Wafa Abdullah Nurbani Adam.
                    </p>
                </div>
            </div>

        </div>

    );
};

export default Profile;
