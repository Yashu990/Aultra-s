import { Link } from 'react-router-dom'

const verticals = [
  {
    title: 'Broadcast & News Networks',
    image: '/images/film.png',
    clients: [
      { name: 'NDTV', img: '1409034881NDTV.jpg' },
      { name: 'ABP News', img: '1409033624ABP news.jpg' },
      { name: 'ABP Bangla', img: '1409033612ABP Bangla.jpg' },
      { name: 'Zee Punjabi', img: '1409036066ZEE PUNJABI.jpg' },
      { name: 'T-Series', img: '1409036035T-series.jpg' },
      { name: 'Doordarshan', img: '1409034128Doordarshan.jpg' },
      { name: 'CNN IBN', img: '1409034100CNN IBN.jpg' },
      { name: 'ANI News', img: '1409033688ANI.jpg' },
      { name: 'Prasar Bharti', img: '1409035885prasar Bharti.jpg' },
      { name: 'News 24', img: '1409035788News 24.jpg' },
      { name: 'India News', img: '1409034216focus news.jpg' },
      { name: 'TV Today', img: '1409036045TV Today.jpg' },
      { name: 'IBC 24', img: '1409034444IBC 24.jpg' },
      { name: 'News Nation', img: '1409035820News Nation.jpg' },
      { name: 'Aastha TV', img: '1409033596Aastha.jpg' },
    ]
  },
  {
    title: 'Corporate & Enterprise',
    image: '/images/corporate.png',
    clients: [
      { name: 'HCL Technologies', img: '1409034243hcl.jpg' },
      { name: 'HT Media Group', img: '1409034276HT Media.gif' },
      { name: 'Mint Business', img: '1409034286HT Mint.jpg' },
      { name: 'Hughes Networks', img: '1409034296Hughes.jpg' },
      { name: 'Essel Shyam', img: '1409034197Essel shyam.jpg' },
      { name: 'Micromax', img: '1409034853micromax.jpg' }
    ]
  },
  {
    title: 'Educational & Institutional',
    image: '/images/design.png',
    clients: [
      { name: 'Amity ASCO', img: '1409033647Amity ASCO.jpg' },
      { name: 'BIT Noida', img: '1409033773Birla institute of Technology.jpg' },
      { name: 'DPS', img: '1409034180DPS.jpg' },
      { name: 'Apeejay School', img: '1409033744Apeejay School of Mass communication.jpg' },
      { name: 'MCRC JMI', img: '1409034843MCRC JMI.jpg' },
      { name: 'NIIT', img: '1409035849NIIT.jpg' }
    ]
  }
]

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24 pb-20">
      {/* Header */}
      <div className="section-container mt-10 mb-20 text-center">
        <p className="section-label">Institutional Credibility</p>
        <h1 className="section-title">
          India's Top Broadcasters <span className="text-gradient-gold">Trust Aultra</span>
        </h1>
        <div className="divider-gold mx-auto" />
      </div>

      {/* Modern Vertical Layout with Real Logos */}
      <div className="section-container space-y-32">
        {verticals.map((vert, i) => (
          <div key={i}>
            {/* Category Banner with High Visibility */}
            <div className="relative h-48 md:h-72 mb-10 overflow-hidden border border-white/5 bg-navy-950 group">
              <img 
                src={vert.image} 
                alt={vert.title} 
                className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 opacity-40 mix-blend-lighten" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h2 className="font-display font-black text-white text-3xl md:text-5xl tracking-tighter uppercase drop-shadow-2xl">{vert.title}</h2>
              </div>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0.5 bg-white/5 border border-white/5">
              {vert.clients.map((client, j) => (
                <div key={j} className="h-40 bg-white p-6 flex items-center justify-center group hover:bg-gold-50 transition-all duration-300 border border-white/5">
                  <div className="relative w-full h-full">
                    <img 
                      src={`/images/logos/${client.img}`} 
                      alt={client.name} 
                      className="w-full h-full object-contain transition-all duration-500 scale-90 group-hover:scale-100"
                    />
                    <div className="absolute -bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[8px] font-black text-navy-950 uppercase tracking-tighter bg-gold-400 px-2">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Global Impact CTA */}
      <div className="mt-40 section-container">
        <div className="border border-white/5 bg-navy-900 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl -mr-64 -mt-64" />
          <div className="p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="section-title text-start mb-6">Designed for <span className="text-gradient-gold">Industrial Scale</span></h2>
              <p className="text-steel-400 leading-relaxed">
                Our projects span across the Indian subcontinent and international markets. 
                Whether you're a news network or a government institution, we build infrastructure that delivers.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Start Your Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
