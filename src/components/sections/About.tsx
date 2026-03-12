import SectionWrapper from "@/components/SectionWrapper";
import { Brain } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <div className="glass-card p-8 text-center">
          <Brain className="text-primary mx-auto mb-5" size={32} />
          <p className="text-muted-foreground leading-relaxed">
            A Computer Science student with an insatiable curiosity for Artificial Intelligence and Machine Learning. I transform complex problems into intelligent solutions, bridging the gap between theoretical concepts and real-world applications. My passion lies in building software that doesn't just work, but thinks. Currently exploring the frontiers of AI while developing practical tools that make a difference.
          </p>
        </div>
      </SectionWrapper>
    </div>
  </section>
);

export default About;
