import { BookOpen } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const posts = [
  { title: "Building AI Healthcare Applications", excerpt: "Exploring how AI can transform healthcare triage and patient care." },
  { title: "Machine Learning for Agriculture", excerpt: "Using computer vision to detect plant diseases and improve crop yields." },
  { title: "Getting Started with AI Projects", excerpt: "A beginner's guide to building your first machine learning application." },
];

const Blog = () => (
  <section id="blog" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          Blog & <span className="gradient-text">Insights</span>
        </h2>
      </SectionWrapper>
      <div className="grid sm:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <SectionWrapper key={p.title} delay={i * 0.1}>
            <div className="glass-card p-6 h-full group hover:border-primary/40 transition-all duration-300 cursor-pointer">
              <BookOpen className="text-primary mb-3" size={20} />
              <h3 className="font-heading font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{p.excerpt}</p>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
