import Image from "next/image"
import { Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image 
              src="/project_X_logo-new.png" 
              alt="Project X Innovation Logo" 
              width={160}
              height={50}
              className="w-40 mb-4 filter brightness-0 invert"
            />
            <p className="text-background/80 mb-4">
              Transforming technological complexity into strategic clarity for businesses worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>ERP Solutions</li>
              <li>UI Design</li>
              <li>EDI Connections</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>info@projectxinnovation.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                <Link href="https://www.linkedin.com/company/project-x-innovation" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4 mr-2" />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Project X Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}