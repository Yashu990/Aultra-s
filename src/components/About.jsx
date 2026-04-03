export default function About() {
  return (
    <section id="about" className="py-28 bg-navy-800 relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title mb-6">
              Five Decades of <span className="text-gradient-gold">Illuminating</span> India's Most
              Important Spaces
            </h2>
            <div className="divider-gold" />

            <p className="text-steel-300 leading-relaxed mt-6 mb-4">
              Founded in 1975 as a trading company for TV and film lighting equipment, Aultra has
              grown into India's foremost professional lighting solutions provider — serving
              broadcasters, architects, government bodies, and cultural institutions.
            </p>
            <p className="text-steel-300 leading-relaxed mb-8">
              Incorporated in its current form in 2004, the company continues to operate from
              New Delhi — delivering world-class technical expertise and end-to-end project ownership
              on every engagement.
            </p>

            {/* Differentiators */}
            <div className="space-y-4 mb-8">
              {[
                'Specialized in professional-grade studio and broadcast lighting',
                'Full turnkey delivery: design, supply, install, commission',
                'Integration of lighting systems with acoustics and infrastructure',
                'PMO and government-level project credentials',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 border border-gold-400 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-gold-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  </div>
                  <span className="text-steel-300 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Work With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/30 via-gold-400/60 to-gold-400/30" />
            <div className="space-y-10">
              {[
                { year: '1975', title: 'Founded as Trading Company', desc: 'Began operations supplying TV & film lighting equipment across India.' },
                { year: '1990s', title: 'Broadcast Expansion', desc: 'Became a key supplier for major Indian television studios and production houses.' },
                { year: '2004', title: 'Incorporation & Growth', desc: 'Formally incorporated. Expanded to full-service architectural and stage lighting.' },
                { year: 'Today', title: 'PMO-Level Execution', desc: 'Delivering high-stakes lighting infrastructure for government and enterprise clients.' },
              ].map((item, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 border-2 border-gold-400 bg-navy-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  </div>
                  <div className="text-gold-400 text-sm font-bold tracking-wider mb-1">{item.year}</div>
                  <h4 className="font-display font-bold text-white text-base mb-1">{item.title}</h4>
                  <p className="text-steel-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
