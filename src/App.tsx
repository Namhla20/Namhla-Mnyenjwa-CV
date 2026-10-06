import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Root component — assembles all portfolio sections in order and
 * activates the scroll-reveal animation hook once on mount.
 */
function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
