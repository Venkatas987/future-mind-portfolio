import { Award } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";

const certs = [
  { title: "Master Generative AI & AI Tools", platform: "Udemy" },
  { title: "The Bits and Bytes of Computer Networking", platform: "Coursera" },
  { title: "Data Structures & Algorithms", platform: "Board Infinity" },
];

const Certificates = () => (
  <section id="certifications" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          <span className="gradient-text">Certifications</span>
        </h2>
      </SectionWrapper>
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {certs.map((c, i) => (
          <SectionWrapper key={c.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="glass-card p-6 text-center group hover:border-secondary/40 transition-all duration-300"
            >
              <Award className="mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-heading font-medium text-sm mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-xs">{c.platform}</p>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
