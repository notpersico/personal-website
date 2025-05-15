import { motion } from "framer-motion";

const Bio: React.FC = () => {
  const bioVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const highlightStyle = "text-teal-400 font-semibold";

  return (
    <section id="bio" className="py-16 sm:py-20 md:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 text-white font-manrope text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          About Me
        </motion.h2>
        <motion.div
          variants={bioVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-left md:text-center"
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-gray-300 font-manrope">
          As a <span className={highlightStyle}>technology innovator</span>, I specialize in turning complex challenges into powerful, user-centric solutions. For over five years, I've successfully led agile development teams, creating innovative systems that streamline operations, enhance user experiences, and consistently deliver measurable <span className={highlightStyle}>business value</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;

