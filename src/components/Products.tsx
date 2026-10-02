import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const productUrl = 'https://www.bagsmart.com/products/28l-blast-travel-backpack?currency=USD&country=US&variant=41324879970386'
const views = [
  { file: 'view-0.webp', label: 'Front' },
  { file: 'view-1.webp', label: 'Left angle' },
  { file: 'view-5.webp', label: 'Right angle' },
  { file: 'view-4.webp', label: 'Back & luggage strap' },
  { file: 'view-6.webp', label: 'Laptop compartment' },
  { file: 'view-2.webp', label: 'Packing space' },
]
const asset = (file: string) => `${import.meta.env.BASE_URL}products/blast/${file}`

export default function Products() {
  const [index, setIndex] = useState(0)
  const start = useRef<number | null>(null)
  const step = (direction: number) => setIndex(current => (current + direction + views.length) % views.length)
  return (
    <section id="products" className="products-section" aria-labelledby="product-title" style={{ color: '#2b2b2b', background: '#f6f4ef', padding: '120px 24px 80px', scrollMarginTop: '0px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.16em', fontWeight: 600, marginBottom: 24 }}>THE MEADOW EDIT / 01</p>
        <div className="product-grid">
          <div>
            <div className="product-viewer" tabIndex={0} role="region" aria-label="Product photo viewer. Use left and right arrow keys to change views."
              onKeyDown={e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); step(e.key === 'ArrowRight' ? 1 : -1) } }}
              onPointerDown={e => { start.current = e.clientX }}
              onPointerUp={e => { if (start.current !== null && Math.abs(e.clientX - start.current) > 40) step(e.clientX < start.current ? 1 : -1); start.current = null }}
              onPointerCancel={() => { start.current = null }}>
              <AnimatePresence mode="wait">
                <motion.img key={index} src={asset(views[index].file)} alt={`Beige BAGSMART Blast 28L backpack — ${views[index].label}`} draggable={false}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </AnimatePresence>
              <div className="view-controls">
                <button type="button" onClick={() => step(-1)} aria-label="Previous product view">←</button>
                <span aria-live="polite" style={{ fontSize: 12 }}>{views[index].label} · {index + 1}/{views.length}</span>
                <button type="button" onClick={() => step(1)} aria-label="Next product view">→</button>
              </div>
            </div>
            <div className="product-thumbnails" aria-label="Choose a product view">
              {views.map((view, i) => <button key={view.file} type="button" aria-label={`Show ${view.label.toLowerCase()}`} aria-pressed={index === i} onClick={() => setIndex(i)}>
                <img src={asset(view.file)} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>)}
            </div>
            <p style={{ fontSize: 12, color: '#686761', marginTop: 12, lineHeight: 1.6 }}>Swipe or use the arrows to explore six official product photos. Multi-view gallery, not a 3D scan.</p>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <p style={{ fontSize: 12, letterSpacing: '0.16em', color: '#6a705e', fontWeight: 600, marginBottom: 14 }}>BAGSMART</p>
            <h2 id="product-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.035em' }}>Blast 28L<br />Travel Backpack</h2>
            <p style={{ fontSize: 26, marginTop: 24 }}>$69.99 <span style={{ fontSize: 12, color: '#686761' }}>USD</span></p>
            <p style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, marginTop: 20 }}><span aria-hidden="true" style={{ width: 19, height: 19, borderRadius: '50%', background: '#d6cdbc', border: '1px solid #b9b09e' }} />Beige</p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#62635c', marginTop: 25 }}>Room for the journey. A spacious travel backpack with a wide-opening main compartment and thoughtful organization for work trips and weekends away.</p>
            <ul style={{ fontSize: 14, lineHeight: 2, paddingLeft: 18, marginTop: 22, listStyleType: 'disc' }}>
              <li>28L capacity</li><li>180° opening laptop compartment</li><li>Six independent pockets</li><li>Padded shoulder straps and breathable back panel</li>
            </ul>
            <motion.a href={productUrl} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} style={{ display: 'block', textAlign: 'center', padding: '17px 24px', background: '#30382d', color: '#fff', borderRadius: 999, textDecoration: 'none', fontSize: 14, fontWeight: 600, marginTop: 30 }}>Shop on BAGSMART ↗</motion.a>
            <p style={{ fontSize: 11, color: '#686761', lineHeight: 1.7, marginTop: 14 }}>Price checked October 2, 2026. Final price, availability, shipping, and taxes are confirmed on BAGSMART. Product photos and details courtesy of BAGSMART.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
