import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Footer, Header } from '@/components/chrome'
import { content } from '@/content/content'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-roboto', display: 'swap' })

const { aPropos, infos, hero } = content

export const metadata: Metadata = {
  title: { default: `${aPropos.title} à ${infos.city}`, template: `%s — ${aPropos.name}` },
  description: hero.subheadline,
  icons: { icon: content.nav.logo },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body className="body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
