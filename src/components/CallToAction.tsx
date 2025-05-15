import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const CallToAction: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(20, 184, 166, 0.6)", // Adjusted teal glow for better visibility
      transition: { duration: 0.25, ease: "circOut" },
    },
    tap: { scale: 0.95 },
  };

  const linkVariants = {
    hover: { color: "#2DD4BF" }, // Tailwind teal-400 for consistency
    tap: { scale: 0.95 },
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-gray-900 text-white">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white font-manrope">Let's Connect</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 text-gray-300 font-manrope max-w-2xl mx-auto">
          Interested in collaborating, discussing a project, or simply want to exchange ideas? I'd love to hear from you.
        </p>
        <div className="space-y-6 sm:space-y-8 max-w-md mx-auto">
          <div>
            <motion.a
              href="mailto:alessiopersichettidev@gmail.com"
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-gray-900 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 font-manrope focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Mail size={20} className="mr-2 sm:mr-3" />
              Discuss Your Project or Idea
            </motion.a>
          </div>
          <div>
            <motion.a
              href="https://www.linkedin.com/in/alessio-persichetti-5880671ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-teal-200 inline-flex items-center justify-center text-sm sm:text-md font-manrope group transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-teal-400 rounded-md p-1"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Linkedin size={18} className="mr-2 group-hover:scale-110 transition-transform" />
              Connect on LinkedIn to explore synergies
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;

