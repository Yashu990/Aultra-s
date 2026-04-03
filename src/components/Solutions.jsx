const solutions = [
  {
    image: '/images/film.png',
    title: 'Broadcast & Studio',
    desc: 'High-performance lighting systems engineered for television, film production, and media studios.',
    tags: ['TV Studios', 'Film Sets', 'OTT'],
  },
  {
    image: '/images/corporate.png',
    title: 'Architectural & Façade',
    desc: 'Transforming building exteriors and landscapes with precision-controlled lighting for civic projects.',
    tags: ['Façade', 'Smart City', 'Landscape'],
  },
  {
    image: '/images/auditorium.png',
    title: 'Auditoriums & Theatres',
    desc: 'Full-spectrum stage lighting and acoustic integration for prestigious cultural venues and performance spaces.',
    tags: ['Stage Wash', 'Profile', 'Spotlight'],
  },
  {
    image: '/images/design.png',
    title: 'Integrated Design',
    desc: 'Bespoke lighting architecture and acoustic integration engineered in-house for mission-critical venues.',
    tags: ['Acoustics', 'CAD Design', 'Consultancy'],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-28 bg-navy-900 border-b border-white/5 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="section-label">Core Verticals</p>
          <h2 className="section-title mb-4">
            Specialized <span className="text-gradient-gold">Infrastructure</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-steel-300 leading-relaxed mt-4">
            We deliver end-to-end lighting solutions for environments where failure is not an option. 
            From broadcast live-to-air to high-security institutional projects.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, i) => (
            <div key={i} className="relative group cursor-pointer overflow-hidden border border-white/5 bg-navy-800 hover:border-gold-400/30 transition-all duration-500">
              {/* Image Header */}
              <div className="h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-gold-400 transition-colors duration-300">
                  {sol.title}
                </h3>
                <p className="text-steel-400 text-xs leading-relaxed mb-5">{sol.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {sol.tags.map((tag, j) => (
                    <span key={j} className="text-[9px] font-bold tracking-widest uppercase text-gold-400/70 border border-gold-400/20 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
