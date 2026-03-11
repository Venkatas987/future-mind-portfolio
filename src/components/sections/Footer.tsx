import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-sm gradient-text font-bold">Venkata Ganesh</p>
      <nav className="flex gap-6 text-xs text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>
      <div className="flex gap-3">
        <a href="https://github.com/Venkatas987" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>
        <a href="#" className="text-muted-foreground hover:text-secondary transition-colors"><Linkedin size={16} /></a>
        <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={16} /></a>
      </div>
    </div>
    <p className="text-center text-[11px] text-muted-foreground mt-6">© 2026 Venkata Ganesh. All rights reserved.</p>
  </footer>
);

export default Footer;
