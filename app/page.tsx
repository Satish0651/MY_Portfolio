import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { StatsBar } from "@/components/stats/StatsBar";
import { CertsAndTools } from "@/components/certs/CertsAndTools";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { Timeline } from "@/components/experience/Timeline";
import { Contact } from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <StatsBar />
      <CertsAndTools />
      <SkillsGrid />
      <Timeline />
      <Contact />
    </>
  );
}
