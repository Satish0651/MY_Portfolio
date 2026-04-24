import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { Projects } from "@/components/projects/Projects";
import { Timeline } from "@/components/experience/Timeline";
import { MetricsDashboard } from "@/components/metrics/MetricsDashboard";
import { PresalesFlow } from "@/components/presales/PresalesFlow";
import { Contact } from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <Projects />
      <Timeline />
      <MetricsDashboard />
      <PresalesFlow />
      <Contact />
    </>
  );
}
