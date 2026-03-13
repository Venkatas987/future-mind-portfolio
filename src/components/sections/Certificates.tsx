import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import certCoursera from "@/assets/cert-coursera.jpg";
import certUdemy from "@/assets/cert-udemy.jpg";
import certBoardInfinity from "@/assets/cert-board-infinity.jpg";

const certs = [
  {
    title: "The Bits and Bytes of Computer Networking",
    platform: "Coursera",
    image: certCoursera,
    link: "https://www.coursera.org/account/accomplishments/verify/XSH2DPOYPH6W",
  },
  {
    title: "Master Generative AI & AI Tools",
    platform: "Udemy",
    image: certUdemy,
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-24b4c245-727e-4fa9-a5a6-048bf992612e.pdf",
  },
  {
    title: "Data Structures and Algorithms",
    platform: "Board Infinity",
    image: certBoardInfinity,
    link: "https://drive.google.com/file/d/1M205maz9_Vo611eCrMQES4SP1JoSIdqT/view?usp=sharing",
  },
];

const Certificates = () => (
  <section id="certifications" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          <span className="gradient-text">Certifications</span>
        </h2>
      </SectionWrapper>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <SectionWrapper key={c.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group hover:border-secondary/40 transition-all duration-300 hover:neon-glow-secondary"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-heading font-medium text-sm mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-xs mb-3">{c.platform}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={c.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={12} /> Verify
                  </a>
                </Button>
              </div>
            </motion.div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
