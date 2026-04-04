import { useRef, useState } from 'react'
import { gsap } from 'gsap'

interface Props { item: Service }

export const ServiceItem = ({ item }: Props) => {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const plusRef = useRef<HTMLSpanElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    const opening = !open

    // ── maxHeight — cubic-bezier spring natif ────────────────────────────
    gsap.to(bodyRef.current, {
      maxHeight: opening ? 220 : 0,
      duration:  opening ? 0.55 : 0.38,
      ease:      opening ? 'power4.out' : 'power3.in',   // ← plus expressif
    })

    // ── Plus → croix — elastic subtil ─────────────────────────────────────
    gsap.to(plusRef.current, {
      rotate:   opening ? 45 : 0,
      scale:    opening ? 1.1 : 1,
      duration: 0.4,
      ease:     'back.out(1.8)',
    })

    // ── Border color ───────────────────────────────────────────────────────
    gsap.to(itemRef.current, {
      borderColor: opening ? 'rgba(255,59,31,.35)' : 'rgba(0,0,0,.1)',
      duration: 0.35,
      ease: 'power2.out',
    })

    setOpen(opening)
  }

  return (
    <div
      ref={itemRef}
      className="service-item border-t border-black/10 last:border-b last:border-black/10 overflow-hidden"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 sm:py-7 text-left group"
      >
        <span className="text-[10px] font-bold text-gray-400 tracking-widest mr-5 tabular-nums font-mono">
          {item.num}
        </span>
        <span
          className="font-display flex-1 group-hover:text-red transition-colors duration-250 leading-none"
          style={{ fontSize: 'clamp(1.4rem,3vw,2.4rem)', letterSpacing: '.025em' }}
        >
          {item.name}
        </span>
        <span
          ref={plusRef}
          className={`w-9 h-9 rounded-full border flex items-center justify-center
                      text-lg font-light shrink-0 ml-4
                      transition-colors duration-250
                      ${open
                        ? 'bg-red text-white border-red'
                        : 'border-black/18 group-hover:bg-red group-hover:text-white group-hover:border-red'
                      }`}
        >
          +
        </span>
      </button>

      <div ref={bodyRef} className="overflow-hidden" style={{ maxHeight: 0 }}>
        <p className="pb-7 pl-10 pr-4 text-gray-500 leading-relaxed text-[.93rem] max-w-xl">
          {item.desc}
        </p>
      </div>
    </div>
  )
}