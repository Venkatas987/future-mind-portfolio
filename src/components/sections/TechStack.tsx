import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C", icon: "⚙️" },
  { name: "C++", icon: "🔧" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Flask", icon: "🌶️" },
  { name: "Django", icon: "🎸" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
  { name: "Scikit-learn", icon: "📊" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Keras", icon: "🔬" },
  { name: "SQL", icon: "🗄️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "📦" },
  { name: "GitHub", icon: "🐙" },
  { name: "Docker", icon: "🐳" },
  { name: "Jenkins", icon: "🏗️" },
  { name: "Linux", icon: "🐧" },
  { name: "GitHub Actions", icon: "⚡" },
];

const TechStack = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-primary">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
      </SectionWrapper>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {skills.map((skill, i) => (
          <SectionWrapper key={skill.name} delay={i * 0.03}>
            <motion.div
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 20px hsl(263 70% 58% / 0.4), 0 0 40px hsl(187 80% 54% / 0.2)",
              }}
              className="glass-card aspect-square flex flex-col items-center justify-center gap-2 p-3 cursor-default group hover:border-primary/50 transition-all duration-300"
            >
              <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-mono text-[10px] md:text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
