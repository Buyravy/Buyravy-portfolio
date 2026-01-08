'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Github, Linkedin, MessageCircle, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Me' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const contactInfo = [
    {
      icon: Github,
      href: 'https://github.com/Buyravy',
      ariaLabel: 'GitHub Profile'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/buyravy-paheerathan-24b714260',
      ariaLabel: 'LinkedIn Profile'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/94740057009',
      ariaLabel: 'WhatsApp Contact'
    },
    {
      icon: Mail,
      href: 'mailto:buyravypaheerathan@gmail.com',
      ariaLabel: 'Email Contact'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-xl border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Buyravy Paheerathan
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-orange-500 ${
                  activeSection === item.id
                    ? 'text-orange-500 relative'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Contact info & Social - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <Phone size={14} />
              <span>+94 74 0057009</span>
            </div>
            
            <div className="flex items-center space-x-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    aria-label={contact.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <div className="relative flex items-center justify-center w-10 h-10 bg-dark-card/80 backdrop-blur-sm border border-orange-500/20 rounded-lg group-hover:border-orange-500/40 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300" size={16} />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-400 hover:text-white hover:bg-orange-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-orange-500/20 mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:text-orange-500 px-4 py-2 rounded-lg ${
                    activeSection === item.id
                      ? 'text-orange-500 bg-orange-500/10'
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-orange-500/20 mt-4">
                <div className="flex items-center space-x-1 text-sm text-gray-400 px-4 py-2">
                  <Phone size={14} />
                  <span>+94 74 0057009</span>
                </div>
                
                <div className="flex items-center space-x-4 px-4 py-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        aria-label={contact.ariaLabel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <div className="relative flex items-center justify-center w-10 h-10 bg-dark-card/80 backdrop-blur-sm border border-orange-500/20 rounded-lg group-hover:border-orange-500/40 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300" size={16} />
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
