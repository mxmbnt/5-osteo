import { Markdown } from '@/components/Markdown'
import { legal } from '@/content/legal'

export const metadata = { title: legal.mentions.title }

export default function Page() {
  return (
    <main className="legal-section">
      <div className="container legal-content">
        <h1 className="h2-title">{legal.mentions.title}</h1>
        <Markdown source={legal.mentions.body} />
      </div>
    </main>
  )
}
