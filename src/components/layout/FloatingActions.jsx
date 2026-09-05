import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import site from '../../content/site.json'
import { GRAB_PATH } from '../icons/grabPath.js'

/* Brand marks (third-party brand colours kept inline per convention). */
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.95-4.36-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.38-.42.51-.14.14-.29.29-.12.57.17.29.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.21.55.33.07.12.07.69-.17 1.36Z" />
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}
function GrabIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d={GRAB_PATH} />
    </svg>
  )
}
function LocationIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21c4.5-5.2 7-8.1 7-11a7 7 0 1 0-14 0c0 2.9 2.5 5.8 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export default function FloatingActions() {
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)

  const socials = [
    site.grabfood && { key: 'grab', href: site.grabfood, label: 'Order on GrabFood', Icon: GrabIcon, bg: '#00B14F', color: '#fff', size: 30 },
    site.foodpanda && { key: 'panda', href: site.foodpanda, label: 'Order on foodpanda', Icon: GrabIcon, bg: '#D70F64', color: '#fff' },
    { key: 'map', href: site.map_link, label: 'Find us on Google Maps', Icon: LocationIcon, bg: '#F3ECE0', color: '#2E6E68' },
    { key: 'ig', href: site.instagram_url, label: 'Instagram', Icon: InstagramIcon, bg: '#F3ECE0', color: '#C0392B' },
    { key: 'fb', href: site.facebook, label: 'Facebook', Icon: FacebookIcon, bg: '#F3ECE0', color: '#1877F2' },
  ].filter(Boolean)

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && socials.map((s, i) => (
          <motion.a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, y: 12, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.8 }}
            transition={{ duration: 0.2, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="grid place-items-center w-12 h-12 rounded-full shadow-lg shadow-ink/15 border border-line"
            style={{ background: s.bg, color: s.color }}
          >
            <s.Icon width={s.size || 22} height={s.size || 22} />
          </motion.a>
        ))}
      </AnimatePresence>

      <button
        type="button"
        aria-label={open ? 'Hide contact options' : 'Show contact options'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid place-items-center w-8 h-8 rounded-full bg-cream border border-line text-ink-muted shadow"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          {open ? <path d="M6 9l6 6 6-6" /> : <path d="M6 15l6-6 6 6" />}
        </svg>
      </button>

      <div className="relative">
        {!reduced && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{ background: '#25D366' }}
            animate={{ scale: [1, 1.5], opacity: [0.45, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Seven Sauce on WhatsApp"
          className="relative grid place-items-center w-14 h-14 rounded-full text-white shadow-xl shadow-ink/20"
          style={{ background: '#25D366' /* WhatsApp brand green */ }}
        >
          <WhatsAppIcon width={30} height={30} />
        </a>
      </div>
    </div>
  )
}
