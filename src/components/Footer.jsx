import { Link } from 'react-router-dom'

export default function Footer() {
  const links = {
    Solutions: [
      { label: 'Broadcast & Studio', to: '/solutions' },
      { label: 'Architectural', to: '/solutions' },
      { label: 'Auditoriums', to: '/solutions' },
      { label: 'Turnkey Projects', to: '/solutions' },
    ],
    Products: [
      { label: 'LED Lighting', to: '/products' },
      { label: 'Tungsten & CDM', to: '/products' },
      { label: 'Control Systems', to: '/products' },
      { label: 'Lighting Kits', to: '/products' },
    ],
    Company: [
      { label: 'About Us', to: '/about' },
      { label: 'Case Studies', to: '/projects' },
      { label: 'Contact', to: '/contact' },
    ],
  }

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-b border-white/5">
        <div className="section-container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-white text-2xl mb-1">
              Ready to <span className="text-gradient-gold">light up</span> your next project?
            </h3>
            <p className="text-steel-400 text-sm">Talk to our team about your requirements.</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Schedule a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <img src="/images/logo.png" alt="Aultra Logo" className="h-9 w-auto" />
              <div className="flex flex-col">
                <span className="text-white font-display font-black text-xl leading-none">AULTRA</span>
                <span className="text-gold-400 text-[8px] font-bold tracking-[0.4em] uppercase mt-1">Lighting Systems</span>
              </div>
            </Link>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              India's most trusted professional lighting solutions provider since 1975. 300+ clients across India, Asia & Africa.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-steel-400 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span>8A/1 Okhla, New Delhi – 110025</span>
              </div>
              <div className="flex items-center gap-1.5 text-steel-400 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400/40" />
                <span>+91-11-26984122</span>
              </div>
              <div className="flex items-center gap-1.5 text-steel-400 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400/40" />
                <span>info@aultralighting.com</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to} className="text-steel-400 hover:text-gold-400 text-sm transition-colors duration-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-500 text-xs">
            © {new Date().getFullYear()} Aultra Lighting Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-steel-500 hover:text-gold-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-steel-500 hover:text-gold-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
