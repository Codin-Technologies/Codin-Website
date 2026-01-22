import GravityWells from './GravityWells';
import TypedText from './TypedText';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-36 lg:pt-40 bg-gradient-to-b from-white via-blue-50 to-blue-50">
        <div className="absolute inset-0 pointer-events-none hero-grid-overlay z-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <TypedText 
              text="We build digital products that power Africa's Digital Revolution" 
              speed={50}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Codin Technologies engineers secure, scalable, and high-performance software for African companies ready to compete globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-blue-200 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">5+</div>
              <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">SaaS Platform in Active Production</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">25+</div>
              <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">Technology Mastered</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">99%</div>
              <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">Client Satisfaction</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">10+</div>
              <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">Years Combined Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border-t-4 border-b-4 border-blue-200">
        <div className="absolute inset-0 pointer-events-none hero-grid-overlay z-0 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-sm font-semibold text-blue-600 uppercase">THE CHALLENGE</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
            What Keeps African Businesses Grounded?
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Technology adoption in Africa faces unique challenges. Understanding these barriers is the first
            step to overcoming them.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 p-8 shadow-sm text-left cursor-pointer hover:shadow-lg hover:border-red-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 00-6 0v2c0 1.657 1.343 3 3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">Access Barriers</h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">High costs, poor infrastructure, and limited awareness prevent companies from even reaching technology solutions.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform"><span className="mt-1 text-red-600 font-bold">●</span> Prohibitive upfront costs</li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-75"><span className="mt-1 text-red-600 font-bold">●</span> Weak internet & infrastructure</li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-100"><span className="mt-1 text-red-600 font-bold">●</span> Regulatory complexities</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 p-8 shadow-sm text-left cursor-pointer hover:shadow-lg hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20H4v-2a4 4 0 014-4h1" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">Adoption Challenges</h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">Even when accessible, cultural resistance and poor user experience stop teams from embracing new technology.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform"><span className="mt-1 text-yellow-600 font-bold">●</span> Fear of the unknown</li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-75"><span className="mt-1 text-yellow-600 font-bold">●</span> Skills gap & training needs</li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-100"><span className="mt-1 text-yellow-600 font-bold">●</span> Cultural resistance to change</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-8 shadow-sm text-left cursor-pointer hover:shadow-lg hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v4m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">Implementation Failures</h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">Without proper strategy, leadership, and change management, technology projects crash after liftoff.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform"><span className="mt-1 text-purple-600 font-bold">●</span> Lack of clear strategy</li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-75"><span className="mt-1 text-purple-600 font-bold">●</span> Poor change management</li>
                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-100"><span className="mt-1 text-purple-600 font-bold">●</span> Weak leadership & ownership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GravityWells />

      {/* Approach Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-50 via-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none hero-grid-overlay z-0 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-indigo-600">OUR APPROACH</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
              How We Make Technology Work for You
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              A three-layer approach to digital transformation: Access, Adoption, and Implementation
            </p>
          </div>

          <div className="space-y-6">
            {/* Layer 1 */}
            <div className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-600 text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 00-6 0v2c0 1.657 1.343 3 3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">1. Making Technology Accessible</h3>
                  <p className="text-gray-600 mt-1">Removing barriers so companies can reach and use technology without obstacles</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-16">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Flexible Pricing Models</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Cloud deployments, not capex; fits any budget</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Infrastructure Support</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Solutions that work with low bandwidth and older hardware</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Local Compliance</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Meeting regulatory standards for seamless adoption</p>
                </div>
              </div>
            </div>

            {/* Layer 2 */}
            <div className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20H4v-2a4 4 0 014-4h1" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">2. Making Technology Adoptable</h3>
                  <p className="text-gray-600 mt-1">Getting users and stakeholders to actually embrace and use the technology</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-16">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">User-Centered Design</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Intuitive interfaces aligned with daily workflows</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Comprehensive Training</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Hands-on support to build confidence and capability</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Change Champions</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Building internal advocates who drive adoption</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Clear Value Communication</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Showing how technology improves daily work</p>
                </div>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-600 text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">3. Making Technology Implementable</h3>
                  <p className="text-gray-600 mt-1">Ensuring successful deployment with measurable results and long-term success</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-16">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Strategic Roadmap</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Clear milestones and priorities for success</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Change Management</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Structured support for successful organizational transformation</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Integration Support</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Seamless connection with existing systems</p>
                </div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span className="text-gray-900 font-semibold">Continuous Improvement</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Ongoing monitoring, updates, and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase mb-3">Success Stories</p>
            <h2 className="text-4xl font-bold text-gray-900">Trusted by Leading African Companies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Codin transformed our digital infrastructure. The team was exceptional—responsive, knowledgeable, and truly invested in our success.",
                author: "Amara Okonkwo",
                role: "CTO, TechAfrica Inc.",
                avatar: "👨‍💼",
                color: "from-blue-400 to-blue-600"
              },
              {
                quote: "We went from struggling with legacy systems to having modern, scalable solutions. The implementation was seamless.",
                author: "Kwame Asante",
                role: "Head of Engineering, Pan-African Services",
                avatar: "👨‍💻",
                color: "from-green-400 to-green-600"
              },
              {
                quote: "Best investment we made. Their approach to change management meant our entire team adopted the new systems without friction.",
                author: "Zainab Adeyemi",
                role: "Operations Director, NextGen Nigeria",
                avatar: "👩‍💼",
                color: "from-purple-400 to-purple-600"
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="group relative bg-white rounded-xl p-8 border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color}`} />
                
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 group-hover:scale-110 transition-transform" style={{transitionDelay: `${i * 50}ms`}}>⭐</span>
                  ))}
                </div>

                <p className="text-gray-700 italic mb-6 text-base group-hover:text-gray-900 transition-colors">"{testimonial.quote}"</p>
                
                {/* Author info */}
                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <div className={`text-4xl w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's New Section - Featured Stories */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Latest Updates</p>
              <h2 className="text-4xl font-bold text-gray-900">What's new</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Story 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1M12 12a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">Codin expands leadership team with industry veterans</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">New hires bring 50+ combined years of experience in digital transformation and enterprise software</p>
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-600 text-sm font-semibold">Read more →</span>
              </div>
            </div>

            {/* Story 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-green-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">Africa's digital economy grew 35% in 2025</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">Market insights show accelerating technology adoption across fintech, e-commerce, and enterprise software sectors</p>
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-600 text-sm font-semibold">Read more →</span>
              </div>
            </div>

            {/* Story 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 bg-gray-200 rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">Building secure cloud infrastructure: Best practices for Africa</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">Technical deep-dive on compliance, latency optimization, and disaster recovery for regional deployments</p>
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-600 text-sm font-semibold">Read more →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 font-semibold mb-8">Trusted by companies across Africa</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center">
            {["TechAfrica", "Pan-Africa", "NextGen", "Digital Hub", "Innovation Labs", "Growth Co."].map((company, idx) => (
              <div key={idx} className="text-center">
                <div className="text-gray-400 font-semibold text-sm">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-10">Join 50+ companies building the future of African technology.</p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
            Start Your Transformation
          </button>
        </div>
      </section>
    </main>
  );
}