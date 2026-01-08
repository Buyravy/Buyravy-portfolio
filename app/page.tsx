import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
// import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}
