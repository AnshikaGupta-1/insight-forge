import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Anshika Gupta | Data Scientist | AI Engineer",
      },
      {
        name: "description",
        content:
          "Portfolio of Anshika Gupta showcasing Data Science, Machine Learning, Analytics, and Generative AI projects.",
      },
      {
        property: "og:title",
        content: "Anshika Gupta | Data Scientist | AI Engineer",
      },
      {
        property: "og:description",
        content:
          "Portfolio showcasing Data Science, Machine Learning, Analytics, and Generative AI projects.",
      },
    ],

    links: [
      {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
