import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      {/* Page Header */}
      <div className="bg-navy-900 border-b border-white/5">
        <div className="section-container py-16">
          <div className="flex items-center gap-2 text-steel-400 text-sm mb-4">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Contact</span>
          </div>
          <p className="section-label">Get in Touch</p>
          <h1 className="section-title">
            Start Your <span className="text-gradient-gold">Next Project</span>
          </h1>
          <p className="text-steel-300 text-lg max-w-2xl mt-4">
            Our team is ready to evaluate your requirements and provide a detailed technical and commercial proposal.
          </p>
        </div>
      </div>

      {/* Reuse Contact Component without the header */}
      <Contact embedded />
    </div>
  )
}
