"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Database, Brain, Zap, Globe, Network, ChevronDown, ChevronUp, Users, TrendingUp, Shield } from "lucide-react"

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const services = [
    {
      icon: Bot,
      title: "AI-Powered Process Automation",
      description: "Eliminate manual workflows and accelerate operations with intelligent automation across finance, HR, sales, and supply chain.",
      outcomes: ["Cut manual processes by 75%", "Reduce errors and delivery time", "Free teams for strategic work"],
      technicalDetails: "Custom AI workflows, RPA integration, intelligent document processing, and automated decision-making systems built on your existing infrastructure.",
      primaryCTA: "Talk to an Expert",
      secondaryCTA: "See AI in Action",
      clientResult: "ClientCorp reduced invoice processing time by 80%",
      roi: "ROI within 6 months"
    },
    {
      icon: Database,
      title: "Data Integration & Intelligence",
      description: "Connect fragmented systems (ERP, CRM, EDI, SaaS) into a single source of real-time truth for faster decisions and AI readiness.",
      outcomes: ["Unify 4+ systems into 1 dashboard", "Real-time business intelligence", "Foundation for AI initiatives"],
      technicalDetails: "API orchestration, real-time data pipelines, cloud-native integration, and AI-ready data architecture with enterprise security.",
      primaryCTA: "Integration Assessment",
      secondaryCTA: "View Case Study",
      clientResult: "TechStart unified 6 systems, improving decision speed 60%",
      roi: "3-month payback period"
    },
    {
      icon: Brain,
      title: "AI Readiness Assessment",
      description: "Get an actionable roadmap: we measure your AI maturity, surface automation gaps, and pinpoint ROI opportunities.",
      outcomes: ["Clear AI strategy and roadmap", "Identified automation opportunities", "ROI projections and timeline"],
      technicalDetails: "Comprehensive AI maturity analysis, process mapping, technology stack evaluation, and custom implementation roadmap with risk assessment.",
      primaryCTA: "Take Assessment",
      secondaryCTA: "Book Consultation",
      clientResult: "ManufacturePro identified $2M in automation savings",
      roi: "Assessment pays for itself"
    },
    {
      icon: Zap,
      title: "ERP & NetSuite Optimization",
      description: "Maximize your NetSuite investment with AI-enhanced workflows, custom integrations, and process optimization.",
      outcomes: ["Improved system performance", "Custom AI-powered workflows", "Enhanced user adoption"],
      technicalDetails: "NetSuite customization, SuiteScript development, AI workflow integration, advanced reporting, and performance optimization.",
      primaryCTA: "NetSuite Health Check",
      secondaryCTA: "Request Demo",
      clientResult: "RetailCorp improved NetSuite efficiency by 45%",
      roi: "15% performance increase"
    },
    {
      icon: Globe,
      title: "Next-Gen B2B Digital Experience",
      description: "AI-enhanced interfaces and customer portals that increase engagement, productivity, and future-proof your digital presence.",
      outcomes: ["Increased user engagement", "Streamlined customer experience", "Mobile-first, AI-ready design"],
      technicalDetails: "React/Next.js development, AI-powered personalization, progressive web apps, and accessible design systems with modern UI/UX.",
      primaryCTA: "UX Assessment",
      secondaryCTA: "View Portfolio",
      clientResult: "ServicePro increased customer portal usage 200%",
      roi: "40% boost in user satisfaction"
    },
    {
      icon: Network,
      title: "EDI & Business Integration",
      description: "Seamless electronic data interchange and API integrations that connect your business ecosystem for automated workflows.",
      outcomes: ["Automated B2B communications", "Reduced processing time", "Error-free data exchange"],
      technicalDetails: "EDI X12/EDIFACT protocols, API gateway management, B2B partner onboarding, and automated compliance monitoring.",
      primaryCTA: "Integration Audit",
      secondaryCTA: "Get Started",
      clientResult: "LogisticsCorp automated 90% of EDI transactions",
      roi: "50% reduction in processing costs"
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            AI-First Technology Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your business with proven AI implementations, seamless integrations, and strategic consulting that delivers measurable ROI
          </p>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>200+ Businesses Transformed</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isExpanded = expandedCard === index
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border-muted hover:border-primary/50 relative overflow-hidden"
              >
                {/* ROI Badge */}
                <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                  {service.roi}
                </div>

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-primary/10 p-4 rounded-xl w-fit group-hover:bg-primary/20 transition-colors mb-4">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key Outcomes */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Result */}
                  <div className="bg-muted/50 p-3 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground italic">&quot;{service.clientResult}&quot;</p>
                  </div>

                  {/* Progressive Disclosure */}
                  {isExpanded && (
                    <div className="border-t border-muted pt-4 animate-in slide-in-from-top-2 duration-300">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Technical Details:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.technicalDetails}
                      </p>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-col gap-2 pt-2">
                    {/* <Button 
                      size="sm" 
                      className="w-full bg-primary hover:bg-primary/90 text-black font-medium"
                    >
                      {service.primaryCTA}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      {service.secondaryCTA}
                    </Button> */}
                  </div>

                  {/* Expand/Collapse Technical Details */}
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-2"
                  >
                    {isExpanded ? 'Less Details' : 'Technical Details'}
                    {isExpanded ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Not sure which solution fits your needs?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our AI readiness assessment to get personalized recommendations and a custom implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-medium px-8">
              Take Free Assessment
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}