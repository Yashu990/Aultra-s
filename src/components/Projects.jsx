const projects = [
  {
    tag: 'Government · PMO Level',
    title: 'Prime Minister\'s Office Installation',
    image: '/images/studio.png',
    desc: 'High-security, high-precision lighting infrastructure for one of India\'s most prominent government facilities. Designed for broadcast-grade quality and operational reliability.',
    specs: ['LED Overhaul', 'Dimmer Integration', 'Broadcast Grade'],
    highlight: true,
  },
  {
    tag: 'Broadcast · National Media',
    title: 'National TV Studio Complex',
    image: '/images/studio.png',
    desc: 'End-to-end studio lighting setup for a major Indian news and entertainment broadcaster, covering multiple studio floors with full dimmer and control integration.',
    specs: ['Multi-floor Setup', 'DMX Controls', '24/7 Operations'],
    highlight: false,
  },
  {
    tag: 'Cultural · Public Infrastructure',
    title: 'Auditorium & Events Venue',
    image: '/images/auditorium.png',
    desc: 'Complete stage and auditorium lighting solution with acoustic integration for a 2,000-seat cultural center in Delhi NCR.',
    specs: ['Stage Lighting', 'Acoustic Integration', '2000 Seats'],
    highlight: false,
  },
  {
    tag: 'Architecture · Commercial',
    title: 'Corporate Headquarter Façade',
    image: '/images/facade.png',
    desc: 'Architectural façade lighting for a landmark commercial tower — combining smart control for programmable light scenes and energy efficiency.',
    specs: ['Smart Controls', 'Façade LEDs', 'Energy Efficient'],
    highlight: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="section-label">Case Studies</p>
          <h2 className="section-title">
            Projects That <span className="text-gradient-gold">Define India's</span> Lighting Standards
          </h2>
          <div className="divider-gold" />
          <p className="text-steel-300 leading-relaxed mt-4">
            Our portfolio spans government commissions, national broadcasters, cultural institutions,
            and landmark commercial properties.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`relative flex flex-col border transition-all duration-300 group overflow-hidden ${
                proj.highlight
                  ? 'border-gold-400/40 bg-gradient-to-br from-navy-800 to-navy-900 glow-border'
                  : 'border-white/5 bg-navy-800 hover:border-gold-400/30'
              }`}
            >
              {/* Compact Image Header */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/10 transition-colors duration-500 z-10" />
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {proj.highlight && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-navy-950/80 backdrop-blur px-3 py-1.5 border border-gold-400/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                    <span className="text-gold-400 text-[10px] font-bold tracking-widest uppercase">Featured</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7 relative">
                <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gold-400/60 mb-3">{proj.tag}</span>
                <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-5 line-clamp-2">{proj.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.specs.map((spec, j) => (
                    <span key={j} className="text-[9px] font-bold tracking-widest uppercase text-steel-400 border border-white/5 px-3 py-1 bg-white/5">
                      {spec}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="flex items-center gap-2 text-gold-400 text-[10px] font-bold tracking-widest uppercase hover:gap-3 transition-all duration-300 group/link">
                  View Solution
                  <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
