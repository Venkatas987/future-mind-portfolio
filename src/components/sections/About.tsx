import SectionWrapper from "@/components/SectionWrapper";
import { Brain } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-primary">
          About <span className="gradient-text">Me</span>
        </h2>
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <div className="glass-card p-8 space-y-4">
          <Brain className="text-primary mx-auto mb-5" size={32} />
          <p className="text-muted-foreground leading-relaxed">
            I am a Computer Science student at Lovely Professional University passionate about Artificial Intelligence, Machine Learning, and intelligent software development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy building practical systems that combine strong programming fundamentals with machine learning algorithms to solve real-world problems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Through my projects I have worked on healthcare prediction systems, computer vision models, and data-driven applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal is to continuously improve my expertise in machine learning, backend development, and scalable software architecture while contributing to impactful technology solutions.
          </p>
        </div>
      </SectionWrapper>
    </div>
  </section>
);

export default About;
