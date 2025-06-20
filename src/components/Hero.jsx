import profilePic from "../assets/devProfile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 px-4 sm:px-0 pt-6 sm:pt-6">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end lg:px-8 xl:px-32 lg:mt-12">
            <motion.img
              src={profilePic}
              alt="Dev Koyani"
              className="border border-stone-900 rounded-3xl w-64 h-64 sm:w-80 sm:h-80 lg:w-[90%] lg:h-auto object-cover"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl tracking-tighter"
            >
              Dev Koyani
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/Dev_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full px-6 py-3 text-sm sm:text-base text-stone-800 mb-6 sm:mb-10 hover:bg-stone-200 transition-colors"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
