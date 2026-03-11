import SectionWrapper from "@/components/SectionWrapper";
import { Brain, Cpu, Leaf, HeartPulse } from "lucide-react";

const items = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Machine Learning Applications" },
  { icon: HeartPulse, label: "AI-based Healthcare Tools" },
  { icon: Leaf, label: "Computer Vision for Agriculture" },
];

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          <span className="gradient-text">Experience</span>
        </h2>
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary neon-glow" />
          <div className="glass-card p-6">
            <p className="font-mono text-xs text-secondary mb-1">Current</p>
            <h3 className="font-heading font-semibold text-lg mb-1">AI / Software Developer</h3>
            <p className="text-muted-foreground text-sm mb-4">Student Projects</p>
            <div className="grid grid-cols-2 gap-3">
              {items.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon size={14} className="text-primary shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  </section>
);

export default Experience;
