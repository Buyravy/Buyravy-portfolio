import { CheckCircle, Code, Database, Globe, Smartphone, Server } from 'lucide-react'

const Skills = () => {
  const skillsData = {
    'Testing Types': [
      'Manual Testing',
      'API Testing', 
      'UI/UX Testing',
      'Automation Testing'
    ],
    'Test Design': [
      'Test Case Design & Execution',
      'Traceability Matrix'
    ],
    'Defect & Project Management': [
      'Bug Life Cycle',
      'Sprint Testing',
      'Agile'
    ],
    'Tools': [
      'Jira',
      'Postman',
      'Git/GitHub',
      'REST APIs',
      'Selenium WebDriver',
      'Maven (Basic)'
    ],
    'Languages': [
      'Java',
      'JavaScript',
      'Python',
      'C',
      'C++',
      'PHP'
    ],
    'Frontend': [
      'React.js',
      'Next.js',
      'HTML',
      'CSS'
    ],
    'Backend': [
      'Node.js',
      'Express.js',
      'PHP',
      'Spring Boot'
    ],
    'Mobile': [
      'React Native',
      'Kotlin',
      'Java'
    ],
    'Databases': [
      'MongoDB',
      'MySQL',
      'SQL Server',
      'PostgreSQL'
    ]
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Testing Types':
        return CheckCircle
      case 'Test Design':
        return Code
      case 'Defect & Project Management':
        return Globe
      case 'Tools':
        return Server
      case 'Languages':
        return Code
      case 'Frontend':
        return Globe
      case 'Backend':
        return Server
      case 'Mobile':
        return Smartphone
      case 'Databases':
        return Database
      default:
        return CheckCircle
    }
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive skill set covering software testing methodologies, tools, and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => {
            const IconComponent = getCategoryIcon(category)
            return (
              <div
                key={category}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-orange-500/20 rounded-lg">
                    <IconComponent className="text-orange-500" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm text-orange-300 hover:bg-orange-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Experience Level Indicator */}
        <div className="mt-16 bg-dark-card border border-dark-border rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Proficiency Overview
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Manual Testing & QA Processes</span>
                  <span className="text-orange-500">Expert</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Test Case Design & Documentation</span>
                  <span className="text-orange-500">Advanced</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">API Testing (Postman)</span>
                  <span className="text-orange-500">Advanced</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Defect Tracking (Jira)</span>
                  <span className="text-orange-500">Expert</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Test Automation (Selenium)</span>
                  <span className="text-orange-500">Intermediate</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Agile & Sprint Testing</span>
                  <span className="text-orange-500">Advanced</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
