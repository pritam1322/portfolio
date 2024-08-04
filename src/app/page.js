import Hero from "@/components/layouts/Hero";
import CertificationSection from "@/components/sections/CertificationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <CertificationSection />
      <SkillsSection />
    </main>
  );
}
