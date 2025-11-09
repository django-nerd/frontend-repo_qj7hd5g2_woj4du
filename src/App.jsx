import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <a href="#home" className="text-sm font-semibold tracking-tight text-slate-900">MD NAJMUS SAKIB</a>
          <nav className="hidden items-center gap-2 sm:flex">
            <a href="#about" className="rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">About</a>
            <a href="#projects" className="rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Projects</a>
            <a href="#contact" className="rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 sm:inline-block">Hire Me</a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 text-sm text-slate-600 sm:flex-row">
            <p>© {new Date().getFullYear()} MD NAJMUS SAKIB — Precision. Reliability. Scale.</p>
            <div className="flex items-center gap-4">
              <a href="#home" className="hover:text-slate-900">Home</a>
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#projects" className="hover:text-slate-900">Projects</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
