import { Trophy } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const Achievements = () => (
  <section id="achievements" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          <span className="gradient-text">Achievements</span>
        </h2>
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-card p-8 text-center group hover:border-secondary/40 transition-all duration-300"
        >
          <Trophy className="mx-auto mb-4 text-secondary" size={36} />
          <p className="text-foreground font-heading font-semibold text-lg mb-2">200+</p>
          <p className="text-muted-foreground text-sm">
            Data Structures and Algorithms problems solved on GeeksforGeeks and LeetCode.
          </p>
        </motion.div>
      </SectionWrapper>
    </div>
  </section>
);

export default Achievements;
