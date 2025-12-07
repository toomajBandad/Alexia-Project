import { motion } from "framer-motion";
import CountUp from "react-countup";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function StateCard({ icon: Icon, value, suffix, prefix, caption, ariaLabel }) {
  return (
    <motion.figure
      variants={cardVariants}
      className="p-6 rounded-lg shadow-lg border border-white transition-transform duration-300 hover:scale-105"
    >
      <Icon className="mx-auto text-5xl text-blue-700 mb-4" />
      <h3
        className="text-4xl font-extrabold bg-linear-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-transparent"
        aria-label={ariaLabel}
      >
        <CountUp
          end={value}
          duration={3}
          suffix={suffix}
          prefix={prefix}
          enableScrollSpy
        />
      </h3>
      <figcaption className="mt-4 text-gray-400">{caption}</figcaption>
    </motion.figure>
  );
}

export default StateCard;
