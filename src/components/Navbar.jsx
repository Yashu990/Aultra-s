import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-950/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Aultra Logo" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="text-white font-display font-black text-lg leading-none tracking-tighter">AULTRA</span>
              <span className="text-gold-400 text-[7px] font-bold tracking-[0.4em] uppercase mt-1">Lighting Systems</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-gold-400' : 'text-steel-300 hover:text-gold-400'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="btn-primary">
              <span>Request Consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <div className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-6 flex flex-col gap-5 bg-navy-950/98 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 ${isActive ? 'text-gold-400' : 'text-steel-300 hover:text-gold-400'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary w-fit">Get a Quote</Link>
          </div>
        )}
      </div>
    </header>
  )
}
