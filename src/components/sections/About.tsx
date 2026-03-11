import SectionWrapper from "@/components/SectionWrapper";
import { GraduationCap, Brain } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
      </SectionWrapper>
      <div className="grid md:grid-cols-2 gap-8">
        <SectionWrapper delay={0.1}>
          <div className="glass-card p-6 h-full">
            <Brain className="text-primary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-lg mb-3">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Computer Science student passionate about Artificial Intelligence, Machine Learning, and building practical software solutions. Focused on creating AI-powered applications that solve real-world problems in healthcare and agriculture.
            </p>
          </div>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <div className="glass-card p-6 h-full">
            <GraduationCap className="text-secondary mb-4" size={28} />
            <h3 className="font-heading font-semibold text-lg mb-3">Education</h3>
            <p className="text-foreground font-medium">Bachelor of Technology</p>
            <p className="text-muted-foreground text-sm">Computer Science</p>
          </div>
        </SectionWrapper>
      </div>
    </div>
  </section>
);

export default About;
