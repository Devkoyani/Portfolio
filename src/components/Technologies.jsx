import { RiTailwindCssFill  } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { animate, motion } from "framer-motion";

const iconVariangts = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-28 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariangts(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariangts(3)}
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariangts(5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariangts(2)}
          className="p-4"
        >
          <FaJsSquare className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariangts(6)}
          className="p-4"
        >
          <FaNode className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariangts(4)}
          className="p-4"
        >
          <RiTailwindCssFill  className="text-7xl text-cyan-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
