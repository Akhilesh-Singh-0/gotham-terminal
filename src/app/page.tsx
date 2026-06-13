'use client'

import { useLenis } from '@/lib/hooks/useLenis'

import HeroSection from '@/components/hero/HeroSection'
import Navigation from '@/components/layout/Navigation'
import AboutSection from '@/components/about/AboutSection'
import SkillsSection from '@/components/skills/SkillsSection'
import ProjectsSection from '@/components/projects/ProjectsSection'
import ContactSection from '@/components/contact/ContactSection'
import CommandPalette from '@/components/ui/CommandPalette'
import Footer from '@/components/layout/Footer'
import SystemLog from '@/components/ui/SystemLog'

export default function Home() {
  useLenis()

  return (
    <>
      <Navigation />
      <CommandPalette />
      <SystemLog />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}