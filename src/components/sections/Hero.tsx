import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <Particles />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

    {/* Glowing grid background */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="font-mono text-sm text-secondary mb-2">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-3">
          Venkata <span className="gradient-text">Ganesh</span>
        </h1>
        <p className="text-lg md:text-xl text-primary font-heading mb-4">
          Software Developer | AI & Machine Learning Enthusiast
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Building intelligent systems and real-world AI applications.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="neon" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Venkatas987" target="_blank" rel="noopener noreferrer"><Github /></a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          </Button>
        </div>
      </motion.div>
    </div>
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
    >
      <ArrowDown size={24} />
    </motion.a>
  </section>
);

export default Hero;
