export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink/10 py-14">
      <div className="grid gap-10 sm:grid-cols-[0.4fr_0.6fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Experience
        </p>
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Oddball — Software Engineer, Technical Lead
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
              Oddball — Software Engineer, Team Lead
            </h3>
            <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
              Sep 2022 — Jan 2025
            </p>
            <p className="text-sm text-ink/70">
              Guided squads building Lighthouse APIs initiatives with a
              focus on stability, monitoring, and accessibility.
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
              Delivered full-stack experiences and platform tooling for VA
              Lighthouse API services.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Oddball — Node Engineer</h3>
            <p className="text-sm uppercase tracking-[0.2em] text-ink/50">
              Aug 2020 — Dec 2021
            </p>
            <p className="text-sm text-ink/70">
              Supported API integrations and developer tooling across
              Lighthouse API platform.
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
  )
}