import { GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const focusAreas = ["Artificial Intelligence", "Machine Learning", "Software Engineering"];

const Education = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <div className="glass-card p-8 text-center">
          <GraduationCap className="text-secondary mx-auto mb-4" size={36} />
          <h3 className="font-heading font-semibold text-xl mb-1">Bachelor of Technology</h3>
          <p className="text-muted-foreground text-sm mb-1">Computer Science</p>
          <p className="font-mono text-xs text-secondary mb-5">2023 – 2027</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {focusAreas.map((area) => (
              <motion.span
                key={area}
                whileHover={{ scale: 1.05 }}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-secondary/30 text-secondary bg-secondary/5"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  </section>
);

export default Education;
