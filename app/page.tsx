import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Heading from "@/components/heading";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-sand text-ink">

      <Header />
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
