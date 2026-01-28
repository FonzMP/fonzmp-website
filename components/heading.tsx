export default function Heading() {
  return (
    <section className="grid gap-10 pb-16 pt-8 sm:grid-cols-[1.3fr_0.7fr]">
      <div className="space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Part time outdoorsman
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
          Full time developer.
          <span className="block text-ink/80">
            I build calm, reliable web platforms for humans and APIs.
          </span>
        </h1>
        <p className="max-w-xl text-base leading-7 text-ink/70">
          Full-stack web developer with experience in Ruby on Rails, React,
          Redux, Angular, JavaScript, Java, and Node. I lead Lighthouse API
          initiatives for the Department of Veterans Affairs and create
          developer experience tooling that helps teams ship with confidence.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="accent-gradient rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-soft transition hover:opacity-90"
            href="mailto:fonzmp@gmail.com"
          >
            Email
          </a>
          <a
            className="rounded-full border border-ink/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-accent hover:text-accent"
            href="https://www.linkedin.com/in/alexander-k-wilson"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-ink/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-accent-2 hover:text-accent-2"
            href="https://github.com/fonzmp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="space-y-6 rounded-3xl border border-ink/20 bg-card p-6 shadow-soft">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
            Contact
          </p>
          <p className="mt-3 text-lg font-semibold">Alex Wilson</p>
          <p className="text-sm text-ink/70">740-350-8036</p>
          <p className="text-sm text-ink/70">fonzmp@gmail.com</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
            Current
          </p>
          <p className="text-sm text-ink/70">
            Software Engineer Technical Lead at Oddball
          </p>
          <p className="text-sm text-ink/70">Remote / Washington, D.C.</p>
        </div>
        <div className="accent-border rounded-2xl border border-border-strong bg-card-strong px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/80">
          Open to: API platforms, Full-Stack, Backend, Leadership
        </div>
      </div>
    </section>
  )
}