import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
     href: 'https://github.com/Buyravy',
      ariaLabel: 'GitHub Profile'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/buyravy-paheerathan-24b714260',
      ariaLabel: 'LinkedIn Profile'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/94740057009',
      ariaLabel: 'WhatsApp Contact'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:buyravypaheerathan@gmail.com',
      ariaLabel: 'Email Contact'
    }
  ]

  return (
    <footer className="bg-dark-bg border-t border-dark-border relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-8">
          {/* Brand & Social Icons */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Buyravy Paheerathan
            </h3>
            
            <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
              Detail-oriented Software QA Engineer dedicated to ensuring software quality through 
              comprehensive testing methodologies and continuous improvement.
            </p>
            
            {/* Polished Social Icons */}
            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-dark-card/80 to-dark-card/60 backdrop-blur-sm border border-orange-500/20 rounded-xl group-hover:border-orange-500/40 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300" size={20} />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>


        </div>
      </div>
    </footer>
  )
}

export default Footer
