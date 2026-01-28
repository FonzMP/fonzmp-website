import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Heading from "@/components/heading";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

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
        <Heading />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
