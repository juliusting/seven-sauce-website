// Visit-only animated SVGs. Not imported by any other page.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function MapPin({ size = 30, className = '' }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden>
      <path d="M16 29c6-7 9-11 9-16a9 9 0 1 0-18 0c0 5 3 9 9 16Z" {...s} />
      <circle cx="16" cy="13" r="3.4" {...s} className="anim-bob" />
    </svg>
  )
}

export function ClockMark({ size = 30, className = '' }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden>
      <circle cx="16" cy="16" r="12" {...s} className="anim-draw" style={{ strokeDasharray: 80, strokeDashoffset: 80 }} />
      <path d="M16 9v7l5 3" {...s} strokeWidth="1.4" />
    </svg>
  )
}

export function PhoneMark({ size = 30, className = '' }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden>
      <path d="M8 7h5l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v5a2 2 0 0 1-2 2A17 17 0 0 1 6 9a2 2 0 0 1 2-2Z" {...s} />
      <path d="M22 6c2 0 4 2 4 4M22 10c1 0 2 1 2 2" {...s} strokeWidth="1.2" className="anim-bob" />
    </svg>
  )
}
