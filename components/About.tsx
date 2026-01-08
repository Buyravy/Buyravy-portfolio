import { User, Briefcase, MapPin, Calendar } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: 'QA Engineer (Intern)',
      company: 'Senzmate (Pvt) Ltd – Sri Lanka',
      period: 'Nov 2024 – Dec 2025',
      description: 'Gained hands-on experience in software testing methodologies, test case design, and quality assurance processes in an agile environment.'
    },
    {
      icon: Briefcase,
      title: 'QA Engineer – Freelance',
      company: 'Commercial Website - KFM Studios',
      period: '2024',
      description: 'Performed comprehensive testing of commercial website including functional testing, cross-browser compatibility, and user experience validation.',
      link: 'https://studiokfm.com'
    },
    {
      icon: Briefcase,
      title: 'QA Engineer – Freelance',
      company: 'Commercial Website - Dattreo',
      period: '2024',
      description: 'Conducted end-to-end testing of e-commerce platform, including payment gateway testing, API validation, and performance testing.',
      link: 'https://dattreo.com'
    }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate about ensuring software quality through systematic testing and continuous improvement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <div className="space-y-6">
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <User className="text-orange-500" size={24} />
                <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-orange-500 mt-1" size={18} />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Malabe, Colombo, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="text-orange-500 mt-1" size={18} />
                  <div>
                    <p className="text-gray-400 text-sm">Experience</p>
                    <p className="text-white">1 Year in Software QA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-400 leading-relaxed">
                Detail-oriented Software QA Engineer with 1 year of industry experience in software testing and quality assurance. 
                Strong hands-on experience in web and mobile testing. Skilled in manual testing, test case design, defect tracking, 
                regression testing, Agile methodologies, SDLC/STLC, and cross-functional collaboration.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Professional Experience</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-500/30"></div>
              
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon
                return (
                  <div key={index} className="relative flex items-start space-x-6 mb-8">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center z-10">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    
                    {/* Experience card */}
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-dark-card border border-dark-border rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-orange-500 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-sm mb-3">
                        {exp.period}
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
