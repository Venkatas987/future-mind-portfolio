import { useState } from "react";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <SectionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8">
          <SectionWrapper delay={0.1}>
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="neon" className="w-full">
                <Send size={14} /> Send Message
              </Button>
            </form>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <div className="glass-card p-6 h-full flex flex-col justify-center">
              <h3 className="font-heading font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:mganeshreddy688@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} /> <span className="text-sm">mganeshreddy688@gmail.com</span>
                </a>
                <a
                  href="tel:+918919020554"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Phone size={20} /> <span className="text-sm">+91 8919020554</span>
                </a>
                <a
                  href="https://github.com/Venkatas987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} /> <span className="text-sm">github.com/Venkatas987</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/venkataganeshm5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Linkedin size={20} /> <span className="text-sm">linkedin.com/in/venkataganeshm5</span>
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
