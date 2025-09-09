import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
