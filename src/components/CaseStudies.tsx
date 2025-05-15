import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

interface CaseStudy {
  title: string;
  problem: string;
  actions: string;
  impact: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: index * 0.15 + 0.15 },
    },
  };

  const contentVariants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    expanded: { opacity: 1, height: "auto", marginTop: "1rem", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-700 p-5 sm:p-6 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300 mb-6 sm:mb-8 overflow-hidden"
    >
      <button
        type="button"
        className="flex justify-between items-center w-full cursor-pointer group text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-700 rounded-md p-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`case-study-content-${index}`}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-400 group-hover:text-teal-300 transition-colors duration-300 font-manrope">
          {study.title}
        </h3>
        {isOpen ? 
          <ChevronUp size={28} className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300 flex-shrink-0 ml-2" /> : 
          <ChevronDown size={28} className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300 flex-shrink-0 ml-2" />}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`case-study-content-${index}`}
            key="content"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            className="overflow-hidden"
            role="region"
            aria-labelledby={`case-study-header-${index}`} // Assuming the h3 will get this id, or the button itself
          >
            <div className="mt-4 pt-4 border-t border-gray-600 space-y-4">
              <div>
                <h4 className="font-semibold text-md sm:text-lg mb-1 text-gray-200 font-manrope flex items-center">
                  <AlertTriangle size={20} className="mr-2 text-red-400 flex-shrink-0" /> The Challenge:
                </h4>
                <p className="text-sm sm:text-base text-gray-300 font-manrope leading-relaxed sm:leading-relaxed">
                  {study.problem}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-md sm:text-lg mb-1 text-gray-200 font-manrope flex items-center">
                  <CheckCircle size={20} className="mr-2 text-green-400 flex-shrink-0" /> My Approach:
                </h4>
                <p className="text-sm sm:text-base text-gray-300 font-manrope leading-relaxed sm:leading-relaxed">
                  {study.actions}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-md sm:text-lg mb-1 text-gray-200 font-manrope flex items-center">
                  <TrendingUp size={20} className="mr-2 text-blue-400 flex-shrink-0" /> The Outcome & Impact:
                </h4>
                <p className="text-sm sm:text-base text-gray-300 font-manrope leading-relaxed sm:leading-relaxed">
                  {study.impact}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudiesData: CaseStudy[] = [
    {
      title: "AI-Driven Automation for Enhanced Legal Document Processing",
      problem: "Specialized professional services faced significant operational bottlenecks due to extensive manual document analysis and drafting processes, limiting scalability, responsiveness, and client service efficiency.",
      actions: "Directed the creation of an innovative SaaS platform employing a sophisticated multi-agent AI architecture (pre-GPT-4). Engineered comprehensive workflows to automate document ingestion, advanced analytical processes, and dynamic draft document generation. Integrated Azure OpenAI technologies, laying foundational elements that subsequently contributed to Microsoft's AutoGen solution.",
      impact: "Reduced manual triage efforts by 80%, accelerated document processing times by 70% (from approximately 50 minutes down to 15 minutes), and increased paralegal productivity by an estimated 60%, empowering significant scaling of professional services."
    },
    {
      title: "Optimizing Enterprise Data Lake & ETL Pipelines for Retail Analytics",
      problem: "A major retail enterprise struggled with fragmented and siloed data sources, severely restricting comprehensive analytics and timely, data-driven business decisions.",
      actions: "Led a strategic overhaul and optimization of the organization's data ingestion ETL pipelines. Transitioned the legacy Python-based system to a high-performance Go architecture. Designed and deployed a scalable infrastructure featuring high-throughput messaging via NATS, robust PostgreSQL-based data storage, and comprehensive orchestration through Kubernetes.",
      impact: "Unified three critical but previously isolated data sources into a single, highly queryable analytics platform, achieving a 5x increase in data processing throughput. Reduced processing runtime by 78% (from 45 minutes to under 10 minutes), resulting in approximately 35% reduction in monthly computational costs."
    }
  ];
  

  return (
    <section id="case-studies" className="py-16 sm:py-20 md:py-28 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white font-manrope"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Impact Stories
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

