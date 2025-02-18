import AboutHero from '@/components/about/AboutHero'
import ExperienceSection from '@/components/about/ExperienceSection'
import StatsSection from '@/components/about/StatsSection'
import Timeline from '@/components/about/Timeline'
import Events from '@/components/Events'
import TeacherSection from '@/components/TeacherSection'
export default function About() {
  return (
    <>
      <AboutHero />
      <ExperienceSection />
      <StatsSection />
      <TeacherSection />
      <Events />
      <Timeline />
    </>
  )
}