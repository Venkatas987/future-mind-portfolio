import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const categories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Flask", "Django", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras"],
  },
  {
    title: "Databases",
    skills: ["SQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Jenkins", "Linux", "GitHub Actions", "YAML"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems", "Machine Learning"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Adaptability", "Project Ownership", "Communication"],
  },
];

const TechStack = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
      </SectionWrapper>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <SectionWrapper key={cat.title} delay={i * 0.1}>
            <div className="glass-card p-6 h-full group hover:border-primary/40 transition-all duration-300">
              <h3 className="font-heading font-semibold text-sm text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 12px hsl(187 80% 54% / 0.4)" }}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-secondary/30 text-secondary bg-secondary/5 cursor-default transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
