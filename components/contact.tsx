export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink/10 py-14">
      <div className="grid gap-10 sm:grid-cols-[0.4fr_0.6fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Education
        </p>
        <div className="space-y-6 text-sm text-ink/70">
          <div>
            <p className="text-base font-semibold text-ink">
              Flatiron School — 2018
            </p>
            <p>
              Full Stack Web Development, Ruby on Rails, React, JavaScript
            </p>
          </div>
          <div>
            <p className="text-base font-semibold text-ink">
              Ohio University — Bachelor of Science, Recreation Studies
            </p>
            <p>Athens, OH</p>
          </div>
          <div className="rounded-3xl border border-ink/20 bg-card p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
              Let’s build something calm and reliable.
            </p>
            <p className="mt-3 text-base font-semibold text-ink">
              fonzmp@gmail.com · 740-350-8036
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="accent-gradient rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                href="mailto:fonzmp@gmail.com"
              >
                Email
              </a>
              <a
                className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-accent-2 hover:text-accent-2"
                href="https://github.com/fonzmp"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-accent hover:text-accent"
                href="https://www.linkedin.com/in/alexander-k-wilson"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}