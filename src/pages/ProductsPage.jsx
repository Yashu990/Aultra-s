import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'LED Lighting Systems',
    image: '/images/p-led.png',
    products: [
      { name: 'Studio LED Panels', desc: 'High-CRI LED panels for professional studio environments.' },
      { name: 'Architectural LED Strips', desc: 'Flexible and rigid LED strips for façade and feature lighting.' },
      { name: 'Outdoor LED Floodlights', desc: 'Weatherproof flood systems for landscape and exterior.' },
      { name: 'LED Fresnel Spots', desc: 'Broadcast-grade LED Fresnels with dimmer support.' },
    ]
  },
  {
    name: 'Tungsten & CDM Fixtures',
    image: '/images/p-fresnel.png',
    products: [
      { name: 'Tungsten Fresnels', desc: 'Classic warm-tone Fresnels for film and studio applications.' },
      { name: 'CDM Floodlights', desc: 'High-output CDM fixtures for large venues.' },
      { name: 'Halogen Profile Spots', desc: 'Precise beam-shaping profiles with gobo capability.' },
      { name: 'Discharge Lamps', desc: 'High-intensity discharge fixtures for stadiums and arenas.' },
    ]
  },
  {
    name: 'Fluorescent & Soft Light',
    image: '/images/p-softbox.png',
    products: [
      { name: 'Kinoflo Systems', desc: 'Daylight and tungsten balanced fluorescent banks.' },
      { name: 'Cool Fluorescent Banks', desc: 'Multi-tube ceiling banks for studio fill light.' },
      { name: 'Soft Box Units', desc: 'Portable soft boxes for interview and portrait setups.' },
      { name: 'Cyclorama Lights', desc: 'Ground-row and top-row cyc lights for stage backdrops.' },
    ]
  },
  {
    name: 'Control & Dimmer Systems',
    image: '/images/p-control.png',
    products: [
      { name: 'DMX Dimmer Racks', desc: 'Modular DMX dimmer racks from 6 to 96 channels.' },
      { name: 'Lighting Control Consoles', desc: 'Professional lighting desks for live and broadcast.' },
      { name: 'Wireless DMX Systems', desc: 'Reliable wireless DMX for flexible setups.' },
      { name: 'Smart Relay Panels', desc: 'Automated switching and relay systems for large venues.' },
    ]
  },
  {
    name: 'Rigging & Infrastructure',
    image: '/images/p-facade.png',
    products: [
      { name: 'Lighting Grid Systems', desc: 'Studio-grade motorized and manual lighting grids.' },
      { name: 'Pipe & Drape Systems', desc: 'Modular rigging for events and portable studios.' },
      { name: 'Teleclimbers', desc: 'Mobile elevating platforms for high-level fixture access.' },
      { name: 'Truss Systems', desc: 'Aluminum truss for stage and event rigging.' },
    ]
  },
  {
    name: 'Lighting Kits & Accessories',
    image: '/images/design.png',
    products: [
      { name: 'ENG Portable Kits', desc: 'Compact location kits for electronic news gathering.' },
      { name: 'Interview Lighting Sets', desc: 'Three-point lighting kits for interview setups.' },
      { name: 'Filters & Gels', desc: 'Lee and Rosco filter ranges for color correction.' },
      { name: 'Stands, Clamps & Flags', desc: 'Complete accessory range for professional setups.' },
    ]
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-navy-950 pt-24">
      {/* Page Header */}
      <div className="bg-navy-900 border-b border-white/5">
        <div className="section-container py-16">
          <div className="flex items-center gap-2 text-steel-400 text-sm mb-4">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Products</span>
          </div>
          <p className="section-label">Technical Catalog</p>
          <h1 className="section-title">
            Professional Lighting <span className="text-gradient-gold">Products</span>
          </h1>
          <p className="text-steel-300 text-lg max-w-2xl mt-4">
            A comprehensive catalog spanning LED, Tungsten, Fluorescent, Control systems, and Rigging infrastructure.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-outline">
              Download Full Spec Sheet
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="section-container py-20 divide-y divide-white/5 space-y-24">
        {categories.map((cat, i) => (
          <div key={i} className="pt-24 first:pt-0">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Category Visual Sidebar */}
              <div className="lg:col-span-1">
                <div className="relative h-64 lg:h-80 w-full mb-6 overflow-hidden border border-white/5 bg-navy-900 group">
                  <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h2 className="font-display font-bold text-white text-2xl mb-2">{cat.name}</h2>
                <div className="w-12 h-0.5 bg-gold-400 mb-4" />
                <p className="text-steel-400 text-sm leading-relaxed mb-6">
                  Precision-engineered solutions for {cat.name.toLowerCase()} requirements.
                </p>
                <Link to="/contact" className="text-gold-400 text-[10px] font-bold tracking-widest uppercase hover:underline">
                  Inquire for BOQ
                </Link>
              </div>

              {/* Product Grid */}
              <div className="lg:col-span-3">
                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.products.map((prod, j) => (
                    <div key={j} className="p-8 bg-navy-900/50 border border-white/5 group hover:border-gold-400/20 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-px bg-gold-400/40" />
                        <span className="text-gold-400/60 text-[9px] font-bold tracking-widest uppercase">Hardware Spec</span>
                      </div>
                      <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-gold-400 transition-colors duration-300">
                        {prod.name}
                      </h3>
                      <p className="text-steel-400 text-xs leading-relaxed mb-6">
                        {prod.desc}
                      </p>
                      <button className="text-steel-500 text-[10px] font-bold tracking-widest uppercase border-b border-steel-800 pb-1 hover:text-white transition-colors">
                        Technical Specs Coming Soon
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-navy-900 border-t border-white/5">
        <div className="section-container py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-2xl mb-1">Need a custom specification?</h2>
            <p className="text-steel-400 text-sm">Our team will prepare a detailed BOQ for your project.</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">Request a Quote</Link>
        </div>
      </div>
    </div>
  )
}
