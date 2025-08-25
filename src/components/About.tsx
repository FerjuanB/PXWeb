import { Card } from "@/components/ui/card"
import { Zap, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Project X Innovation
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We blend deep analytical insight with creative technology to turn your technical challenges into powerful business opportunities. Our competitive edge lies in anticipating change and driving innovation proactively.
              </p>
              
              <p>
                Specializing in enterprise-level solutions for mid-size companies and international enterprises, we deliver transformative results that go beyond standard implementations.
              </p>
              
              <p>
                Our expertise spans ERP systems, UI design, and EDI connections, ensuring your business operates at peak efficiency in today&apos;s digital landscape.
              </p>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="space-y-6">
            <Card className="p-6 bg-background border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Innovation First</h3>
                  <p className="text-muted-foreground">Proactive technology solutions that anticipate your needs</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Strategic Clarity</h3>
                  <p className="text-muted-foreground">Transform complexity into clear, actionable solutions</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Digital Experiences</h3>
                  <p className="text-muted-foreground">Redefine how your business interacts with technology</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}