import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const techItems = [
  { name: "Python", angle: 0 },
  { name: "TensorFlow", angle: 60 },
  { name: "Docker", angle: 120 },
  { name: "Git", angle: 180 },
  { name: "JavaScript", angle: 240 },
  { name: "React", angle: 300 },
];

const TechStack = () => (
  <section id="techstack" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">
          Tech <span className="gradient-text">Stack</span>
        </h2>
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
          {/* Center orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 animate-pulse-glow" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {techItems.map((tech) => {
              const rad = (tech.angle * Math.PI) / 180;
              const r = 45;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              return (
                <motion.div
                  key={tech.name}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div className="glass-card px-3 py-2 text-center hover:border-primary/50 transition-all cursor-default group">
                    <span className="font-mono text-xs text-foreground group-hover:text-primary transition-colors">{tech.name}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          {/* Orbit ring */}
          <div className="absolute inset-[10%] rounded-full border border-primary/10" />
        </div>
      </SectionWrapper>
    </div>
  </section>
);

export default TechStack;
