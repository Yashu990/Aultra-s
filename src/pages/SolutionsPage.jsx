import { Link } from 'react-router-dom'

const solutions = [
  {
    icon: '📡',
    title: 'Broadcast & Studio Lighting',
    slug: 'broadcast',
    desc: 'Complete lighting infrastructure for television studios, film sets, news rooms, and OTT production facilities. From single-camera interview sets to full multi-studio broadcast complexes.',
    features: ['ENG & Studio Kits', 'Cyclorama Lighting', 'Key/Fill/Back Setup', 'Chromakey Lighting', 'Dimmer Integration', 'Live Broadcast Ready'],
    clients: 'TV Networks · OTT Studios · Film Production Houses',
  },
  {
    icon: '🏛️',
    title: 'Architectural & Façade Lighting',
    slug: 'architectural',
    desc: 'Transforming commercial, civic, and residential exteriors with precision architectural lighting. From subtle accent features to dramatic full-building façade installations.',
    features: ['LED Façade Systems', 'Uplighting & Grazing', 'Landscape Integration', 'Smart RGB Controls', 'Energy Management', 'Holiday Programming'],
    clients: 'Architects · Real Estate Developers · Smart City Bodies',
  },
  {
    icon: '🎭',
    title: 'Auditorium & Stage Lighting',
    slug: 'auditorium',
    desc: 'Full-spectrum auditorium, theatre, and cultural venue lighting with acoustic integration. Designed for both performance perfection and technical reliability.',
    features: ['Stage Profile Lights', 'Follow Spots', 'LED Wash Systems', 'Control Consoles', 'Acoustic Coordination', 'Emergency Systems'],
    clients: 'Cultural Institutions · Government Venues · Event Spaces',
  },
  {
    icon: '🔧',
    title: 'Turnkey Project Delivery',
    slug: 'turnkey',
    desc: 'Complete end-to-end ownership of complex lighting projects. We design, procure, install, and commission — handling every detail so you don\'t have to.',
    features: ['Site Survey & Design', 'BOQ Preparation', 'Equipment Procurement', 'Installation & Wiring', 'System Integration', 'Testing & Handover'],
    clients: 'Enterprise Clients · Government Bodies · Developers',
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      {/* Page Header */}
      <div className="bg-navy-900 border-b border-white/5">
        <div className="section-container py-16">
          <div className="flex items-center gap-2 text-steel-400 text-sm mb-4">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Solutions</span>
          </div>
          <p className="section-label">What We Do</p>
          <h1 className="section-title">
            Professional Lighting <span className="text-gradient-gold">Solutions</span>
          </h1>
          <p className="text-steel-300 text-lg max-w-2xl mt-4">
            Four core solution verticals — each backed by decades of technical expertise and hundreds of successful project deliveries.
          </p>
        </div>
      </div>

      {/* Solutions List */}
      <div className="section-container py-20 space-y-16">
        {solutions.map((sol, i) => (
          <div key={i} className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
            {/* Content */}
            <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
              <span className="text-4xl mb-5 block">{sol.icon}</span>
              <p className="section-label">{sol.clients}</p>
              <h2 className="font-display font-bold text-white text-3xl mb-4">{sol.title}</h2>
              <div className="divider-gold" />
              <p className="text-steel-300 leading-relaxed mt-5 mb-8">{sol.desc}</p>
              <Link to="/contact" className="btn-primary">
                Enquire About This Solution
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Features */}
            <div className={`bg-navy-800 border border-white/5 p-8 ${i % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
              <h3 className="font-display font-bold text-white text-lg mb-6">What's Included</h3>
              <div className="grid grid-cols-2 gap-4">
                {sol.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0" />
                    <span className="text-steel-300 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-navy-900 border-t border-white/5">
        <div className="section-container py-16 text-center">
          <h2 className="font-display font-bold text-white text-3xl mb-4">
            Don't see your requirement?
          </h2>
          <p className="text-steel-400 mb-8">We handle custom and complex lighting challenges across all industries.</p>
          <Link to="/contact" className="btn-primary">Talk to Our Team</Link>
        </div>
      </div>
    </div>
  )
}
