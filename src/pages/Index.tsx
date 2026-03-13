import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Training from "@/components/sections/Training";
import Certificates from "@/components/sections/Certificates";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
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
    <TechStack />
    <Projects />
    <Training />
    <Certificates />
    <Achievements />
    <Education />
    <Contact />
    <Footer />
  </motion.div>
);

export default Index;
