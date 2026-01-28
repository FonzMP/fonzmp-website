export default function Home() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
          <span className="text-sm font-semibold tracking-[0.3em]">
            FONZMP
            <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-accent align-middle" />
          </span>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 sm:flex">
            <a className="transition hover:text-ink" href="#about">
              About
            </a>
            <a className="transition hover:text-ink" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-ink" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-ink" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-ink" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 transition hover:text-accent"
            href="https://fonzmp.com"
            target="_blank"
            rel="noreferrer"
          >
            fonzmp.com
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-12 sm:px-10">
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
              Open to: API platforms, DevEx, full-stack leadership
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-ink/10 py-14">
          <div className="grid gap-10 sm:grid-cols-[0.4fr_0.6fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
              About
            </p>
            <div className="space-y-4 text-base leading-7 text-ink/70">
              <p>
                I combine platform engineering with a product mindset, balancing
                reliability, observability, and human-friendly experiences. I’ve
                led Lighthouse Benefits Claims API delivery, built consumer
                management tooling, and partnered across VA teams to align with
                enterprise security and compliance standards.
              </p>
              <p>
                Outside of work you’ll find me on two wheels or mapping out the
                next trail. I’m energized by systems that scale and teams that
                collaborate with clarity.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-ink/10 py-14">
          <div className="grid gap-10 sm:grid-cols-[0.4fr_0.6fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
              Experience
            </p>
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  Oddball — Software Engineer Technical Lead
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
                  Jan 2025 — Current
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-ink/70">
                  <li>
                    Designed and developed React & Rails applications to improve
                    data management for Lighthouse & Developer Experience.
                  </li>
                  <li>
                    Led data migrations and modernization of legacy systems
                    across multiple teams.
                  </li>
                  <li>
                    Built a self-service onboarding system for external
                    consumers, streamlining integration and reducing support
                    overhead.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  Oddball — Software Engineer Team Lead
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
                  Sep 2022 — Jan 2025
                </p>
                <p className="text-sm text-ink/70">
                  Guided squads building Lighthouse APIs and developer
                  experience initiatives with a focus on stability, monitoring,
                  and accessibility.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  Oddball — Senior Software Engineer
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
                  Jan 2022 — Sep 2022
                </p>
                <p className="text-sm text-ink/70">
                  Delivered front-end experiences and platform tooling for VA
                  Lighthouse services.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Oddball — Node Engineer</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
                  Aug 2020 — Dec 2021
                </p>
                <p className="text-sm text-ink/70">
                  Supported API integrations and developer tooling across
                  Lighthouse platforms.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Infosys — Senior Associate</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
                  Jan 2019 — Aug 2020
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-ink/70">
                  <li>UI developer for telecom contract in Angular and AEM.</li>
                  <li>
                    Developed onboarding, education, and employee directory
                    platforms for internal use.
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">
                  J3T Logistics (CycleBar) — On Site Implementation Manager
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
                  Jun 2016 — Feb 2018
                </p>
                <p className="text-sm text-ink/70">
                  Installed on-site computer systems and implemented network
                  configurations for franchise locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-ink/10 py-14">
          <div className="grid gap-10 sm:grid-cols-[0.4fr_0.6fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
              Technical Projects
            </p>
            <div className="space-y-6">
              <div className="rounded-3xl border border-ink/20 bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold">
                  Department of Veterans Affairs — Lighthouse APIs
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  Lead Engineer — Lighthouse Benefits Claims API · Technical
                  Lead — Developer Experience
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/70">
                  <li>
                    Led design and development of the Lighthouse Benefits Claims
                    API with reliability and performance targets.
                  </li>
                  <li>
                    Built applications for managing test users and accounts,
                    improving developer workflows.
                  </li>
                  <li>
                    Designed data models and external integrations for the
                    Lighthouse Platform.
                  </li>
                  <li>
                    Automated consumer credential generation and gateway setup
                    with internal tooling.
                  </li>
                  <li>
                    Created dashboards and monitoring to detect and prevent
                    silent API or gateway failures.
                  </li>
                </ul>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">
                  React · Ruby on Rails · AWS
                </p>
              </div>
              <div className="rounded-3xl border border-ink/20 bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold">Project Work — UI Implementation</h3>
                <p className="mt-2 text-sm text-ink/60">
                  Adobe Experience Manager · Angular 5 · Java · Spring Boot ·
                  MySQL
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink/70">
                  <li>
                    Supported multiple teams with UI development and
                    integration across enterprise applications.
                  </li>
                  <li>
                    Served as an AEM developer on a small team building a new
                    web application.
                  </li>
                  <li>
                    Developed templates, managed CMS content, and supported
                    user management workflows.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-ink/10 py-14">
          <div className="grid gap-10 sm:grid-cols-[0.4fr_0.6fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
              Technical Skills
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-ink/80">
              {
                [
                  "Ruby",
                  "Rails",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "Angular",
                  "React",
                  "Redux",
                  "Node",
                  "ActiveRecord",
                  "MongoDB",
                  "SQLite",
                  "SQL",
                  "MySQL",
                  "PostgreSQL",
                  "Git",
                  "Adobe Experience Manager",
                  "AWS",
                  "Elasticsearch",
                  "Docker",
                  "Jenkins",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-ink/20 bg-card px-3 py-1"
                  >
                    {skill}
                  </span>
                ))
              }
            </div>
          </div>
        </section>

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
      </main>
    </div>
  );
}
