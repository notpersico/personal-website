import { motion } from "framer-motion";

interface SkillBlockProps {
  headline: string;
  sub_line: string;
  technologies?: string[];
  delay: number;
}

const SkillBlock: React.FC<SkillBlockProps> = ({ headline, sub_line, technologies, delay }) => {
  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: delay * 0.2 + 0.2 }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0px 8px 16px rgba(0, 220, 220, 0.15)", // Slightly adjusted shadow for better subtlety
    transition: { duration: 0.3 }
  };

  return (
    <motion.div 
      className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300 h-full flex flex-col"
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={hoverEffect}
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-teal-400 font-manrope">{headline}</h3>
      <p className="text-gray-300 mb-4 font-manrope flex-grow text-sm sm:text-base">{sub_line}</p>
      {technologies && technologies.length > 0 && (
        <div className="mt-auto pt-4 border-t border-gray-600">
          <p className="text-xs sm:text-sm text-teal-300 font-semibold mb-2">Key Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech: string, idx: number) => (
              <span key={idx} className="bg-gray-600 text-teal-200 text-xs px-2 py-1 rounded-full shadow-sm">{tech}</span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

interface SkillData {
  headline: string;
  sub_line: string;
  technologies: string[];
}

const Skills: React.FC = () => {
  const skillsData: SkillData[] = [
    {
      headline: "AI & Multi-Agent Systems Pioneer",
      sub_line: "Engineering AI solutions that redefine operational efficiency.",
      technologies: ["Microsoft AutoGen", "MongoDB", "Prompt Engineering", "OpenAI API", "Azure Cloud"]
    },
    {
      headline: "Elite Backend Engineering",
      sub_line: "Delivering lightning-fast, ultra-resilient systems that multiply throughput by 5x.",
      technologies: ["Go", "Python (asyncio)", "PostgreSQL", "Kubernetes", "AWS", "EDA"]
    },
    {
      headline: "Inspiring Tech Leadership",
      sub_line: "Empowering 10+ high-performing teams to smash OKRs and dramatically reduce costs.",
      technologies: ["Agile", "CI/CD", "DevOps Culture", "PMP (in prep)"]
    }
  ];
  

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white font-manrope"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          My Expertise
        </motion.h2>
        {/* Grid: 1 col on mobile, 2 cols on tablet (md), 3 cols on desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillBlock key={index} {...skill} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

