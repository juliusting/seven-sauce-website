import { useState, useEffect, useRef } from 'react'
import Picture from '../components/ui/Picture.jsx'
import FadeInView from '../components/ui/FadeInView.jsx'
import { ChiliMark, RiceBowl, MenuDivider } from '../components/icons/MenuIcons.jsx'
import menu from '../content/menu.json'

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function DishTags({ item }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {item.spicy && <span className="tag tag-spicy"><ChiliMark size={13} /> Spicy</span>}
      {item.vegetarian && <span className="tag tag-veg">Veg</span>}
      {item.halal && <span className="tag tag-halal">Halal</span>}
      {item.seafood && <span className="tag tag-sea">Seafood</span>}
    </div>
  )
}

export default function Menu() {
  const cats = menu.categories
  const [active, setActive] = useState(slug(cats[0].name))
  const navRef = useRef(null)

  useEffect(() => {
    const opts = { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, opts)
    cats.forEach((c) => { const el = document.getElementById(slug(c.name)); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [cats])

  return (
    <>
      <section className="container-x pt-28 md:pt-36 pb-8">
        <p className="eyebrow mb-4">The menu</p>
        <h1 className="display text-[clamp(2.4rem,6vw,4.5rem)] text-ink mb-3">Everything on the table</h1>
        <p className="text-ink-muted max-w-2xl">Taiwanese and Malaysian home cooking, served all day. {menu.categories.reduce((n, c) => n + c.items.length, 0)} dishes across {cats.length} sections. Prices in Ringgit.</p>
        <div className="mt-6 text-seal"><MenuDivider className="w-40" /></div>
      </section>

      {/* Sticky category nav */}
      <div ref={navRef} className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur border-y border-line">
        <div className="container-x flex gap-2 overflow-x-auto py-3 no-scrollbar">
          {cats.map((c) => (
            <a key={c.id} href={`#${slug(c.name)}`}
              className={`whitespace-nowrap text-sm px-3.5 py-1.5 rounded-full border transition-colors ${active === slug(c.name) ? 'bg-seal text-white border-seal' : 'border-line text-ink-muted hover:border-seal/40 hover:text-ink'}`}>
              {c.name}
            </a>
          ))}
        </div>
      </div>

      <section className="container-x py-12 md:py-16">
        {cats.map((c) => (
          <div key={c.id} id={slug(c.name)} className="scroll-mt-32 mb-14 last:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-seal"><RiceBowl size={30} /></span>
              <div>
                <h2 className="display text-2xl md:text-3xl text-ink">{c.name}</h2>
                {c.name_zh && <p className="text-sm text-ink-muted">{c.name_zh}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.items.map((it) => (
                <FadeInView key={it.code + it.name} y={18}>
                  <article className="h-full flex gap-4 rounded-2xl border border-line bg-cream p-3 hover:border-seal/30 transition-colors">
                    {it.image ? (
                      <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-line">
                        <Picture src={it.image} alt={it.name} aspectRatio="1/1" />
                      </div>
                    ) : (
                      <div className="shrink-0 w-24 h-24 rounded-xl grid place-items-center bg-cream-alt text-seal/40"><RiceBowl size={34} /></div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-display text-base text-ink leading-snug">{it.name}</h3>
                        <span className="text-sm font-semibold text-seal whitespace-nowrap">{it.price_str}</span>
                      </div>
                      {it.name_zh && <p className="text-sm text-ink-muted mt-0.5">{it.name_zh}</p>}
                      {it.desc && <p className="text-xs text-ink-muted/80 mt-1 line-clamp-2">{it.desc}</p>}
                      <DishTags item={it} />
                    </div>
                  </article>
                </FadeInView>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
