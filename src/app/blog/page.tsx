import Link from 'next/link'
import { articles, formatDate } from '@/content/blog'
import { blogVisual } from '@/content/images'

export const metadata = { title: 'Blog' }

/* Liste des articles — mise en page « News » du template ; cartes = titre + extrait + date */
export default function BlogPage() {
  const [top, ...more] = articles
  return (
    <main className="news-section">
      <div className="container">
        {top ? (
          <>
            <div className="top-story-item">
              <Link href={`/blog/${top.slug}`} className="top-story-thumb w-inline-block" style={{ backgroundImage: `url("${blogVisual(top.title, 0)}")` }} aria-label={top.title} />
              <div className="top-story-wrapper">
                <div className="top-story-date">{formatDate(top.date)}</div>
                <Link href={`/blog/${top.slug}`} className="top-story-link w-inline-block">
                  <h1 className="top-story-title">{top.title}</h1>
                </Link>
                <p className="top-story-excerpt">{top.excerpt}</p>
              </div>
            </div>
            {more.length > 0 && (
              <>
                <header className="more-header">
                  <h2 className="more-updates-txt">Plus d&apos;articles</h2>
                </header>
                <div className="more-news-wrapper">
                  {more.map((a, i) => (
                    <div key={a.slug} className="more-news-item">
                      <Link href={`/blog/${a.slug}`} className="more-news-thumb w-inline-block" style={{ backgroundImage: `url("${blogVisual(a.title, i + 1)}")` }} aria-label={a.title} />
                      <div className="top-story-date">{formatDate(a.date)}</div>
                      <Link href={`/blog/${a.slug}`} className="more-news-link w-inline-block">
                        <h3 className="more-news-title">{a.title}</h3>
                      </Link>
                      <div className="excerpt-block">
                        <p className="more-news-excerpt">{a.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <p className="w-dyn-empty">Aucun article pour le moment.</p>
        )}
      </div>
    </main>
  )
}
