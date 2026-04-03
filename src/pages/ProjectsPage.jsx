import { Link } from 'react-router-dom'

const projects = [
  {
    tag: 'Government · PMO Level',
    title: "Prime Minister's Office — Lighting Infrastructure",
    location: 'New Delhi, India',
    desc: "High-security, broadcast-grade lighting infrastructure for one of India's most prominent government facilities. Precision-engineered to meet the strictest operational reliability and aesthetic standards.",
    scope: ['Complete LED overhaul', 'Custom dimmer integration', 'Emergency backup systems', 'Broadcast-grade colour rendering'],
    highlight: true,
  },
  {
    tag: 'Broadcast · National Network',
    title: 'National TV Broadcaster — Multi-Studio Complex',
    location: 'New Delhi, India',
    desc: 'End-to-end studio lighting for a major Indian news and entertainment broadcaster. Covered multiple studio floors including news, debate, and entertainment sets with full DMX control integration.',
    scope: ['Multi-studio deployment', 'Full DMX network', 'News & entertainment sets', '24/7 operational uptime'],
    highlight: false,
  },
  {
    tag: 'Cultural · Public Infrastructure',
    title: 'Government Auditorium — 2,000 Seat Cultural Centre',
    location: 'Delhi NCR',
    desc: 'Complete stage, auditorium, and foyer lighting design for a 2,000-seat cultural centre. Integrated lighting with acoustic architecture and included programmable show lighting.',
    scope: ['Stage profile spots', 'LED wash systems', 'Follow spots', 'Acoustic coordination'],
    highlight: false,
  },
  {
    tag: 'Architecture · Commercial',
    title: 'Corporate Tower — Façade Lighting',
    location: 'Gurugram, India',
    desc: 'Architectural façade lighting for a landmark commercial tower in the NCR. Smart RGB control system allowing programmable seasonal and event lighting scenes with energy monitoring.',
    scope: ['RGB LED façade', 'Smart scene control', 'Energy monitoring', 'Custom programming'],
    highlight: false,
  },
  {
    tag: 'Film Production',
    title: 'Feature Film Studio — Full Lighting Package',
    location: 'Mumbai, India',
    desc: 'Complete lighting package supply and installation for a large-scale feature film studio. Included ENG kits, studio fixtures, grip equipment, and full dimmer infrastructure.',
    scope: ['Full fixture supply', 'Dimmer infrastructure', 'Grip equipment', 'On-call technical support'],
    highlight: false,
  },
  {
    tag: 'Education · Institutional',
    title: 'University Convocation Hall',
    location: 'Delhi, India',
    desc: 'Lighting design and installation for a university convocation hall seating 1,500. Designed for both formal ceremony use and flexible event lighting with full DMX control.',
    scope: ['Ceremony lighting', 'Flexible event setup', 'DMX integration', '1,500 seat capacity'],
    highlight: false,
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      {/* Page Header */}
      <div className="bg-navy-900 border-b border-white/5">
        <div className="section-container py-16">
          <div className="flex items-center gap-2 text-steel-400 text-sm mb-4">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Projects</span>
          </div>
          <p className="section-label">Case Studies</p>
          <h1 className="section-title">
            Projects That <span className="text-gradient-gold">Define Standards</span>
          </h1>
          <p className="text-steel-300 text-lg max-w-2xl mt-4">
            A selection of milestone projects across government, broadcast, cultural, and commercial sectors.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="section-container py-20">
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className={`relative p-8 border transition-all duration-500 group hover:-translate-y-1 ${
                proj.highlight
                  ? 'border-gold-400/40 bg-gradient-to-br from-navy-800 to-navy-900 glow-border lg:col-span-2'
                  : 'border-white/5 bg-navy-800 hover:border-gold-400/30'
              }`}
            >
              {proj.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  <span className="text-gold-400 text-[10px] font-bold tracking-widest uppercase">Flagship Project</span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <span className="section-label">{proj.tag}</span>
                <span className="text-steel-500 text-xs">{proj.location}</span>
              </div>

              <h2 className={`font-display font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300 ${proj.highlight ? 'text-2xl' : 'text-xl'}`}>
                {proj.title}
              </h2>
              <p className="text-steel-400 text-sm leading-relaxed mb-6">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.scope.map((s, j) => (
                  <span key={j} className="text-[10px] font-semibold tracking-wider uppercase text-steel-300 border border-white/10 px-3 py-1 bg-white/5">
                    {s}
                  </span>
                ))}
              </div>

              <Link to="/contact" className="flex items-center gap-2 text-gold-400 text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-300">
                Enquire About This Solution
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy-900 border-t border-white/5">
        <div className="section-container py-16 text-center">
          <h2 className="font-display font-bold text-white text-3xl mb-4">
            Have a project in mind?
          </h2>
          <p className="text-steel-400 mb-8">Share your requirements and we'll prepare a detailed proposal.</p>
          <Link to="/contact" className="btn-primary">Start Your Project</Link>
        </div>
      </div>
    </div>
  )
}
