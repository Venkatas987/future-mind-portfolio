import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";

// Replace this URL with your own profile photo link
const PROFILE_IMAGE_URL = "https://via.placeholder.com/500";

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <Particles />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/50 neon-glow">
            <img src={profilePhoto} alt="Venkata Ganesh" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -inset-2 rounded-full border border-primary/20 animate-pulse-glow pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left max-w-xl"
        >
          <p className="font-mono text-sm text-secondary mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-3">
            Venkata <span className="gradient-text">Ganesh</span>
          </h1>
          <p className="text-lg md:text-xl text-primary font-heading mb-4">
            Software Developer | AI & Machine Learning Enthusiast
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Building intelligent systems and real-world AI applications.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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
