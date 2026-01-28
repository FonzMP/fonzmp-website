export default function Projects() {
  return (
    <section id="projects" className="border-t border-ink/10 py-14">
      <div className="grid gap-10 sm:grid-cols-[0.4fr_0.6fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Technical Projects
        </p>
        <div className="space-y-6">
          <div className="rounded-3xl border border-ink/20 bg-card p-6 shadow-soft">
            <h3 className="text-lg font-semibold">
              Department of Veterans Affairs
            </h3>
            <p className="mt-2 text-sm text-ink/60">
              Technical Lead — Developer Experience
              <br />
              Lead Engineer — Lighthouse Benefits Claims API
              <br />
              Senior Software Engineer — Lighthouse APIs
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
              React · Ruby on Rails · AWS · Docker
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
                Contributed as an AEM developer on a focused team delivering
                a new web application.
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
  )
}