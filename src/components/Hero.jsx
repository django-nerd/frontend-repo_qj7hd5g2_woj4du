import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Visual overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        {/* top gradient wash for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90" />
        {/* soft radial glows */}
        <div className="absolute right-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-400/40 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-10%] h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 sm:pt-36 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-800 backdrop-blur-md shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Available for opportunities
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          MD NAJMUS SAKIB
        </h1>
        <p className="mt-3 text-lg font-semibold text-slate-800 sm:text-xl">
          Server Administrator • DevOps Engineer • Fintech‑ready Infrastructure
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
          I design fast, secure, and scalable Linux hosting platforms with automation at the core.
          From cPanel/WHM and LiteSpeed to CloudLinux and CI/CD, I turn infrastructure into a product.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-slate-300/80 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md transition hover:translate-y-[-1px] hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
