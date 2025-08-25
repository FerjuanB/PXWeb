"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import LightBeams from "@/components/LightBeams"
import { Button } from "@/components/ui/button"

type HeroMode = 'logo' | 'business' | 'ai'

export default function Hero() {
  const [currentMode, setCurrentMode] = useState<HeroMode>('logo') // Start with logo
  const [nextContent, setNextContent] = useState<'business' | 'ai'>('ai') // Track which content is next

  useEffect(() => {
    const timings = {
      logo: 4000,
      business: 6500,
      ai: 6500
    }

    const interval = setInterval(() => {
      setCurrentMode(prev => {
        if (prev === 'logo') {
          // Switch to next content mode
          const mode = nextContent
          setNextContent(nextContent === 'business' ? 'ai' : 'business') // Alternate for next time
          return mode
        } else {
          // Any content mode goes back to logo
          return 'logo'
        }
      })
    }, timings[currentMode])

    return () => clearInterval(interval)
  }, [currentMode, nextContent])

  // Unified dark theme with Project X Innovation styling for both modes
  const modeStyles = {
    business: {
      background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black', // Same dark background
      textColor: 'text-white',
      subtextColor: 'text-gray-300',
      accentColor: 'text-primary animate-pulse', // Project X green with pulse effect
      primaryCTA: 'bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/30',
      secondaryCTA: ' bg-secondary border-2 border-primary text-primary hover:bg-primary/20 hover:text-primary',
      particles: 'bg-primary/20'
    },
    ai: {
      background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black', // Same dark background
      textColor: 'text-white',
      subtextColor: 'text-gray-300',
      accentColor: 'text-primary animate-pulse', // Project X green with pulse
      primaryCTA: 'bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/30',
      secondaryCTA: ' bg-secondary border-2 border-primary text-primary hover:bg-primary/20 hover:text-primary',
      particles: 'bg-primary/20'
    }
  }

  return (
    <section 
      id="home" 
      className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-all duration-1000"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center relative min-h-[400px] flex items-center justify-center">
          
          {/* Business Mode Content */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentMode === 'business' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${modeStyles.business.textColor}`}>
              Transform Your Business with{" "}
              <span className={modeStyles.business.accentColor}>Expert Tech Solutions</span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${modeStyles.business.subtextColor}`}>
              While many ERP/UI/EDI consultants deliver standard solutions, Project X Innovation transforms technological complexity into strategic clarity. We don't just implement systems—we redefine digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className={`text-lg px-8 py-6 transition-all duration-200 hover:scale-105 ${modeStyles.business.primaryCTA}`}>
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className={`text-lg px-8 py-6 transition-all duration-200 hover:scale-105 ${modeStyles.business.secondaryCTA}`}>
                Learn More
              </Button>
            </div>
          </div>

          {/* AI Mode Content */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentMode === 'ai' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${modeStyles.ai.textColor}`}>
              Unlock AI's Potential for{" "}
              <span className={modeStyles.ai.accentColor}>Your Business</span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${modeStyles.ai.subtextColor}`}>
              From RAG-powered search to intelligent automation, we turn AI confusion into competitive advantage. See how leading companies are using AI to revolutionize their operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className={`text-lg px-8 py-6 transition-all duration-200 hover:scale-105 ${modeStyles.ai.primaryCTA}`}>
                Talk to an Expert
              </Button>
              <Button variant="outline" size="lg" className={`text-lg px-8 py-6 transition-all duration-200 hover:scale-105 ${modeStyles.ai.secondaryCTA}`}>
                See AI in Action
              </Button>
            </div>
          </div>

          {/* Logo/Transition Mode */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
            currentMode === 'logo' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            {currentMode === 'logo' ? <LightBeams /> : null}
          </div>
          
        </div>
      </div>
      
      {/* Unified dynamic background elements using Project X colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Project X green particles on dark background - same for both modes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/15 transform rotate-45 blur-lg animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/25 rounded-full blur-md animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-primary/15 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}