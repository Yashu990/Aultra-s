import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      {/* Page Header */}
      <div className="bg-navy-900 border-b border-white/5">
        <div className="section-container py-16">
          <div className="flex items-center gap-2 text-steel-400 text-sm mb-4">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">About Us</span>
          </div>
          <p className="section-label">Our Story</p>
          <h1 className="section-title">
            Five Decades of <span className="text-gradient-gold">Illuminating</span> India
          </h1>
        </div>
      </div>

      {/* Heritage Section */}
      <div className="section-container py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400/30 via-gold-400/60 to-transparent" />
            <div className="space-y-12">
              {[
                { year: '1975', title: 'Founded as Trading Company', desc: 'Began operations from New Delhi, supplying TV & film lighting equipment to India\'s growing broadcast industry.' },
                { year: '1996', title: 'Manufacturing Operations Begin', desc: 'Expanded beyond trading — launched in-house manufacturing of studio and auditorium lighting equipment from Okhla, New Delhi.' },
                { year: '2000s', title: 'Broadcast Expansion', desc: 'Became a preferred supplier for major Indian television studios, satellite channels, and film production houses.' },
                { year: '2004', title: 'Incorporation as Pvt. Ltd.', desc: 'Formally incorporated as Aultra Lighting Systems Pvt. Ltd. Scaled operations to offer complete turnkey project delivery.' },
                { year: '2010+', title: 'Government & Institutional Projects', desc: 'Expanded into high-stakes government, institutional, and legislative project delivery across India.' },
                { year: 'Today', title: 'India & Beyond', desc: '300+ clients. Projects delivered across India, Asia, and Africa. One of India\'s most trusted lighting infrastructure partners.' },
              ].map((item, i) => (
                <div key={i} className="relative pl-14">
                  <div className="absolute left-0 top-1 w-8 h-8 border-2 border-gold-400 bg-navy-950 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  </div>
                  <div className="text-gold-400 text-sm font-bold tracking-wider mb-1">{item.year}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div>
            <h2 className="font-display font-bold text-white text-2xl mb-6">
              Why <span className="text-gradient-gold">Aultra</span> Stands Apart
            </h2>
            <div className="divider-gold" />
            <p className="text-steel-300 leading-relaxed mt-6 mb-8">
              In a market crowded with suppliers, Aultra operates as a true technical partner —
              owning every phase of delivery from initial concept through to final commissioning.
            </p>

            <div className="space-y-4 mb-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 overflow-hidden border border-white/5 relative group">
                  <div className="absolute inset-0 bg-navy-950/20 z-10" />
                  <img src="/images/corporate.png" alt="Corporate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="h-40 overflow-hidden border border-white/5 relative group">
                  <div className="absolute inset-0 bg-navy-950/20 z-10" />
                  <img src="/images/design.png" alt="Technical Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              
              {[
                { title: '50 Years of Domain Expertise', desc: 'Deep technical knowledge built over decades across broadcast, architectural, and government verticals.' },
                { title: 'End-to-End Ownership', desc: 'We design, source, install, integrate, and commission. No hand-offs, no gaps.' },
                { title: 'Acoustic & Infrastructure Integration', desc: 'Unique capability to integrate lighting systems with acoustic and structural infrastructure.' },
                { title: 'Government-Grade Credentials', desc: 'Trusted by government bodies with the highest security and quality requirements.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-navy-800 border border-white/5 hover:border-gold-400/20 transition-colors duration-300">
                  <div className="w-6 h-6 border border-gold-400 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-gold-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-steel-400 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-primary w-fit">
              Partner With Aultra
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
