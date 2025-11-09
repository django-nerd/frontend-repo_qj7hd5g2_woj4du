import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 sm:pt-36 lg:px-8">
        <span className="mb-4 inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
          MD NAJMUS SAKIB
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Server Administrator & DevOps Engineer
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
          I optimize and automate high‑performance Linux servers so your applications stay fast, secure, and scalable.
        </p>
        <p className="mt-4 max-w-3xl text-slate-700">
          Experienced with cPanel/WHM, LiteSpeed, CloudLinux, AlmaLinux, Ubuntu, and Red Hat. I build reliable hosting
          environments and CI/CD workflows that keep teams shipping with confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20">Explore Projects</a>
          <a href="#contact" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/10">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
