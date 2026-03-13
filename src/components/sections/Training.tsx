import { BookOpen } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const highlights = [
  "Implemented arrays, linked lists, stacks, queues, trees, and graphs",
  "Designed algorithms such as Binary Search, Merge Sort, and Quick Sort",
];

const Training = () => (
  <section id="training" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          <span className="gradient-text">Training</span>
        </h2>
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-8 group hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <BookOpen className="text-primary mt-1 shrink-0" size={28} />
            <div>
              <h3 className="font-heading font-semibold text-base mb-1">
                Data Structures and Algorithms using Python
              </h3>
              <p className="text-muted-foreground text-sm mb-4">CSE Pathshala</p>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  </section>
);

export default Training;
