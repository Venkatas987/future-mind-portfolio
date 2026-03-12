import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Braces } from "lucide-react";

const topics = [
  "Arrays",
  "Linked Lists",
  "Stacks",
  "Queues",
  "Trees",
  "Graphs",
  "Recursion",
  "Dynamic Programming",
];

const DsaSection = () => (
  <section id="dsa" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-2">
          Data Structures & <span className="gradient-text">Algorithms</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12">Mastered Concepts</p>
      </SectionWrapper>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {topics.map((topic, i) => (
          <SectionWrapper key={topic} delay={i * 0.05}>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(263 70% 58% / 0.3)" }}
              className="glass-card p-5 text-center cursor-default group hover:border-primary/40 transition-all duration-300"
            >
              <Braces className="mx-auto mb-2 text-primary group-hover:text-secondary transition-colors" size={22} />
              <p className="font-heading text-sm font-medium">{topic}</p>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default DsaSection;
