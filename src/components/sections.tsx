/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { content, ui } from '@/content/content'
import { articles, formatDate } from '@/content/blog'
import { blogVisual, motifImage, publicImage, stepIcons } from '@/content/images'
import { Faq } from './Faq'
import { Markdown } from './Markdown'

/** « \n » dans un titre court = retour à la ligne (équivalent des <br> du template) */
function Lines({ text }: { text: string }) {
  const parts = text.split('\n')
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <br />}
        </span>
      ))}
    </>
  )
}
const oneLine = (t: string) => t.replace(/\n/g, ' ')

function Head({ label, title, intro, left }: { label: string; title: string; intro?: string; left?: boolean }) {
  return (
    <div className={'header-block' + (left ? ' align-left' : '')}>
      <div className={'overhead-label' + (left ? ' align-left' : '')}>{label}</div>
      <h2 className="h2-title">{title}</h2>
      {intro && <p className={'header-description' + (left ? ' align-left' : '')}>{intro}</p>}
    </div>
  )
}

/* ───────────── accueil ───────────── */
export function Hero() {
  const { hero } = content
  return (
    <section id="accueil" className="hero-section" style={{ backgroundImage: `url("${hero.photo}")` }}>
      <div className="container hero">
        <div className="hero-msg-blk">
          <h1 className="hero-title">{hero.headline}</h1>
          <p className="hero-desc">{hero.subheadline}</p>
          <a href={hero.cta.href} className="btn-primary w-button">{hero.cta.label}</a>
        </div>
      </div>
    </section>
  )
}

/* ───────────── deroulement : blocs menthe du template ───────────── */
export function Deroulement() {
  const d = content.deroulement
  return (
    <section id="deroulement" className="section">
      <div className="container">
        <Head label={ui.deroulementLabel} title={d.title} intro={d.intro} />
        <div className="w-layout-grid competence-grid deroulement-grid" style={{ ['--steps' as string]: Math.min(d.steps.length, 4) }}>
          {d.steps.map((s, i) => (
            <div key={i} className="competence-block">
              <div className="feat-icon-block">
                <img src={stepIcons[i % stepIcons.length]} alt="" />
              </div>
              <div className="feat-title">
                <Lines text={s.title} />
              </div>
              <p className="deroulement-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── a-propos : photo + bio Markdown + diplômes ───────────── */
export function APropos() {
  const a = content.aPropos
  return (
    <section id="a-propos" className="staff-section">
      <div className="columns w-row">
        <div className="staff-img w-col w-col-6" style={{ backgroundImage: `url("${a.photo}")` }} role="img" aria-label={a.name} />
        <div className="about-staff w-col w-col-6">
          <div className="about-staff-block">
            <div className="overhead-label align-left">{ui.aProposLabel}</div>
            <h2 className="h2-title">{a.title}</h2>
            <Markdown className="header-description align-left spacing-lg apropos-bio" source={a.bio} />
            {a.badges.length > 0 && (
              <ul className="apropos-badges" role="list">
                {a.badges.map((b) => (
                  <li key={b} className="apropos-badge">{b}</li>
                ))}
              </ul>
            )}
            <a href={content.infos.bookingHref} className="btn-primary w-button">{content.nav.rdvLabel}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────── publics : grilles alternées de la page « About » du template ───────────── */
export function Publics() {
  const p = content.publics
  return (
    <section id="publics" className="section">
      <div className="container">
        <Head label={ui.publicsLabel} title={p.title} intro={p.intro} />
      </div>
      {p.items.map((it, i) => {
        const flip = i % 2 === 1
        const img = (
          <div className="about-staff-img publics-img" style={{ backgroundImage: `url("${publicImage(oneLine(it.title), i, it.image)}")` }} role="img" aria-label={oneLine(it.title)} />
        )
        return (
          <div key={i} className="container">
            <div className={'about-wrapper' + (i < p.items.length - 1 ? ' gap' : '')}>
              <div className={'w-layout-grid publics-grid' + (flip ? ' is-flip' : '')}>
                {flip && img}
                <div className="header-wrapper">
                  <h3 className={flip ? 'mission-flip' : 'mission'}>
                    <Lines text={it.title} />
                  </h3>
                </div>
                {!flip && img}
                <div className={'comment' + (flip ? ' flip' : '')}>
                  <p className="staff-comment">{it.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

/* ───────────── motifs : grille illustrée du template ───────────── */
export function Motifs() {
  const m = content.motifs
  return (
    <section id="motifs" className="section primary-mint">
      <div className="container">
        <Head label={ui.motifsLabel} title={ui.motifsTitle} intro={m.intro} />
        <div className="w-layout-grid service-grid motifs-grid">
          {m.items.map((it, i) => (
            <div key={i} className="service-block">
              <div className="service-art" style={{ backgroundImage: `url("${motifImage(it.title, i, it.image)}")` }} />
              <h3 className="h3-title m-btm-md">{it.title}</h3>
              <p className="quote-text">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          <a href={content.infos.bookingHref} className="btn-primary w-button">{content.nav.rdvLabel}</a>
        </div>
      </div>
    </section>
  )
}

/* ───────────── tarifs ───────────── */
export function Tarifs() {
  const t = content.tarifs
  return (
    <section id="tarifs" className="section">
      <div className="container">
        <Head label={ui.tarifsLabel} title={ui.tarifsTitle} intro={t.intro} />
        <div className="tarifs-wrap">
          <ul className="tarifs-list" role="list">
            {t.lines.map((l) => (
              <li key={l.label} className="tarifs-line">
                <div>
                  <div className="tarifs-label">{l.label}</div>
                  {l.note && <div className="tarifs-note">{l.note}</div>}
                </div>
                <div className="tarifs-price">{l.price}</div>
              </li>
            ))}
          </ul>
          <aside className="tarifs-rembourse">
            <h3 className="h3-title m-btm-md">{ui.remboursementTitle}</h3>
            <p className="quote-text align-left">{t.remboursement}</p>
            <a href={content.infos.bookingHref} className="btn-primary w-button">{content.nav.rdvLabel}</a>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ───────────── avis : cartes du template (initiales à la place des photos) ───────────── */
export function Avis() {
  const a = content.avis
  if (!a.items.length) return null
  const initials = (n: string) =>
    n
      .split(/\s+/)
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  return (
    <section id="avis" className="section primary-mint">
      <div className="container">
        <Head label={ui.avisLabel} title={ui.avisTitle} intro={a.intro} />
        <div className="w-layout-grid testimonial-grid avis-grid">
          {a.items.map((it) => (
            <div key={it.author} className="testimonial-block">
              <div className="testimonial-img avis-initials" aria-hidden="true">{initials(it.author)}</div>
              <div className="testimonial-quote">
                <img src="/img/design/quote-icon.svg" alt="" className="quote-icon" />
                <div className="avis-stars" aria-label={`${it.rating} sur 5`}>
                  {'★★★★★'.slice(0, it.rating)}
                  <span className="avis-stars-off">{'★★★★★'.slice(it.rating)}</span>
                </div>
                <p className="quote-text align-left">{it.text}</p>
                <div className="client-name">{it.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── blog : 3 derniers articles (titre + extrait + date) ───────────── */
export function Blog() {
  const [first, ...rest] = articles.slice(0, 3)
  if (!first) return null
  return (
    <section id="blog" className="section">
      <div className="container">
        <Head label={ui.blogLabel} title={ui.blogTitle} intro={content.blog.intro} />
        <div className="news-post w-row">
          <div className="news-column-first w-col w-col-6">
            <div className="news-item-lg">
              <div className="news-thumb-first">
                <Link href={`/blog/${first.slug}`} className="thumb-img-lg w-inline-block" style={{ backgroundImage: `url("${blogVisual(first.title, 0)}")` }} aria-label={first.title} />
              </div>
              <div className="top-story-date">{formatDate(first.date)}</div>
              <Link href={`/blog/${first.slug}`} className="newspost-link w-inline-block">
                <h3 className="more-news-title">{first.title}</h3>
              </Link>
              <p className="blog-excerpt">{first.excerpt}</p>
            </div>
          </div>
          <div className="news-column-second w-col w-col-6">
            <div className="news-list-sm blog-list-sm">
              {rest.map((a, i) => (
                <div key={a.slug} className="news-item-sm">
                  <div className="news-thumb-second">
                    <Link href={`/blog/${a.slug}`} className="thumb-img-sm w-inline-block" style={{ backgroundImage: `url("${blogVisual(a.title, i + 1)}")` }} aria-label={a.title} />
                  </div>
                  <div className="top-story-date">{formatDate(a.date)}</div>
                  <Link href={`/blog/${a.slug}`} className="newspost-link w-inline-block">
                    <h3 className="more-news-title">{a.title}</h3>
                  </Link>
                  <p className="blog-excerpt">{a.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <Link href="/blog" className="btn-primary w-button">{ui.blogAll}</Link>
        </div>
      </div>
    </section>
  )
}

/* ───────────── faq ───────────── */
export function FaqSection() {
  return (
    <section id="faq" className="section primary-mint">
      <div className="container">
        <Head label={ui.faqLabel} title={ui.faqTitle} />
        <Faq items={content.faq.items} />
      </div>
    </section>
  )
}

/* ───────────── infos : coordonnées + horaires + accès, carte à droite (section « schedule » du template) ───────────── */
export function Infos() {
  const i = content.infos
  const tel = `tel:${i.phone.replace(/\s/g, '')}`
  return (
    <section id="infos" className="schedule-section">
      <div className="container">
        <div className="schedule-outer">
          <div className="schedule-inner">
            <div className="overhead-label align-left">{ui.infosLabel}</div>
            <h2 className="h2-title schedule">{ui.infosTitle}</h2>
            <div className="infos-blocks">
              <div className="infos-block">
                <img src="/img/design/address.svg" alt="" className="infos-icon" />
                <p className="contact-block-info">
                  {i.address}
                  <br />
                  {i.zip} {i.city}
                </p>
              </div>
              <div className="infos-block">
                <img src="/img/design/phone-number.svg" alt="" className="infos-icon" />
                <p className="contact-block-info">
                  <a href={tel}>{i.phone}</a>
                  <br />
                  <a href={`mailto:${i.email}`}>{i.email}</a>
                </p>
              </div>
            </div>
            {i.hours.length > 0 && (
              <>
                <h3 className="h3-title m-btm-md">{ui.hoursTitle}</h3>
                <table className="infos-hours">
                  <tbody>
                    {i.hours.map((h) => (
                      <tr key={h.day}>
                        <th scope="row">{h.day}</th>
                        <td>{h.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
            <h3 className="h3-title m-btm-md">{ui.accessTitle}</h3>
            <p className="quote-text align-left infos-access">{i.access}</p>
            <a href={i.bookingHref} className="btn-primary w-button">{content.nav.rdvLabel}</a>
          </div>
        </div>
      </div>
      <div className="map-block">
        <div className="map w-widget w-widget-map">
          <iframe
            title={`Plan d'accès — ${content.aPropos.name}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${i.address}, ${i.zip} ${i.city}`)}&z=16&output=embed`}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

/* ───────────── contact : CTA final (fond menthe), sans formulaire ───────────── */
export function Contact() {
  return (
    <section id="contact" className="section primary-mint">
      <div className="container">
        <div className="overhead-label align-left">{ui.contactLabel}</div>
        <h2 className="h2-title schedule">{ui.contactTitle}</h2>
        <p className="header-description align-left contact-intro">{content.contact.intro}</p>
        <div className="contact-actions">
          <a href={content.infos.bookingHref} className="btn-primary w-button">{content.nav.rdvLabel}</a>
          <a href={`tel:${content.infos.phone.replace(/\s/g, '')}`} className="contact-action-link">{content.infos.phone}</a>
          <a href={`mailto:${content.infos.email}`} className="contact-action-link">{content.infos.email}</a>
        </div>
      </div>
    </section>
  )
}
