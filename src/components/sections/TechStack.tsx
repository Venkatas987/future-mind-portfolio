import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
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
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
              />
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
