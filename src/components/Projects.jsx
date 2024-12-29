import library from "/public/undraw_Books_re_8gea.png";
import chatbot from "/public/undraw_Chat_bot_re_e2gj.png";
import messaging from "/public/undraw_Messaging_app_re_aytg.png";
import jobify from "/public/undraw_online_resume_re_ru7s.png";
import spotify from "/public/undraw_Music_re_a2jk.png";
import imagify from "/public/undraw_forming-ideas_3bup.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: jobify,
    title: "Job Application Platform",
    desc: "Built a job application platform with user authentication, enabling seamless job posting and application processes. Integrated email notifications for job application updates",
    tech: ["Spring Boot", "MongoDB", "React", "Tailwind"],
  },
  {
    image: imagify,
    title: "Text to Image Generator",
    desc: "Developed a text-to-image application, featuring secure JWT-based authentication, Razorpay integration for payments, and an intuitive interface to enhance user experience.",
    tech: ["MongoDB", "Express", "React", "Node", "ClipDrop AI"],
  },
  {
    image: messaging,
    title: "Chat Application",
    desc: "Developed a chat application, enabling real-time messaging and media sharing for a seamless communication experience. Integrated features for sending text messages and pictures and implemented a user blocking functionality",
    tech: ["React", "Firebase"],
  },
  {
    image: library,
    title: "Digital Library Application",
    desc: "Developed a comprehensive library management system using Java, Spring Boot, and MySQL, creating RESTful APIs for managing books, authors, languages, and users.",
    tech: ["Spring Boot", "MySQL"],
  },
  {
    image: chatbot,
    title: "Gemini Clone",
    desc: "Built a Gemini clone application, providing real-time data retrieval and reducing user search times with integrated voice search functionality.",
    tech: ["React", "Gemini API"],
  },
  {
    image: spotify,
    title: "Spotify Front-End Clone",
    desc: "Built a Spotify Clone application using modern React hooks and implemented seek bar to control the playback.",
    tech: ["React"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-start justify-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.desc}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.tech.map((t, ind) => (
              <span key={ind} className="rounded-lg bg-black p-3">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen w-full gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl text-white font-light md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, ind) => (
          <ProjectCard key={ind} project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
