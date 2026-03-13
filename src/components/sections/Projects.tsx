import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Healthcare Triage Assistant",
    description:
      "Built an AI-based symptom checker using a Random Forest model to predict diseases from 132 symptoms across 41 diseases with 97.6% accuracy.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Venkatas987/ai-healthcare-triage-assistant",
  },
  {
    title: "AI-Based Plant Disease Detection System",
    description:
      "Developed a CNN-based image classification model using TensorFlow and Keras to detect plant diseases from leaf images.",
    tech: ["Python", "TensorFlow", "Keras", "Streamlit", "OpenCV", "NumPy"],
  },
  {
    title: "Student Marks Management System",
    description:
      "Python-based system for managing student academic records with automatic grade and average calculation.",
    tech: ["Python", "Google Colab", "GitHub"],
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          <span className="gradient-text">Projects</span>
        </h2>
      </SectionWrapper>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <SectionWrapper key={p.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card p-6 h-full flex flex-col group hover:border-primary/40 transition-all duration-300 hover:neon-glow"
            >
              <div className="w-full h-36 rounded-lg bg-muted/30 border border-border mb-4 flex items-center justify-center">
                <span className="text-muted-foreground text-xs font-mono">Project Preview</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.github && (
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> GitHub
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
