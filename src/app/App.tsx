import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Achievements from '../components/Achievements/Achievements';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import BackToTop from '../components/BackToTop/BackToTop';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accentOrange/30 selection:text-white">
      <BackToTop />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <About />

        <Education />

        <Experience />

        <Projects />
        
        <Skills />

        <Achievements />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
