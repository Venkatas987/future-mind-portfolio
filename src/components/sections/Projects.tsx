import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";

const projects = [
  {
    title: "AI Healthcare Triage Assistant",
    description: "An AI-powered healthcare triage system designed to analyze user symptoms and provide preliminary medical guidance. The system uses machine learning and natural language processing to help users understand possible health conditions and recommend next steps.",
    tech: ["Python", "Machine Learning", "NLP"],
    github: "https://github.com/Venkatas987/ai-healthcare-triage-assistant",
  },
  {
    title: "Plant Disease Detection UI",
    description: "A web-based user interface for an AI plant disease detection system that allows users to upload plant leaf images and receive predictions about plant diseases using machine learning models.",
    tech: ["Python", "Computer Vision", "Machine Learning"],
    github: "https://github.com/Venkatas987/plant_disease_ui",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </SectionWrapper>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <SectionWrapper key={p.title} delay={i * 0.15}>
            <div className="glass-card p-6 h-full flex flex-col group hover:border-primary/40 transition-all duration-300 hover:neon-glow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"><Github size={14} /> View Code</a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="#"><ExternalLink size={14} /> Live Demo</a>
                </Button>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
