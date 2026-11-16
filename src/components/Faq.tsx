'use client'
import { useState } from 'react'

/** Accordéon FAQ — useState + transition CSS (grid-template-rows), portable tel quel */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq-list">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={'faq-item' + (isOpen ? ' is-open' : '')}>
            <button type="button" className="faq-question" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
              {it.q}
              <span className="faq-icon" aria-hidden="true">+</span>
            </button>
            <div id={`faq-${i}`} className="faq-answer" role="region">
              <div>
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
