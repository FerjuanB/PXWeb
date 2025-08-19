import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Palette, Network, Cog } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Database,
      title: "ERP Solutions (NetSuite)",
      description: "Complete NetSuite implementation, customization, and optimization for streamlined business operations.",
    },
    {
      icon: Palette,
      title: "Website UI Design",
      description: "Modern, responsive user interfaces that enhance user experience and drive engagement.",
    },
    {
      icon: Network,
      title: "EDI Connections",
      description: "Seamless electronic data interchange solutions for efficient B2B communications.",
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored technology solutions designed specifically for your unique business requirements.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-muted hover:border-primary/30"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}