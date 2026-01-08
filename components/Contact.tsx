'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, Github, Linkedin, MessageCircle, Sparkles, Globe, Zap, Shield, Star } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to a backend service
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/buyravypaheerathan',
      href: 'https://github.com/Buyravy',
      gradient: 'from-orange-500/20 to-orange-600/20',
      border: 'border-orange-500/30',
      iconBg: 'bg-orange-500/10'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/buyravypaheerathan',
      href: 'https://www.linkedin.com/in/buyravy-paheerathan-24b714260',
      gradient: 'from-orange-500/20 to-orange-600/20',
      border: 'border-orange-500/30',
      iconBg: 'bg-orange-500/10'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+94 74 0057009',
      href: 'https://wa.me/94740057009',
      gradient: 'from-orange-500/20 to-orange-600/20',
      border: 'border-orange-500/30',
      iconBg: 'bg-orange-500/10'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'buyravypaheerathan@gmail.com',
      href: 'mailto:buyravypaheerathan@gmail.com',
      gradient: 'from-orange-500/20 to-orange-600/20',
      border: 'border-orange-500/30',
      iconBg: 'bg-orange-500/10'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-orange-500 mr-3 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In Touch
            </h2>
            <Sparkles className="text-orange-500 ml-3 animate-pulse" size={32} />
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Let's connect and create something extraordinary together. 
            <span className="text-orange-400 font-semibold"> Your next project awaits!</span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Premium Contact Cards */}
          <div className="bg-gradient-to-br from-dark-card/90 to-dark-card/60 backdrop-blur-xl border border-orange-500/20 rounded-2xl p-8 shadow-2xl shadow-orange-500/10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500/20 rounded-xl mr-4 border border-orange-500/30">
                <Globe className="text-orange-500" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Connect With Me</h3>
                <p className="text-gray-400">Available 24/7 for opportunities</p>
              </div>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden bg-gradient-to-r ${info.gradient} ${info.border} border rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative bg-dark-bg/80 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                      <div className={`p-3 ${info.iconBg} rounded-xl border ${info.border}`}>
                        <IconComponent className="text-orange-500" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm">{info.label}</p>
                        <p className="text-gray-400 text-xs">{info.value}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Zap className="text-orange-400" size={20} />
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
