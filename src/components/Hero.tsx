import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const subHeadlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Placeholder for abstract animated background - to be developed if time permits or simplified */}
      {/* <div className="absolute inset-0 z-0 opacity-20"> ... animated background ... </div> */}

      <div className="z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-teal-400 font-manrope"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Pioneering AI Solutions & Engineering Excellence
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 font-manrope max-w-3xl mx-auto"
          variants={subHeadlineVariants}
          initial="hidden"
          animate="visible"
        >
          Harnessing advanced expertise in multi-agent AI and high-performance systems to drive innovation, unlock business potential, and accelerate the future of intelligent technology—today.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;

