const products = [
  {
    category: 'LED Studio Lighting',
    image: '/images/p-led.png',
    items: ['High-CRI LED Panels', 'Bi-Color Soft Panels', 'RGB Cinematic Bars', 'COB Spotlights'],
    badge: 'Flagship Series',
  },
  {
    category: 'Tungsten & Stage',
    image: '/images/p-fresnel.png',
    items: ['Fresnel Spotlights', 'CDM Floodlights', 'Halogen Profiles', 'Discharge Sources'],
    badge: 'Industrial Pro',
  },
  {
    category: 'Control & Rigging',
    image: '/images/p-control.png',
    items: ['DMX Control Consoles', 'Dimmer Racks', 'Teleclimbers', 'Rigging Grids'],
    badge: 'Certified Control',
  },
  {
    category: 'Architectural LED',
    image: '/images/p-facade.png',
    items: ['Wall Washers', 'Linear Strips', 'Landscape LEDs', 'Smart Facade Units'],
    badge: 'Weatherproof',
  },
  {
    category: 'Softbox Systems',
    image: '/images/p-softbox.png',
    items: ['Fluorescent Banks', 'Daylight Softboxes', 'Kinoflo Sets', 'Diffuser Panels'],
    badge: 'Studio Essential',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-28 bg-navy-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 px-4 lg:px-0">
          <div className="max-w-xl">
            <p className="section-label">Product Catalog</p>
            <h2 className="section-title">
              Technical Hardware <span className="text-gradient-gold">Infrastructure</span>
            </h2>
            <div className="divider-gold" />
          </div>
          <a href="#contact" className="btn-outline w-fit mt-8 lg:mt-0">
            Request Spec Sheets
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </a>
        </div>

        {/* Visual Catalog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Featured Specialist spotlight removed for a cleaner uniform grid */}
          {products.map((prod, i) => (
            <div key={i} className="group border border-white/5 bg-navy-900 transition-all duration-500 hover:border-gold-400/30">
              {/* Product Category Visual */}
              <div className="relative h-60 overflow-hidden bg-navy-950">
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={prod.image} 
                  alt={prod.category} 
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700" 
                />
                <span className="absolute top-4 right-4 text-[9px] font-black tracking-widest uppercase bg-gold-400 text-navy-950 px-2.5 py-1 z-20">
                  {prod.badge}
                </span>
              </div>

              {/* Content Block */}
              <div className="p-8">
                <h3 className="font-display font-bold text-white text-xl mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {prod.category}
                </h3>
                <div className="w-8 h-px bg-gold-400/40 mb-6" />
                
                <ul className="grid grid-cols-1 gap-3 mb-8">
                  {prod.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-steel-400 text-sm group/li">
                      <div className="w-1.5 h-1.5 bg-gold-400/50 rounded-full flex-shrink-0 group-hover/li:bg-gold-400 transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="flex items-center gap-2 text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300">
                  View Technical Specs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
