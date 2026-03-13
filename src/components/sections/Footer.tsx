import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col items-center gap-4">
      <nav className="flex gap-6 text-xs text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>
      <div className="flex gap-3">
        <a href="https://github.com/Venkatas987" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={16} />
        </a>
        <a href="https://www.linkedin.com/in/venkataganeshm5/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
          <Linkedin size={16} />
        </a>
      </div>
      <p className="text-[11px] text-muted-foreground">© 2026 Mandalapu Venkat Ganesh Reddy</p>
    </div>
  </footer>
);

export default Footer;
