import './Hero.css'

export default function Hero({ inProgressCount, resolvedCount }) {
  return (
    <div className="w-full px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <div 
            className="hero-card relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105"
            style={{
              backgroundImage: `url('/vector1.png'), linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)`,
              backgroundSize: '50% 100%, cover',
              backgroundPosition: 'top left, center',
              backgroundRepeat: 'no-repeat, no-repeat',
              backgroundBlendMode: 'lighten, normal'
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4">In-Progress</h3>
              <p className="text-5xl md:text-6xl font-bold">{inProgressCount}</p>
            </div>
          </div>

          <div 
            className="hero-card relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-105"
            style={{
              backgroundImage: `url('/vector1.png'), linear-gradient(135deg, #10b981 0%, #059669 100%)`,
              backgroundSize: '50% 100%, cover',
              backgroundPosition: 'top left, center',
              backgroundRepeat: 'no-repeat, no-repeat',
              backgroundBlendMode: 'lighten, normal'
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-4">Resolved</h3>
              <p className="text-5xl md:text-6xl font-bold">{resolvedCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
