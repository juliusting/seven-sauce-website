// Menu-only animated SVGs. Not imported by any other page.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function ChiliMark({ size = 22, className = '' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden>
      <path d="M7 15c5 3 11-1 11-7-4 0-6 1-7 3" {...s} />
      <path d="M11 6c1-2 3-2 4-1" {...s} strokeWidth="1.2" />
    </svg>
  )
}

export function RiceBowl({ size = 34, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      <path d="M10 24h28c0 7-6 12-14 12s-14-5-14-12Z" {...s} />
      <path d="M18 18l3 3M24 16v4M30 18l-3 3" {...s} strokeWidth="1.2" className="anim-bob" />
    </svg>
  )
}

export function MenuDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 160 10" width="160" height="10" className={className} aria-hidden preserveAspectRatio="none">
      <path d="M0 5h64" stroke="currentColor" strokeWidth="1" />
      <circle cx="80" cy="5" r="3" {...s} className="anim-draw" style={{ strokeDasharray: 20, strokeDashoffset: 20 }} />
      <path d="M96 5h64" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
