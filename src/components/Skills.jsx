export default function Skills() {
  const skills = [
    {
      title: 'Server Administration (cPanel/WHM, Webuzo)',
      desc: 'Provisioning, securing, and maintaining production hosting servers with best practices.'
    },
    {
      title: 'Linux Environments (AlmaLinux, Ubuntu, Red Hat)',
      desc: 'Experienced across popular enterprise Linux distributions and package ecosystems.'
    },
    {
      title: 'LiteSpeed & CloudLinux Management',
      desc: 'Deploying and tuning LiteSpeed with CloudLinux for isolation, stability, and performance.'
    },
    {
      title: 'DNS, SSL, and Security Configuration',
      desc: 'End‑to‑end DNS, Let’s Encrypt/SSL, firewall rules, and hardening for safe operations.'
    },
    {
      title: 'DevOps Workflow & Automation (CI/CD, scripts, monitoring)',
      desc: 'Automating deployments, backups, and checks with shell scripts and CI/CD pipelines.'
    },
    {
      title: 'Shell Scripting & System Optimization',
      desc: 'Writing reliable scripts for repeatable tasks, resource tuning, and incident response.'
    },
  ];

  const interests = [
    { title: 'Cybersecurity Basics', desc: 'Strengthening posture with fundamentals like patching, access control, and audits.' },
    { title: 'Cloud Infrastructure Management', desc: 'Exploring cloud-native patterns and cost‑efficient scaling strategies.' },
    { title: 'UI/UX Awareness for Performance‑Oriented Systems', desc: 'Translating system performance into better user experience for hosted apps.' },
  ];

  return (
    <section id="skills" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-lg font-semibold text-slate-900">Additional Interests</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((s) => (
            <div key={s.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">{s.title}</h4>
              <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
