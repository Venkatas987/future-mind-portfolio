import SectionWrapper from "@/components/SectionWrapper";
import { Brain } from "lucide-react";

const About = () =>
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
            ​I’m a Computer Science student at Lovely Professional University focused on building systems that solve real-world problems—not just academic exercises.

My interest in AI started with a simple question: Can machines actually think?
Today, I work on answering that through practical applications—developing machine learning models for healthcare prediction, building computer vision systems that interpret visual data, and creating intelligent applications that learn from patterns.

I focus on end-to-end system development—from data preprocessing and model building to deployment—turning unstructured problems into usable solutions.

What differentiates me is execution.
I don’t just experiment with models; I aim to make them reliable, scalable, and applicable in real scenarios.

My goal is straightforward: build technology that improves decision-making, optimizes processes, and creates measurable impact.


          









        









        
        





        </p>
        </div>
      </SectionWrapper>
    </div>
  </section>;export default About;