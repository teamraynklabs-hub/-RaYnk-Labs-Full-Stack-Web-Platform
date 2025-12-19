'use client'

import Hero from "@/components/cards/Hero"
import About from "./about/page"
import AITools from "@/components/cards/AITools"
import Community from "@/components/cards/Community"
import Meetups from "@/components/cards/Meetups"
import TurningPoint from "@/components/cards/TurningPoint"
export default function Home() {
  
  return (
    <main style={{ 
      minHeight: '100vh', 
      background: '#0D0D0D',
      color: '#FFFFFF',
      width: '100%',
      margin: 0,
      padding: 0
    }}>
      <Hero />
      <About />
      <AITools />
      <Community />
      <Meetups />
      <TurningPoint />
    </main>
  )
}
