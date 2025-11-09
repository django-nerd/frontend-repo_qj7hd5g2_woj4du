export default function Projects() {
  const projects = [
    {
      title: 'Server Load Optimization for Cloud Hosting',
      desc: 'Reduced peak CPU and I/O contention on high‑traffic nodes by profiling bottlenecks and tuning services.',
      tech: 'LiteSpeed, CloudLinux, AlmaLinux, MySQL Tuning',
      result: '40% lower average load and faster response times during traffic spikes.'
    },
    {
      title: 'Automated Deployment Pipeline using Shell Scripts',
      desc: 'Created a lightweight CI/CD workflow for fast, repeatable deployments across staging and production.',
      tech: 'Shell, Git, rsync, systemd timers',
      result: 'Cut release time from hours to minutes with consistent, auditable steps.'
    },
    {
      title: 'DNS Configuration & Failover Management for Multi‑Server Setup',
      desc: 'Hardened DNS and built a failover strategy to keep services available during outages.',
      tech: 'BIND/PowerDNS, Cloudflare, Health Checks',
      result: 'Improved uptime and quicker recovery with automated failover policies.'
    },
    {
      title: 'CloudLinux Integration for Shared Hosting Security',
      desc: 'Implemented resource isolation and process limits to protect tenants and stabilize noisy neighbors.',
      tech: 'CloudLinux LVE, CageFS, Imunify',
      result: 'Fewer incidents and stronger tenant isolation under load.'
    },
    {
      title: 'WordPress Hosting Stack Optimization',
      desc: 'Optimized a high‑traffic WordPress stack for speed and efficiency.',
      tech: 'LiteSpeed Cache, Redis, Cloudflare, OPCache',
      result: 'TTFB reduced and Core Web Vitals improved across key templates.'
    },
    {
      title: 'Server Backup Automation and Monitoring Alerts',
      desc: 'Automated offsite backups with verification and alerting for quick restores.',
      tech: 'Rclone, Cron, Shell, Uptime/Status Monitoring',
      result: 'Reliable recovery points and faster incident response.'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">Result</span>
              </div>
              <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">Technologies</p>
              <p className="text-sm text-slate-700">{p.tech}</p>
              <div className="mt-3 rounded-md bg-slate-50 p-3 text-sm text-slate-800">{p.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
