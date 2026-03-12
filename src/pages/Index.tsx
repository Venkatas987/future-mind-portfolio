import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import TechStack from "@/components/sections/TechStack";
import DsaSection from "@/components/sections/DsaSection";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="min-h-screen"
  >
    <Navbar />
    <Hero />
    <About />
    <Education />
    <TechStack />
    <DsaSection />
    <Projects />
    <Certificates />
    <Contact />
    <Footer />
  </motion.div>
);

export default Index;
