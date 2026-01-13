import chatbot from "/public/undraw_Chat_bot_re_e2gj.png";
import jobify from "/public/undraw_online_resume_re_ru7s.png";
import resumeCritiquer from "/public/undraw_screening-resumes_dh9s.png";
import urlShortener from "/public/undraw_link-shortener_9ro5.png";
import attendance from "/public/undraw_video-call_i5de.png";
import judge from "/public/undraw_judge_hyqv.png";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    image: resumeCritiquer,
    title: "AI Resume Critiquer using Gemini",
    desc: "Designed and deployed an AI-based resume critiquer using Google Gemini that analyzes resume content and generates personalized feedback. Implemented real-time file processing with Streamlit and deployed the application on AWS for scalable access.",
    tech: [
      "Python",
      "Streamlit",
      "Gemini",
      "AWS ECR",
      "AWS ECS",
      "AWS Codebuild",
      "Docker",
    ],
    link: "https://github.com/gireeswar18/Resume-Critiquer",
  },
  {
    image: judge,
    title: "RAG based Legal Assistant",
    desc: "Built a Legal RAG application that allows users to query legal PDFs and retrieve relevant clauses using FAISS. Integrated a local LLM to generate source-grounded answers and provided an intuitive Streamlit interface for real-time document exploration.",
    tech: [
      "Python",
      "FAISS",
      "Sentence Transformers",
      "Mistral(Ollama)",
      "Streamlit",
    ],
    link: "https://github.com/gireeswar18/Legal-RAG-Assistant",
  },
  {
    image: urlShortener,
    title: "Serverless URL shortener",
    desc: "Built a fully serverless URL shortener using AWS Lambda, API Gateway, and DynamoDB, enabling fast URL generation and redirection. Integrated a React frontend with S3 and CloudFront for scalable and secure global delivery.",
    tech: [
      "Python",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "CloudFront",
      "React",
    ],
    link: "https://github.com/gireeswar18/Serverless-URL-Shortener",
  },
  {
    image: attendance,
    title: "LBPH Face Based Attendance System",
    desc: "Developed an automated attendance system using face detection and recognition to identify users in real time and record attendance with timestamps.",
    tech: ["Python", "Mediapipe", "OpenCV"],
    link: "https://github.com/gireeswar18/LBPH_face_based_attendance_system",
  },
  {
    image: jobify,
    title: "Job Application Platform",
    desc: "Built a job application platform with user authentication, enabling seamless job posting and application processes. Integrated email notifications for job application updates",
    tech: ["Spring Boot", "MongoDB", "React", "Tailwind"],
    link: "https://github.com/gireeswar18/job-application-platform",
  },

  {
    image: chatbot,
    title: "Gemini Clone",
    desc: "Built a Gemini clone application, providing real-time data retrieval and reducing user search times with integrated voice search functionality.",
    tech: ["React", "Gemini API"],
    link: "https://github.com/gireeswar18/Gemini-Clone",
  },
];

const ProjectCard = ({ project }) => {
  const goto = (gitLink) => {
    window.open(gitLink, "_blank", "noopener,noreferrer");
  };

  return (
    <ScrollReveal>
      <div className="flex flex-col items-start justify-center gap-8 md:flex-row md:gap-24 transition-all duration-300 p-[16px] rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-semibold">{project.title}</div>
            <p
              className="text-gray-400 underline cursor-pointer"
              onClick={() => goto(project.link)}
            >
              View on GitHub
            </p>
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
