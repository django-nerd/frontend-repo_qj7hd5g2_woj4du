import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#home" className="text-sm font-semibold tracking-tight text-slate-900">MD NAJMUS SAKIB</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} MD NAJMUS SAKIB. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#home" className="hover:text-slate-900">Home</a>
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#projects" className="hover:text-slate-900">Projects</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
