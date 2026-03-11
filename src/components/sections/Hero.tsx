import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";

// Replace with your actual image URL and resume URL
const PROFILE_IMAGE_URL = "PASTE_YOUR_IMAGE_LINK_HERE";
const RESUME_URL = "PASTE_YOUR_RESUME_LINK_HERE";

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
        className="text-center max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-6"
        >
          <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-2 border-primary/50 neon-glow">
            <img
              src={PROFILE_IMAGE_URL}
              alt="Venkata Ganesh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border border-secondary/30 animate-pulse pointer-events-none" />
        </motion.div>

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
            <a href={RESUME_URL} download target="_blank" rel="noopener noreferrer">
              <Download className="mr-1" size={16} /> Resume
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
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
