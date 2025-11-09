export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-16 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">About Me</h2>
        <p className="mt-4 text-slate-700">
          I’m MD NAJMUS SAKIB — a Server Administrator and DevOps Engineer focused on building fast, secure, and resilient hosting platforms. I thrive in Linux-based environments and enjoy turning complex infrastructure problems into clear, automated systems that scale.
        </p>
        <p className="mt-4 text-slate-700">
          Over the years, I’ve managed and optimized hosting stacks for shared, VPS, and dedicated servers, with deep hands-on experience across cPanel/WHM, LiteSpeed, CloudLinux, AlmaLinux, Ubuntu, and Red Hat. I’m comfortable leading migrations, hardening servers, and tuning performance for busy production workloads.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">What I work with</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>cPanel/WHM, Webuzo & other hosting control panels</li>
              <li>LiteSpeed configuration & optimization</li>
              <li>CloudLinux isolation & resource management</li>
              <li>AlmaLinux / Ubuntu / Red Hat</li>
              <li>DNS configuration, SSL, and security hardening</li>
              <li>DevOps automation, monitoring, CI/CD</li>
              <li>Server performance tuning & troubleshooting</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Beyond the terminal</h3>
            <p className="mt-3 text-sm text-slate-700">
              I’m curious by nature — often exploring cybersecurity basics, cloud platforms, and web‑based automation. I enjoy refining processes, documenting systems, and building tools that help teams move faster without sacrificing reliability.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              My philosophy is simple: design for speed, lock in security, and keep systems dependable at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
