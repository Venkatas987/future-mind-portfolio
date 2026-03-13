import { GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    duration: "Aug 2023 – Present",
    detail: "CGPA: 6.60",
  },
  {
    institution: "Sri Chaitanya College",
    degree: "Intermediate (PCM)",
    duration: "",
    detail: "95%",
  },
  {
    institution: "Oxford Public School",
    degree: "Matriculation",
    duration: "",
    detail: "100%",
  },
];

const Education = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>
      </SectionWrapper>
      <div className="space-y-6">
        {educationData.map((edu, i) => (
          <SectionWrapper key={edu.institution} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="text-secondary mt-1 shrink-0" size={28} />
                <div>
                  <h3 className="font-heading font-semibold text-base mb-1">{edu.institution}</h3>
                  <p className="text-muted-foreground text-sm">{edu.degree}</p>
                  {edu.duration && <p className="font-mono text-xs text-secondary mt-1">{edu.duration}</p>}
                  <p className="font-mono text-xs text-primary mt-1">{edu.detail}</p>
                </div>
              </div>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
