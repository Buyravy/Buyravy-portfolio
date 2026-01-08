'use client'

import Image from 'next/image'
import { Download, ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-orange-500 text-lg font-semibold">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Buyravy Paheerathan
              </h1>
              <h3 className="text-xl md:text-2xl text-gray-300">
                Software Quality Assurance Engineer
              </h3>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              Detail-oriented Software QA Engineer with 1 year of industry experience in software testing and quality assurance. 
              Strong hands-on experience in web and mobile testing, skilled in manual testing, test case design, 
              defect tracking, and Agile methodologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Contact Me</span>
                <ArrowRight size={20} />
              </button>
              
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>

            <div className="pt-6 space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">Location:</span>
                <span>Malabe, Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">Email:</span>
                <span>buyravypaheerathan@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">Phone:</span>
                <span>+94 74 0057009</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orange blob background */}
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-30 scale-110 animate-glow"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl animate-float">
                <Image
                  src="/profile.jpeg"
                  alt="Buyravy Paheerathan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
