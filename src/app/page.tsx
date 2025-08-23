import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Team from "@/components/Team"
import AssessmentQuiz from "@/components/AssessmentQuiz"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero />
      <About />
      <Services />
      <Team />
      <AssessmentQuiz />
      <Contact />
      <Footer />
    </div>
  )
}
