'use client'

/* =======================
   SECTION IMPORTS
======================= */
import Hero from '@/components/cards/Hero'
import AboutPage from '@/components/cards/About'
import ServiceCard from '@/components/cards/ServiceCard'
import SoftwareCard from '@/components/cards/SoftwareCard'
import Community from '@/components/cards/Community'
import TeamCard from '@/components/cards/TeamCard'
import Meetups from '@/components/cards/Meetups'
import TurningPoint from '@/components/cards/TurningPoint'
import ContactCard from '@/components/cards/ContactCard'
import CourseCard from '@/components/cards/CourseCard'

/* =======================
   HOME PAGE
======================= */
export default function Home() {
  return (
    <main
      className="
        min-h-screen 
        w-full 
        bg-background 
        text-foreground
      "
    >
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= ABOUT ================= */}
      <AboutPage />

      {/* ================= SERVICES ================= */}
      <ServiceCard />

      {/* ================= COURSES ================= */}
      <CourseCard />

      {/* ================= SOFTWARE / TOOLS ================= */}
      <SoftwareCard />

      {/* ================= TURNING POINT ================= */}
      <TurningPoint />

      {/* ================= COMMUNITY ================= */}
      <Community />

      {/* ================= MEETUPS / EVENTS ================= */}
      <Meetups />

      {/* ================= TEAM ================= */}
      <TeamCard />

      {/* ================= CONTACT ================= */}
      <ContactCard />
    </main>
  )
}
