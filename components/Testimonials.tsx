import { Quote, Star, User } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kayaththiri Thillairasa',
      role: 'Senior Automation Engineer',
      company: 'Harlem Next (Netherlands)',
      content: 'Buyravy demonstrates exceptional attention to detail and a thorough understanding of quality assurance principles. His systematic approach to test case design and execution has consistently helped our teams deliver high-quality software releases.',
      rating: 5
    },
    {
      name: 'Project Manager',
      role: 'Senzmate (Pvt) Ltd',
      company: 'Sri Lanka',
      content: 'During his internship, Buyravy showed remarkable dedication to learning and implementing QA best practices. His ability to quickly grasp complex testing methodologies and apply them effectively was impressive.',
      rating: 5
    },
    {
      name: 'Development Team Lead',
      role: 'KFM Studios',
      company: 'Sri Lanka',
      content: 'Working with Buyravy on our commercial website project was a pleasure. His detailed bug reports and clear communication helped us identify and resolve issues quickly, significantly improving our development workflow.',
      rating: 5
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-600'}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client & Professional Testimonials
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Feedback from colleagues and clients about my work in quality assurance and software testing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-orange-500/20">
                <Quote size={32} />
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-500/20 rounded-full">
                  <User className="text-orange-500" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-orange-400 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Referee Section */}
        <div className="mt-16 bg-dark-card border border-dark-border rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Professional Reference
          </h3>
          <div className="text-center">
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-orange-500">Kayaththiri Thillairasa</span>
            </p>
            <p className="text-gray-400">
              Senior Automation Engineer at Harlem Next (Netherlands)
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Available for professional references upon request
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
