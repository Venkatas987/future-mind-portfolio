import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";
import { useState, useEffect } from "react";

const PROFILE_IMAGE_URL = "https://drive.google.com/uc?export=view&id=1Qm4nDM2wGFvaurBJu9RtstwXWfpugaob";
const RESUME_URL = "#"; // Replace with your Google Drive resume link

const useTypewriter = (text: string, speed = 60) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
};

const Hero = () => {
  const tagline = useTypewriter("Software Developer | AI & Machine Learning Enthusiast", 50);

  return (
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
            className="relative mb-6"
            animate={{ boxShadow: [
              "0 0 20px hsl(263 70% 58% / 0.4), 0 0 40px hsl(187 80% 54% / 0.2)",
              "0 0 30px hsl(263 70% 58% / 0.6), 0 0 60px hsl(187 80% 54% / 0.3)",
              "0 0 20px hsl(263 70% 58% / 0.4), 0 0 40px hsl(187 80% 54% / 0.2)",
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ borderRadius: "50%" }}
          >
            <div className="w-[150px] h-[150px] rounded-full p-[3px] bg-gradient-to-br from-primary via-secondary to-primary">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Venkata Ganesh"
                className="w-full h-full rounded-full object-cover bg-background"
              />
            </div>
          </motion.div>

          <p className="font-mono text-sm text-secondary mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-3">
            Venkata <span className="gradient-text">Ganesh</span>
          </h1>
          <p className="text-lg md:text-xl text-primary font-heading mb-2 h-8">
            {tagline}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Building intelligent systems and real-world AI applications.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="neon" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <Download size={16} /> Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>
          <div className="flex gap-3 mt-5">
            <Button variant="ghost" size="icon" className="rounded-full border border-border hover:border-primary hover:neon-glow" asChild>
              <a href="https://github.com/Venkatas987" target="_blank" rel="noopener noreferrer"><Github /></a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full border border-border hover:border-secondary hover:neon-glow-secondary" asChild>
              <a href="https://www.linkedin.com/in/venkataganeshm5/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
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
};

export default Hero;
