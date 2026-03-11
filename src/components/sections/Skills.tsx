import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "JavaScript"],
    color: "primary" as const,
  },
  {
    title: "Frameworks",
    skills: ["Flask", "React (basic)"],
    color: "secondary" as const,
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker"],
    color: "primary" as const,
  },
  {
    title: "AI / Machine Learning",
    skills: ["TensorFlow", "Scikit-learn", "NLP", "Computer Vision"],
    color: "secondary" as const,
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          My <span className="gradient-text">Skills</span>
        </h2>
      </SectionWrapper>
      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <SectionWrapper key={cat.title} delay={i * 0.1}>
            <div className="glass-card p-6 h-full group hover:border-primary/50 transition-all duration-300">
              <h3 className={`font-heading font-semibold mb-4 ${cat.color === "secondary" ? "text-secondary" : "text-primary"}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`font-mono text-xs px-3 py-1.5 rounded-full border ${
                      cat.color === "secondary"
                        ? "border-secondary/30 text-secondary bg-secondary/5"
                        : "border-primary/30 text-primary bg-primary/5"
                    }`}
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

export default Skills;
