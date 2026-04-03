const opportunities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tag: 'Policy Push',
    title: 'Government Broadcast Modernisation',
    desc: 'India\'s government is actively modernising its broadcast and media infrastructure — creating large-scale, high-value tendering opportunities for experienced lighting partners.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.876V15.124a1 1 0 01-1.447.894L15 14M3 8.5A1.5 1.5 0 014.5 7h8A1.5 1.5 0 0114 8.5v7A1.5 1.5 0 0112.5 17h-8A1.5 1.5 0 013 15.5v-7z" />
      </svg>
    ),
    tag: 'Booming Sector',
    title: 'Rise of OTT & Regional Media',
    desc: 'The explosion of OTT platforms and regional language content is driving a wave of new studio builds across Tier 1 and Tier 2 cities — each requiring professional lighting infrastructure.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tag: 'Urban Development',
    title: 'Smart City Auditorium & Events Infrastructure',
    desc: 'Smart city programmes across India are commissioning new auditoriums, convention centres, and cultural venues — all requiring precision lighting and acoustic integration.',
  },
]

const impacts = [
  {
    title: 'Elevated Brand Trust',
    desc: 'Stronger credibility with government bodies, enterprise clients, and media houses evaluating vendors for critical projects.',
  },
  {
    title: 'Inbound Lead Growth',
    desc: 'SEO-driven organic enquiries from production houses, architects, and government tender consultants actively searching for lighting partners.',
  },
  {
    title: 'Stronger Tender Positioning',
    desc: 'A compelling digital presence that reinforces credentials when procurement teams and evaluators research vendors online.',
  },
  {
    title: 'Long-Term Digital Asset',
    desc: 'A premium website and content library that appreciates in value with every new project added — compounding your authority over time.',
  },
]

export default function MarketOpportunity() {
  return (
    <section className="py-28 bg-navy-800 relative overflow-hidden">
      {/* Pattern bg */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="section-label">Market Context</p>
          <h2 className="section-title">
            The <span className="text-gradient-gold">Moment to Act</span> Is Now
          </h2>
          <div className="w-12 h-0.5 bg-gold-400 mx-auto my-5" />
          <p className="text-steel-300 leading-relaxed">
            Broadcast studios, government media infrastructure, and professional production spaces
            are expanding rapidly across India. This is the environment Aultra was built for.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {opportunities.map((op, i) => (
            <div key={i} className="card-dark group hover:-translate-y-1 transition-all duration-500">
              <div className="text-gold-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {op.icon}
              </div>
              <span className="text-gold-400/60 text-[10px] font-bold tracking-widest uppercase mb-2 block">{op.tag}</span>
              <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-gold-400 transition-colors duration-300">
                {op.title}
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed">{op.desc}</p>
            </div>
          ))}
        </div>

        {/* Insight callout with Image */}
        <div className="flex flex-col lg:flex-row border border-gold-400/20 bg-navy-900 overflow-hidden mb-20 relative">
          <div className="lg:w-1/3 h-48 lg:h-auto overflow-hidden">
            <img src="/images/stadium.png" alt="Stadium" className="w-full h-full object-cover" />
          </div>
          <div className="lg:w-2/3 p-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-400" />
            <div className="pl-6">
              <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-4">Strategic Insight</p>
              <p className="font-display text-white text-2xl font-bold leading-tight mb-4">
                "Infrastructure evaluation has moved <span className="text-gold-400 font-black">online First.</span>"
              </p>
              <p className="text-steel-400 text-sm leading-relaxed mb-6">
                Decision-makers in government and large media houses evaluate your digital footprint before the first tender meeting. A world-class presence wins the contract before the pitch begins.
              </p>
              <div className="flex items-center gap-4 py-4 px-6 bg-navy-950/50 border border-white/5 w-fit">
                <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-white text-xs font-bold tracking-widest uppercase">Lead Generation Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Impact Grid */}
        <div className="mb-4">
          <p className="section-label text-center">Business Impact</p>
          <h2 className="section-title text-center mb-12">
            Measurable Outcomes <span className="text-gradient-gold">That Matter</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <div key={i} className="border border-white/5 bg-navy-900 p-6 hover:border-gold-400/30 transition-colors duration-500 group">
              <div className="w-8 h-8 border border-gold-400/40 flex items-center justify-center text-gold-400 font-display font-black text-lg mb-4">
                {i + 1}
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-gold-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
