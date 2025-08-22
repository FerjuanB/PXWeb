"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [showContent, setShowContent] = useState(false) // Start with GIF

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContent(prev => !prev)
    }, showContent ? 18000 : 2500) // 18 seconds for text, 2.5 seconds for GIF

    return () => clearInterval(interval)
  }, [showContent])

  return (
    <section id="home" className="relative py-24 lg:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center relative min-h-[500px] flex items-center justify-center">
          
         
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            showContent ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="text-primary">Expert Tech Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              While many ERP/UI/EDI consultants deliver standard solutions, Project X Innovation transforms technological complexity into strategic clarity. We don't just implement systems—we redefine digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 transition-all duration-200 hover:scale-105 hover:shadow-lg border-2">
                Learn More
              </Button>
            </div>
          </div>

          
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
            !showContent ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            <div className=" p-6 rounded-2xl shadow-lg flex justify-center items-center w-full max-w-2xl">
              <Image 
                src="/animated-logo/animation.gif" 
                alt="Project X Innovation Animated Logo" 
                width={450}
                height={150}
                className="w-3/4"
                unoptimized={true}
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 transform rotate-45 blur-lg"></div>
      </div>
    </section>
  )
}