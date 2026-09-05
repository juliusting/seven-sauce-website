import { Link } from 'react-router-dom'
import site from '../../content/site.json'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-x py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-full border-2 border-cream/70 font-display text-lg">酱</span>
            <span className="font-display text-xl font-semibold">Seven Sauce 七个酱</span>
          </div>
          <p className="text-sm text-cream/70 max-w-sm leading-relaxed">{site.tagline} A family kitchen in Kuching serving Taiwanese and Malaysian favourites all day.</p>
        </div>

        <div className="text-sm">
          <h3 className="font-display text-lg mb-3">Visit</h3>
          <p className="text-cream/70 leading-relaxed">{site.address}</p>
          <p className="text-cream/70 mt-3">{site.hours_note}</p>
        </div>

        <div className="text-sm">
          <h3 className="font-display text-lg mb-3">Contact</h3>
          <ul className="space-y-1.5 text-cream/70">
            <li><a className="hover:text-cream" href={`tel:${site.phone_intl}`}>{site.phone}</a></li>
            <li><a className="hover:text-cream" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="hover:text-cream" href={site.instagram_url} target="_blank" rel="noreferrer">Instagram @{site.instagram}</a></li>
            <li><a className="hover:text-cream" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
            {site.grabfood && <li><a className="hover:text-cream" href={site.grabfood} target="_blank" rel="noreferrer">Order on GrabFood</a></li>}
            {site.foodpanda && <li><a className="hover:text-cream" href={site.foodpanda} target="_blank" rel="noreferrer">Order on foodpanda</a></li>}
          </ul>
          <div className="mt-4 flex gap-3">
            <Link to="/menu" className="btn btn-ghost text-cream border-cream/30 text-xs">Menu</Link>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-primary text-xs">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Seven Sauce 七个酱, Kuching, Sarawak.</span>
          <span>Taiwanese × Malaysian · Since the family opened its doors.</span>
        </div>
      </div>
    </footer>
  )
}
