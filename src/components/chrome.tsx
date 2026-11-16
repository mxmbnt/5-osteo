'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { content, ui } from '@/content/content'

const { nav, aPropos, infos, footer } = content

/** Sur les pages blog / légales, les ancres renvoient vers la page d'accueil */
function useAnchor() {
  const pathname = usePathname()
  return (href: string) => (href.startsWith('#') && pathname !== '/' ? '/' + href : href)
}

/** Navbar (chrome) — logo carré + nom (= À propos) + ancres + bouton RDV. Interactions Webflow « m-nav-open/close » en CSS. */
export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const anchor = useAnchor()
  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <header className={'navbar-wrapper' + (open ? ' is-open' : '')}>
        <div className="navbar">
          <Link href="/" className="navbar-logo w-inline-block">
            <img src={nav.logo} alt="" className="logo" />
            <span className="navbar-name">{aPropos.name}</span>
          </Link>
          <button type="button" className="m-menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <div className="m-menu-icon">
              <div className="top-bar bar-spacing" />
              <div className="mid-bar bar-spacing" />
              <div className="btm-bar" />
            </div>
          </button>
          <a href={infos.bookingHref} className="contact-btn w-inline-block">
            <img src="/img/design/phone.svg" alt="" className="phone-icon" />
            <div className="pnohe-numb">{nav.rdvLabel}</div>
          </a>
        </div>
        <nav className="navbar-menu-items" aria-label="Sections">
          {nav.links.map((l, i) => (
            <a key={l.href} href={anchor(l.href)} onClick={() => setOpen(false)} className={'nav-menu-link w-inline-block' + (i === nav.links.length - 1 ? ' no-border' : '')}>
              <div className="menu-item">{l.label}</div>
              <img src="/img/design/arrow-right.svg" alt="" className="menu-caret" />
            </a>
          ))}
        </nav>
      </header>
      <div className={'mobile-overlay-nav' + (open ? ' is-open' : '')} onClick={() => setOpen(false)} />
      <a href={`tel:${infos.phone.replace(/\s/g, '')}`} className="call-us-btn w-inline-block" aria-label={`Appeler le ${infos.phone}`} />
    </>
  )
}

const ICONS = {
  instagram: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8zm5.4-9.9a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z',
  facebook: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.7v8h3.3z',
  linkedin: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z',
}

/** Footer (chrome) — logo + nom, colonnes Pages / Informations, réseaux, email, mention Omela */
export function Footer() {
  const anchor = useAnchor()
  const socials = Object.entries(footer.socials).filter(([, url]) => url) as [keyof typeof ICONS, string][]
  return (
    <footer className="section primary-black">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-link-col">
            <Link href="/" className="logo-block w-inline-block">
              <img src={nav.logo} alt="" className="logo-footer" />
              <div className="logo-full">{aPropos.name}</div>
            </Link>
            <p className="footer-address">
              {infos.address}, <br />
              {infos.zip} {infos.city}
            </p>
            <div className="footer-contact">
              <a href={`tel:${infos.phone.replace(/\s/g, '')}`} className="alphamed-footer-phone">Tél : {infos.phone}</a>
              <a href={`mailto:${infos.email}`} className="alphamed-footer-email">{infos.email}</a>
            </div>
          </div>
          <div className="footer-link-col">
            <h5 className="footer-title">{ui.footerPages}</h5>
            {nav.links.map((l) => (
              <a key={l.href} href={anchor(l.href)} className="footer-link">{l.label}</a>
            ))}
            <Link href="/blog" className="footer-link">Blog</Link>
          </div>
          <div className="footer-link-col">
            <h5 className="footer-title">{ui.footerInfos}</h5>
            <a href={infos.bookingHref} className="footer-link">{nav.rdvLabel}</a>
            <Link href="/mentions-legales" className="footer-link">{ui.legal}</Link>
            <Link href="/confidentialite" className="footer-link">{ui.privacy}</Link>
          </div>
          {socials.length > 0 && (
            <div className="footer-link-col">
              <h5 className="footer-title">Réseaux</h5>
              <div className="footer-socials">
                {socials.map(([k, url]) => (
                  <a key={k} href={url} target="_blank" rel="noreferrer" className="footer-social" aria-label={k}>
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                      <path d={ICONS[k]} fill="currentColor" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="copyright-block">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {aPropos.title}
          </div>
          <div className="footer-copyright">
            <a href="https://omela.fr" target="_blank" rel="noreferrer" className="footer-base-link">{ui.madeWith}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
