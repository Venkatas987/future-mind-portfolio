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
        <div className="glass-card p-8 space-y-4">
          <Brain className="text-primary mx-auto mb-5" size={32} />
          <p className="text-muted-foreground leading-relaxed">
            I am a Computer Science student at Lovely Professional University with a strong interest in Artificial Intelligence, Machine Learning, and software development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy transforming complex ideas into practical software solutions using strong computer science fundamentals and modern AI technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Through my projects, I have built applications such as disease prediction systems, computer vision models, and data-driven software tools.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I continuously improve my skills in data structures, algorithms, and machine learning while exploring new technologies that shape the future of intelligent software systems.
          </p>
        </div>
      </SectionWrapper>
    </div>
  </section>
);

export default About;
