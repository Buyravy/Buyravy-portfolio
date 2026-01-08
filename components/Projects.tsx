import { ExternalLink, Code, Globe, Smartphone, Database, Server } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-learning Platform',
      tech: 'React.js | Spring Boot | MongoDB',
      description: 'Comprehensive online learning management system with course creation, student tracking, and assessment modules.',
      features: [
        'User authentication and authorization',
        'Course management and content delivery',
        'Student progress tracking and analytics',
        'Interactive assessment and grading system'
      ],
      icon: Code,
      link: 'https://github.com/buyravypaheerathan/e-learning-platform'
    },
    {
      title: 'Task Management Mobile App',
      tech: 'Java | Kotlin',
      description: 'Native Android application for task management with team collaboration features and real-time synchronization.',
      features: [
        'Task creation and assignment',
        'Team collaboration and messaging',
        'Real-time synchronization',
        'Push notifications and reminders'
      ],
      icon: Smartphone,
      link: 'https://github.com/buyravypaheerathan/task-management-app'
    },
    {
      title: 'E-Commerce Web Application',
      tech: 'React | Express.js | Node.js | MongoDB',
      description: 'Full-stack e-commerce platform with product catalog, shopping cart, payment integration, and order management.',
      features: [
        'Product catalog with search and filtering',
        'Shopping cart and wishlist functionality',
        'Secure payment gateway integration',
        'Order tracking and management system'
      ],
      icon: Globe,
      link: 'https://github.com/buyravypaheerathan/ecommerce-platform'
    },
    {
      title: 'Hotel Reservation for Wedding',
      tech: 'PHP | HTML | CSS | JavaScript',
      description: 'Specialized wedding hotel booking system with venue selection, catering options, and event planning features.',
      features: [
        'Venue search and booking system',
        'Casting and menu selection',
        'Event planning tools',
        'Payment processing and invoicing'
      ],
      icon: Code,
      link: 'https://github.com/buyravypaheerathan/hotel-reservation'
    },
    {
      title: 'Online Ticket Reservation System',
      tech: 'Kotlin | Java',
      description: 'Mobile ticketing application for events and transportation with QR code generation and validation.',
      features: [
        'Event and schedule management',
        'QR code ticket generation',
        'Mobile ticket validation',
        'Real-time seat availability'
      ],
      icon: Smartphone,
      link: 'https://github.com/buyravypaheerathan/ticket-reservation'
    },
    {
      title: 'Mobile Game Application',
      tech: 'Kotlin | Java',
      description: 'Interactive mobile game with multiplayer features, leaderboards, and in-app purchases.',
      features: [
        'Multiplayer gaming functionality',
        'Leaderboard and achievement system',
        'In-app purchase integration',
        'Cross-platform compatibility'
      ],
      icon: Globe,
      link: 'https://github.com/buyravypaheerathan/mobile-game'
    },
    {
      title: 'Waste Collection Management System',
      tech: 'React | Express.js | Node.js | MongoDB',
      description: 'Smart waste management platform with route optimization, scheduling, and real-time tracking features.',
      features: [
        'Route optimization algorithms',
        'Real-time GPS tracking',
        'Automated scheduling system',
        'Analytics and reporting dashboard'
      ],
      icon: Database,
      link: 'https://github.com/buyravypaheerathan/waste-management'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Academic Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Diverse range of academic projects showcasing full-stack development skills and modern technology implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div
                key={index}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                    <IconComponent className="text-orange-500" size={24} />
                  </div>
                  <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={20} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-orange-400 text-sm font-medium mb-3">
                  {project.tech}
                </p>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center space-x-2">
                    <Server size={16} className="text-orange-500" />
                    <span>Key Features</span>
                  </h4>
                  
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Database size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-xs leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
