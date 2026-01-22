import image from "/public/g2.png";
import { motion } from "framer-motion";

const Hero = () => {
  const showResume = () => {
    window.open("/Gireeswar_C_P.pdf", "_blank");
  };

  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl">
            Gireeswar C P
          </h1>

          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl md:text-3xl">
            Software Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I’m a Cloud-oriented Software Developer who enjoys designing and
            deploying end-to-end applications on AWS. From serverless systems to
            containerized apps, I focus on scalability, performance, and
            real-world impact. I’m also exploring AI-driven applications in
            Python while strengthening my problem-solving skills with Java.
          </p>
          <button
            onClick={showResume}
            target="_blank"
            className="mt-4 text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
          >
            Resume
          </button>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
