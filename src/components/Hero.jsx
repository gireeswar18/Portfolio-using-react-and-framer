import image from "/public/g2.png";
import { motion } from "framer-motion";

const Hero = () => {
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
        >
          <img
            src={image}
            alt="my-pic"
            className="hidden w-[230px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[280px]"
          />
        </motion.div>
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
            I'm a Software Developer skilled in Java and React, focused on
            building clean, scalable applications. From front-end design to
            seamless backend integration, I create efficient solutions for
            dynamic user experiences. Let's build something great together!
          </p>
          <a
            href="../assets/Gireeswar C P.pdf"
            target="_blank"
            className="mt-4 text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
