import { CheckCircle, Bug, FileText, Zap, Shield, Code } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: CheckCircle,
      title: 'Manual Testing',
      description: 'Comprehensive manual testing methodologies including functional, usability, and compatibility testing across web and mobile platforms.'
    },
    {
      icon: FileText,
      title: 'Test Case Design & Execution',
      description: 'Detailed test case creation, execution, and traceability matrix development to ensure complete test coverage.'
    },
    {
      icon: Bug,
      title: 'Bug Reporting & Defect Tracking',
      description: 'Expert defect lifecycle management using Jira with detailed bug reports, reproduction steps, and severity classification.'
    },
    {
      icon: Zap,
      title: 'API Testing',
      description: 'REST API testing using Postman with endpoint validation, response verification, and integration testing.'
    },
    {
      icon: Shield,
      title: 'Regression & Sprint Testing',
      description: 'Agile-focused regression testing and sprint validation to maintain product quality throughout development cycles.'
    },
    {
      icon: Code,
      title: 'Automation Basics',
      description: 'Foundation in test automation using Selenium WebDriver and Maven for basic web application testing.'
    }
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            QA Services
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive quality assurance services designed to ensure your software meets the highest standards of reliability, performance, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-lg mb-6 group-hover:bg-orange-500/30 transition-colors">
                  <IconComponent className="text-orange-500" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
