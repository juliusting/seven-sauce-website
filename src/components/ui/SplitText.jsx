import { motion, useReducedMotion } from 'framer-motion'

export default function SplitText({ text, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, y: reduced ? 0 : '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay + wi * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
