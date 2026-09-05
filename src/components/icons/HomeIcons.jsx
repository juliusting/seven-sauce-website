// Home-only animated SVGs. Not imported by any other page.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function SealMark({ size = 40, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      <circle cx="24" cy="24" r="20" {...s} className="anim-draw" />
      <text x="24" y="30" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="20" fontWeight="600" fill="currentColor">酱</text>
    </svg>
  )
}

export function NoodleBowl({ size = 44, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      <g className="anim-steam" style={{ color: 'currentColor' }}>
        <path d="M20 8c-1 2 1 3 0 5M24 7c-1 2 1 3 0 5M28 8c-1 2 1 3 0 5" {...s} strokeWidth="1.3" />
      </g>
      <path d="M8 22h32c0 8-7 14-16 14S8 30 8 22Z" {...s} />
      <path d="M14 22c3-3 17-3 20 0" {...s} strokeWidth="1.2" />
    </svg>
  )
}

export function TeaCup({ size = 40, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      <path d="M14 18h18v10a9 9 0 0 1-18 0Z" {...s} />
      <path d="M32 20h4a3 3 0 0 1 0 6h-2" {...s} strokeWidth="1.3" />
      <circle cx="20" cy="34" r="1.3" fill="currentColor" className="anim-bob" />
      <circle cx="26" cy="31" r="1.3" fill="currentColor" className="anim-bob" style={{ animationDelay: '0.6s' }} />
    </svg>
  )
}

export function Sparkline({ className = '' }) {
  return (
    <svg viewBox="0 0 120 12" width="120" height="12" className={className} aria-hidden>
      <path d="M2 6h40M78 6h40" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="6" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" className="anim-draw" style={{ strokeDasharray: 20, strokeDashoffset: 20 }} />
    </svg>
  )
}
