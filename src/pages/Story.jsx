import { Link } from 'react-router-dom'
import Picture from '../components/ui/Picture.jsx'
import FadeInView from '../components/ui/FadeInView.jsx'
import { SauceJar, EggPancake, ToastSlice, SevenDots } from '../components/icons/StoryIcons.jsx'
import site from '../content/site.json'

export default function Story() {
  return (
    <>
      <section className="container-x pt-28 md:pt-36 pb-6 max-w-3xl">
        <p className="eyebrow mb-4">Our story</p>
        <h1 className="display text-[clamp(2.4rem,6vw,4.5rem)] text-ink mb-6">Seven of us, one table</h1>
        <div className="text-seal mb-8"><SevenDots /></div>
        <p className="text-xl text-ink-muted leading-relaxed">{site.intro}</p>
      </section>

      <section className="container-x py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <FadeInView className="rounded-[2rem] overflow-hidden border border-line">
          <Picture src={site.hero_interior} alt="The Seven Sauce dining room in Kuching" aspectRatio="4/3" />
        </FadeInView>
        <FadeInView delay={0.1}>
          <span className="text-seal inline-block mb-4"><SauceJar /></span>
          <h2 className="display text-3xl text-ink mb-4">Where the name comes from</h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            There are seven brothers and sisters in our family, and 七个酱 — "seven sauces" — is how we tell the world
            about it. Each sibling is a sauce on the table. Put them together and you have the flavour of home.
          </p>
          <p className="text-ink-muted leading-relaxed">
            We cook the way we were raised: Taiwanese recipes carried across, seasoned for Malaysian palates, and served
            without fuss at a price a family can come back to.
          </p>
        </FadeInView>
      </section>

      <section className="bg-cream-alt">
        <div className="container-x py-16 md:py-20 grid md:grid-cols-3 gap-8">
          {[
            { Icon: EggPancake, t: 'Made fresh, all day', d: 'Egg pancakes, braised rice, noodles and toast from the moment we open at 7:30am.' },
            { Icon: ToastSlice, t: 'Two kitchens, one plate', d: 'Taiwanese comfort food meeting Kuching’s own favourites — nasi lemak beside soy-stewed pork.' },
            { Icon: SauceJar, t: 'A room to linger in', d: 'Bright, airy and easy — a beautiful space built for long breakfasts and unhurried lunches.' },
          ].map(({ Icon, t, d }, i) => (
            <FadeInView key={t} delay={i * 0.08}>
              <span className="text-seal inline-block mb-4"><Icon /></span>
              <h3 className="font-display text-2xl text-ink mb-2">{t}</h3>
              <p className="text-ink-muted leading-relaxed">{d}</p>
            </FadeInView>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-24 text-center max-w-2xl">
        <h2 className="display text-3xl md:text-4xl text-ink mb-4">Pull up a chair</h2>
        <p className="text-ink-muted mb-8">{site.catering}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/menu" className="btn btn-primary">Browse the menu</Link>
          <Link to="/visit" className="btn btn-ghost">Plan your visit</Link>
        </div>
      </section>
    </>
  )
}
