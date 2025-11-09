export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Contact</h2>
        <p className="mt-3 text-slate-700">
          Let’s connect. Whether you need help with server optimization, automation, or a custom hosting setup, I’m always open to collaborate.
        </p>

        <form className="mt-8 grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-800">Name</label>
            <input id="name" type="text" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-800">Email</label>
            <input id="email" type="email" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-800">Message</label>
            <textarea id="message" rows="5" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="How can I help?" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">I usually respond within 24 hours. Let’s build something powerful together.</div>
            <button type="submit" className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20">Send Message</button>
          </div>
        </form>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-700">
          <a href="mailto:hello@example.com" className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900">GitHub</a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900">Telegram</a>
        </div>
      </div>
    </section>
  );
}
