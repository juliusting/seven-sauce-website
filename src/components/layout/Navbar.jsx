import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import site from '../../content/site.json'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/story', label: 'Our Story' },
  { to: '/visit', label: 'Visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur border-b border-line' : 'bg-transparent'}`}>
      <nav className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Seven Sauce home">
          <span className="grid place-items-center w-9 h-9 rounded-full border-2 border-seal text-seal font-display text-lg leading-none">酱</span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-ink">Seven Sauce</span>
            <span className="block text-[0.62rem] tracking-[0.28em] text-ink-muted">七个酱 · KUCHING</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-seal' : 'text-ink hover:text-seal'}`}>
              {l.label}
            </NavLink>
          ))}
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary text-sm">
            Order / WhatsApp
          </a>
        </div>

        <button className="md:hidden inline-grid place-items-center w-10 h-10 -mr-1 text-ink" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 z-40 bg-cream"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
            <div className="container-x py-8 flex flex-col gap-6">
              {LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.end}
                  className={({ isActive }) => `font-display text-3xl ${isActive ? 'text-seal' : 'text-ink'}`}>
                  {l.label}
                </NavLink>
              ))}
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary mt-2 self-start">
                Order / WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
