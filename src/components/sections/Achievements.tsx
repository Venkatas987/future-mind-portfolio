import { Award } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const certs = [
  "Machine Learning Certification",
  "AI Development Projects",
  "Technical Learning Achievements",
];

const Achievements = () => (
  <section id="achievements" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Achievements & <span className="gradient-text">Certifications</span>
        </h2>
      </SectionWrapper>
      <div className="grid sm:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <SectionWrapper key={c} delay={i * 0.1}>
            <div className="glass-card p-6 text-center group hover:border-secondary/40 transition-all duration-300">
              <Award className="mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-heading font-medium text-sm">{c}</h3>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
