export default function About() {
  return (
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
  )
}