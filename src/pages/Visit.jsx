import { useState } from 'react'
import FadeInView from '../components/ui/FadeInView.jsx'
import { MapPin, ClockMark, PhoneMark } from '../components/icons/VisitIcons.jsx'
import site from '../content/site.json'

export default function Visit() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }

  const cards = [
    { Icon: MapPin, t: 'Where', body: site.address, extra: { label: 'Open in Maps', href: site.map_link } },
    { Icon: ClockMark, t: 'When', body: site.hours_note },
    { Icon: PhoneMark, t: 'Reach us', body: `${site.phone} · ${site.email}`, extra: { label: 'WhatsApp us', href: `https://wa.me/${site.whatsapp}` } },
  ]

  return (
    <>
      <section className="container-x pt-28 md:pt-36 pb-8 max-w-3xl">
        <p className="eyebrow mb-4">Visit us</p>
        <h1 className="display text-[clamp(2.4rem,6vw,4.5rem)] text-ink mb-5">Find Seven Sauce</h1>
        <p className="text-ink-muted text-lg">We’re on the ground floor of {site.area}, {site.city}. Dine in, take away, or order for delivery.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {site.grabfood && (
            <a href={site.grabfood} target="_blank" rel="noreferrer" className="btn text-white" style={{ background: '#00B14F' }}>Order on GrabFood</a>
          )}
          {site.foodpanda && (
            <a href={site.foodpanda} target="_blank" rel="noreferrer" className="btn text-white" style={{ background: '#D70F64' }}>Order on foodpanda</a>
          )}
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp to order</a>
        </div>
      </section>

      <section className="container-x pb-12 grid md:grid-cols-3 gap-5">
        {cards.map(({ Icon, t, body, extra }, i) => (
          <FadeInView key={t} delay={i * 0.07} className="rounded-2xl border border-line bg-cream p-6">
            <span className="text-seal inline-block mb-3"><Icon /></span>
            <h2 className="font-display text-xl text-ink mb-2">{t}</h2>
            <p className="text-ink-muted leading-relaxed">{body}</p>
            {extra && <a href={extra.href} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm font-semibold text-seal hover:underline">{extra.label} →</a>}
          </FadeInView>
        ))}
      </section>

      <section className="container-x pb-16 grid lg:grid-cols-2 gap-8">
        <FadeInView className="rounded-2xl overflow-hidden border border-line min-h-[340px]">
          <iframe title="Seven Sauce location map" src={site.map_embed} width="100%" height="100%" style={{ border: 0, minHeight: 340 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </FadeInView>

        <FadeInView delay={0.1} className="rounded-2xl border border-line bg-cream-alt p-6 md:p-8">
          <h2 className="font-display text-2xl text-ink mb-1">Send an enquiry</h2>
          <p className="text-sm text-ink-muted mb-6">Catering, large tables or a question — drop us a note and we’ll reply.</p>
          {sent ? (
            <div className="rounded-xl bg-white border border-line p-6 text-center">
              <p className="font-display text-xl text-seal mb-1">Thank you!</p>
              <p className="text-sm text-ink-muted">We’ve received your enquiry and will be in touch soon. For anything urgent, WhatsApp us at {site.phone}.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'phone', label: 'Phone', type: 'tel' },
                { name: 'email', label: 'Email', type: 'email' },
              ].map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="block text-sm font-medium text-ink mb-1">{f.label} <span className="text-seal">*</span></label>
                  <input id={f.name} name={f.name} type={f.type} required
                    className="w-full rounded-xl border border-line bg-cream px-4 py-2.5 text-ink focus-visible:border-seal" />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">Message</label>
                <textarea id="message" name="message" rows={4}
                  className="w-full rounded-xl border border-line bg-cream px-4 py-2.5 text-ink focus-visible:border-seal" />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">Send enquiry</button>
            </form>
          )}
        </FadeInView>
      </section>
    </>
  )
}
