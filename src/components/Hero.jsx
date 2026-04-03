import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: '/images/studio.png',
    title: 'Studio Lighting.',
    vertical: 'Broadcast & Media',
  },
  {
    image: '/images/facade.png',
    title: 'Façade Lighting.',
    vertical: 'Architectural Landmarks',
  },
  {
    image: '/images/auditorium.png',
    title: 'Stage Lighting.',
    vertical: 'Cultural Auditoriums',
  },
  {
    image: '/images/film.png',
    title: 'Production Sets.',
    vertical: 'Film & Cinema Industry',
  },
]

const stats = [
  { value: '50+', label: 'Years' },
  { value: '300+', label: 'Clients' },
  { value: '3', label: 'Continents' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[100vh] flex overflow-hidden bg-navy-950 border-b border-white/5">
      {/* Left Content Side (60%) */}
      <div className="w-full lg:w-[45%] h-full flex flex-col justify-center relative z-20 bg-navy-950 px-12 lg:pl-24 lg:pr-12">
        {/* Subtle grid on left only */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-gold-400 text-[10px] font-bold tracking-[0.3em] uppercase">
              {slides[current].vertical}
            </span>
            <div className="w-8 h-px bg-gold-400/30" />
          </div>

          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
            Precision<br/>
            <span className="text-gradient-gold">{slides[current].title}</span>
          </h1>

          <p className="text-steel-400 text-sm lg:text-base leading-relaxed max-w-md mb-10">
            India's most trusted partner for high-stakes lighting infrastructure since 1975. 
            Legacy of 300+ clients across 3 continents.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-10">
            <Link to="/projects" className="btn-primary text-xs py-4 px-8">
              Explore Projects
            </Link>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold-400' : 'w-4 bg-white/10 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Compact Stats row */}
          <div className="flex gap-10 pt-8 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-lg lg:text-xl font-black text-white/90 mb-0.5">{stat.value}</div>
                <div className="text-steel-400 text-[9px] font-bold tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Side (Carousel - 100% visible) */}
      <div className="hidden lg:block lg:w-[55%] h-full relative overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Minimal left vignette for edge blending */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
