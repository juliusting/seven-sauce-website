import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Picture from '../components/ui/Picture.jsx'
import FadeInView from '../components/ui/FadeInView.jsx'
import SplitText from '../components/ui/SplitText.jsx'
import { SealMark, NoodleBowl, TeaCup, Sparkline } from '../components/icons/HomeIcons.jsx'
import site from '../content/site.json'
import { signatures } from '../content/signatures.json'

export default function Home() {
  const reduced = useReducedMotion()
  return (
    <>
      {/* Hero — full-bleed food background */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* background image */}
        <motion.picture
          className="absolute inset-0 block"
          animate={reduced ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        >
          <source srcSet={site.hero_bg.replace(/\.(jpe?g|png)$/i, '.avif')} type="image/avif" />
          <source srcSet={site.hero_bg.replace(/\.(jpe?g|png)$/i, '.webp')} type="image/webp" />
          <img src={site.hero_bg} alt="A Seven Sauce dish — braised pork and a runny egg over rice" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        </motion.picture>
        {/* warm scrim for legibility */}
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(100deg, rgba(24,18,14,0.86) 0%, rgba(24,18,14,0.62) 40%, rgba(24,18,14,0.2) 72%, rgba(24,18,14,0.05) 100%)' }} />
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(0deg, rgba(24,18,14,0.5) 0%, transparent 40%)' }} />

        <div className="container-x relative z-10 pt-28 md:pt-32 pb-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5 flex items-center gap-3" style={{ color: '#F4C06A' }}><span><Sparkline /></span>{site.cuisine}</p>
            <h1 className="display text-[clamp(2.7rem,7vw,5.5rem)] text-white mb-6" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}>
              <SplitText text="A family of seven." />
              <span className="block italic" style={{ color: '#F4C06A' }}><SplitText text="A sauce for each." delay={0.35} /></span>
            </h1>
            <p className="text-lg max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>{site.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/menu" className="btn btn-primary">View the Menu</Link>
              <Link to="/visit" className="btn text-white" style={{ border: '1px solid rgba(255,255,255,0.5)' }}>Find Us in Kuching</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <span className="flex items-center gap-2" style={{ color: '#F4C06A' }}><NoodleBowl size={34} /><span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>98 dishes, all day</span></span>
              <span className="flex items-center gap-2" style={{ color: '#F4C06A' }}><TeaCup size={30} /><span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Local drinks &amp; tea</span></span>
              <span className="flex items-center gap-2 text-white/90"><SealMark size={30} /><span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>七个酱 · ICOM Square, Kuching</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="bg-cream-alt">
        <div className="container-x py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <FadeInView>
            <p className="eyebrow mb-4">Our name</p>
            <h2 className="display text-3xl md:text-4xl text-ink mb-5">Seven siblings, seven sauces</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              We are a family business, and there are seven of us. Each brother and sister is a sauce on the table, and
              together we cook the food we grew up on, blending Taiwanese recipes with Malaysian tastes.
            </p>
            <Link to="/story" className="btn btn-ghost">Read our story</Link>
          </FadeInView>
          <FadeInView delay={0.1} className="grid grid-cols-2 gap-4">
            {[site.hero_logo, site.hero_interior].map((src, i) => (
              <div key={src} className={`rounded-2xl overflow-hidden border border-line ${i === 0 ? 'mt-8' : ''}`}>
                <Picture src={src} alt={i === 0 ? 'Seven Sauce seal logo' : 'Seven Sauce dining room'} aspectRatio="3/4" />
              </div>
            ))}
          </FadeInView>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="container-x py-16 md:py-24">
        <FadeInView className="max-w-2xl mb-10">
          <p className="eyebrow mb-4">From the kitchen</p>
          <h2 className="display text-3xl md:text-4xl text-ink">A few favourites</h2>
        </FadeInView>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {signatures.map((d, i) => (
            <FadeInView key={d.name + i} delay={(i % 3) * 0.06}>
              <Link to="/menu" className="group block rounded-2xl overflow-hidden border border-line bg-cream hover:border-seal/40 transition-colors">
                <div className="overflow-hidden">
                  <Picture src={d.image} alt={d.name} aspectRatio="1/1"
                    imgClassName="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg text-ink leading-snug">{d.name}</h3>
                    <span className="text-sm font-semibold text-seal whitespace-nowrap">{d.price_str}</span>
                  </div>
                  {d.name_zh && <p className="text-sm text-ink-muted mt-0.5">{d.name_zh}</p>}
                  <p className="text-xs text-ink-muted/80 mt-1">{d.cat}</p>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
        <div className="mt-10"><Link to="/menu" className="btn btn-primary">See all 98 dishes</Link></div>
      </section>

      {/* Fusion strip */}
      <section className="bg-ink text-cream">
        <div className="container-x py-16 md:py-20 grid md:grid-cols-3 gap-8">
          {[
            { t: 'Taiwanese roots', d: 'Braised pork rice, egg pancakes, soy-stewed classics and bubble-era drinks.' },
            { t: 'Malaysian heart', d: 'Nasi lemak, local kopi and the flavours Kuching wakes up for.' },
            { t: 'All-day family table', d: 'Breakfast from 7:30am, sets, snacks and toast — affordable and generous.' },
          ].map((c, i) => (
            <FadeInView key={c.t} delay={i * 0.08}>
              <span className="block w-10 h-px bg-seal mb-5" />
              <h3 className="font-display text-2xl mb-2">{c.t}</h3>
              <p className="text-cream/70 leading-relaxed">{c.d}</p>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Catering + visit band */}
      <section className="container-x py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <FadeInView>
          <p className="eyebrow mb-4">Catering</p>
          <h2 className="display text-3xl md:text-4xl text-ink mb-4">Feeding a crowd?</h2>
          <p className="text-ink-muted leading-relaxed mb-6">{site.catering}</p>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary">Enquire on WhatsApp</a>
        </FadeInView>
        <FadeInView delay={0.1} className="rounded-2xl border border-line bg-cream-alt overflow-hidden">
          <div className="relative">
            <iframe
              title="Seven Sauce location on Google Maps"
              src={site.map_embed}
              className="w-full block"
              style={{ border: 0, height: 220 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-8">
            <h3 className="font-display text-2xl text-ink mb-4">Come by</h3>
            <p className="text-ink-muted leading-relaxed">{site.address}</p>
            <p className="text-ink-muted mt-3">{site.hours_note}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={site.map_link} target="_blank" rel="noreferrer" className="btn btn-primary">Get directions</a>
              <Link to="/visit" className="btn btn-ghost">Hours & contact</Link>
            </div>
          </div>
        </FadeInView>
      </section>
    </>
  )
}
