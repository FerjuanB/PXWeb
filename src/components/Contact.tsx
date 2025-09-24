"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script')
    script.src = "https://js.hsforms.net/forms/embed/50479142.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    // Clean up function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* HubSpot Contact Form */}
          <Card className="p-8">
            <div className="hs-form-frame" ref={formContainerRef} data-region="na1" data-form-id="de711370-a909-4f31-92dc-b7bbc89068ce" data-portal-id="50479142"></div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">support@projectxinnovation.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">(718) 540-4794</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">Serving clients worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}