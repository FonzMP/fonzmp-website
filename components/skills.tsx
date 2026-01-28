export default function Skills() {
  return (
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
              "Java",
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
  )
}