import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const RESUME_URL = "https://docs.google.com/document/d/1RCLlGSVDJKSAbXXxPzsCZL3ftVwahAB5/export?format=pdf";

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
  const tagline = useTypewriter("Software Developer | Machine Learning Enthusiast", 50);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)"
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Profile Photo */}
          <motion.div
            className="relative mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden relative z-10 border-2 border-primary/50">
              <img

                alt="Mandalapu Venkat Ganesh Reddy"
                className="w-full h-full object-cover object-top brightness-110 contrast-105" src="/lovable-uploads/ed9798a1-b766-40cd-a005-b6951067900b.png" />
              
            </div>
            <div className="absolute inset-0 rounded-full animate-pulse-glow neon-glow" />
            <div className="absolute -inset-1 rounded-full neon-glow-secondary opacity-50 animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </motion.div>

          <p className="font-mono text-sm text-secondary mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-3">
            Mandalapu <span className="gradient-text">Venkat Ganesh</span> Reddy
          </h1>
          <p className="text-lg md:text-xl text-primary font-heading mb-2 h-8">
            {tagline}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Building intelligent software systems and machine learning solutions that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="neon" size="lg" asChild>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" download>
                <Download size={16} /> Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail size={16} /> Contact Me
              </a>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float">
        
        <ArrowDown size={24} />
      </motion.a>
    </section>);

};

export default Hero;