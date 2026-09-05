// Story-only animated SVGs. Not imported by any other page.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function SauceJar({ size = 40, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      <rect x="16" y="16" width="16" height="24" rx="3" {...s} />
      <path d="M18 12h12v4H18z" {...s} />
      <path d="M20 24h8v10h-8z" {...s} strokeWidth="1.2" />
    </svg>
  )
}

export function EggPancake({ size = 44, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      <ellipse cx="24" cy="26" rx="18" ry="11" {...s} />
      <circle cx="24" cy="25" r="6" {...s} className="anim-bob" />
      <circle cx="24" cy="25" r="2.4" fill="currentColor" />
    </svg>
  )
}

export function ToastSlice({ size = 40, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden>
      <path d="M14 20a10 6 0 0 1 20 0v16a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2Z" {...s} />
      <path d="M19 26h10M19 31h7" {...s} strokeWidth="1.2" />
    </svg>
  )
}

export function SevenDots({ className = '' }) {
  return (
    <svg viewBox="0 0 96 16" width="96" height="16" className={className} aria-hidden>
      {[8, 22, 36, 50, 64, 78, 92].map((cx, i) => (
        <circle key={cx} cx={cx} cy="8" r="3" fill="currentColor" className="anim-bob" style={{ animationDelay: `${i * 0.18}s` }} />
      ))}
    </svg>
  )
}
