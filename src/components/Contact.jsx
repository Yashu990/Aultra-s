import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact({ embedded = false }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', project: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className={`relative overflow-hidden bg-navy-900 ${embedded ? 'py-16' : 'py-28'}`}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/4 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header — only shown when not embedded (used on homepage) */}
        {!embedded && (
          <div className="grid lg:grid-cols-2 gap-4 mb-12">
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title">
                Start Your <span className="text-gradient-gold">Next Project</span> With Us
              </h2>
              <div className="divider-gold" />
              <p className="text-steel-300 leading-relaxed mt-4">
                Whether you're planning a new studio build, an architectural installation, or evaluating vendors — we'd like to hear from you.
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h3 className="font-display font-bold text-white text-xl mb-6">Contact Information</h3>
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  label: 'Address',
                  value: '8A/1, Ground Floor, Joga Bai, Jamia Nagar, Okhla, New Delhi – 110025',
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                  label: 'Email',
                  value: 'info@aultralighting.com',
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                  label: 'Phone',
                  value: '+91-11-26984122 | +91-98112-61607',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-steel-400 text-xs tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="border-t border-white/5 pt-8">
              <p className="text-steel-400 text-xs tracking-widest uppercase mb-4">Quick Links</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'View Solutions', to: '/solutions' },
                  { label: 'Our Projects', to: '/projects' },
                  { label: 'Products', to: '/products' },
                ].map((l, i) => (
                  <Link key={i} to={l.to} className="text-gold-400 border border-gold-400/30 px-4 py-2 text-xs tracking-wide hover:bg-gold-400 hover:text-navy-950 transition-all duration-300">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-navy-800 border border-white/5 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 py-16 text-center">
                <div className="w-16 h-16 border-2 border-gold-400 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-display font-bold text-white text-2xl">Enquiry Received</h3>
                <p className="text-steel-400 text-sm leading-relaxed max-w-xs">
                  Thank you. Our team will review your project requirements and get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline mt-2">
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-white text-xl mb-6">Project Enquiry</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-steel-400 text-xs tracking-widest uppercase mb-2 block">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required
                      className="w-full bg-navy-950 border border-white/10 text-white px-4 py-3 text-sm focus:border-gold-400/60 focus:outline-none transition-colors placeholder:text-steel-500"
                      placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="text-steel-400 text-xs tracking-widest uppercase mb-2 block">Company</label>
                    <input name="company" value={form.company} onChange={handleChange}
                      className="w-full bg-navy-950 border border-white/10 text-white px-4 py-3 text-sm focus:border-gold-400/60 focus:outline-none transition-colors placeholder:text-steel-500"
                      placeholder="Company / Organization" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-steel-400 text-xs tracking-widest uppercase mb-2 block">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      className="w-full bg-navy-950 border border-white/10 text-white px-4 py-3 text-sm focus:border-gold-400/60 focus:outline-none transition-colors placeholder:text-steel-500"
                      placeholder="email@company.com" />
                  </div>
                  <div>
                    <label className="text-steel-400 text-xs tracking-widest uppercase mb-2 block">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-navy-950 border border-white/10 text-white px-4 py-3 text-sm focus:border-gold-400/60 focus:outline-none transition-colors placeholder:text-steel-500"
                      placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div>
                  <label className="text-steel-400 text-xs tracking-widest uppercase mb-2 block">Project Type *</label>
                  <select name="project" value={form.project} onChange={handleChange} required
                    className="w-full bg-navy-950 border border-white/10 text-white px-4 py-3 text-sm focus:border-gold-400/60 focus:outline-none transition-colors">
                    <option value="">Select project type...</option>
                    <option value="broadcast">Broadcast / TV Studio</option>
                    <option value="film">Film Production</option>
                    <option value="architectural">Architectural / Façade</option>
                    <option value="auditorium">Auditorium / Stage</option>
                    <option value="government">Government / Institutional</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-steel-400 text-xs tracking-widest uppercase mb-2 block">Project Details</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    className="w-full bg-navy-950 border border-white/10 text-white px-4 py-3 text-sm focus:border-gold-400/60 focus:outline-none transition-colors placeholder:text-steel-500 resize-none"
                    placeholder="Brief description of your lighting requirements..." />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4">
                  Submit Enquiry
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
