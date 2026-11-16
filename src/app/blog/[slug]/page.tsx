import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Markdown } from '@/components/Markdown'
import { articles, formatDate, getArticle } from '@/content/blog'
import { content } from '@/content/content'
import { blogVisual } from '@/content/images'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug)
  return a ? { title: a.title, description: a.excerpt } : {}
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) notFound()
  return (
    <main className="container">
      <div className="section-article">
        <article className="article">
          <div style={{ backgroundImage: `url("${blogVisual(a.title, articles.indexOf(a))}")` }} className="article-image" role="presentation" />
          <div className="article-wrapper">
            <div className="article-inner">
              <div className="article-meta">
                <p className="meta-content meta-first">{formatDate(a.date)}</p>
              </div>
              <h1 className="article-header">{a.title}</h1>
              <div className="article-meta">
                <p className="meta-content meta-first">Par</p>
                <p className="meta-content">{content.aPropos.title}</p>
              </div>
              <div className="article-content">
                <Markdown className="article-text-block w-richtext" source={a.body} />
              </div>
              <div className="button-wrapper">
                <Link href="/blog" className="btn-primary w-button">← Tous les articles</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
